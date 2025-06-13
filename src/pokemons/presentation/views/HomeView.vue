<script setup lang="ts">
import SearchInputComponent from '@/common/presentation/components/SearchInputComponent.vue';
</script>

<template>
  <main class="home-container">
    <section class="pokemon-list">
      <search-input-component />
    </section>
  </main>
</template>

<style scoped lang="css">
.home-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  & .pokemon-list {
    max-width: 640px;
    width: 100%;
  }
}
</style>
