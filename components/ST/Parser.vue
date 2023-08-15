<template>
  <UIImageSwiper
    :data="component"
    v-if="component.__component === 'image.swiper'"
  />
  <UIImageGrid
    :data="component"
    v-if="component.__component === 'image.grid'"
  />
  <UIImageHeader
    :data="component"
    v-if="component.__component === 'image.header'"
  />
  <UIImagePost
    :data="component"
    v-if="component.__component === 'image.post'"
  />
  <UIImagePoster
    :data="component"
    v-if="component.__component === 'image.poster'"
  />
  <UIImageTwin
    :data="component"
    v-if="component.__component === 'image.pair'"
  />
  <UITextMultiline
    :data="component"
    v-if="component.__component === 'text.multiline'"
  />
  <UIVideoFullscreen
    :data="component"
    v-if="component.__component === 'video.fullscreen'"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  component: any;
}>();
</script>

<style scoped></style>
