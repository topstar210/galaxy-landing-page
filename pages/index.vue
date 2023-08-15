<template>
  <SEGalaxy />
  <SEStartVideo />
  <SEWhatWeDo />
  <SETheMission />
  <!-- <SEShowcase />  -->
  <SEBuzzWords />
  <SEShowreel />
  <!-- <SECustomers /> -->
  <SETheVision />

</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "@/assets/css/main.scss";
h1 {
  color: $primary;
}
div {
  h1 {
    @apply text-4xl;
  }
}
.galaxy-container {
  width: 100%;
  height: 100vh;
}

body {
  overflow-x: hidden; 
  text-rendering: geometricPrecision;

}
body.overflow-hidden {
  overflow: hidden; 
}

.inner-max-width {
  max-width: 1820px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 1560px) {
  .inner-max-width {
    padding: 0 40px;
    max-width: 1450px;
  }
}

@media (max-width: 1350px) {
  .inner-max-width {
    padding: 0 30px;
  }
}

@media (max-width: 768px) {
  .inner-max-width {
    padding: 0 20px;
  }
}
</style>
