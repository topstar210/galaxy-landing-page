<template>
  <section class="galaxy-section">
    <!-- <div class="mobile" style="width: 200px; height: 200px; background: red">Mobile</div> -->
    <div ref="galaxy" class="w-full overflow-hidden" />
  </section>
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
let outsideColor = ref("rgb(172, 47, 149)");

// Scene
const scene = new THREE.Scene();

// Galaxy
const parameters: any = {};
parameters.count = 34100; // last val: 262900
parameters.size = 0.011; // last val: 0.1
parameters.radius = 4.55; // last val: 20
parameters.branches = 2;
parameters.spin = 0.5; // last val: 0.36
parameters.randomnessPower = 2.19; // last val: 2.08
parameters.insideColor = "#e4dfdd";
// parameters.outsideColor = "#eb3700"; // first time color is #ac2f95

let sizes: any,
  camera: any = null;
let geometry: any = null;
let material: any = null;
let points: any = null;
//  galaxy
const generateGalaxy = () => {
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
      (Math.random() < 0.5 ? 0.7 : -0.7);
    const randomZ =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1.5 : -1.5);
    const randomX =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 0.8 : -0.8);

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
      let radius = THREE.MathUtils.randInt(16, 17);
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
  camera.position.set(10, 25, 10);

  generateGalaxy();
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
    const elapsedTime = clock.getElapsedTime();
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
      // let { isDesktop, isMobile } = context.conditions;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".galaxy-section",
          scrub: 1,
          end: "200%",
          pin: true,
          onUpdate: (self: any) => {
            let pg = self.progress;
            if(pg > 0 && pg < 0.5){
                let XZ = 20 * (1 - pg);
                let Y = 50 * (1 - pg);
                camera.position.set(XZ, Y, XZ);
            }

            // fomula: firstVal + (lastVal - firstVal) * pg
            parameters.count = 34100 + (262900 - 34100) * pg;
            parameters.size = 0.011 + (0.1 - 0.011) * pg;
            parameters.radius = 4.5 + (20 - 4.5) * pg;
            parameters.spin = 0.5 + (0.36 - 0.5) * pg;

            generateGalaxy();
          },
        },
      });

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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
</style>
