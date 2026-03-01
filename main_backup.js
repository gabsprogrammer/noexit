import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

// ==========================================
// 0. CUSTOM CURSOR & INTERAÇÕES
// ==========================================
const cursor = document.getElementById('cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Efeito de crescer o cursor ao passar sobre textos/links
const hoverTargets = document.querySelectorAll('.hover-target, h1, h2, span, p');
hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    target.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// ==========================================
// 1. THREE.JS SETUP (Tecido Líquido + Moai)
// ==========================================
const container = document.getElementById('webgl-container');
const siteFrame = document.getElementById('site-frame');

const scene = new THREE.Scene();
// Dark fog fading out into depth
scene.fog = new THREE.FogExp2(0x000000, 0.05);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

// --- 1.a Tecido Líquido (Plane) ---
const planeGeometry = new THREE.PlaneGeometry(50, 40, 90, 90);
const planeMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x050505, metalness: 1.0, roughness: 0.15, clearcoat: 1.0,
    clearcoatRoughness: 0.1, iridescence: 1.0, iridescenceIOR: 2.5, side: THREE.DoubleSide
});

const liquidMesh = new THREE.Mesh(planeGeometry, planeMaterial);
// Position liquid further back, behind moai
liquidMesh.position.z = -5;
// Angle it slightly upward to fill the visual space better
liquidMesh.rotation.x = -0.3;
scene.add(liquidMesh);

// --- 1.b Iluminação Hibrida (Liquid + Moai) ---
scene.add(new THREE.AmbientLight(0x050505));

// Luz intensa para Bloom/Glitch e interações (Magenta)
const lightMagenta = new THREE.PointLight(0xff00aa, 150, 30);
lightMagenta.position.set(2, -1, 3); // Positioned to backlight the Moai and hit the liquid
scene.add(lightMagenta);

const lightCyan = new THREE.PointLight(0x00f0ff, 50, 30);
lightCyan.position.set(-6, -2, 4);
scene.add(lightCyan);

// Luz do Mouse
const mouseLight = new THREE.PointLight(0xffffff, 80, 15);
scene.add(mouseLight);

// --- 1.c Poeria Ambiente ---
const dustCount = 800;
const dustGeo = new THREE.BufferGeometry();
const dustPositions = new Float32Array(dustCount * 3);
for (let i = 0; i < dustCount * 3; i++) {
    dustPositions[i] = (Math.random() - 0.5) * 25;
}
dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
const dustMat = new THREE.PointsMaterial({
    color: 0xffffff, size: 0.03, transparent: true, opacity: 0.2, depthWrite: false, blending: THREE.AdditiveBlending
});
const dustParticles = new THREE.Points(dustGeo, dustMat);
scene.add(dustParticles);

// --- 1.d Raymarched Black Hole Setup ---
const blackHoleFragmentShader = `
#define STEP 0.05
#define NSTEPS 600
//#define STEP 0.04
//#define NSTEPS 700
#define PI 3.141592653589793238462643383279
#define DEG_TO_RAD (PI/180.0)
#define ROT_Y(a) mat3(1, 0, 0, 0, cos(a), sin(a), 0, -sin(a), cos(a))
#define ROT_Z(a) mat3(cos(a), -sin(a), 0, sin(a), cos(a), 0, 0, 0, 1)


uniform float time;
uniform vec2 resolution;

uniform vec3 cam_pos;
uniform vec3 cam_dir;
uniform vec3 cam_up;
uniform float fov;
uniform vec3 cam_vel;

const float MIN_TEMPERATURE = 1000.0;
const float TEMPERATURE_RANGE = 39000.0;

uniform bool accretion_disk;
uniform bool use_disk_texture;
const float DISK_IN = 2.0;
const float DISK_WIDTH = 4.0;

uniform bool doppler_shift;
uniform bool lorentz_transform;
uniform bool beaming;

uniform sampler2D bg_texture;
uniform sampler2D star_texture;
uniform sampler2D disk_texture;

vec2 square_frame(vec2 screen_size){
  vec2 position = 2.0 * (gl_FragCoord.xy / screen_size.xy) - 1.0; 
  // first make pixels arranged in 0..1
  // then by multiplying by 2 and subtracting 1, put them in -1..1
  
  return position;
}

vec2 to_spherical(vec3 cartesian_coord){
  // spherical projection
  // polar angles are directly used as horizontal and vertical coordinates
  // here angle to y-axis mapped to latitude (looking vertically 180 degrees)
  // xz plane to longitude (looking horizontally 360 degrees)
  vec2 uv = vec2(atan(cartesian_coord.z,cartesian_coord.x), asin(cartesian_coord.y)); 
  uv *= vec2(1.0/(2.0*PI), 1.0/PI); //long, lat
  uv += 0.5;
  return uv;
}

vec3 lorentz_transform_velocity(vec3 u, vec3 v){ 
  // u = ray
  // v = observer
  float speed = length(v);
  if (speed > 0.0){
    float gamma = 1.0/sqrt(1.0-dot(v,v));
    
    float denominator = 1.0 - dot(v,u);
    
    vec3 new_u = (u/gamma - v + (gamma/(gamma+1.0)) * dot(u,v)*v)/denominator;
    return new_u;
  }
  return u;
}

vec3 temp_to_color(float temp_kelvin){
  vec3 color;
  // 1k ~ 40k rescale by dividing 100
  temp_kelvin = clamp(temp_kelvin, 1000.0, 40000.0) / 100.0;
  if (temp_kelvin <= 66.0){
    color.r = 255.0;
    color.g = temp_kelvin;
    color.g = 99.4708025861 * log(color.g) - 161.1195681661;
    if (color.g < 0.0) color.g = 0.0;
    if (color.g > 255.0)  color.g = 255.0;
  } else {
    color.r = temp_kelvin - 60.0;
    if (color.r < 0.0) color.r = 0.0;
    color.r = 329.698727446 * pow(color.r, -0.1332047592);
    if (color.r < 0.0) color.r = 0.0;
    if (color.g > 255.0) color.r = 255.0;
    color.g = temp_kelvin - 60.0;
    if (color.g < 0.0) color.g = 0.0;
    color.g = 288.1221695283 * pow(color.g, -0.0755148492);
    if (color.g > 255.0)  color.g = 255.0;  
  }
  if (temp_kelvin >= 66.0){
    color.b = 255.0;
  } else if (temp_kelvin <= 19.0){
    color.b = 0.0;
  } else {
    color.b = temp_kelvin - 10.0;
    color.b = 138.5177312231 * log(color.b) - 305.0447927307;
    if (color.b < 0.0) color.b = 0.0;
    if (color.b > 255.0) color.b = 255.0;
  }
  color /= 255.0; // make it 0..1
  return color;
}

// https://gist.github.com/fieldOfView/5106319
// https://gamedev.stackexchange.com/questions/93032/what-causes-this-distortion-in-my-perspective-projection-at-steep-view-angles
// for reference
void main()	{
  // z towards you, y towards up, x towards your left
  //  float hfov = (2.0 * ((uv.x+0.5)/resolution.x) - 1.0) * d * resolution.x/resolution.y;
  // float vfov = (1.0 - 2.0 * ((uv.y+0.5)/resolution.y)) * d;
  //  float d = tan(fov*DEG_TO_RAD / 2.0);

  float uvfov = tan(fov / 2.0 * DEG_TO_RAD);
  vec2 uv = square_frame(resolution); 

  uv *= vec2(resolution.x/resolution.y, 1.0);
  vec3 forward = normalize(cam_dir); // 
  vec3 up = normalize(cam_up);
  vec3 nright = normalize(cross(forward, up));
  up = cross(nright, forward);
  // generate ray
  vec3 pixel_pos =cam_pos + forward +
                 nright*uv.x*uvfov+ up*uv.y*uvfov;
  
  vec3 ray_dir = normalize(pixel_pos - cam_pos); // 
  
  

  // light aberration alters ray path 
  if (lorentz_transform)
    ray_dir = lorentz_transform_velocity(ray_dir, cam_vel);

  
  // initial color
  vec4 color = vec4(0.0,0.0,0.0,1.0);

  // geodesic by leapfrog integration

  vec3 point = cam_pos;
  vec3 velocity = ray_dir;
  vec3 c = cross(point,velocity);
  float h2 = dot(c,c);

  
  // for doppler effect
  float ray_gamma = 1.0/sqrt(1.0-dot(cam_vel,cam_vel));
  float ray_doppler_factor = ray_gamma * (1.0 + dot(ray_dir, -cam_vel));
    
  float ray_intensity = 1.0;
  if (beaming)
    ray_intensity /= pow(ray_doppler_factor , 3.0);
  
  
  vec3 oldpoint; 
  float pointsqr;
  
  float distance = length(point);

  // Leapfrog geodesic
  for (int i=0; i<NSTEPS;i++){ 
    oldpoint = point; // remember previous point for finding intersection
    point += velocity * STEP;
    vec3 accel = -1.5 * h2 * point / pow(dot(point,point),2.5);
    velocity += accel * STEP;    
    
    // distance from origin
    distance = length(point);
    if ( distance < 0.0) break;
    
    bool horizon_mask = distance < 1.0 && length(oldpoint) > 1.0;// intersecting eventhorizon
    // does it enter event horizon?
    if (horizon_mask) {
      vec4 black = vec4(0.0,0.0,0.0,1.0);
      color += black;
      break;
    }
    
    // intersect accretion disk
    if (accretion_disk){
      if (oldpoint.y * point.y < 0.0){
        // move along y axis
        float lambda = - oldpoint.y/velocity.y;
        vec3 intersection = oldpoint + lambda*velocity;
        float r = length(intersection);//dot(intersection,intersection);
        if (DISK_IN <= r&&r <= DISK_IN+DISK_WIDTH ){
          float phi = atan(intersection.x, intersection.z);
          
          vec3 disk_velocity = vec3(-intersection.x, 0.0, intersection.z)/sqrt(2.0*(r-1.0))/(r*r); 
          phi -= time;//length(r);
          phi = mod(phi , PI*2.0);
          float disk_gamma = 1.0/sqrt(1.0-dot(disk_velocity, disk_velocity));
          float disk_doppler_factor = disk_gamma*(1.0+dot(ray_dir/distance, disk_velocity)); // from source 
          
          if (use_disk_texture){
          // texture
            vec2 tex_coord = vec2(mod(phi,2.0*PI)/(2.0*PI),1.0-(r-DISK_IN)/(DISK_WIDTH));
            vec4 disk_color = texture2D(disk_texture, tex_coord) / (ray_doppler_factor * disk_doppler_factor);
            float disk_alpha = clamp(dot(disk_color,disk_color)/4.5,0.0,1.0);

            if (beaming)
              disk_alpha /= pow(disk_doppler_factor,3.0);
            
            color += vec4(disk_color)*disk_alpha;
          } else {
          
          // use blackbody 
          float disk_temperature = 10000.0*(pow(r/DISK_IN, -3.0/4.0));
          
            //doppler effect
          if (doppler_shift)
            disk_temperature /= ray_doppler_factor*disk_doppler_factor;

          vec3 disk_color = temp_to_color(disk_temperature);
          float disk_alpha = clamp(dot(disk_color,disk_color)/3.0,0.0,1.0);
          
          if (beaming)
            disk_alpha /= pow(disk_doppler_factor,3.0);
            
          
          color += vec4(disk_color, 1.0)*disk_alpha;
          
          }
        }
      }
    }
    
  }
  
  if (distance > 1.0){
    ray_dir = normalize(point - oldpoint);
    vec2 tex_coord = to_spherical(ray_dir * ROT_Z(45.0 * DEG_TO_RAD));
    // taken from source
    // red = temp
    // green = lum
    // blue = vel 
    vec4 star_color = texture2D(star_texture, tex_coord);
    if (star_color.g > 0.0){
      float star_temperature = (MIN_TEMPERATURE + TEMPERATURE_RANGE*star_color.r);
      // arbitrarily sets background stars' velocity for random shifts
      float star_velocity = star_color.b - 0.5;
      float star_doppler_factor = sqrt((1.0+star_velocity)/(1.0-star_velocity));
      if (doppler_shift)
        star_temperature /= ray_doppler_factor*star_doppler_factor;
      
      color += vec4(temp_to_color(star_temperature),1.0)* star_color.g;
    }

    color += texture2D(bg_texture, tex_coord) * 0.25;
// gl_FragColor = color;
  }
  gl_FragColor = color*ray_intensity;
}
`;

const blackHoleVertexShader = `
void main() {
    gl_Position = vec4(position, 1.0);
}
`;

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

// --- Bloom Post-Processing ---
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.5, 0.2);
bloomPass.strength = 1.4; // Slightly stronger for neon lights
composer.addPass(bloomPass);

// ==========================================
// 2. LÓGICA DE FÍSICA DE SCROLL AVANÇADA
// ==========================================
let scrollProgress = 0;
let mouseX = 0, mouseY = 0, targetMouseX = 0, targetMouseY = 0, mouse3DX = 0, mouse3DY = 0;

window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
    targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    mouse3DX = targetMouseX * 25;
    mouse3DY = targetMouseY * 15;
});

// Elementos do Manifesto
const manifestoWrapper = document.getElementById('manifesto-wrapper');
const fillTextSmooth = document.getElementById('fill-text-smooth');

// Elementos da Jornada (Cards)
const journeySection = document.querySelector('.journey-section');
const cardsContainer = document.getElementById('cards-container');

siteFrame.addEventListener('scroll', () => {
    const st = siteFrame.scrollTop;
    // Opcional limitador p/ não quebrar
    const maxScroll = Math.max(1, siteFrame.scrollHeight - window.innerHeight);
    scrollProgress = st / maxScroll;

    // 1. Minimização Extrema & Fundo Dinâmico
    if (st > 50) {
        siteFrame.classList.add('is-scrolled');
    } else {
        siteFrame.classList.remove('is-scrolled');
    }
    // Anima o padrão de pontos do fundo escuro geral do HTML/Body
    document.body.style.backgroundPositionY = `${st * 0.4}px`;

    // 2. Canvas WebGL Deslocando na Tela
    // Aumentei o range para ele descer mais suave e não afundar tao rapido
    container.style.transform = `translateY(${st * 0.8}px)`;
    container.style.opacity = Math.max(0.05, 1 - (st / (window.innerHeight * 2.5)));

    // 3. MANIFESTO (Vindo do Fundo 3D + Preenchimento Gradiente Suave)
    const mRect = manifestoWrapper.getBoundingClientRect();
    let mProg = 1 - (mRect.top / window.innerHeight);

    if (mProg > 0 && mProg < 1.5) {
        const z = Math.min(0, -600 + (mProg * 800));
        const y = Math.max(0, 150 - (mProg * 200));
        const opacity = Math.min(1, mProg * 1.5);

        fillTextSmooth.style.transform = `translateZ(${z}px) translateY(${y}px)`;
        fillTextSmooth.style.opacity = opacity;

        let fillProg = (mProg - 0.3) / 0.5;
        fillProg = Math.max(0, Math.min(1, fillProg));
        fillTextSmooth.style.backgroundPosition = `${100 - (fillProg * 100)}% 0`;

        // Tremor no buraco negro
        if (typeof blackHoleGroup !== 'undefined') {
            const s = 1.0 + (Math.sin(mProg * 50) * 0.02);
            blackHoleGroup.scale.set(s, s, s);
        }
    }

    // 4. CARDS FLIP TIMELINE (A Mágica das 3 Etapas)
    const jRect = journeySection.getBoundingClientRect();
    let jProgress = -jRect.top / (jRect.height - window.innerHeight);
    jProgress = Math.max(0, Math.min(1, jProgress));

    if (jProgress < 0.25) {
        cardsContainer.classList.remove('step-separated');
        cardsContainer.classList.remove('step-flipped');
    } else if (jProgress >= 0.25 && jProgress < 0.6) {
        cardsContainer.classList.add('step-separated');
        cardsContainer.classList.remove('step-flipped');
    } else if (jProgress >= 0.6) {
        cardsContainer.classList.add('step-separated');
        cardsContainer.classList.add('step-flipped');
    }
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
});

// ==========================================
// 3. LOOP DE ANIMAÇÃO 3D Híbrido
// ==========================================
const clock = new THREE.Clock();
const initialLiquidPositions = planeGeometry.attributes.position.clone();

// Função lerp
function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // -- Mouse Smoothing -- 
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;
    mouseLight.position.set(mouseX * 15, mouseY * 10, 4);

    // -- Ambient Particles --
    dustParticles.rotation.y = elapsedTime * 0.05;
    dustParticles.rotation.x = elapsedTime * 0.02;

    // -- Liquid Mesh Deformation --
    liquidMesh.rotation.x = -0.3 + scrollProgress * 0.4;
    liquidMesh.rotation.y = scrollProgress * -0.3;

    const positions = planeGeometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
        const initX = initialLiquidPositions.getX(i);
        const initY = initialLiquidPositions.getY(i);

        let z = Math.sin(initX * 0.15 + elapsedTime * 0.5) * 1.5;
        z += Math.cos(initY * 0.15 + elapsedTime * 0.4) * 1.5;
        z += Math.sin((initX + initY) * 0.1 - elapsedTime * 0.3) * 1.0;

        const dx = initX - mouse3DX;
        const dy = initY - mouse3DY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 8.0) {
            const influence = (8.0 - dist) / 8.0;
            z += Math.pow(influence, 2) * 3.5;
        }
        positions.setZ(i, z);
    }
    planeGeometry.computeVertexNormals();
    planeGeometry.attributes.position.needsUpdate = true;

    // -- Raymarched Black Hole Animation -- 
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

    composer.render();
}
animate();
