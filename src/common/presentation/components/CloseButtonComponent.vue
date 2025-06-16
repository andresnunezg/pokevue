<script lang="ts" setup>
import RoundedButtonComponent from '@/common/presentation/components/RoundedButtonComponent.vue'
import CloseIcon from './icons/CloseIcon.vue';

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<template>
  <rounded-button-component @click="emit('click', $event)" variant="light">
    <close-icon width="22" height="22" />
  </rounded-button-component>
</template>
