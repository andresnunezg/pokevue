import { useInfiniteQuery } from '@tanstack/vue-query'
import { PokemonUseCase } from '@/pokemons/domain/repository/PokemonUseCase'
import PokemonRepositoryImpl from '@/pokemons/infrastructure/repository/PokemonRepositoryImpl'

const concreteImpl = new PokemonRepositoryImpl()
const pokemonUseCase = new PokemonUseCase(concreteImpl)

export default function useGetPokemons() {
  const {
    data: pokemonsList,
    error: pokemonError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam }) => pokemonUseCase.getPokemonList(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _) => lastPage.nextPokemons,
  })

  return {
    pokemonsList,
    pokemonError,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  }
}
