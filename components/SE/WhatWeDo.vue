<script setup lang="ts">
</script>

<template>

  <div class="what-we-do inner-max-width">
  <UIDecorationGrid class="bg-grid-holder">
  <!--  <img
      src="~assets/images/grid-lines.svg"
      alt="Format 54 Logo"
      class="bg-grid"
    /> -->

    <div class="text-upper-left t-n uppercase carbon">What We Do</div>
    <ELRunningText/>
    <div class="text-down-right t-n uppercase carbon">What We Do</div>
  </UIDecorationGrid>
  </div>


</template>

<script lang="ts">

</script>

<style lang="scss" scoped>

$spacing: 30px;

.what-we-do {
  position: relative;
    padding-top: 70px;
    padding-bottom: 70px;
    margin: 40px 0; 
    // border: .5px solid rgba(255,255,255,.2);
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
  .bg-grid-holder {
        padding: 12rem 0;
  }

    .text-upper-left {
        position: absolute;
        top: $spacing;
        left: $spacing;
    }
    .text-down-right {
        position: absolute;
        bottom: $spacing;
        right: $spacing;
    }

}


</style>
