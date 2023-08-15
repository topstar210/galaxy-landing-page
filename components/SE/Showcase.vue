<template>
  <section class="showcase inner-max-width">
   <UITextHeadlineBig
      tag="H2"
      text="IT ALWAYS SEEMS IMPOSSIBLE UNTIL IT’S DONE "
      class="max-w-3xl mb-12"
    />
    <div class="showcase-listing" >
    <template
      v-for="(component, index) in showcases.data.attributes.item"
      :key="index"
    >
      <UIShowcaseProject
        class="project"
        :data="component"
        v-if="component.__component === 'showcase.project'"
      />
      <UIShowcaseArticle
        class="article"
        :data="component"
        v-if="component.__component === 'showcase.article'"
      />
    </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const { find, findOne } = useStrapi<any>();

const showcases = ref<any>();

try {
  showcases.value = await find("showcase", {
    populate: "deep",
  });
} catch (error) {
  console.log(error);
}
</script>

<style lang="scss">
@import "@/assets/css/vars.scss";

.showcase {
  &.inner-max-width {
    @apply py-20;
  }

  &-listing {
    @apply flex flex-wrap justify-between;
    gap: $projectsGap;
  }
}

.showcase-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 15;
}
</style>
