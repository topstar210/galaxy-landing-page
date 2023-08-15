<template>
  <NuxtLink class="showcase-view"
  :to="`/projekte/${props.data.project.data.attributes.slug}`"
  :class="'showcase-view__size-' + props.data.size"
  >
    <div class="showcase-view__image">
      <UITagsSimple text="Projekt" class="showcase-tag" />
      <UIImageHelperResponsive
        :data="props.data.project.data.attributes.image.data"
      />
    </div>
    <div class="showcase-view__text">
      <UITextHeadlineDefault tag="H3" :text="props.data.project.data.attributes.title" class="text-xl" />
      <UITextParagraphDefault class="max-w-3xl">
        {{ props.data.project.data.attributes.subtitle }}
      </UITextParagraphDefault>
    </div>
  </NuxtLink>

</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();

</script>

<style scoped lang="scss">
@import '@/assets/css/vars.scss';

.showcase-view {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    max-width: 100%;
    height: 100%;
    max-height: 100%;


    &__size-xl {
        width: calc(55% - #{$projectsGap});
    }
    &__size-lg {
        width: calc(45% - #{$projectsGap});
    }
    &__size-base {
        width: calc(25% - #{$projectsGap});
    }
    &__size-sm {
        width: calc(20% - #{$projectsGap});
    }

    > div {
      width: 100%;
    }


    &__image {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding-bottom: 70%;
        border-radius: 12px; 
        img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0; 
            left: 0;
            object-fit: cover;
            object-position: center;
        }
        a.tag {
            position: absolute;
            top: 1rem;
            left: 1rem;
            z-index: 10; 
        }
    }
    &__text {
        display: flex;
        flex-direction: column;
    }
}
</style>
