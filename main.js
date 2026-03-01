import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { liquidMetalFragmentShader, ShaderMount } from "https://esm.sh/@paper-design/shaders";
import TubesCursor from "./tubes.js";

/* PRELOADER */
const pFill = document.getElementById('pFill'), pCount = document.getElementById('pCount'), preEl = document.getElementById('preloader');
let pn = 0;
const pi = setInterval(() => { pn += Math.random() * 13; if (pn >= 100) { pn = 100; clearInterval(pi); setTimeout(() => { preEl.classList.add('done'); if (window.destroyDigitalSilk) setTimeout(window.destroyDigitalSilk, 600); }, 1350); } pFill.style.width = pn + '%'; pCount.textContent = String(Math.floor(pn)).padStart(3, '0'); }, 75);

/* CURSOR with lerp */
const cur = document.getElementById('cursor');
let cx = 0, cy = 0, tx = 0, ty = 0;
window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
(function loop() { cx += (tx - cx) * .11; cy += (ty - cy) * .11; cur.style.left = cx + 'px'; cur.style.top = cy + 'px'; requestAnimationFrame(loop); })();
document.querySelectorAll('.hover-t,h1,h2,.card-front').forEach(el => {
  el.addEventListener('mouseenter', () => cur.classList.add('hover'));
  el.addEventListener('mouseleave', () => cur.classList.remove('hover'));
});

/* MAGNETIC NAV BTN */
const navWrap = document.getElementById('navWrap');
navWrap.addEventListener('mousemove', e => { const r = navWrap.getBoundingClientRect(); navWrap.querySelector('button').style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .3}px,${(e.clientY - r.top - r.height / 2) * .3}px)`; });
navWrap.addEventListener('mouseleave', () => navWrap.querySelector('button').style.transform = '');

/* LIVE UTC */
const ltEl = document.getElementById('liveTime');
setInterval(() => { const d = new Date(); ltEl.textContent = [d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()].map(x => String(x).padStart(2, '0')).join(':') + ' UTC'; }, 1000);

/* WORK HOVER CARD */
const wH = document.getElementById('wHover'), wHIn = document.getElementById('wHoverIn'), wHLbl = document.getElementById('wHoverLbl');
let hRaf;
document.querySelectorAll('.work-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    wHLbl.textContent = el.querySelector('.work-name')?.textContent || '';
    wHIn.style.background = el.dataset.bg || '#111';
    wH.classList.add('vis');
  });
  el.addEventListener('mouseleave', () => wH.classList.remove('vis'));
  el.addEventListener('mousemove', e => { cancelAnimationFrame(hRaf); hRaf = requestAnimationFrame(() => { wH.style.left = e.clientX + 'px'; wH.style.top = e.clientY + 'px'; }); });
});

/* STATS COUNTER */
const statsEl = document.querySelector('.stats-zone');
const sObs = new IntersectionObserver(ent => {
  if (!ent[0].isIntersecting) return; sObs.disconnect();
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const t = +el.dataset.target, s = el.dataset.suf || '', t0 = performance.now(), dur = 2000;
    (function step(now) { const p = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.floor(e * t) + s; if (p < 1) requestAnimationFrame(step); })(performance.now());
  });
}, { threshold: .35 }); if (statsEl) sObs.observe(statsEl);

/* THREE.JS (Restoring Black Hole) */
const cont = document.getElementById('webgl-container'), sf = document.getElementById('site-frame');

const BLACK_HOLE_RADIUS = 1.3;
const DISK_INNER_RADIUS = BLACK_HOLE_RADIUS + 0.2;
const DISK_OUTER_RADIUS = 8.0;
const DISK_TILT_ANGLE = Math.PI / 3.0;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x020104, 0.025);

const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 4000);
camera.position.set(-6.5, 5.0, 6.5);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', alpha: true });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
cont.appendChild(renderer.domElement);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(innerWidth, innerHeight),
  0.8, 0.7, 0.8
);
composer.addPass(bloomPass);

const lensingShader = {
  uniforms: {
    'tDiffuse': { value: null },
    'blackHoleScreenPos': { value: new THREE.Vector2(0.5, 0.5) },
    'lensingStrength': { value: 0.12 },
    'lensingRadius': { value: 0.3 },
    'aspectRatio': { value: innerWidth / innerHeight },
    'chromaticAberration': { value: 0.005 }
  },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform vec2 blackHoleScreenPos;
      uniform float lensingStrength;
      uniform float lensingRadius;
      uniform float aspectRatio;
      uniform float chromaticAberration;
      varying vec2 vUv;
      
      void main() {
          vec2 screenPos = vUv;
          vec2 toCenter = screenPos - blackHoleScreenPos;
          toCenter.x *= aspectRatio;
          float dist = length(toCenter);
          
          float distortionAmount = lensingStrength / (dist * dist + 0.003);
          distortionAmount = clamp(distortionAmount, 0.0, 0.7);
          float falloff = smoothstep(lensingRadius, lensingRadius * 0.3, dist);
          distortionAmount *= falloff;
          
          vec2 offset = normalize(toCenter) * distortionAmount;
          offset.x /= aspectRatio;
          
          vec2 distortedUvR = screenPos - offset * (1.0 + chromaticAberration);
          vec2 distortedUvG = screenPos - offset;
          vec2 distortedUvB = screenPos - offset * (1.0 - chromaticAberration);
          
          float r = texture2D(tDiffuse, distortedUvR).r;
          float g = texture2D(tDiffuse, distortedUvG).g;
          float b = texture2D(tDiffuse, distortedUvB).b;
          
          gl_FragColor = vec4(r, g, b, 1.0);
      }`
};
const lensingPass = new ShaderPass(lensingShader);
composer.addPass(lensingPass);



const starGeometry = new THREE.BufferGeometry();
const starCount = 150000;
const starPositions = new Float32Array(starCount * 3);
const starColors = new Float32Array(starCount * 3);
const starSizes = new Float32Array(starCount);
const starTwinkle = new Float32Array(starCount);
const starFieldRadius = 2000;
const starPalette = [
  new THREE.Color(0x88aaff), new THREE.Color(0xffaaff), new THREE.Color(0xaaffff),
  new THREE.Color(0xffddaa), new THREE.Color(0xffeecc), new THREE.Color(0xffffff),
  new THREE.Color(0xff8888), new THREE.Color(0x88ff88), new THREE.Color(0xffff88),
  new THREE.Color(0x88ffff)
];

for (let i = 0; i < starCount; i++) {
  const i3 = i * 3;
  const phi = Math.acos(-1 + (2 * i) / starCount);
  const theta = Math.sqrt(starCount * Math.PI) * phi;
  const radius = Math.cbrt(Math.random()) * starFieldRadius + 100;

  starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
  starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
  starPositions[i3 + 2] = radius * Math.cos(phi);

  const starColor = starPalette[Math.floor(Math.random() * starPalette.length)].clone();
  starColor.multiplyScalar(Math.random() * 0.7 + 0.3);
  starColors[i3] = starColor.r; starColors[i3 + 1] = starColor.g; starColors[i3 + 2] = starColor.b;
  starSizes[i] = THREE.MathUtils.randFloat(0.6, 3.0);
  starTwinkle[i] = Math.random() * Math.PI * 2;
}
starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
starGeometry.setAttribute('twinkle', new THREE.BufferAttribute(starTwinkle, 1));

const starMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uPixelRatio: { value: renderer.getPixelRatio() }
  },
  vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float size;
        attribute float twinkle;
        varying vec3 vColor;
        varying float vTwinkle;
        
        void main() {
            vColor = color;
            vTwinkle = sin(uTime * 2.5 + twinkle) * 0.5 + 0.5;
            
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
  fragmentShader: `
        varying vec3 vColor;
        varying float vTwinkle;
        
        void main() {
            float dist = distance(gl_PointCoord, vec2(0.5));
            if (dist > 0.5) discard;
            
            float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
            alpha *= (0.2 + vTwinkle * 0.8);
            
            gl_FragColor = vec4(vColor, alpha);
        }
    `,
  transparent: true,
  vertexColors: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

const eventHorizonGeom = new THREE.SphereGeometry(BLACK_HOLE_RADIUS * 1.05, 128, 64);
const eventHorizonMat = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uCameraPosition: { value: camera.position }
  },
  vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
  fragmentShader: `
        uniform float uTime;
        uniform vec3 uCameraPosition;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
            vec3 viewDirection = normalize(uCameraPosition - vPosition);
            float fresnel = 1.0 - abs(dot(vNormal, viewDirection));
            fresnel = pow(fresnel, 2.5);
            
            vec3 glowColor = vec3(1.0, 0.4, 0.1);
            float pulse = sin(uTime * 2.5) * 0.15 + 0.85;
            
            gl_FragColor = vec4(glowColor * fresnel * pulse, fresnel * 0.4);
        }
    `,
  transparent: true,
  blending: THREE.AdditiveBlending,
  side: THREE.BackSide
});

const eventHorizon = new THREE.Mesh(eventHorizonGeom, eventHorizonMat);
scene.add(eventHorizon);

const blackHoleGeom = new THREE.SphereGeometry(BLACK_HOLE_RADIUS, 128, 64);
const blackHoleMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
const blackHoleMesh = new THREE.Mesh(blackHoleGeom, blackHoleMat);
blackHoleMesh.renderOrder = 0;
scene.add(blackHoleMesh);

const diskGeometry = new THREE.RingGeometry(DISK_INNER_RADIUS, DISK_OUTER_RADIUS, 256, 128);
const diskMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0.0 },
    uColorHot: { value: new THREE.Color(0xffffff) },
    uColorMid1: { value: new THREE.Color(0xff7733) },
    uColorMid2: { value: new THREE.Color(0xff4477) },
    uColorMid3: { value: new THREE.Color(0x7744ff) },
    uColorOuter: { value: new THREE.Color(0x4477ff) },
    uNoiseScale: { value: 2.5 },
    uFlowSpeed: { value: 0.22 },
    uDensity: { value: 1.3 }
  },
  vertexShader: `
        varying vec2 vUv;
        varying float vRadius;
        varying float vAngle;
        void main() {
            vUv = uv;
            vRadius = length(position.xy);
            vAngle = atan(position.y, position.x);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
  fragmentShader: `
        uniform float uTime;
        uniform vec3 uColorHot;
        uniform vec3 uColorMid1;
        uniform vec3 uColorMid2;
        uniform vec3 uColorMid3;
        uniform vec3 uColorOuter;
        uniform float uNoiseScale;
        uniform float uFlowSpeed;
        uniform float uDensity;

        varying vec2 vUv;
        varying float vRadius;
        varying float vAngle;

        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        
        float snoise(vec3 v) {
            const vec2 C = vec2(1.0/6.0, 1.0/3.0);
            const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 = v - i + dot(i, C.xxx) ;
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy;
            vec3 x3 = x0 - D.yyy;
            i = mod289(i);
            vec4 p = permute( permute( permute( 
                     i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                   + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
            float n_ = 0.142857142857;
            vec3  ns = n_ * D.wyz - D.xzx;
            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );
            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);
            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );
            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));
            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
            vec3 p0 = vec3(a0.xy,h.x);
            vec3 p1 = vec3(a0.zw,h.y);
            vec3 p2 = vec3(a1.xy,h.z);
            vec3 p3 = vec3(a1.zw,h.w);
            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
            p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
        }

        void main() {
            float normalizedRadius = smoothstep(${DISK_INNER_RADIUS.toFixed(2)}, ${DISK_OUTER_RADIUS.toFixed(2)}, vRadius);
            
            float spiral = vAngle * 3.0 - (1.0 / (normalizedRadius + 0.1)) * 2.0;
            vec2 noiseUv = vec2(vUv.x + uTime * uFlowSpeed * (2.0 / (vRadius * 0.3 + 1.0)) + sin(spiral) * 0.1, vUv.y * 0.8 + cos(spiral) * 0.1);
            float noiseVal1 = snoise(vec3(noiseUv * uNoiseScale, uTime * 0.15));
            float noiseVal2 = snoise(vec3(noiseUv * uNoiseScale * 3.0 + 0.8, uTime * 0.22));
            float noiseVal3 = snoise(vec3(noiseUv * uNoiseScale * 6.0 + 1.5, uTime * 0.3));
            
            float noiseVal = (noiseVal1 * 0.45 + noiseVal2 * 0.35 + noiseVal3 * 0.2);
            noiseVal = (noiseVal + 1.0) * 0.5;
            
            vec3 color = uColorOuter;
            color = mix(color, uColorMid3, smoothstep(0.0, 0.25, normalizedRadius));
            color = mix(color, uColorMid2, smoothstep(0.2, 0.55, normalizedRadius));
            color = mix(color, uColorMid1, smoothstep(0.5, 0.75, normalizedRadius));
            color = mix(color, uColorHot, smoothstep(0.7, 0.95, normalizedRadius));
            
            color *= (0.5 + noiseVal * 1.0);
            float brightness = pow(1.0 - normalizedRadius, 1.0) * 3.5 + 0.5;
            brightness *= (0.3 + noiseVal * 2.2);
            
            float pulse = sin(uTime * 1.8 + normalizedRadius * 12.0 + vAngle * 2.0) * 0.15 + 0.85;
            brightness *= pulse;
            
            float alpha = uDensity * (0.2 + noiseVal * 0.9);
            alpha *= smoothstep(0.0, 0.15, normalizedRadius);
            alpha *= (1.0 - smoothstep(0.85, 1.0, normalizedRadius));
            alpha = clamp(alpha, 0.0, 1.0);

            gl_FragColor = vec4(color * brightness, alpha);
        }
    `,
  transparent: true,
  side: THREE.DoubleSide,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});

const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
accretionDisk.rotation.x = DISK_TILT_ANGLE;
accretionDisk.renderOrder = 1;
scene.add(accretionDisk);

// We keep the lights just in case the new theme logic requires them
scene.add(new THREE.AmbientLight(0x050505));
const lM = new THREE.PointLight(0xff00ff, 120, 30); lM.position.set(10, 5, 8); scene.add(lM);
const lC = new THREE.PointLight(0x00ffff, 100, 30); lC.position.set(-10, -5, 8); scene.add(lC);
const mL = new THREE.PointLight(0xffffff, 150, 15); scene.add(mL);

const blackHoleScreenPosVec3 = new THREE.Vector3();
let mx = 0, my = 0, tmx = 0, tmy = 0, m3x = 0, m3y = 0;
let mouseX = 0, mouseY = 0;
window.addEventListener('mousemove', e => {
  tmx = (e.clientX / innerWidth) * 2 - 1; tmy = -(e.clientY / innerHeight) * 2 + 1; m3x = tmx * 25; m3y = tmy * 15;
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});
window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
  bloomPass.resolution.set(innerWidth, innerHeight);
  lensingPass.uniforms.aspectRatio.value = innerWidth / innerHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
});

/* SCROLL */
let sp = 0, scrollProgress = 0;
const mWrap = document.getElementById('manifestoWrap'), fTxt = document.getElementById('fillText');
const jSec = document.getElementById('journeySection'), jTit = document.getElementById('jTitle');
const jFade = document.getElementById('jFade'), jSc = document.getElementById('jScale'), cRow = document.getElementById('cardsRow');

sf.addEventListener('scroll', () => {
  const st = sf.scrollTop;
  sp = st / (sf.scrollHeight - innerHeight);
  scrollProgress = Math.min(sp, 1);
  sf.classList.toggle('scrolled', st > 50);
  document.body.style.backgroundPositionY = (st * .35) + 'px';
  cont.style.transform = `translateY(${st}px)`;
  cont.style.opacity = Math.max(.07, 1 - st / (innerHeight * 1.4));

  /* manifesto */
  if (mWrap && fTxt) {
    const mr = mWrap.getBoundingClientRect(), mp = 1 - mr.top / innerHeight;
    if (mp > 0 && mp < 1.6) {
      fTxt.style.transform = `translateZ(${Math.min(0, -600 + mp * 800)}px) translateY(${Math.max(0, 150 - mp * 200)}px)`;
      fTxt.style.opacity = Math.min(1, mp * 1.5);
      fTxt.style.backgroundPosition = `${100 - Math.max(0, Math.min(1, (mp - .3) / .5)) * 100}% 0`;
    }
  }

  /* journey */
  if (jSec && jFade && jTit && jSc && cRow) {
    const jr = jSec.getBoundingClientRect();
    jFade.classList.toggle('vis', jr.top < innerHeight * .9);
    const jp = Math.max(0, Math.min(1, -jr.top / (jr.height - innerHeight)));
    const p1 = Math.min(1, Math.max(0, jp / .28));
    jTit.style.opacity = p1; jTit.style.transform = `translateY(${30 - p1 * 30}px)`;

    if (jp < .28) {
      jSc.style.transform = `scale(${1.4 - p1 * .4})`;
      cRow.classList.remove('sep', 'flip');
    } else if (jp < .62) {
      const p2 = Math.min(1, (jp - .28) / .34);
      jSc.style.transform = `scale(${1.0 - p2 * .28})`;
      cRow.classList.add('sep'); cRow.classList.remove('flip');
    } else {
      jSc.style.transform = `scale(0.72)`;
      cRow.classList.add('sep', 'flip');
    }
  }

  /* STACKED CARDS TRANSITION */
  const stackCards = document.querySelectorAll('.stack-card');
  stackCards.forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    const cardTop = card.offsetTop;
    const stickyTop = parseInt(getComputedStyle(card).top) || 0;

    // Check if next card exists and is starting to overlap
    const nextCard = stackCards[i + 1];
    if (nextCard) {
      const nextRect = nextCard.getBoundingClientRect();
      // When the next card's top edge is close to the sticky offset of the current card
      const overlapStart = innerHeight * 0.8;
      const overlapEnd = stickyTop + 50;

      if (nextRect.top < overlapStart && nextRect.top > overlapEnd) {
        // Progress from 0 (next card just entered) to 1 (next card fully covers)
        const progress = 1 - (nextRect.top - overlapEnd) / (overlapStart - overlapEnd);
        const clampedProgress = Math.max(0, Math.min(1, progress));

        const scale = 1 - (clampedProgress * 0.05); // Scale down to 0.95
        const brightness = 1 - (clampedProgress * 0.2); // Dim to 0.8

        card.classList.add('is-behind');
        card.style.setProperty('--stack-scale', scale);
        card.style.setProperty('--stack-brightness', brightness);
      } else if (nextRect.top >= overlapStart) {
        // Reset — next card is far away
        card.classList.remove('is-behind');
        card.style.setProperty('--stack-scale', 1);
        card.style.setProperty('--stack-brightness', 1);
      }
      // When fully covered, keep at minimum
      else {
        card.classList.add('is-behind');
        card.style.setProperty('--stack-scale', 0.95);
        card.style.setProperty('--stack-brightness', 0.8);
      }
    }
  });
});

/* ANIMATE */
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const elapsedTime = clock.getElapsedTime();
  mx += (tmx - mx) * .05; my += (tmy - my) * .05; mL.position.set(mx * 15, my * 10, 4);

  // -- New Black Hole Animation -- 
  const deltaTime = clock.getDelta();
  diskMaterial.uniforms.uTime.value = elapsedTime;
  starMaterial.uniforms.uTime.value = elapsedTime;
  eventHorizonMat.uniforms.uTime.value = elapsedTime;
  eventHorizonMat.uniforms.uCameraPosition.value.copy(camera.position);

  blackHoleScreenPosVec3.copy(blackHoleMesh.position).project(camera);
  lensingPass.uniforms.blackHoleScreenPos.value.set(
    (blackHoleScreenPosVec3.x + 1) / 2,
    (blackHoleScreenPosVec3.y + 1) / 2
  );

  stars.rotation.y += deltaTime * 0.003;
  stars.rotation.x += deltaTime * 0.001;

  accretionDisk.rotation.z += deltaTime * 0.005;

  // Parallax offsets based on mouse
  const parallaxX = mouseX * 0.8;
  const parallaxY = mouseY * 0.8;

  // Zoom dynamically into the black hole as user scrolls down
  const baseCamX = -6.5 * (1.0 - scrollProgress * 0.9);
  const baseCamY = 5.0 * (1.0 - scrollProgress * 0.9);
  const baseCamZ = 6.5 - (scrollProgress * 6.0); // Adjust to get deep inside

  camera.position.x += (baseCamX + parallaxX - camera.position.x) * 0.05;
  camera.position.y += (baseCamY + parallaxY - camera.position.y) * 0.05;
  camera.position.z += (baseCamZ - camera.position.z) * 0.05;
  camera.lookAt(0, 0, 0);

  composer.render();
}
animate();

/* THEME TOGGLE & LIQUID WIDGET */
const tBtn = document.getElementById('theme-btn'), tLbl = document.getElementById('tLabel');
const liquidIcon = document.querySelector('#liquid-metal .svg-icon');
let light = false;

const iconMoon = `
  < path d = "M523.6 863.6C329.8 863.6 172 705.8 172 512c0-154.5 98.7-285.5 238-335 15.1-5.3 32-2.3 43.4 8.7 11.4 11 15 27.6 9.4 42.1-40.4 105.9-39.7 221.7 4.1 324.9 44.4 104.5 142.1 176.6 250.7 186.2 16.2 1.5 29.5 12.3 34.6 27.6 5.2 15.3-0.2 32-13.8 41.5C671.1 846.5 599.3 863.6 523.6 863.6z" ></path >
    `;

const iconSun = `
    < circle cx = "512" cy = "512" r = "220" ></circle >
      <path d="M512 120a40 40 0 0 1-40-40V40a40 40 0 1 1 80 0v40a40 40 0 0 1-40 40zm0 844a40 40 0 0 1-40-40v-40a40 40 0 1 1 80 0v40a40 40 0 0 1-40 40zM234.8 291.3a40 40 0 0 1-28.3-68.3l28.3-28.3a40 40 0 1 1 56.6 56.6l-28.3 28.3a39.8 39.8 0 0 1-28.3 11.7zm554.4 554.4a40 40 0 0 1-28.3-68.3l28.3-28.3a40 40 0 1 1 56.6 56.6l-28.3 28.3a39.8 39.8 0 0 1-28.3 11.7zM120 512a40 40 0 0 1-40-40c0-22.1 17.9-40 40-40h40a40 40 0 1 1 0 80h-40zm844 0a40 40 0 0 1-40-40c0-22.1 17.9-40 40-40h40a40 40 0 1 1 0 80h-40zM234.8 789.2a39.8 39.8 0 0 1-28.3-11.7 40 40 0 0 1 0-56.6l28.3-28.3a40 40 0 1 1 56.6 56.6l-28.3 28.3a39.8 39.8 0 0 1-28.3 11.7zm554.4-554.4a39.8 39.8 0 0 1-28.3-11.7 40 40 0 0 1 0-56.6l28.3-28.3a40 40 0 1 1 56.6 56.6l-28.3 28.3a39.8 39.8 0 0 1-28.3 11.7z"></path>
`;

if (liquidIcon) {
  liquidIcon.innerHTML = iconMoon; // Initial state
}

const container = document.getElementById("liquid-metal");
if (container) {
  new ShaderMount(
    container,
    liquidMetalFragmentShader,
    {
      u_repetition: 1.5,
      u_softness: 0.5,
      u_shiftRed: 0.3,
      u_shiftBlue: 0.3,
      u_distortion: 0,
      u_contour: 0,
      u_angle: 100,
      u_scale: 1.5,
      u_shape: 1,
      u_offsetX: 0.1,
      u_offsetY: -0.1
    },
    undefined,
    0.6
  );
}

if (tBtn) {
  tBtn.addEventListener('click', () => {
    const frame = document.getElementById('site-frame');
    if (frame) {
      frame.classList.add('theme-transitioning');
    }

    // Switch theme halfway through the glitch animation (200ms)
    setTimeout(() => {
      light = !light;
      document.documentElement.classList.toggle('light', light);
      if (tLbl) tLbl.textContent = light ? 'Dark' : 'Light';
      if (liquidIcon) liquidIcon.innerHTML = light ? iconSun : iconMoon;

      if (light) {
        lM.color.setHex(0x3344cc); lC.color.setHex(0x0066cc); scene.fog.color.setHex(0xf2efe9);
        bloomPass.strength = 0;
      }
      else {
        lM.color.setHex(0xff00ff); lC.color.setHex(0x00ffff); scene.fog.color.setHex(0x000000);
        bloomPass.strength = 1.2;
      }
    }, 200);

    // Remove glitch class when animation finishes
    setTimeout(() => {
      if (frame) {
        frame.classList.remove('theme-transitioning');
      }
    }, 500);
  });
}

/* NAV SCRAMBLE */
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ*&#%!';
document.querySelectorAll('.nav-link').forEach(el => {
  const textNode = el.querySelector('.nav-text') || el;
  if (!textNode) return;
  const orig = textNode.textContent;
  const preserveCount = Math.floor(orig.length / 2.5); // Preserve roughly the first half

  el.addEventListener('mouseenter', () => {
    let i = preserveCount;
    const iv = setInterval(() => {
      textNode.textContent = orig.split('').map((c, j) => {
        if (j < i) return orig[j];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      if (i >= orig.length) clearInterval(iv);
      i += .5;
    }, 28);
  });
  el.addEventListener('mouseleave', () => textNode.textContent = orig);
});

/* ══════════════════════════════════════════
    WEB AUDIO SYNTHESIZER 
══════════════════════════════════════════ */
let audioCtx = null;
let gainNode = null;
let masterComp = null;
let isAudioInitialized = false;

// We must wait for first user interaction before making sound
function initAudio() {
  if (isAudioInitialized) return;

  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // Master Compressor
  masterComp = audioCtx.createDynamicsCompressor();
  masterComp.threshold.setValueAtTime(-24, audioCtx.currentTime);
  masterComp.knee.setValueAtTime(30, audioCtx.currentTime);
  masterComp.ratio.setValueAtTime(12, audioCtx.currentTime);
  masterComp.attack.setValueAtTime(0.003, audioCtx.currentTime);
  masterComp.release.setValueAtTime(0.25, audioCtx.currentTime);

  // Master Volume
  gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.2; // Keep it subtle and elegant

  masterComp.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  isAudioInitialized = true;
}

// 1. Subtle Sub-bass Hover (Synthetic Wind/Beep)
function playHoverSound() {
  if (!isAudioInitialized || !audioCtx) return;

  const osc = audioCtx.createOscillator();
  const oscGain = audioCtx.createGain();

  // Smooth Sine wave for a premium feel
  osc.type = 'sine';

  // Pitch drops slightly
  osc.frequency.setValueAtTime(300, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.1);

  // Volume envelope (quick attack, trailing decay)
  oscGain.gain.setValueAtTime(0, audioCtx.currentTime);
  oscGain.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.02);
  oscGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);

  osc.connect(oscGain);
  oscGain.connect(masterComp);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.2);
}

// 2. Sharp Tech Click
function playClickSound() {
  if (!isAudioInitialized || !audioCtx) return;

  const osc = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator(); // Add harmonics
  const oscGain = audioCtx.createGain();

  // Square/Triangle for a sharp, techy click
  osc.type = 'square';
  osc2.type = 'triangle';

  osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05);

  osc2.frequency.setValueAtTime(2400, audioCtx.currentTime);
  osc2.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.05);

  oscGain.gain.setValueAtTime(0, audioCtx.currentTime);
  oscGain.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.005);
  oscGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

  osc.connect(oscGain);
  osc2.connect(oscGain);
  oscGain.connect(masterComp);

  osc.start();
  osc2.start();
  osc.stop(audioCtx.currentTime + 0.1);
  osc2.stop(audioCtx.currentTime + 0.1);
}

// Bind audio context initialization to body clicks
document.body.addEventListener('click', initAudio, { once: true });

// Bind Hover sounds to buttons, links, and cards
document.querySelectorAll('.hover-t, .nav-link, button, a').forEach(el => {
  el.addEventListener('mouseenter', () => playHoverSound());
});

// Bind Click sounds
document.querySelectorAll('.hover-t, .nav-link, button, a').forEach(el => {
  el.addEventListener('click', () => {
    initAudio(); // Force init in case they haven't clicked body before
    playClickSound();
  });
});

/* LOGO TUBES CURSOR */
const logoCanvas = document.getElementById('logo-canvas');
const logoText = document.querySelector('.logo-wrapper .logo');

if (logoCanvas && logoText) {
  const tubesApp = TubesCursor(logoCanvas, {
    sleepRadiusX: 0,
    sleepRadiusY: 0,
    sleepTimeScaleX: 0,
    sleepTimeScaleY: 0,
    tubes: {
      colors: ["#ffaa00", "#ff7700", "#ffd700"],
      lights: {
        intensity: 200,
        colors: ["#ff5500", "#ffcc00", "#ffffff", "#ffaa00"]
      }
    }
  });

  // Hide canvas by default until hover
  logoCanvas.style.opacity = '0';
  logoCanvas.style.transition = 'opacity 0.4s easeOutQuad';

  logoText.addEventListener('mouseenter', () => {
    logoCanvas.style.opacity = '1';
    function randomColors(count) {
      return new Array(count)
        .fill(0)
        .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
    }
    const colors = randomColors(3);
    const lightsColors = randomColors(4);
    tubesApp.tubes.setColors(colors);
    tubesApp.tubes.setLightsColors(lightsColors);
  });

  logoText.addEventListener('mouseleave', () => {
    logoCanvas.style.opacity = '0'; // Hide again when cursor leaves
  });
}

/* ══════════════════════════════════════════
   CTA GLSL SHADER BACKGROUND (सूर्य)
══════════════════════════════════════════ */
(() => {
  const canvas = document.getElementById("cta-glcanvas");
  if (!canvas) return;
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false });
  if (!gl) return;

  function resize() {
    const d = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * d;
    canvas.height = rect.height * d;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  resize();
  addEventListener("resize", resize);

  const vert = `
    attribute vec2 pos;
void main() { gl_Position = vec4(pos, 0.0, 1.0); }
`;

  const frag = `
    precision highp float;
    uniform vec2 u_res;
    uniform float u_time;

void main() {
      vec2 FC = gl_FragCoord.xy;
      float t = u_time * 0.8;
      vec2 r = u_res;
      vec2 p = (FC * 2.0 - r) / r.y;

      vec3 c = vec3(0.0);

  for (float i = 0.0; i < 42.0; i++) {
        float a = i / 1.5 + t * 0.5;
        vec2 q = p;
    q.x = q.x + sin(q.y * 19.0 + t * 2.0 + i) *
      29.0 * smoothstep(0.0, -2.0, q.y);
        float d = length(q - vec2(cos(a), sin(a)) *
        (0.4 * smoothstep(0.0, 0.5, -q.y)));
    c = c + vec3(0.34, 0.30, 0.24) * (0.015 / d);
  }

      vec3 col = c * c + 0.05;
  gl_FragColor = vec4(col, 1.0);
}
`;

  function compile(src, type) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error("CTA Shader:", gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  const vs = compile(vert, gl.VERTEX_SHADER);
  const fs = compile(frag, gl.FRAGMENT_SHADER);
  if (!vs || !fs) return;

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.bindAttribLocation(program, 0, "pos");
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("CTA Program:", gl.getProgramInfoLog(program));
    return;
  }

  gl.useProgram(program);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  const u_res = gl.getUniformLocation(program, "u_res");
  const u_time = gl.getUniformLocation(program, "u_time");

  let ctaVisible = false;
  const ctaObs = new IntersectionObserver(entries => {
    ctaVisible = entries[0].isIntersecting;
  }, { threshold: 0.05 });
  ctaObs.observe(canvas.parentElement);

  const start = performance.now();

  function draw() {
    if (ctaVisible) {
      resize(); // Keep in sync if parent resizes
      const t = (performance.now() - start) * 0.001;
      gl.uniform2f(u_res, canvas.width, canvas.height);
      gl.uniform1f(u_time, t);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    requestAnimationFrame(draw);
  }

  draw();
})();

