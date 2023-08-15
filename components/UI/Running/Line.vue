<template>
  <div class="running-text-line staff-x-wide">
    <div class="list">
      <UIRunningElement :text="text" />
      <UIRunningElement :text="text" />
      <UIRunningElement :text="text" />
    </div>
    <div class="cloned-list list">
      <UIRunningElement :text="text" />
      <UIRunningElement :text="text" />
      <UIRunningElement :text="text" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string;
}>();
</script>

<style lang="scss" scoped>
.running-text-line {
  display: inline; 
}
.cloned-list {
  position: absolute;
}
.list {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding-left: 20px;
}
</style>
