<script lang="ts" setup>
import ButtonComponent from '@/common/presentation/components/ButtonComponent.vue'

const emit = defineEmits<{ (e: 'go-home'): void }>()
</script>

<template>
  <section class="empty-container">
    <h3 class="text-title">Uh-oh!</h3>
    <p class="text-subtitle">You look lost on your journey!</p>
    <button-component @click="emit('go-home')" label="Go back home" />
  </section>
</template>

<style lang="css" setup>
.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: var(--spacing-lg);
  & .text-title {
    font-size: var(--text-2xl);
  }
  & .text-subtitle {
    font-weight: 400;
  }
}
</style>
