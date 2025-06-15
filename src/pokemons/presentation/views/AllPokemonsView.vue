<script setup lang="ts">
import PokemonViewLayout from './PokemonViewLayout.vue'
import { useTemplateRef, computed, ref, watch } from 'vue'
import { PokemonBase } from '@/pokemons/domain/models/Pokemon'
import useGetPokemons from '../controllers/useGetPokemons.controller'
import useGetPokemonDetail from '../controllers/useGetPokemonDetail.controller'
import useSearchPokemonByName from '../controllers/useSearchPokemonByName.controller'
import SearchInputComponent from '@/common/presentation/components/SearchInputComponent.vue'
import PokemonList from '../components/PokemonList.vue'
import LoadingComponent from '@/common/presentation/components/LoadingComponent.vue'
import ModalComponent from '@/common/presentation/components/ModalComponent.vue'
import PokemonDetailCard from '../components/PokemonDetailCard.vue'
import EmptyResult from '../components/EmptyResult.vue'

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
  showDetailModal.value = !!pokemon
  selectedPokemon.value = pokemon
}

const { searchInput, pokemonSearched, isLoadingSearch, triggerSearch, showEmptyResult } =
  useSearchPokemonByName()
const handlePokemonSearch = async (searchVal: string) => {
  showEmptyResult.value = false
  searchInput.value = searchVal
  if (searchInput.value.trim().length !== 0) {
    await triggerSearch()
    showDetailModal.value = true
  }
}
watch(showEmptyResult, (newVal) => {
  if (!newVal) return
  showDetailModal.value = false
})

const detailPokemon = computed(() => {
  if (pokemonSearched.value) return pokemonSearched.value
  return pokemonDetail.value
})

watch(showDetailModal, (newVal) => {
  if (newVal) return
  selectedPokemon.value = null
  pokemonSearched.value = null
})

const handleGoHome = () => {
  searchInput.value = ''
  showEmptyResult.value = false
}
</script>

<template>
  <pokemon-view-layout>
    <template #header>
      <search-input-component v-model="searchInput" @search="handlePokemonSearch" />
    </template>
    <template #content>
      <empty-result @go-home="handleGoHome" v-if="showEmptyResult" />
      <div
        v-else-if="pokemonsList"
        ref="scrollContainer"
        class="scroll-container"
        @scroll="handleScroll"
      >
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
    </template>
  </pokemon-view-layout>
  <modal-component v-if="!showEmptyResult" v-model="showDetailModal">
    <div v-if="isDetailLoading || isLoadingSearch" class="detail-loader-container">
      <loading-component />
    </div>
    <pokemon-detail-card v-else-if="detailPokemon" :pokemon="detailPokemon" />
  </modal-component>
</template>

<style scoped lang="css">
.detail-loader-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--spacing-xl) 0;
}
</style>
