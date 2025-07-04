<script setup lang="ts">
import { computed } from 'vue'
import ButtonVariant from '@/common/presentation/components/ButtonVariant'

interface Props {
  isDisabled?: boolean
  label?: string
  variant?: ButtonVariant
}

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  variant: ButtonVariant.Primary,
})

const btnClasses = computed(() => [
  'btn',
  `btn--${props.variant}`,
  {
    'btn--disabled': props.isDisabled,
  },
])
</script>

<template>
  <button :disabled="isDisabled" @click="$emit('click', $event)" :class="btnClasses">
    <slot name="trailing-icon"></slot>
    <span class="text-body text-semibold">{{ label }}</span>
  </button>
</template>

<style scoped lang="css">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  border: none;
  border-radius: 22px;
  padding: var(--spacing-xs) var(--spacing-md);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  text-decoration: none;
  outline: none;
  position: relative;
}

.btn--primary {
  background-color: var(--color-btn-bg-primary);
  color: var(--color-btn-text-primary);
}
.btn--primary:focus,
.btn--primary:hover {
  background-color: var(--color-bg-main-focus);
}

.btn--secondary {
  background-color: var(--color-bg-muted);
  color: var(--color-text-white);
}
.btn--secondary:focus,
.btn--secondary:hover {
  opacity: 0.8;
}
</style>
