<template>
  <button
    @click="isOpen = !isOpen"
    type="button"
    class="flex  items-center justify-center p-2 text-gray-100 transition-colors duration-200 rounded-md hover:text-gray-400 focus:outline-none focus:text-gray-400"
  >
    <span class="sr-only">Toggle Menu</span>
    <div class="h-0.5 w-full bg-current transform transition-all duration-300"
         :class="{ 'rotate-45 translate-y-3': isOpen }"></div>

    <div class="h-0.5 w-full bg-current transform transition-all duration-300"
         :class="{ '-rotate-45 translate-y-0': isOpen }"></div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
button {
    flex-direction: column;
    height: 30px;
    width: 50px;
    justify-content: space-between;  
}
</style>
