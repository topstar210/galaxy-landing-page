<template>
  <nuxt-img provider="strapi" :src="src" />
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);

const sm = breakpoints.smallerOrEqual("sm");
const md = breakpoints.smallerOrEqual("md");
const lg = breakpoints.smallerOrEqual("lg");
const xl = breakpoints.smallerOrEqual("xl");
const xxl = breakpoints.smallerOrEqual("2xl");

const props = defineProps<{
  data: any;
  thumbnail?: boolean;
}>();

const src = computed(() => {
  const img = props.data.attributes;

  const thumbnail = img.formats.thumbnail ?? false;
  const small = img.formats.small ?? false;
  const medium = img.formats.medium ?? false;
  const large = img.formats.large ?? false;

  if (sm.value && thumbnail) {
    return img.formats.thumbnail.url;
  } else if (md.value && small) {
    return img.formats.small.url;
  } else if (lg.value && medium) {
    return img.formats.medium.url;
  } else if (xl.value && large) {
    return img.formats.large.url;
  } else if (xxl.value) {
    return img.url;
  } else {
    return img.url;
  }
});
</script>

<style scoped>
img {
  @apply w-full h-full object-cover;
}
</style>
