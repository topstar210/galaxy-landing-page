<template>
  <div class="modal">
    <div @click="emit('close')" class="modal-background"></div>
    <div class="modal-content">
    <!-- <pre>
      {{ data }}
    </pre> -->
      <NuxtImage :src="data.image.data" :alt="data.title" class="w-full h-96 object-cover" />    
      <UITextHeadlineDefault class="modal-headline text-3xl" tag="h3" :text="data.title" />
      <UITextHeadlineDefault class="subtitle" tag="div" :text="data.subtitle" />
      <STMarkdown :file="data.body" />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  close: () => void;
}>();

const props = defineProps<{
  data: any;
}>();
</script>
 
<style scoped lang="scss">
@import '@/assets/css/vars.scss';

.modal {
  @apply flex flex-col justify-end items-end gap-5 fixed bottom-0 right-0 w-full h-full z-50;
}

.modal-content {
  @apply bg-white fixed w-8/12 h-5/6 z-50 p-10 overflow-y-scroll;
  color: #000;
  border-radius: 30px 0 0 0 ; 
  bottom: 0; 
  right: 0; 
}

.modal-background {
  @apply bg-black w-full h-full fixed top-0 left-0 opacity-60;
}


.modal-headline {
  font-family: $mono-font;
}

</style>
