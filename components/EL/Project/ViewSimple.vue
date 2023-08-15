<template>

    <div class="project-view" :class="'project-view__size-' + props.size" >
        <div class="project-view__image">
            <UITagsSimple :text="tagText" :link="tagLink" />
            <img src="~/assets/images/the-mission.jpg" alt="Projektbild" />
        </div>
        <div class="project-view__text">
            <UITextHeadlineDefault tag="H3" :text="title" class="text-xl" />
            <UITextParagraphDefault class="max-w-3xl"> {{categories}} </UITextParagraphDefault>
        </div>

    </div>


</template>

<script lang="ts" setup>
enum size {
  xl = 'xl',
  lg = 'lg',
  base = 'base',
  sm = 'sm',
}

const props = defineProps<{
  image: string; 
  tagText: string;
  tagLink: string;
  title: string;
  categories: string;
  size: size;
}>();
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';

.project-view {
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
