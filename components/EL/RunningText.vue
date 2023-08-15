<template>
  <div class="running-text-wrapper" ref="runningTextWrapper">
    <UIRunningLine :text="runningContent.text.first" />
    <UIRunningLine :text="runningContent.text.second" />
    <UIRunningLine :text="runningContent.text.third" />
  </div>
</template>

<script lang="ts" setup>
import { gsap, TimelineMax, Linear } from "gsap";

const runningTextWrapper = ref<HTMLElement | null>(null);
const runningContent = ref({
  text: {
    first: "FEARLESS FILMMAKERS",
    second: "VERTICAL TO 16:9",
    third: "FULL PRODUCTION",
  },
  images: {
    cube: "_nuxt/assets/images/format-cube-green.svg",
  },
});

const setupRunningTextAnimation = () => {
  const tickerWrapper = runningTextWrapper.value;
  let time = 140;
  const directionForw = -1;
  const directionBackw = 1;
  let counter = 1;

  for (let ticker of tickerWrapper.children) {
    let list = ticker.children[0];
    let clonedList = ticker.children[1];

    let listWidth = 0;
    time += 50;

    for (let listEl of ticker.children) {
      listWidth += listEl.offsetWidth;
    }

    let endPos = ticker.offsetWidth - listWidth;

    clonedList.style.width = listWidth + "px";
    clonedList.classList.add("cloned");
    list.before(clonedList);

    //TimelineMax
    let infinite = new TimelineMax({ repeat: -1, paused: true });

    infinite
      .fromTo(
        list,
        time,
        { rotation: 0, x: 0 },
        {
          force3D: true,
          x: listWidth * directionForw,
          ease: Linear.easeNone,
        },
        0
      )
      .fromTo(
        clonedList,
        time,
        { rotation: 0, x: listWidth * directionBackw },
        { force3D: true, x: 0, ease: Linear.easeNone },
        0
      )
      .set(list, {
        force3D: true,
        rotation: 0,
        x: listWidth * directionBackw,
      })
      .to(
        clonedList,
        time,
        {
          force3D: true,
          rotation: 0,
          x: listWidth * directionForw,
          ease: Linear.easeNone,
        },
        time
      )
      .to(
        list,
        time,
        { force3D: true, rotation: 0, x: 0, ease: Linear.easeNone },
        time
      )
      .progress(1)
      .progress(0)
      .play();

    //Pause/Play
    ticker.addEventListener("mouseenter", function () {
      // infinite.reverse();
    });
    ticker.addEventListener("mouseleave", function () {
      // infinite.play();
    });

    counter *= -1;
  }
};

onMounted(() => {
  setTimeout(() => {
    setupRunningTextAnimation();
  }, 1000);
});
</script>

<style lang="scss" scoped>
.running-text-wrapper {
  width: 1px;
  transform: rotate(-3deg);
}
</style>
