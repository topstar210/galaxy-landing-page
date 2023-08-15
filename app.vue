<template>
  <div class="bg-black">
    <img
      src="~/assets/imgs/logo-cube.svg"
      class="fixed bottom-10 left-1/2 -translate-x-1/2"
    />
    <h2 class="font-black text-3xl text-white uppercase fixed top-8 left-8">
      format54
    </h2>
    <img src="~/assets/imgs/menu.svg" class="fixed top-5 right-8 invert w-10 cursor-pointer" />
    <div class="flex items-center justify-center h-screen relative">
      <img src="~/assets/imgs/logo.svg" />
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div class="w-8 h-14 border-2 border-white rounded-full">
          <span
            class="block w-1 h-4 bg-white rounded-full absolute left-1/2 -translate-x-1/2 bottom-2 animate-move"
          ></span>
        </div>
      </div>
    </div>
    <div ref="galaxy" class="w-full overflow-hidden" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const galaxy = ref(null);
const radius = ref(2);
const outsideColor = ref("rgb(172, 47, 149)");

onMounted(() => {
  // Scene
  const scene = new THREE.Scene();

  // Galaxy
  const parameters = {};
  parameters.count = 203000;
  parameters.size = 0.05;
  parameters.branches = 2;
  parameters.spin = 2;
  parameters.randomness = 2;
  parameters.randomnessPower = 5;
  parameters.insideColor = "#e4dfdd";
  // parameters.outsideColor = "#eb3700"; // first time color is #ac2f95

  let geometry = null;
  let material = null;
  let points = null;

  const generateGalaxy = () => {
    parameters.radius = radius.value;
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
      const branchAngle =
        ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

      const randomY =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);
      const randomZ =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);
      const randomX =
        Math.pow(Math.random(), parameters.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);

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

  generateGalaxy();

  // Globe Stars

  const loader = new THREE.TextureLoader();
  const texture = loader.load("./star.png");
  const randomPointSphere = (radius) => {
    let theta = 2 * Math.PI * Math.random();
    let phi = Math.acos(2 * Math.random() - 1);
    let dx = 0 + radius * Math.sin(phi) * Math.cos(theta);
    let dy = 0 + radius * Math.sin(phi) * Math.sin(theta);
    let dz = 0 + radius * Math.cos(phi);
    return [dx, dy, dz];
  };

  const createStars = (texture, size, total) => {
    let pointGeometry = new THREE.BufferGeometry();
    let pointMaterial = new THREE.PointsMaterial({
      size: size * 0.05,
      color: 0xffffff,
      map: texture,
      blending: THREE.AdditiveBlending,
    });

    let vertices = [];
    for (let i = 0; i < total; i++) {
      let radius = THREE.MathUtils.randInt(30, 25);
      let particles = randomPointSphere(radius);
      vertices.push(...particles);
    }
    pointGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(vertices), 3)
    );
    return new THREE.Points(pointGeometry, pointMaterial);
  };

  scene.add(createStars(texture, 15, 1000));

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

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

  // Camera
  const camera = new THREE.PerspectiveCamera(
    55,
    sizes.width / sizes.height,
    0.01,
    1000
  );

  camera.position.set(-30, 30, 20);
  camera.lookAt(0, 0, 0);
  scene.add(camera);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  galaxy.value.appendChild(renderer.domElement);

  // Animate
  const clock = new THREE.Clock();

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enableZoom = true;
  controls.revert = true;
  controls.addEventListener("change", (e) => {
    const distance = controls.target.distanceTo(controls.object.position);
    const radio = 5 / 130;
    //     const outsideColor = ref("rgb(172, 47, 149)");
    // 235,55,0

    let red, green, blue;
    if (distance > 20) {
      red = Math.floor(((130 - distance) * 63) / 110 + 172);
      green = Math.floor(((130 - distance) * 8) / 110 + 47);
      blue = Math.floor(((distance - 130) * 149) / 110 + 149);
      outsideColor.value = `rgb(${red},${green},${blue})`;
    }
    radius.value = (130 - distance) * radio + 2;
    generateGalaxy();
  });

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    points.rotation.y = elapsedTime * 0.05;
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
  };

  tick();
});
</script>

<style>
body {
  margin: 0;
}
</style>
