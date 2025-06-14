<script setup lang="ts">
import { PokemonBase } from '@/pokemons/domain/models/Pokemon'
import PokemonRow from './PokemonRow.vue'

defineProps<{ pokemons: PokemonBase[] }>()
const emit = defineEmits<{
  (e: 'select', pokemon: PokemonBase): void
}>()
</script>

<template>
  <section class="pokemon-list-container">
    <ul class="pokemon-row-container" v-for="(pokemonRow, index) in pokemons" :key="index">
      <pokemon-row
        :key="pokemonRow.id"
        :pokemon="pokemonRow"
        @select="emit('select', $event)"
      />
    </ul>
  </section>
</template>

<style lang="css" scoped>
.pokemon-list-container,
.pokemon-row-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}
.pokemon-row-container {
  margin: 0;
  padding: 0;
}
</style>
