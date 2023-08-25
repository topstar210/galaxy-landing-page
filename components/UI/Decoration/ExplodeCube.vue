<template>
  <div class="cube">
    <canvas class="" ref="canvas" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  cubeSize?: number;
  speedX?: number;
  speedY?: number;
  size?: number;
}>();

import {
  Scene,
  PerspectiveCamera,
  DirectionalLight,
  WebGLRenderer,
  SpotLight,
  Color,
} from "three";
import { Ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let renderer: WebGLRenderer;
const canvas: Ref<HTMLCanvasElement | null> = ref(null);

const { width, height } = useWindowSize();
const aspectRatio = computed(() => 1 / 1);

const scene = new Scene();

const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
camera.position.set(0, 0, 0.6);
camera.lookAt(0, 50, 0);

scene.add(camera);

const intensity = 0.5;
// const lightColor = new Color("rgb(6, 219, 149)");
const lightColor = new Color("rgb(6, 255, 255)");

const directionalLight = new DirectionalLight(lightColor, 0.8);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

const above = new SpotLight(lightColor, intensity);
above.position.set(0, 1, 0);
scene.add(above);

const below = new SpotLight(lightColor, intensity);
below.position.set(0, -1, 0);
scene.add(below);

const left = new SpotLight(lightColor, intensity);
left.position.set(-1, 0, 0);
scene.add(left);

const right = new SpotLight(lightColor, intensity);
right.position.set(1, 0, 0);
scene.add(right);

const behind = new SpotLight(lightColor, intensity);
behind.position.set(0, 0, -1);
scene.add(behind);

const front = new SpotLight(lightColor, intensity);
front.position.set(0, 0, 1);
scene.add(front);

const aboveLeft = new SpotLight(lightColor, intensity);
aboveLeft.position.set(-1, 1, 0);
scene.add(aboveLeft);

const aboveRight = new SpotLight(lightColor, intensity);
aboveRight.position.set(1, 1, 0);
scene.add(aboveRight);

const belowLeft = new SpotLight(lightColor, intensity);
belowLeft.position.set(-1, -1, 0);
scene.add(belowLeft);

const belowRight = new SpotLight(lightColor, intensity);
belowRight.position.set(1, -1, 0);
scene.add(belowRight);

const aboveBehind = new SpotLight(lightColor, intensity);
aboveBehind.position.set(0, 1, -1);
scene.add(aboveBehind);

const aboveFront = new SpotLight(lightColor, intensity);
aboveFront.position.set(0, 1, 1);
scene.add(aboveFront);

const belowBehind = new SpotLight(lightColor, intensity);
belowBehind.position.set(0, -1, -1);
scene.add(belowBehind);

const belowFront = new SpotLight(lightColor, intensity);
belowFront.position.set(0, -1, 1);
scene.add(belowFront);

const leftBehind = new SpotLight(lightColor, intensity);
leftBehind.position.set(-1, 0, -1);
scene.add(leftBehind);

const leftFront = new SpotLight(lightColor, intensity);
leftFront.position.set(-1, 0, 1);
scene.add(leftFront);

const rightBehind = new SpotLight(lightColor, intensity);
rightBehind.position.set(1, 0, -1);
scene.add(rightBehind);

const rightFront = new SpotLight(lightColor, intensity);
rightFront.position.set(1, 0, 1);
scene.add(rightFront);

const gltfLoader = new GLTFLoader();

let model;

let size = props.size || 300;

try {
  gltfLoader.load("/models/scene.glb", (gltf) => {
    model = gltf.scene;
    scene.add(model);
    model.position.set(0, 0, 0);
    // console.log(model);
  });
} catch (err) {
  console.error(err);
}

function animate() {
  if (model) {
    if (props.speedY) {
      model.rotation.y += props.speedY;
    }
    if (props.speedX) {
      model.rotation.x += props.speedY;
    }
  }
}

function updateCamera() {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}

function updateRenderer() {
  renderer.setSize(size, size);
  renderer.render(scene, camera);
}

function setRenderer() {
  if (canvas.value) {
    setOrbitControls();
    renderer = new WebGLRenderer({ canvas: canvas.value });
    renderer.setClearColor(0x242424, 0); // the default
    updateRenderer();
  }
}

const setOrbitControls = () => {
  const controls = new OrbitControls(camera, canvas.value);
  controls.enableDamping = true;
  controls.enableZoom = true;
};

watch(aspectRatio, () => {
  updateCamera();
  updateRenderer();
});

onMounted(() => {
  setRenderer();
  loop();
  // console.log('cubeSize', cubeSize)
});

const loop = () => {
  animate();
  updateRenderer();
  requestAnimationFrame(loop);
};

// import { gsap, TimelineMax, Linear } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const imageRowAnim = () => {
//   const imageRowWrapper = imageRow.value;

//   if (imageRowWrapper) {
//     let imageRowAnim = gsap.to(imageRowWrapper, {
//       duration: 2,
//       x: '25%',
//       ease: Linear.ease,
//     });
//     let st = ScrollTrigger.create({
//       trigger: imageRowWrapper,
//       start: "top center",
//       end: "+=500",
//       scrub: 1,
//       animation: imageRowAnim,
//     });
//   }
// };

// onMounted(() => {
//   imageRowAnim();
// });
</script>
