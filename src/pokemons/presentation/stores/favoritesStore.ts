import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { PokemonBase } from '@/pokemons/domain/models/Pokemon'

const STORAGE_KEY = 'favorite-pokemons'

const useFavoritePokemonStore = defineStore('favoritePokemons', () => {
  const favorites = ref<PokemonBase[]>([])

  const loadSavedFavorites = () => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        favorites.value = Array.isArray(parsed) ? parsed : []
      } catch (e) {
        favorites.value = []
      }
    }
  }
  loadSavedFavorites()

  watch(
    favorites,
    (newFavorites) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites))
    },
    { deep: true }
  )

  const toggleFavorite = (pokemon: PokemonBase) => {
    const index = favorites.value.findIndex((p) => p.id === pokemon.id)
    if (index === -1) {
      favorites.value.push(pokemon)
    } else {
      favorites.value.splice(index, 1)
    }
  }

  const isFavorite = (pokemonId: number): boolean => {
    return favorites.value.some((p) => p.id === pokemonId)
  }

  return { favorites, toggleFavorite, isFavorite }
})

export default useFavoritePokemonStore
