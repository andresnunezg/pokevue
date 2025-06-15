<script lang="ts" setup>
import RoundedButtonComponent from '@/common/presentation/components/RoundedButtonComponent.vue'
import StarIcon from '@/common/presentation/components/icons/StarIcon.vue'
import { computed } from 'vue'

interface Props {
  isFavorite?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isFavorite: false,
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const variant = computed(() => (props.isFavorite ? 'light' : 'muted'))
const iconColor = computed(() =>
  props.isFavorite ? 'var(--color-btn-marked)' : 'var(--color-bg-muted)',
)
</script>

<template>
  <rounded-button-component @click="emit('click', $event)" :variant="variant">
    <star-icon width="22" height="22" :color="iconColor" />
  </rounded-button-component>
</template>

<style lang="csss" scoped></style>
