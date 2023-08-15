<template>
  <section class="customer-section">
    <Swiper
    :slides-per-view="5"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
    :loop="true"
    >
      <SwiperSlide
        v-for="(component, index) in customers.data"
        :key="index"
        class="fm54-slide"
      >
        <!-- Alternative: <nuxt-img provider="strapi" :src="image.attributes.url" /> -->
        <UICustomerLogo :data="component" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
const { find, findOne } = useStrapi<any>();

const customers = ref<any>();

try {
  customers.value = await find("customers", {
    populate: "deep",
  });
} catch (error) {
  console.log(error);
}




</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";

.customer-section {
  @apply pt-12 pb-12;
}

.fm54-slide {
  @apply flex justify-center items-center;
  height: initial;
}
</style>
