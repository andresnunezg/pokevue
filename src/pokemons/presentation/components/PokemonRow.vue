<script setup lang="ts">
import { computed } from 'vue'
import type { PokemonBase } from '@/pokemons/domain/models/Pokemon'
import FavoriteButtonComponent from '@/common/presentation/components/FavoriteButtonComponent.vue'
import useFavoritePokemonStore from '@/pokemons/presentation/stores/favoritesStore'

const favoriteStore = useFavoritePokemonStore()

const props = defineProps<{ pokemon: PokemonBase }>()
const emit = defineEmits<{
  (e: 'select', pokemon: PokemonBase): void
}>()

const isFav = computed(() => favoriteStore.isFavorite(props.pokemon.id))

const handleFavoriteClick = (event: MouseEvent) => {
  event.stopPropagation()
  favoriteStore.toggleFavorite(props.pokemon)
}
</script>

<template>
  <li class="pokemon-row" @click="emit('select', props.pokemon)">
    <span>{{ pokemon.name }}</span>
    <favorite-button-component :is-favorite="isFav" @click="handleFavoriteClick" />
  </li>
</template>

<style lang="css" scoped>
.pokemon-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius-md);
  text-transform: capitalize;
  font-size: var(--text-lg);
  background-color: var(--color-bg-tertiary);
  padding: var(--spacing-sm);
  cursor: pointer;
  & span {
    font-weight: 500;
  }
}
</style>
