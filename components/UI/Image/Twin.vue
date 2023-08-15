<template>
      <h1>TWIN</h1>
  <div class="twin">
    <figure class="left">
      <!-- Alternative: <nuxt-img provider="strapi" :src="data.leftBottom.data.attributes.url" /> -->
      <UIImageHelperResponsive :data="data.left.data" />
    </figure>
    <figure class="left">
      <!-- Alternative: <nuxt-img provider="strapi" :src="data.leftBottom.data.attributes.url" /> -->
      <UIImageHelperResponsive :data="data.right.data" />
    </figure>
    <!-- <pre>{{ JSON.stringify(data, null, 2) }}</pre> -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();
</script>

<style scoped>

.twin {
  @apply border border-red-500 mb-10 flex;

  > .left {
    @apply w-1/2 h-full;
  }

  > .right {
    @apply w-1/2 h-full;
  }
}

</style>
