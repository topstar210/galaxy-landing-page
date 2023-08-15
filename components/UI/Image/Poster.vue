<template>
  <div class="poster">
    <h1>POSTER</h1>
    <figure class="background">
      <UIImageHelperResponsive :data="data.background.data" />
    </figure>
    <figure class="top">
      <UIImageHelperResponsive :data="data.top.data" />
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
.poster {
  @apply border border-red-500 mb-10;

  > .background {
    @apply w-screen aspect-[3/5];
  }

  > .top {
    @apply w-96 aspect-[3/4];
  }
}
</style>
