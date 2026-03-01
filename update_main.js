const fs = require('fs');

let mainCode = fs.readFileSync('main.js', 'utf8');
const shaderCode = fs.readFileSync('bh_shader.glsl', 'utf8');

const setupStart = mainCode.indexOf('// --- 1.d Black Hole Setup ---');
const setupEnd = mainCode.indexOf('// --- Bloom Post-Processing ---');
if (setupStart === -1 || setupEnd === -1) { console.log('setup markers not found'); process.exit(1); }

const animStart = mainCode.indexOf('// -- Black Hole Animation');
const animEnd = mainCode.indexOf('composer.render();');
if (animStart === -1 || animEnd === -1) { console.log('anim markers not found'); process.exit(1); }

const newSetup = `// --- 1.d Raymarched Black Hole Setup ---
const blackHoleFragmentShader = \`
#define STEP 0.05
#define NSTEPS 600
${shaderCode}
\`;

const blackHoleVertexShader = \`
void main() {
    gl_Position = vec4(position, 1.0);
}
\`;

const bhUniforms = {
    time: { value: 0 },
    resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    cam_pos: { value: new THREE.Vector3(-3, 1, 15) },
    cam_dir: { value: new THREE.Vector3(0, 0, -1).normalize() },
    cam_up: { value: new THREE.Vector3(0, 1, 0).normalize() },
    fov: { value: camera.fov },
    cam_vel: { value: new THREE.Vector3(0, 0, 0) },
    accretion_disk: { value: true },
    use_disk_texture: { value: false },
    doppler_shift: { value: true },
    lorentz_transform: { value: true },
    beaming: { value: true },
    bg_texture: { value: null },
    star_texture: { value: null },
    disk_texture: { value: null }
};

const blackHoleMat = new THREE.ShaderMaterial({
    vertexShader: blackHoleVertexShader,
    fragmentShader: blackHoleFragmentShader,
    uniforms: bhUniforms,
    depthWrite: false,
    depthTest: false,
    transparent: true
});

const blackHoleMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), blackHoleMat);
blackHoleMesh.renderOrder = -1; // Render behind everything else
scene.add(blackHoleMesh);

`;

const newAnim = `// -- Raymarched Black Hole Animation -- 
    if (typeof blackHoleMesh !== 'undefined') {
        bhUniforms.time.value = elapsedTime;
        
        // Simulating camera movement via parallax
        // Baseline camera is at (-3, 1, 15). Black hole is at (0,0,0) in shader world space.
        const targetCamX = -4 + mouseX * 2.5;
        const targetCamY = 2 + mouseY * 2.5; 
        
        bhUniforms.cam_pos.value.x += (targetCamX - bhUniforms.cam_pos.value.x) * 0.05;
        bhUniforms.cam_pos.value.y += (targetCamY - bhUniforms.cam_pos.value.y) * 0.05;

        // Subtle camera tilting
        bhUniforms.cam_dir.value.x += ((mouseX * -0.1) - bhUniforms.cam_dir.value.x) * 0.05;
        bhUniforms.cam_dir.value.y += ((mouseY * -0.1) - bhUniforms.cam_dir.value.y) * 0.05;
        bhUniforms.cam_dir.value.normalize();
        
        // Elegant distortion over scroll progress
        if (scrollProgress > 0.4) {
            const deformProg = (scrollProgress - 0.4) * 1.6;
            bloomPass.strength = 1.0 + (deformProg * 1.5);
            
            bhUniforms.fov.value = camera.fov + (deformProg * 30);
            bhUniforms.cam_pos.value.z = 15 - (deformProg * 8); // Fly into the black hole
        } else {
            bloomPass.strength = 1.2;
            bhUniforms.fov.value = camera.fov;
            bhUniforms.cam_pos.value.z += (15 - bhUniforms.cam_pos.value.z) * 0.05;
        }
    }

    `;

mainCode = mainCode.substring(0, setupStart) + newSetup + mainCode.substring(setupEnd, animStart) + newAnim + mainCode.substring(animEnd);
fs.writeFileSync('main.js', mainCode);
console.log('Injected successfully.');
