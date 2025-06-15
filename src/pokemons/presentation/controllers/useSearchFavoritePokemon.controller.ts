import { computed, ref } from 'vue'
import useFavoritePokemonStore from '@/pokemons/presentation/stores/favoritesStore'

export default function useSearchFavoritePokemon() {
  const favoriteStore = useFavoritePokemonStore()

  const searchInput = ref('')
  const showEmptyResult = ref(false)
  const showDetailModal = ref(false)

  const filteredFavorites = computed(() => favoriteStore.searchFavorites(searchInput.value))
  const isEmptyFavorites = computed(() => filteredFavorites.value.length === 0)

  return {
    searchInput,
    showEmptyResult,
    showDetailModal,
    filteredFavorites,
    isEmptyFavorites,
  }
}
