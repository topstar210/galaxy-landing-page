<template>
  
  
  <NuxtLink v-if="link" :to="link" class="tag">
    <div class="project-tag tag" :class="class">
        {{ text }}
    </div>
  </NuxtLink>
  <div v-if="!link" class="project-tag tag" :class="class">
        {{ text }}
    </div>

</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string;
  link?: string;
  class?: string;
}>();
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';


  .project-tag {
    @apply text-lg font-mono uppercase bg-white text-black px-4 py-2 inline-block;
    border-radius: 50px;
    font-family: $mono-font;

  }

</style>
