import { ref, computed, type Ref, watchEffect, watch } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { PokemonUseCase } from "@/pokemons/domain/repository/PokemonUseCase";
import PokemonRepositoryImpl from "@/pokemons/infrastructure/repository/PokemonRepositoryImpl";
import type { PokemonBase } from "@/pokemons/domain/models/Pokemon";

const concreteImpl = new PokemonRepositoryImpl()
const pokemonUseCase = new PokemonUseCase(concreteImpl)

export default function useGetPokemonDetail() {
  const showModal = ref(false)
  const selectedPokemon: Ref<PokemonBase | null> = ref(null)

  watch(selectedPokemon, (newVal) => {
    showModal.value = !!newVal
  })

  const {
    data: pokemonDetail,
    isPending: isPokemonDetailLoading,
  } = useQuery({
    queryKey: ['pokemonDetail', selectedPokemon.value?.name],
    queryFn: () => pokemonUseCase.getPokemonDetailByName(selectedPokemon.value!.name),
    enabled: computed(() => !!selectedPokemon.value?.name)
  })

  return {
    showModal,
    selectedPokemon,
    pokemonDetail,
    isPokemonDetailLoading,
  }
}
