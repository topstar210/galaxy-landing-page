<template>
  <component :is="tag" :class="class" class="sub-headline">{{ text }}</component>
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


.sub-headline {
    font-size: 1.5rem;
    font-family: $mono-font;
    font-weight: $mono-fontweight;
    text-transform: uppercase;
}

@media (max-width: 992px) {
    .sub-headline {
        font-size: 1.2rem;
    }
}

@media (max-width: 768px) {
    .sub-headline {
        font-size: 1rem;
    }
}

@media (max-width: 576px) {
    .sub-headline {
        font-size: 0.8rem;
    }
}

@media (max-width: 400px) {
    .sub-headline {
        font-size: 0.6rem;
    }
}



</style>
