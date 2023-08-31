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

    <p class="absolute help-text-1 text-3xl text-white font-medium z-10 opacity-0">
      HERE TO TELL STORIES
    </p>
    <p
      class="absolute translate-y-[100px] help-text-2 text-5xl text-white font-bold mt-8 z-10 opacity-0"
    >
      LIKE NO ONE ELSE
    </p>
    <p
      class="absolute help-text-3 max-w-3xl text-6xl leading-tight text-white font-bold opacity-0 -translate-x-[1920px] -translate-y-10 z-10"
    >
      NO BULLSHIT. JUST GOOD PEOPLE MAKING DAMN GOOD FILMS.
    </p>
    <p
      class="absolute help-text-4 max-w-3xl text-xl text-white mt-8 -translate-x-[1920px] translate-y-48 z-10"
    >
      Kein Bock auf langweilige Werbefilme? Wir auch nicht.<br />
      Hi, wir sind FORMAT 54.
    </p>
    <div
      class="absolute cube cube1 pointer-events-none bg-[#5C5C5C] w-80 h-80 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube2 pointer-events-none bg-[#5C5C5C] w-80 h-80 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube3 pointer-events-none bg-[#5C5C5C] w-80 h-80 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube4 pointer-events-none bg-[#5C5C5C] w-80 h-80 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube5 pointer-events-none bg-[#5C5C5C] w-80 h-80 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube6 pointer-events-none bg-[#5C5C5C] w-80 h-80 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube7 pointer-events-none bg-[#5C5C5C] w-80 h-80 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube8 pointer-events-none bg-[#5C5C5C] w-80 h-80 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube9 pointer-events-none bg-[#5C5C5C] w-80 h-80 opacity-0 rotate-[30deg]"
    ></div>
    <div
      class="absolute cube cube10 pointer-events-none bg-[#5C5C5C] w-80 h-80 opacity-0 rotate-[30deg]"
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
let galaxy = ref(null);

// Create a new Three.js scene and camera
const scene = new THREE.Scene();

let camera;
let posy = 0,
  posz = 300;

const threeJSinitialFunc = () => {
  function generateStarPositions(numStars, xRange, yRange, zRange) {
    const starPositions = [];
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * (xRange.max - xRange.min) + xRange.min;
      const y = Math.random() * (yRange.max - yRange.min) + yRange.min;
      const z = Math.random() * (zRange.max - zRange.min) + zRange.min;
      starPositions.push({ x, y, z });
    }
    return starPositions;
  }

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  // Define the shape of the mountain
  const mountainShape = new THREE.Shape();
  // ... define the points of the shape here ...

  // Extrude the shape to give it depth
  const mountainGeometry = new THREE.ExtrudeGeometry(mountainShape, { depth: 50 });

  // Create a material for the mountain
  const mountainMaterial = new THREE.MeshBasicMaterial({ color: 0x996633 });

  // Create a mesh object for the mountain
  const mountainMesh = new THREE.Mesh(mountainGeometry, mountainMaterial);
  scene.add(mountainMesh);

  // Define the positions and properties of the stars in the cluster
  const starPositions = generateStarPositions(
    3000,
    { min: -200, max: 200 },
    { min: -20, max: 20 },
    { min: -8800, max: 300 }
  );

  const starSize = 2;
  const starColor = 0xffffff;

  // Create a mesh object for each star
  starPositions.forEach((position) => {
    const starGeometry = new THREE.SphereGeometry(starSize);
    const starMaterial = new THREE.MeshBasicMaterial({ color: starColor });
    const starMesh = new THREE.Mesh(starGeometry, starMaterial);
    starMesh.position.set(position.x, position.y, position.z);
    scene.add(starMesh);
  });

  // Set the camera position and render the scene
  camera.position.set(0, posy, posz);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  galaxy?.value?.appendChild(renderer.domElement);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableRotate = true;
  controls.enableZoom = false;
  controls.enableDamping = true;

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
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
            end: "300%",
            trigger: ".galaxy-section",
            onUpdate: (self: any) => {
              let pg = self.progress;
              // console.log('pg', pg);
              if (pg < 0.3) {
                posy = (pg / 0.3) * 60;
              } else if (pg > 0.3 && pg < 0.5) {
                posy = 60 - ((pg-0.3) / 0.2) * 60
              } else if(pg > 0.5 && pg < 0.75) {
                posy = ((pg-0.5) / 0.25) * 60;
              } else if (pg > 0.75 && pg < 1) {
                posy = 60 - ((pg-0.75) / 0.25) * 60
              }
              posz = 300 - 1200 * (pg / 0.3);
              camera.position.set(0, posy, posz);
            },
          },
        })
        .to(".cube", { opacity: 1, duration: 0.5, delay: 5 })
        .to(".galaxy-section", { opacity: 0, duration: 0.1 })
        .to(".help-text-1", { y: 0, opacity: 1, duration: 0.5 })
        .to(".help-text-2", { y: 50, opacity: 1, duration: 1 })
        .to(".help-text-2", { y: 100, opacity: 0, duration: 1, delay: 1.5 })
        .to(".help-text-1", { y: 50, opacity: 0, duration: 0.5 })
        .to(".help-text-3", { x: -250, opacity: 1, duration: 1 })
        .to(".help-text-4", { x: -400, opacity: 1, duration: 1 })
        .to(".help-text-3", { x: 1920, opacity: 0, duration: 2 })
        .to(".help-text-4", { x: -1920, opacity: 0, duration: 2 })
        .to(".cube1", { width: 100, height: 100, duration: 0.1, delay: 2 }, "-=10")
        .to(".cube2", { width: 100, height: 100, duration: 0.1 }, "-=10")
        .to(".cube3", { width: 100, height: 100, duration: 0.1 }, "-=10")
        .to(".cube4", { width: 100, height: 100, duration: 0.1 }, "-=10")
        .to(".cube5", { width: 100, height: 100, duration: 0.1 }, "-=10")
        .to(".cube6", { width: 100, height: 100, duration: 0.1 }, "-=10")
        .to(".cube7", { width: 100, height: 100, duration: 0.1 }, "-=10")
        .to(".cube8", { width: 100, height: 100, duration: 0.1 }, "-=10")
        .to(".cube9", { width: 100, height: 100, duration: 0.1 }, "-=10")
        .to(".cube10", { width: 100, height: 100, duration: 0.1 }, "-=10")
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

.help-text-2,
.help-text-3 {
  font-family: "Staff-X-Wide", sans-serif;
}
</style>
