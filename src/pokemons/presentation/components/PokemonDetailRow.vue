<script lang="ts" setup>
defineProps<{
  title: string,
  value: string | number,
}>()
</script>

<template>
  <div class="row-container">
    <span class="title">{{ title }}:</span>
    <span class="value">{{ value }}</span>
  </div>
</template>

<style lang="css" scoped>
.row-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm);
  border-bottom: 1px solid var(--color-divider);
  & .title, .value {
    font-size: var(--text-2md);
    line-height: 150%;
  }
  & .title {
    font-weight: 600;
  }
}
</style>
