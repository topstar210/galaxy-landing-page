<template>
  <div class="running-text-line-element">
    <img
      src="~assets/images/format-cube-green.svg"
      alt="Format 54 Cube Green"
    />
    <span>{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string;
}>();
</script>

<style lang="scss" scoped>

.running-text-line-element {
        display: flex;
        align-items: center;

    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      margin-right: 40px;
      margin-left: 110px;
    }

    span {
      white-space: nowrap;
      font-size: 90px;
      font-weight: 700;
      color: #fff;
      margin-right: 1rem;
    }

}

</style>
