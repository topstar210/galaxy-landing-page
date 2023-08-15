<template>
  <nav>
    <img src="~/assets/images/ci/logo.svg" alt="Logo" />
    <UINavTrigger />
  </nav>

  <img class="cube" src="~/assets/images/ci/cube.svg" alt="format 54 cube" />
</template>

<script setup lang="ts">
const navStore = useNavStore();
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

img.cube {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
}
</style>
