<template>
  <div class="instagram-post">
    <h1>POST</h1>
    <Swiper :slides-per-view="1">
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
.instagram-post {
  @apply border border-red-500 mb-10;

  > .swiper {
    @apply w-96 aspect-[3/4];
    > .swiper-slide {
      @apply w-full aspect-square;
    }
  }
}
</style>
