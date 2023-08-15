<template>
  <div class="border border-red-500 mb-10">
    <h1>FULLSCREEN</h1>
    <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();
</script>

<style scoped></style>
