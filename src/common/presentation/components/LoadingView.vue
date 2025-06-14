<script setup lang="ts">
import LoaderIcon from './icons/LoaderIcon.vue';
</script>

<template>
  <section class="container">
    <div class="loader-icon">
      <loader-icon />
    </div>
  </section>
</template>

<style scoped lang="css">
.container {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100svh;
}
.loader-icon {
  display: block;
  overflow: hidden;
  transform-origin: bottom;
  cursor: pointer;
  animation:
    shake 1s ease-in-out 0.5s 2,
    catch 1s ease 2.5s infinite;
}
</style>
