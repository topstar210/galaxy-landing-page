<script setup lang="ts"></script>

<template>
  <section class="the-vision inner-max-width">
    <UIDecorationGrid class="bg-grid-holder">
      <div class="text-holder">
        <UITextHeadlineSub tag="H3" text="The Vision" class="" />
        <UITextHeadlineBig
          tag="H2"
          text="CREATE THE UNEXPECTED"
          class="max-w-3xl"
        />
        <UITextParagraphDefault class="max-w-2xl mt-4">
          Dranbleiben, wo andere die Nerven verlieren. Mehr erwarten und der
          eigenen Intuition vertrauen. In einer Welt, die alles kennt, aufs Neue
          überraschen. FORMAT 54 bringt Menschen zusammen, die genau das wollen:
          den Bruch mit dem Gewöhnlichen. Mal laut, mal leise. Und immer
          berührend.
        </UITextParagraphDefault>
      </div>
      <ClientOnly>
        <UIDecorationCube :speedX="0.002" :speedY="-0.0003" class="cube-left"/>
      </ClientOnly>

      <div class="image-row" ref="imageRow">
        <div class="image-holder">
            <img src="@/assets/images/format-am-set-1.jpg" alt="Format 54 am Set">
        </div>
        <div class="image-holder">
            <img src="@/assets/images/auf-der-rennstrecke.jpg" alt="Format 54 am Set">
        </div>
        <div class="image-holder">
            <img src="@/assets/images/format-am-set-2.jpg" alt="Format 54 am Set">
        </div>
      </div>

    </UIDecorationGrid>
  </section>
</template>

<script lang="ts" setup>
import { gsap, TimelineMax, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imageRow = ref<HTMLElement | null>(null);

const imageRowAnim = () => {
  const imageRowWrapper = imageRow.value;

  if (imageRowWrapper) {
    let imageRowAnim = gsap.to(imageRowWrapper, {
      duration: 2,
      x: '25%',
      ease: Linear.ease,
    });
    let st = ScrollTrigger.create({
      trigger: imageRowWrapper,
      start: "top center",
      end: "+=500",
      scrub: 1,
      animation: imageRowAnim,
    });
  }
};

onMounted(() => {
  imageRowAnim();
});
</script>

<style lang="scss" scoped>
$spacing: 30px;

.the-vision {
  position: relative;
  padding-top: 20px;
  padding-bottom: 70px;
  margin: 40px 0;
  // border: .5px solid rgba(255,255,255,.2);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .bg-grid-holder {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column; 
    height: 100%;
    position: relative;
    padding: 4rem 0;

    .cube-left {
        position: absolute; 
        bottom: 3rem; 
        left: 0; 
        transform: translate(-30%, 0);

    }
  }

  .text-holder {
    padding: 0 3rem ; 
  }

  .text-upper-left {
    position: absolute;
    top: $spacing;
    left: $spacing;
  }
  .text-down-right {
    position: absolute;
    bottom: $spacing;
    right: $spacing;
  }
}
$spacing: 15px; 
.image-row {
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    position: relative;
    z-index: 10; 
    margin-top: 4rem;
    transform: translate(20%, 0);

    .image-holder {
        width: calc(33.333% - #{$spacing * 2});
        margin: $spacing;
        border-radius: 10px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
