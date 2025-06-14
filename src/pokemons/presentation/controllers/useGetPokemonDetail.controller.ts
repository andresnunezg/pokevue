import { ref, computed, type Ref, watch } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { PokemonUseCase } from '@/pokemons/domain/repository/PokemonUseCase'
import PokemonRepositoryImpl from '@/pokemons/infrastructure/repository/PokemonRepositoryImpl'
import type { PokemonBase } from '@/pokemons/domain/models/Pokemon'

const concreteImpl = new PokemonRepositoryImpl()
const pokemonUseCase = new PokemonUseCase(concreteImpl)

export default function useGetPokemonDetail() {
  const selectedPokemon: Ref<PokemonBase | null> = ref(null)

  watch(selectedPokemon, async () => {
    await refetch()
  })

  const {
    data: pokemonDetail,
    isFetching: isPokemonDetailFetching,
    refetch,
  } = useQuery({
    queryKey: ['pokemonDetail', selectedPokemon.value?.name],
    queryFn: () => pokemonUseCase.getPokemonDetailByName(selectedPokemon.value!.name),
    enabled: computed(() => !!selectedPokemon.value?.name),
    staleTime: 1000 * 60 * 5,
  })

  const isDetailLoading = computed(() => isPokemonDetailFetching.value)

  return {
    selectedPokemon,
    pokemonDetail,
    isDetailLoading,
  }
}
