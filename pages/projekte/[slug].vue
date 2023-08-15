<template>
  <STParser
    v-for="component in data[0].attributes.components"
    :key="data[0].id"
    :component="component"
  />
</template>

<script setup lang="ts">
const route = useRoute();
const { findOne } = useStrapi<any>();
const { data }: any = await findOne("projects", {
  filters: { slug: route.params.slug }, // filter for slug, instead of id. gives more freedom of naming the url.
  populate: "deep", // must be set, otherwise the response only contains the first data-level. populate deep lets us access the nested data.
});
</script>

<style scoped></style>
