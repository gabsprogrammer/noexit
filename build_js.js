const fs = require('fs');

let mainCode = `import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

/* PRELOADER */
const pFill=document.getElementById('pFill'), pCount=document.getElementById('pCount'), preEl=document.getElementById('preloader');
let pn=0;
const pi=setInterval(()=>{ pn+=Math.random()*13; if(pn>=100){pn=100;clearInterval(pi);setTimeout(()=>preEl.classList.add('done'),350);} pFill.style.width=pn+'%'; pCount.textContent=String(Math.floor(pn)).padStart(3,'0'); },75);

/* CURSOR with lerp */
const cur=document.getElementById('cursor');
let cx=0,cy=0,tx=0,ty=0;
window.addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;});
(function loop(){ cx+=(tx-cx)*.11; cy+=(ty-cy)*.11; cur.style.left=cx+'px'; cur.style.top=cy+'px'; requestAnimationFrame(loop); })();
document.querySelectorAll('.hover-t,h1,h2,.card-front').forEach(el=>{
    el.addEventListener('mouseenter',()=>cur.classList.add('hover'));
    el.addEventListener('mouseleave',()=>cur.classList.remove('hover'));
});

/* MAGNETIC NAV BTN */
const navWrap=document.getElementById('navWrap');
navWrap.addEventListener('mousemove',e=>{ const r=navWrap.getBoundingClientRect(); navWrap.querySelector('button').style.transform=\`translate(\${(e.clientX-r.left-r.width/2)*.3}px,\${(e.clientY-r.top-r.height/2)*.3}px)\`; });
navWrap.addEventListener('mouseleave',()=>navWrap.querySelector('button').style.transform='');

/* LIVE UTC */
const ltEl=document.getElementById('liveTime');
setInterval(()=>{ const d=new Date(); ltEl.textContent=[d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds()].map(x=>String(x).padStart(2,'0')).join(':')+' UTC'; },1000);

/* WORK HOVER CARD */
const wH=document.getElementById('wHover'), wHIn=document.getElementById('wHoverIn'), wHLbl=document.getElementById('wHoverLbl');
let hRaf;
document.querySelectorAll('.work-item').forEach(el=>{
    el.addEventListener('mouseenter',()=>{
        wHLbl.textContent = el.querySelector('.work-name')?.textContent || '';
        wHIn.style.background = el.dataset.bg || '#111';
        wH.classList.add('vis');
    });
    el.addEventListener('mouseleave',()=>wH.classList.remove('vis'));
    el.addEventListener('mousemove',e=>{ cancelAnimationFrame(hRaf); hRaf=requestAnimationFrame(()=>{ wH.style.left=e.clientX+'px'; wH.style.top=e.clientY+'px'; }); });
});

/* STATS COUNTER */
const statsEl=document.querySelector('.stats-zone');
const sObs=new IntersectionObserver(ent=>{ if(!ent[0].isIntersecting) return; sObs.disconnect();
    document.querySelectorAll('.stat-num[data-target]').forEach(el=>{ const t=+el.dataset.target,s=el.dataset.suf||'',t0=performance.now(),dur=2000;
        (function step(now){ const p=Math.min((now-t0)/dur,1),e=1-Math.pow(1-p,3); el.textContent=Math.floor(e*t)+s; if(p<1)requestAnimationFrame(step); })(performance.now()); });
},{threshold:.35}); if(statsEl)sObs.observe(statsEl);

/* THREE.JS (Restoring Black Hole) */
const cont=document.getElementById('webgl-container'), sf=document.getElementById('site-frame');
const scene=new THREE.Scene(); 
scene.fog=new THREE.FogExp2(0x000000,.03);
const camera=new THREE.PerspectiveCamera(45,innerWidth/innerHeight,.1,100); 
camera.position.set(-3, 1, 15);

const renderer=new THREE.WebGLRenderer({antialias:false,alpha:true,powerPreference:'high-performance'});
renderer.setSize(innerWidth,innerHeight); 
renderer.setPixelRatio(Math.min(devicePixelRatio,2)); 
cont.appendChild(renderer.domElement);

// We keep the lights just in case the new theme logic requires them, but the BH shader ignores them.
scene.add(new THREE.AmbientLight(0x050505));
const lM=new THREE.PointLight(0xff00ff,120,30); lM.position.set(10,5,8); scene.add(lM);
const lC=new THREE.PointLight(0x00ffff,100,30); lC.position.set(-10,-5,8); scene.add(lC);
const mL=new THREE.PointLight(0xffffff,150,15); scene.add(mL);

const composer=new EffectComposer(renderer); 
composer.addPass(new RenderPass(scene,camera)); 
const bloomPass = new UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),1.2,.5,.2);
composer.addPass(bloomPass);

/* Raymarched Black Hole Setup (from our previous backup) */
`;

const oldMain = fs.readFileSync('main_backup.js', 'utf8');
const bhSetupStart = oldMain.indexOf('// --- 1.d Raymarched Black Hole Setup ---');
const bhSetupEnd = oldMain.indexOf('// --- Bloom Post-Processing ---');
if (bhSetupStart !== -1 && bhSetupEnd !== -1) {
    mainCode += oldMain.substring(bhSetupStart, bhSetupEnd);
}

mainCode += `
let mx=0,my=0,tmx=0,tmy=0,m3x=0,m3y=0;
let mouseX=0, mouseY=0;
window.addEventListener('mousemove',e=>{ 
    tmx=(e.clientX/innerWidth)*2-1; tmy=-(e.clientY/innerHeight)*2+1; m3x=tmx*25; m3y=tmy*15; 
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});
window.addEventListener('resize',()=>{ 
    camera.aspect=innerWidth/innerHeight; 
    camera.updateProjectionMatrix(); 
    renderer.setSize(innerWidth,innerHeight); 
    composer.setSize(innerWidth,innerHeight); 
    if(typeof bhUniforms !== 'undefined') {
        bhUniforms.resolution.value.set(innerWidth, innerHeight);
    }
});

/* SCROLL */
let sp=0, scrollProgress=0;
const mWrap=document.getElementById('manifestoWrap'), fTxt=document.getElementById('fillText');
const jSec=document.getElementById('journeySection'), jTit=document.getElementById('jTitle');
const jFade=document.getElementById('jFade'), jSc=document.getElementById('jScale'), cRow=document.getElementById('cardsRow');

sf.addEventListener('scroll',()=>{
    const st=sf.scrollTop;
    sp=st/(sf.scrollHeight-innerHeight);
    scrollProgress = Math.min(sp, 1);
    sf.classList.toggle('scrolled',st>50);
    document.body.style.backgroundPositionY=(st*.35)+'px';
    cont.style.transform=\`translateY(\${st}px)\`;
    cont.style.opacity=Math.max(.07,1-st/(innerHeight*1.4));

    /* manifesto */
    if (mWrap && fTxt) {
        const mr=mWrap.getBoundingClientRect(), mp=1-mr.top/innerHeight;
        if(mp>0&&mp<1.6){
            fTxt.style.transform=\`translateZ(\${Math.min(0,-600+mp*800)}px) translateY(\${Math.max(0,150-mp*200)}px)\`;
            fTxt.style.opacity=Math.min(1,mp*1.5);
            fTxt.style.backgroundPosition=\`\${100-Math.max(0,Math.min(1,(mp-.3)/.5))*100}% 0\`;
        }
    }

    /* journey */
    if (jSec && jFade && jTit && jSc && cRow) {
        const jr=jSec.getBoundingClientRect();
        jFade.classList.toggle('vis',jr.top<innerHeight*.9);
        const jp=Math.max(0,Math.min(1,-jr.top/(jr.height-innerHeight)));
        const p1=Math.min(1,Math.max(0,jp/.28));
        jTit.style.opacity=p1; jTit.style.transform=\`translateY(\${30-p1*30}px)\`;

        if(jp<.28){
            jSc.style.transform=\`scale(\${1.4-p1*.4})\`;
            cRow.classList.remove('sep','flip');
        } else if(jp<.62){
            const p2=Math.min(1,(jp-.28)/.34);
            jSc.style.transform=\`scale(\${1.0-p2*.28})\`;
            cRow.classList.add('sep'); cRow.classList.remove('flip');
        } else {
            jSc.style.transform=\`scale(0.72)\`;
            cRow.classList.add('sep','flip');
        }
    }
});

/* ANIMATE */
const clock=new THREE.Clock();
function animate(){ 
    requestAnimationFrame(animate); 
    const elapsedTime=clock.getElapsedTime();
    mx+=(tmx-mx)*.05; my+=(tmy-my)*.05; mL.position.set(mx*15,my*10,4);
    
`;

const animStart = oldMain.indexOf('// -- Raymarched Black Hole Animation --');
const animEnd = oldMain.indexOf('composer.render();');
if (animStart !== -1 && animEnd !== -1) {
    mainCode += oldMain.substring(animStart, animEnd);
}

mainCode += `
    composer.render();
} 
animate();

/* THEME TOGGLE */
const tBtn=document.getElementById('theme-btn'), tLbl=document.getElementById('tLabel');
let light=false;
if (tBtn && tLbl) {
    tBtn.addEventListener('click',()=>{
        light=!light;
        document.documentElement.classList.toggle('light',light);
        tLbl.textContent=light?'Dark':'Light';
        if(light){ 
            lM.color.setHex(0x3344cc); lC.color.setHex(0x0066cc); scene.fog.color.setHex(0xf2efe9); 
            // Desligar bloom para tema claro
            bloomPass.strength = 0;
            if (typeof bhUniforms !== 'undefined') {
                // Adjust black hole to light mode (optional logic, disabling accretion disk texture works)
            }
        }
        else { 
            lM.color.setHex(0xff00ff); lC.color.setHex(0x00ffff); scene.fog.color.setHex(0x000000); 
            // Ligar bloom para tema escuro
            bloomPass.strength = 1.2;
        }
    });
}

/* NAV SCRAMBLE */
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
document.querySelectorAll('.nav-link').forEach(el=>{
    const textNode = el.querySelector('.nav-text') || el;
    if(!textNode) return;
    const orig=textNode.textContent;
    el.addEventListener('mouseenter',()=>{ 
        let i=0; 
        const iv=setInterval(()=>{ 
            textNode.textContent=orig.split('').map((c,j)=>j<i?orig[j]:chars[Math.floor(Math.random()*chars.length)]).join(''); 
            if(i>=orig.length)clearInterval(iv); 
            i+=.5; 
        },28); 
    });
    el.addEventListener('mouseleave',()=>textNode.textContent=orig);
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

`;

fs.writeFileSync('main.js', mainCode);
console.log('Main JS fully updated with User UI logic, Black Hole Shader, and Procedural Synths.');
