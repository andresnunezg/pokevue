import { ref, computed, type Ref } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import { PokemonUseCase } from '@/pokemons/domain/repository/PokemonUseCase'
import PokemonRepositoryImpl from '@/pokemons/infrastructure/repository/PokemonRepositoryImpl'
import type Pokemon from '@/pokemons/domain/models/Pokemon'

const concreteImpl = new PokemonRepositoryImpl()
const pokemonUseCase = new PokemonUseCase(concreteImpl)

export default function useSearchPokemonByName() {
  const searchInput = ref('')
  const pokemonSearched: Ref<Pokemon | null> = ref(null)

  const {
    mutate: searchPokemon,
    isPending: isPokemonSearchPending,
    error: errorPokemonSearch,
  } = useMutation({
    mutationFn: () => pokemonUseCase.searchPokemonByName(searchInput.value.toLocaleLowerCase()),
    onSuccess: (data) => {
      pokemonSearched.value = data
    },
  })

  const isLoadingSearch = computed(() => isPokemonSearchPending.value)

  const triggerSearch = async () => {
    if (!searchInput.value.trim()) return
    searchPokemon()
  }

  return {
    searchInput,
    pokemonSearched,
    isLoadingSearch,
    errorPokemonSearch,
    triggerSearch,
  }
}
