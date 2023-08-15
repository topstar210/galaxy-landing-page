<script setup lang="ts"></script>

<template>
  <div class="inner-max-width">
    <div class="bwords">
      <ClientOnly>
        <UIDecorationCube :speedX="0.003" :speedY="0.001" :size="800"/>
      </ClientOnly>
      <span class="block font-mono text-xxl mono-big-line">Independent</span>
      <span class="block font-mono text-xxl mono-big-line">Agile</span>
      <span class="block font-mono text-xxl mono-big-line">Purpose Driven</span>
      <span class="block font-mono text-xxl mono-big-line">Focused</span>
      <div class="q-grid-white-wrapper top-left">
        <img
          src="~/assets/images/grid-quadrat.svg"
          alt="Quadrat Grid aus weißen Linien"
          class="q-grid-white"
        />
        
      </div>
      <div class="q-grid-white-wrapper bottom-right">
        <img
          src="~/assets/images/grid-quadrat.svg"
          alt="Quadrat Grid aus weißen Linien"
          class="q-grid-white"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.inner-max-width {
    margin-top: 50px;
    margin-bottom: 50px; 
}

.mono-big-line {
  font-size: 8vw;
  text-transform: uppercase;
  font-family: $mono-font;
  font-weight: 200;
  text-align: center;
  line-height: 1;
}

$gridLinesMargin: 20%;

.bwords {
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
  .cube {
    top: 50%; 
    left: 50%;
    z-index: -1;
    position: absolute;
    transform: translate(-50%, -50%);
    opacity: .95;

  }
  .q-grid-white-wrapper {
    position: absolute;
    width: 15vw;
    height: auto;
    z-index: -2;
    &.top-left {
      top: 0;
      left: $gridLinesMargin;

      .cube {
        bottom: 0; 
        left: 0;
      }
    }
    &.bottom-right {
      bottom: 0;
      right: $gridLinesMargin;

      .cube {
        bottom: 0; 
        right: 0;
      }
    }

    .cube {
        position: relative;
        
        transform: translate(-50%, -50%);
        opacity: .95;
    }
  }
  .q-grid-white {
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }
}
</style>
