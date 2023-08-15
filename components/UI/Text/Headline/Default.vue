<template>
  <component :is="tag" :class="class">{{ text }}</component>
</template>

<script lang="ts" setup>
enum HeadingTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  DIV = 'div'
}
const props = defineProps<{
  text: string;
  tag: HeadingTag;
  class?: string;
}>();
</script>

<style lang="scss" scoped>


</style>
