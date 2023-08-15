<template>
  <div
    class="customer"
  >
<nuxt-img provider="strapi" :src="props.data.attributes.Logo.data.attributes.url" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();

</script>

<style scoped lang="scss">
.customer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 30px; 

  > img {
    width: 100%;
    max-width: 120px; 
    max-height: 70px; 

  }
}
</style>
