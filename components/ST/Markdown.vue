<template>
  <div v-html="$mdRenderer.render(parsedMarkdown)" />
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const props = defineProps<{
  file: string;
}>();

const parsedMarkdown = computed(() => {
  const setImageUrl = props.file
    .split("/uploads/")
    .join(`${runtimeConfig.public.STRAPI_URL}/uploads/`);
  return setImageUrl;
});
</script>

<style scoped>

div {
  @apply flex flex-col justify-start items-start gap-5
}

:deep(h2) {
  @apply text-3xl;
}

:deep(img) {
  @apply max-w-xs;
}
</style>
