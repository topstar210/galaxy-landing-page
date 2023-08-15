<template>
  <section class="grid-gallery">
    <h1>GRID</h1>
    <figure class="left-bottom">
      <!-- Alternative: <nuxt-img provider="strapi" :src="data.leftBottom.data.attributes.url" /> -->
      <UIImageHelperResponsive :data="data.leftBottom.data" />
    </figure>
    <figure class="left-top">
      <UIImageHelperResponsive :data="data.leftTop.data" />
    </figure>
    <figure class="right-top">
      <UIImageHelperResponsive :data="data.rightTop.data" />
    </figure>
    <figure class="right-middle">
      <UIImageHelperResponsive :data="data.rightMiddle.data" />
    </figure>
    <figure class="right-bottom">
      <UIImageHelperResponsive :data="data.rightBottom.data" />
    </figure>
    <!-- <pre>{{ JSON.stringify(data, null, 2) }}</pre> -->
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();
</script>

<style scoped>
.grid-gallery {
  @apply border border-red-500 mb-10;

  > .left-bottom {
    @apply w-full h-full;
  }

  > .left-top {
    @apply w-8/12 aspect-auto;
  }

  > .right-top {
    @apply w-96 aspect-auto;
  }

  > .right-middle {
    @apply w-96 aspect-auto;
  }

  > .right-bottom {
    @apply w-96 aspect-auto;
  }
}
</style>
