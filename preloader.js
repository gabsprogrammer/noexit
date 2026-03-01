// Wrap in an IIFE to avoid polluting global namespace before main.js runs
(function initDigitalSilk() {
    const canvas = document.getElementById('preloader-glcanvas');
    if (!canvas) return; // Exit if no canvas found

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
        console.warn("WebGL is not supported by your browser. Skipping silk preloader.");
        return;
    }

    // Full-screen Quad Coordinates
    const vertices = new Float32Array([
        -1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
        -1.0, 1.0, 1.0, -1.0, 1.0, 1.0
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // 1. VERTEX SHADER
    const vsSource = `
        attribute vec2 a_position;
        void main() {
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `;

    // 2. FRAGMENT SHADER (Where the cloth math and lighting lives)
    const fsSource = `
        #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
        #else
        precision mediump float;
        #endif

        uniform vec2 u_resolution;
        uniform float u_time;
        uniform vec2 u_mouse;

        // Mathematical Domain Warping to create fluid, heavy silk folds
        float getHeight(vec2 p, float t) {
            vec2 q = vec2(sin(p.x + t * 0.3) + cos(p.y + t * 0.2), 
                          cos(p.x - t * 0.2) + sin(p.y - t * 0.3));
                          
            vec2 r = vec2(sin((p.x + q.x) * 1.2 + t * 0.4) + cos((p.y + q.y) * 1.2 + t * 0.3),
                          cos((p.x + q.x) * 1.2 - t * 0.3) + sin((p.y + q.y) * 1.2 - t * 0.4));
                          
            vec2 s = vec2(sin((p.x + r.x) * 1.5 + t * 0.5) + cos((p.y + r.y) * 1.5 + t * 0.4),
                          cos((p.x + r.x) * 1.5 - t * 0.4) + sin((p.y + r.y) * 1.5 - t * 0.5));
                          
            float val = sin(p.x * 1.0 + s.x * 1.0) * cos(p.y * 1.0 + s.y * 1.0);
            
            // Exponential smoothing creates the sharp, specular satin-like ridges
            return 1.0 - pow(val * val + 0.01, 0.75);
        }

        void main() {
            vec2 uv = gl_FragCoord.xy / u_resolution.xy;
            vec2 centered_uv = uv * 2.0 - 1.0;
            centered_uv.x *= u_resolution.x / u_resolution.y;

            float t = u_time * 0.25;
            
            // Scale zoom
            vec2 p = centered_uv * 1.8;
            
            // Mouse parallax effect / Drag
            p -= u_mouse * 0.2;

            float h = getHeight(p, t);
            
            // Compute 3D Normals mathematically via Central Difference
            float eps = 0.01;
            float hx = getHeight(p + vec2(eps, 0.0), t);
            float hy = getHeight(p + vec2(0.0, eps), t);
            vec3 normal = normalize(vec3(-(hx - h) / eps, -(hy - h) / eps, 2.5));

            vec3 view_dir = normalize(vec3(0.0, 0.0, 1.0));

            // --- LUXURY STUDIO LIGHTING (No Neon, strictly Platinum / Graphite) ---
            
            // Key Light: Warm Champagne / Soft Gold
            vec3 l1_dir = normalize(vec3(1.2, 1.0, 0.8));
            vec3 l1_col = vec3(0.95, 0.88, 0.82);
            
            // Fill Light: Cool Titanium / Slate
            vec3 l2_dir = normalize(vec3(-1.5, -1.0, 0.5));
            vec3 l2_col = vec3(0.2, 0.25, 0.3);

            // Base Color: Deep Obsidian Graphite
            vec3 base_col = vec3(0.02, 0.02, 0.025);
            
            // Lighting Math
            float diff1 = max(dot(normal, l1_dir), 0.0);
            float diff2 = max(dot(normal, l2_dir), 0.0);
            
            vec3 h1 = normalize(l1_dir + view_dir);
            float spec1 = pow(max(dot(normal, h1), 0.0), 50.0); // Sharp, liquid gloss
            
            vec3 h2 = normalize(l2_dir + view_dir);
            float spec2 = pow(max(dot(normal, h2), 0.0), 25.0); // Broader soft metal reflection
            
            // Fresnel effect for edge translucency
            float fresnel = pow(1.0 - max(dot(normal, view_dir), 0.0), 5.0);
            vec3 rim_col = vec3(0.4, 0.45, 0.5) * fresnel * 0.5;

            // Combine Layers
            vec3 color = base_col;
            color += l1_col * diff1 * 0.08; 
            color += l2_col * diff2 * 0.12;
            color += l1_col * spec1 * 1.5; 
            color += l2_col * spec2 * 0.3; 
            color += rim_col;

            // Ambient Occlusion / Self-shadowing in the deep folds
            float ao = clamp((h + 0.5) * 0.6, 0.1, 1.0);
            color *= ao;

            // Cinematic Vignette to darken corners
            float vignette = 1.0 - smoothstep(0.4, 2.5, length(centered_uv));
            color *= vignette;

            // Micro-dither logic to completely eliminate 8-bit color banding on smooth gradients
            float noise = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
            color += noise * 0.015;

            // Photographic Tone Mapping & Gamma Correction
            color = color / (1.0 + color);
            color = pow(color, vec3(1.0 / 2.2));

            // Fade slightly to black on the edges so it blends with our preloader
            color *= 0.85;

            gl_FragColor = vec4(color, 1.0);
        }
    `;

    // Shader Compilation Utility
    function compileShader(gl, source, type) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error("Shader Compile Error: ", gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vs = compileShader(gl, vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(gl, fsSource, gl.FRAGMENT_SHADER);

    if (!vs || !fs) return; // Exit if compilation failed

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Map Attributes & Uniforms
    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const mouseLocation = gl.getUniformLocation(program, "u_mouse");

    // Interactive Tracking variables
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    // Desktop Mouse Support
    function handleMouseMove(e) {
        targetX = (e.clientX / window.innerWidth) * 2.0 - 1.0;
        targetY = -(e.clientY / window.innerHeight) * 2.0 + 1.0;
    }
    window.addEventListener('mousemove', handleMouseMove);

    // Smart Resize Handler
    function resize() {
        // Cap ratio at 2.0 to ensure buttery smooth 60fps performance even on 4k+ screens
        const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resize);
    resize();

    // 3. RENDER LOOP
    const startTime = Date.now();
    let animationFrameId;

    function render() {
        const currentTime = (Date.now() - startTime) * 0.001;

        // Smoothly interpolate mouse movement for a heavy, luxurious feel
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        // Push data to GPU
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
        gl.uniform1f(timeLocation, currentTime);
        gl.uniform2f(mouseLocation, mouseX, mouseY);

        // Draw
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        animationFrameId = requestAnimationFrame(render);
    }

    render();

    // 4. RESOURCE CLEANUP
    // Expose a destroy function globally just for the preloader exit
    window.destroyDigitalSilk = function () {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', handleMouseMove);

        // Discard the WebGL context entirely to free up VRAM for the Three.js Black Hole
        const ext = gl.getExtension('WEBGL_lose_context');
        if (ext) ext.loseContext();

        // Remove canvas from DOM
        canvas.remove();
        console.log("Digital Silk Preloader Unmounted. VRAM Free.");
    };

})();
