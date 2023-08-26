<template>
  <div class="section-container relative flex items-center justify-center">
    <section class="logo-section flex items-center justify-center h-screen relative">
      <img src="~/assets/images/logo.landing.svg" />
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div class="w-8 h-14 border-2 border-white rounded-full">
          <span
            class="block w-1 h-4 bg-white rounded-full absolute left-1/2 -translate-x-1/2 bottom-2 animate-move"
          />
        </div>
      </div>
    </section>
    <section
      class="galaxy-section flex items-center justify-center h-screen opacity-50 hidden absolute top-0"
    >
      <div ref="galaxy" class="w-full overflow-hidden" />
    </section>

    <p
      class="absolute help-text-1 text-3xl text-white font-medium z-10 opacity-0"
    >
      HERE TO TELL STORIES
    </p>
    <p
      class="absolute translate-y-[100px] help-text-2 text-6xl text-white font-bold mt-8 z-10 opacity-0"
    >
      LIKE NO ONE ELSE
    </p>
    <p
      class="absolute help-text-3 max-w-3xl text-8xl text-white font-bold opacity-0 -translate-x-[1920px] -translate-y-1/4 z-10"
    >
      NO BULLSHIT. JUST GOOD PEOPLE MAKING DAMN GOOD FILMS.
    </p>
    <p
      class="absolute help-text-4 max-w-3xl text-2xl text-white mt-8 -translate-x-[1920px] translate-y-48 z-10"
    >
      Kein Bock auf langweilige Werbefilme? Wir auch nicht. Hi, wir sind FORMAT 54.
    </p>
    <div
      class="absolute cube cube1 pointer-events-none bg-[#5C5C5C] w-64 h-64 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube2 pointer-events-none bg-[#5C5C5C] w-64 h-64 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube3 pointer-events-none bg-[#5C5C5C] w-64 h-64 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube4 pointer-events-none bg-[#5C5C5C] w-64 h-64 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube5 pointer-events-none bg-[#5C5C5C] w-40 h-40 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube6 pointer-events-none bg-[#5C5C5C] w-40 h-40 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube7 pointer-events-none bg-[#5C5C5C] w-40 h-40 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube8 pointer-events-none bg-[#5C5C5C] w-40 h-40 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube9 pointer-events-none bg-[#5C5C5C] w-40 h-40 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube10 pointer-events-none bg-[#5C5C5C] w-40 h-40 opacity-0 rotate-[30deg]"
    ></div>
  </div>
  <div class="h-[800vh]"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

gsap.registerPlugin(ScrollTrigger);
let breakPoint = 800;
let mm = gsap.matchMedia();

let XZ = 30;
let Y = 75;
let galaxy = ref(null);
let outsideColor = ref("rgb(172, 47, 149)");

// Scene
const scene = new THREE.Scene();

// Galaxy
const parameters: any = {};
parameters.count = 132200; // last val: 262900
parameters.size = 0.085; // last val: 0.1
parameters.radius = 6.93; // last val: 20
parameters.branches = 2;
parameters.spin = 0.36; // last val: 0.36
parameters.randomness = 0.69; // last val: 2.08
parameters.randomnessPower = 2.08; // last val: 2.08
parameters.insideColor = "#e4dfdd";
// parameters.outsideColor = "#eb3700"; // first time color is #ac2f95

let sizes: any,
  camera: any = null;
let geometry: any = null;
let material: any = null;
let points: any = null;
//  galaxy
const generateGalaxy = (parameters) => {
  parameters.outsideColor = outsideColor.value;

  /**
   * Destroy Old Galaxy
   */
  if (points !== null) {
    geometry.dispose();
    material.dispose();
    scene.remove(points);
  }

  /**
   * Geometry
   */
  geometry = new THREE.BufferGeometry();

  const positions = new Float32Array(parameters.count * 3);
  const colors = new Float32Array(parameters.count * 3);

  const colorInside = new THREE.Color(parameters.insideColor);
  const colorOutside = new THREE.Color(parameters.outsideColor);

  for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3;

    //Position
    const radius = Math.random() * parameters.radius;
    const spinAngle = radius * parameters.spin;
    const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

    const randomY =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 3 : -3);
    const randomZ =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 3 : -3);
    const randomX =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 3 : -3);

    positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

    //Color
    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, radius / parameters.radius);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  /**
   * Material
   */
  material = new THREE.PointsMaterial({
    size: parameters.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });

  /**
   * Points
   */
  points = new THREE.Points(geometry, material);
  scene.add(points);
};

// Globe Stars
const generateGlobalStar = () => {
  const loader = new THREE.TextureLoader();
  const texture = loader.load("./images/star.png");
  const randomPointSphere = (radius: any) => {
    let theta = 2 * Math.PI * Math.random();
    let phi = Math.acos(2 * Math.random() - 1);
    let dx = 0 + radius * Math.sin(phi) * Math.cos(theta);
    let dy = 0 + radius * Math.sin(phi) * Math.sin(theta);
    let dz = 0 + radius * Math.cos(phi);
    return [dx, dy, dz];
  };

  const createStars = (texture: any, size: any, total: any) => {
    let pointGeometry = new THREE.BufferGeometry();
    let pointMaterial = new THREE.PointsMaterial({
      size: size * 0.05,
      color: 0xffffff,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    let vertices = [];
    for (let i = 0; i < total; i++) {
      let radius = THREE.MathUtils.randInt(15, 18);
      let particles = randomPointSphere(radius);
      vertices.push(...particles);
    }
    pointGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(vertices), 3)
    );
    return new THREE.Points(pointGeometry, pointMaterial);
  };

  scene.add(createStars(texture, 20, 2000));
};

const threeJSinitialFunc = () => {
  sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  // Camera
  camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height, 0.01, 1000);
  camera.position.set(30, 75, 30);

  generateGalaxy(parameters);
  generateGlobalStar();

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  galaxy?.value?.appendChild(renderer.domElement);

  scene.add(camera);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableRotate = false;
  controls.enableZoom = false;
  controls.enableDamping = true;

  // Animate
  const clock = new THREE.Clock();

  const tick = () => {
    // const elapsedTime = clock.getElapsedTime();
    // points.rotation.y = elapsedTime * 0.05;
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
  };

  tick();
};

// init gsap
const galaxyAnimation = () => {
  threeJSinitialFunc();

  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
      isMobile: `(max-width: ${
        breakPoint - 1
      }px) and (prefers-reduced-motion: no-preference)`,
    },
    (context: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-container",
            scrub: 1,
            end: "+=1200%",
            pin: true,
            pinSpacing: false,
          },
        })
        .to(".logo-section", {
          opacity: 0,
          scrollTrigger: {
            scrub: true,
            start: "top top",
            end: "200",
          },
        })
        .to(".galaxy-section", {
          display: "flex",
          opacity: 1,
          scrollTrigger: {
            scrub: true,
            start: "top top",
            end: "200%",
            trigger: ".galaxy-section",
            onUpdate: (self: any) => {
              let pg = self.progress;
              /**
               *  30 75 30, pg === 0
               * *3x
               *  10 25 10, pg === 0.5
               * *0.8x
               *  8 20 8, pg === 1
               */
              if (pg > 0 && pg <= 0.5) {
                XZ = -40 * pg + 35;
                Y = -100 * pg + 70;
              } else if(pg > 0.5) {
                XZ = -4 * pg + 17;
                Y = -10 * pg + 25;
              }
              camera.position.set(XZ, Y, XZ);

              // fomula: firstVal + (lastVal - firstVal) * pg
              parameters.count = 112200 + (11040 - 112200) * pg;
              parameters.size = 0.085 + (0.12 - 0.085) * pg;
              parameters.radius = 6.93 + (21 - 6.93) * pg;
              parameters.spin = 0.36 + (0.35 - 0.36) * pg;
              parameters.randomness = 0.69 + (1 - 0.69) * pg;
              parameters.randomnessPower = 2.08 + (5.1 - 2.08) * pg;

              generateGalaxy(parameters);
            },
          },
        })

        .to(".cube", { opacity: 1, duration: 0.5, delay: 5 })
        .to(".help-text-1", { y: 0, opacity: 1, duration: 0.5 })
        .to(".help-text-2", { y: 50, opacity: 1, duration: 1 })
        .to(".help-text-2", { y: 100, opacity: 0, duration: 1, delay: 1.5 })
        .to(".help-text-1", { y: 50, opacity: 0, duration: 0.5 })
        .to(".help-text-3", { x: -400, opacity: 1, duration: 1 })
        .to(".help-text-4", { x: -400, opacity: 1, duration: 1 })
        .to(".help-text-3", { x: 1920, opacity: 0, duration: 2 })
        .to(".help-text-4", { x: -1920, opacity: 0, duration: 2 })
        .to(".cube1", { width: 80, height: 80, duration: 0.1, delay: 2 }, "-=10")
        .to(".cube2", { width: 80, height: 80, duration: 0.1 }, "-=10")
        .to(".cube3", { width: 80, height: 80, duration: 0.1 }, "-=10")
        .to(".cube4", { width: 80, height: 80, duration: 0.1 }, "-=10")
        .to(".cube5", { width: 80, height: 80, duration: 0.1 }, "-=10")
        .to(".cube6", { width: 80, height: 80, duration: 0.1 }, "-=10")
        .to(".cube7", { width: 80, height: 80, duration: 0.1 }, "-=10")
        .to(".cube8", { width: 80, height: 80, duration: 0.1 }, "-=10")
        .to(".cube9", { width: 80, height: 80, duration: 0.1 }, "-=10")
        .to(".cube10", { width: 80, height: 80, duration: 0.1 }, "-=10")
        .to(".cube1", { x: "-70vw", y: "-55vh", duration: 10, delay: 2 }, "-=10")
        .to(".cube2", { x: "-35vw", y: "-70vh", duration: 10 }, "-=10")
        .to(".cube3", { x: "-5vw", y: "-80vh", duration: 10 }, "-=10")
        .to(".cube4", { x: "35vw", y: "-58vh", duration: 10 }, "-=10")
        .to(".cube5", { x: "80vw", y: "-20vh", duration: 10 }, "-=10")
        .to(".cube6", { x: "90vw", y: "15vh", duration: 10 }, "-=10")
        .to(".cube8", { x: "40vw", y: "65vh", duration: 10 }, "-=10")
        .to(".cube9", { x: "-20vw", y: "65vh", duration: 10 }, "-=10")
        .to(".cube10", { x: "-80vw", y: "60vh", duration: 10 }, "-=10")
        .to(".cube7", { x: "60vw", y: "40vh", duration: 10 }, "-=9")
        .to(".cube8", { opacity: 0 })
        .to(".cube9", { opacity: 0 });

      return () => {};
    }
  );
};

onMounted(() => {
  galaxyAnimation();
  window.screenTop += 1;
});
</script>

<style lang="scss" scoped>
.galaxy-section {
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
