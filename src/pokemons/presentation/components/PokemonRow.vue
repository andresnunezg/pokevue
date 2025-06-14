<script setup lang="ts">
import type { PokemonBase } from '@/pokemons/domain/models/Pokemon'

defineProps<{ pokemon: PokemonBase }>()
</script>

<template>
  <li class="pokemon-row">
    {{ pokemon.name }}
  </li>
</template>

<style lang="css" scoped>
.pokemon-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius-md);
  text-transform: capitalize;
  font-size: var(--text-lg);
  font-weight: 500;
  background-color: var(--color-bg-tertiary);
  padding: var(--spacing-sm);
}
</style>
