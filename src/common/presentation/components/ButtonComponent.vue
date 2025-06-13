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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 18px;
  padding: 6px 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  text-decoration: none;
  outline: none;
  position: relative;
  width: fit-content;
}

.btn--primary {
  background-color: var(--color-btn-bg-primary);
  color: var(--color-btn-text-primary);
}
</style>
