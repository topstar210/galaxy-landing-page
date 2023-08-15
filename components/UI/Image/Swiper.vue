<template>
  <div class="border border-red-500 mb-10">
    <h1>SWIPER</h1>
    <Swiper :slides-per-view="2.5">
      <SwiperSlide v-for="image in data.images.data" :key="image.id">
        <!-- Alternative: <nuxt-img provider="strapi" :src="image.attributes.url" /> -->
        <UIImageHelperResponsive :data="image" />
      </SwiperSlide>
    </Swiper>
    <!-- <pre>{{ JSON.stringify(data, null, 2) }}</pre> -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();
</script>

<style scoped>
.swiper {
  @apply w-screen aspect-[3/1.5];
  > .swiper-slide {
    @apply w-full aspect-square;
  }
}
</style>
