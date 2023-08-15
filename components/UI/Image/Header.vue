<template>
  <section class="header">
    <h1>HEADER</h1>
    <figure>
      <!-- Alternative: <nuxt-img provider="strapi" :src="data.image.data.attributes.url" /> -->
      <UIImageHelperResponsive :data="data.image.data" />      
    </figure>
    <!-- <pre>{{ JSON.stringify(data.image, null, 2) }}</pre> -->
    <h1>{{ data.headline }}</h1>
    <h1 v-if="data.headline2">{{ data.headline2 }}</h1>
    <p v-if="data.textBottomLeft">{{ data.textBottomLeft }}</p>
    <p v-if="data.textBottomRight">{{ data.textBottomRight }}</p>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();
</script>

<style scoped>
.header {
  @apply border border-red-500 mb-10;

  > figure {
    @apply w-screen h-screen;
  }
}
</style>
