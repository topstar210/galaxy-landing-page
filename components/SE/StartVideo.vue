<script setup lang="ts"></script>

<template>
  <div class="start-video">
    <div class="video-holder" ref="videoHolder">
      <img src="~/assets/images/the-mission.jpg" alt="Projektbild" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap, TimelineMax, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videoHolder = ref<HTMLElement | null>(null);

const setUpVideoAnimation = () => {
  const videoWrapper = videoHolder.value;

  if (videoWrapper) {
    let videoResize = gsap.to(videoWrapper, {
      duration: 2,
      height: "100vh",
      width: "100vw",
      ease: Linear.ease,
    });
    let st = ScrollTrigger.create({
      trigger: videoWrapper,
      start: "top center",
      end: "+=500",
      // scrub: 1,
      animation: videoResize,
    });
  }
};

onMounted(() => {
  setUpVideoAnimation();
});
</script>

<style lang="scss" scoped>
.start-video {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
.video-holder {
  position: relative;
  width: 20.5vw;
  height: 38.2vw;
  border-radius: 12px;
  overflow: hidden;
  > img,
  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
