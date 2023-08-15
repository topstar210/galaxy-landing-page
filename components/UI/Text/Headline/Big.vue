<template>
  <component :is="tag" :class="class" class="big-headline">{{ text }}</component>
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
@import '@/assets/css/vars.scss';


.big-headline {
    font-size: 3.5rem;
    line-height: 1.1;
    font-family: $headline-font;
    font-weight: $headline-fontweight;
    text-transform: uppercase; 
}

@media (max-width: 992px) {
    .big-headline {
        font-size: 3rem;
    }
}
@media (max-width: 768px) {
    .big-headline {
        font-size: 2.5rem;
    }
}
@media (max-width: 576px) {
    .big-headline {
        font-size: 2rem;
    }
}
@media (max-width: 400px) {
    .big-headline {
        font-size: 1.5rem;
    }
}

</style>
