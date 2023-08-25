<template>
  <div>
    <div
      class="cube-container relative w-full h-screen flex items-center justify-center"
    >
      <p
        class="absolute translate-y-[-100px] help-text-1 text-3xl text-white font-medium z-10 opacity-0"
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
        Kein Bock auf langweilige Werbefilme? Wir auch nicht. Hi, wir sind
        FORMAT 54.
      </p>
      <div
        class="absolute cube1 pointer-events-none bg-[#5C5C5C] w-64 h-64 rotate-[30deg]"
      ></div>
      <div
        class="absolute cube2 pointer-events-none bg-[#5C5C5C] w-64 h-64 rotate-[30deg]"
      ></div>
      <div
        class="absolute cube3 pointer-events-none bg-[#5C5C5C] w-64 h-64 rotate-[30deg]"
      ></div>
      <div
        class="absolute cube4 pointer-events-none bg-[#5C5C5C] w-64 h-64 rotate-[30deg]"
      ></div>
      <div
        class="absolute cube5 pointer-events-none bg-[#5C5C5C] w-40 h-40 rotate-[30deg]"
      ></div>
      <div
        class="absolute cube6 pointer-events-none bg-[#5C5C5C] w-40 h-40 rotate-[30deg]"
      ></div>
      <div
        class="absolute cube7 pointer-events-none bg-[#5C5C5C] w-40 h-40 rotate-[30deg]"
      ></div>
      <div
        class="absolute cube8 pointer-events-none bg-[#5C5C5C] w-40 h-40 rotate-[30deg]"
      ></div>
      <div
        class="absolute cube9 pointer-events-none bg-[#5C5C5C] w-40 h-40 rotate-[30deg]"
      ></div>
      <div
        class="absolute cube10 pointer-events-none bg-[#5C5C5C] w-40 h-40 rotate-[30deg]"
      ></div>
    </div>
    <div class="w-scree h-[1000vh]"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
let breakPoint = 800;
let mm = gsap.matchMedia();

onMounted(() => {
  mm.add(
    {
      isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
      isMobile: `(max-width: ${
        breakPoint - 1
      }px) and (prefers-reduced-motion: no-preference)`,
    },
    (context: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cube-container",
          scrub: 0.5,
          end: "+=900%",
          pin: true,
          pinSpacing: false,
        },
      });

      tl.to(".help-text-1", { y: -50, opacity: 1, duration: 0.5, delay: 1 })
        .to(".help-text-2", { y: 0, opacity: 1, duration: 0.5, })
        .to(".help-text-2", { y: 100, opacity: 0, duration: 0.5, delay: 1 })
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

      // gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: ".cube-container",
      //       scrub: 1,
      //       pin: true,
      //       pinSpacing: false,
      //     },
      //   })
      //   .from(".help-text-1", { y: -30, opacity: 0, duration: 1 })
      //   .from(".help-text-2", {
      //     y: 40,
      //     opacity: 0,
      //     ease: "back",
      //     duration: 1,
      //   });

      // gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: ".cube-container",
      //       scrub: 1,
      //       pin: true,
      //       pinSpacing: false,
      //     },
      //   })
      //   .from(".help-text-3", { x: -400, opacity: 0, duration: 1 })
      //   .from(
      //     ".help-text-4",
      //     { x: -200, opacity: 0, ease: "back", duration: 1 },
      //     "<1"
      //   )
      //   .to(".help-text-3", { x: 1920, opacity: 0, duration: 1 })
      //   .to(".help-text-4", { x: -1000, opacity: 0, duration: 1 }, "-=1");

      return () => {};
    }
  );
});
</script>

<style scoped>
* {
  font-family: "t26-carbon", monospace;
}
</style>
