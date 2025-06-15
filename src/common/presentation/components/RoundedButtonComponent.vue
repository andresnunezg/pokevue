<script setup lang="ts">
interface Props {
  variant?: 'light' | 'muted'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

withDefaults(defineProps<Props>(), {
  variant: 'light',
  size: 'sm',
  disabled: false,
  type: 'button',
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[`btn-${variant}`, `btn-${size}`]"
    class="rounded-button"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<style scoped lang="css">
.rounded-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 2px solid transparent;
  padding: var(--spacing-2xs);
  margin: 0;
  height: 40px;
  width: 40px;
}

.rounded-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-md {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--text-md);
}

.btn-light {
  background-color: var(--color-bg-secondary);
  color: var(--color-white);
}

.btn-muted {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

.btn-muted:hover:not(:disabled) {
  background-color: var(--color-bg-primary);
}
</style>
