<template>
  <div :class="class" class="fm54-bg-grid">
    <div class="fm54-grid-wrapper">
      <div class="fm54-grid-lines fm54-grid-vertical" ref="verticalLineWrapper">
        <div class="fm54-grid-line" v-for="index in width" :key="index"></div>
      </div>
      <div
        class="fm54-grid-lines fm54-grid-horizontal"
        ref="horizontalLineWrapper"
      >
        <div class="fm54-grid-line" v-for="index in height" :key="index"></div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  class?: string;
  width?: number;
  height?: number;
}>();

let width = props.width || 20;
let height = props.height || 20;

import { gsap, TimelineMax, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const verticalLineWrapper = ref<HTMLElement | null>(null);
const horizontalLineWrapper = ref<HTMLElement | null>(null);

const linesAnimation = () => {
  if (!process.client) return;

  let verticalLineWrappers = document.querySelectorAll(".fm54-grid-vertical");
  let horizontalLineWrappers = document.querySelectorAll(
    ".fm54-grid-horizontal"
  );

  verticalLineWrappers.forEach((wrapper, i) => {
    let lines = wrapper.querySelectorAll(".fm54-grid-line");
    lines.forEach((line, i) => {
      gsap.set(line, {
        scaleY: 0,
      });
    });

    let anim = gsap.to(lines, {
      duration: 1,
      stagger: 0.05,
      scaleY: 1,
      ease: Linear.ease,
    });

    let st = ScrollTrigger.create({
      trigger: lines[0],
      start: "top center",
      end: "+=300",
      onEnter: () => anim.play(),
      onLeaveBack: () => anim.reverse(),
    });
  });
  horizontalLineWrappers.forEach((wrapper, i) => {
    let lines = wrapper.querySelectorAll(".fm54-grid-line");
    lines.forEach((line, i) => {
      gsap.set(line, {
        scaleX: 0,
      });
    });

    let anim = gsap.to(lines, {
      duration: 1,
      stagger: 0.05,
      scaleX: 1,
      ease: Linear.ease,
    });

    let st = ScrollTrigger.create({
      trigger: lines[0],
      start: "top center",
      end: "+=200",
      onEnter: () => anim.play(),
      onLeaveBack: () => anim.reverse(),
    });
  });
};

onMounted(() => {
  linesAnimation();
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.fm54-bg-grid {
  width: 100%;
  position: relative;
  // padding: 12rem 0;
}
.fm54-grid-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.fm54-bg-grid .fm54-grid-lines {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &.fm54-grid-horizontal {
    flex-direction: column;
  }
}

.fm54-grid-lines.fm54-grid-horizontal .fm54-grid-line {
  width: 100%;
  height: 1px;
  background-color: $text;
  opacity: 0.1;
}
.fm54-grid-lines.fm54-grid-vertical .fm54-grid-line {
  width: 1px;
  height: 100%;
  background-color: $text;
  opacity: 0.1;
}
</style>
