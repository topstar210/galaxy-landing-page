<template>
  <p :class="class">
    <slot></slot>
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  class?: string;
}>();
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';

p {
  font-size: 1rem;
  font-family: $text-font;
  opacity: .8;
}
</style>