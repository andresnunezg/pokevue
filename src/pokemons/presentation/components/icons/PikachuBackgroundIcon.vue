<script setup lang="ts">
import PikachuIcon from './PikachuIcon.vue'
import EllipseIcon from './EllipseIcon.vue'
</script>

<template>
  <div class="pikachu-img">
    <ellipse-icon />
    <pikachu-icon />
  </div>
</template>

<style scoped lang="css">
.pikachu-img {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg:first-child {
    z-index: 1;
    bottom: 0px;
  }

  svg:last-child {
    z-index: 2;
    bottom: -12px;
    transform: translate(3%, 0%);
  }
}
</style>
