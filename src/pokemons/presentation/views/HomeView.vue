<script setup lang="ts">
import { useTemplateRef, computed, ref, watch } from 'vue'
import { useQueryClient } from '@tanstack/vue-query'
import { PokemonBase } from '@/pokemons/domain/models/Pokemon'
import useGetPokemons from '../controllers/useGetPokemons.controller'
import useGetPokemonDetail from '../controllers/useGetPokemonDetail.controller'
import useSearchPokemonByName from '../controllers/useSearchPokemonByName.controller'
import SearchInputComponent from '@/common/presentation/components/SearchInputComponent.vue'
import PokemonList from '../components/PokemonList.vue'
import LoadingComponent from '@/common/presentation/components/LoadingComponent.vue'
import ModalComponent from '@/common/presentation/components/ModalComponent.vue'
import PokemonDetailCard from '../components/PokemonDetailCard.vue'

const queryClient = useQueryClient()
const showDetailModal = ref(false)

const { pokemonsList, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage } =
  useGetPokemons()
const isLoading = computed(() => isFetching.value || isFetchingNextPage.value)

const containerScrollRef = useTemplateRef<HTMLDivElement>('scrollContainer')
const handleScroll = () => {
  const scrollRefValue = containerScrollRef.value
  if (!scrollRefValue) return
  const { scrollTop, clientHeight, scrollHeight } = containerScrollRef.value
  if (!scrollHeight || !clientHeight || !scrollHeight) return
  const isScrollTrigger = scrollTop + clientHeight >= scrollHeight - 50
  if (isScrollTrigger && hasNextPage) {
    fetchNextPage()
  }
}

const { selectedPokemon, pokemonDetail, isDetailLoading } = useGetPokemonDetail()

const handlePokemonSelect = (pokemon: PokemonBase) => {
  queryClient.resetQueries({ queryKey: ['pokemonSearch'] })
  showDetailModal.value = !!pokemon
  selectedPokemon.value = pokemon
}

const { searchInput, pokemonSearched, isLoadingSearch, triggerSearch } = useSearchPokemonByName()

const handlePokemonSearch = async (searchVal: string) => {
  queryClient.resetQueries({ queryKey: ['pokemonDetail'] })
  showDetailModal.value = true
  searchInput.value = searchVal
  await triggerSearch()
}

const detailPokemon = computed(() => {
  if (pokemonSearched.value) return pokemonSearched.value
  return pokemonDetail.value
})

watch(showDetailModal, (newVal) => {
  if (newVal) return
  selectedPokemon.value = null
  pokemonSearched.value = null
})
</script>

<template>
  <main class="home-container">
    <section v-if="pokemonsList" class="pokemon-list">
      <div class="search-input-container">
        <search-input-component v-model="searchInput" @search="handlePokemonSearch" />
      </div>
      <div ref="scrollContainer" class="scroll-container" @scroll="handleScroll">
        <pokemon-list
          v-for="(group, index) in pokemonsList.pages"
          :key="index"
          :pokemons="group.pokemon"
          @select="handlePokemonSelect"
        />
        <div v-if="isLoading" class="loader-container">
          <loading-component />
        </div>
      </div>
    </section>
  </main>
  <modal-component v-model="showDetailModal">
    <div v-if="isDetailLoading || isLoadingSearch" class="detail-loader-container">
      <loading-component />
    </div>
    <pokemon-detail-card v-else-if="detailPokemon" :pokemon="detailPokemon" />
    <!-- TODO: Manage error -->
  </modal-component>
</template>

<style scoped lang="css">
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  & .search-input-container {
    margin-bottom: var(--spacing-2xl);
  }
  & .pokemon-list {
    max-width: 640px;
    width: 100%;
  }
  & .scroll-container {
    overflow-y: auto;
    height: 80svh;
  }
}
& .loader-container,
& .detail-loader-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--spacing-xl) 0;
}
</style>
