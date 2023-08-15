<script setup lang="ts"></script>

<template>
  <div class="showreel">
    <img src="~/assets/images/showreel-poster.jpg" alt="Showreel Poster" class="showreel-poster">
    <span class="showreel-text">Showreel</span>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.showreel-poster {
    width: 100%;
}

.showreel {
    position: relative;

}

.showreel-text {
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%,-50%);
    z-index: 10; 
    font-size: 7vw; 
    font-family: $headline-font;
    font-weight: $headline-fontweight;
    text-transform: uppercase;
    // text-shadow: 0 0 0 1px #fff; 
    color: transparent; 
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
}



</style>
