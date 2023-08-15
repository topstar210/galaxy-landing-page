<template>
  <div
    class="multiline"
    :class="{
      west: data.textPosition === 'west',
      eastWest: data.textPosition === 'eastWest',
      east: data.textPosition === 'east',
      southEast: data.textPosition === 'southEast',
      south: data.textPosition === 'south',
      southWest: data.textPosition === 'southWest',
      northWest: data.textPosition === 'northWest',
      center: data.textPosition === 'center',
    }"
  >
    <STMarkdown
      :class="{
        normal: data.textSize === 'normal',
        big: data.textSize === 'big',
      }"
      :file="data.text"
    />
    <!-- <pre>{{ JSON.stringify(data, null, 2) }}</pre> -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();

console.log(props.data);
</script>

<style scoped>
.multiline {
  @apply border border-red-500 mb-10;

  &.west {
    @apply bg-red-500;
  }

  &.eastWest {
    @apply bg-blue-500;
  }

  &.east {
    @apply bg-green-500;
  }

  &.southEast {
    @apply bg-yellow-500;
  }

  &.south {
    @apply bg-purple-500;
  }

  &.southWest {
    @apply bg-pink-500;
  }

  &.northWest {
    @apply bg-indigo-500;
  }

  &.center {
    @apply bg-gray-500;
  }
}

.normal {
  @apply text-xl;
}

.big {
  @apply text-4xl;
}
</style>
