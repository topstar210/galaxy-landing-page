<template>
  <!-- 
 -->
  <div class="showcase-view" :class="'showcase-view__size-' + props.data.size">
    <div @click="openModal">
      <div class="showcase-view__image">
        <UITagsSimple class="showcase-tag" text="Artikel" />

        <UIImageHelperResponsive
          :data="props.data.article.data.attributes.image.data"
        />
      </div>
      <div class="showcase-view__text">
        <UITextHeadlineDefault
          tag="H3"
          :text="props.data.article.data.attributes.title"
          class="text-xl"
        />

        <UITextParagraphDefault class="max-w-3xl">
          {{ props.data.article.data.attributes.subtitle }}
        </UITextParagraphDefault>
      </div>
    </div>

    <UIModalArticle
      v-if="open"
      @close="closeModal"
      :data="props.data.article.data.attributes"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();

const open = ref(false);

const openModal = () => {
  open.value = true;
  if (!process.client) return;
  document.body.classList.add("overflow-hidden");
};

const closeModal = () => {
  open.value = false;
  if (!process.client) return;
  document.body.classList.remove("overflow-hidden");
};
</script>

<style scoped  lang="scss">
@import "@/assets/css/vars.scss";

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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
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
  }
  &__text {
    display: flex;
    flex-direction: column;
  }
}


</style>
