<script setup lang="ts">
import LoaderIcon from './icons/LoaderIcon.vue';
</script>

<template>
  <loader-icon height="50" width="50" class="loader-icon" />
</template>

<style lang="css" scoped>
.loader-icon {
  display: block;
  overflow: hidden;
  cursor: pointer;
  animation:
    catch 2s ease 0s infinite;
}
</style>
