<script setup lang="ts">
import PokemonViewLayout from '../layouts/PokemonViewLayout.vue'
import { watch } from 'vue'
import { PokemonBase } from '@/pokemons/domain/models/Pokemon'
import useSearchFavoritePokemon from '../controllers/useSearchFavoritePokemon.controller'
import useGetPokemonDetail from '../controllers/useGetPokemonDetail.controller'
import SearchInputComponent from '@/common/presentation/components/SearchInputComponent.vue'
import PokemonList from '../components/PokemonList.vue'
import LoadingComponent from '@/common/presentation/components/LoadingComponent.vue'
import ModalComponent from '@/common/presentation/components/ModalComponent.vue'
import PokemonDetailCard from '../components/PokemonDetailCard.vue'
import EmptyResult from '../components/EmptyResult.vue'

const { searchInput, showEmptyResult, showDetailModal, filteredFavorites, isEmptyFavorites } =
  useSearchFavoritePokemon()

const { selectedPokemon, pokemonDetail, isDetailLoading } = useGetPokemonDetail()
const handlePokemonSelect = (pokemon: PokemonBase) => {
  showDetailModal.value = !!pokemon
  selectedPokemon.value = pokemon
}

const handlePokemonSearch = async (searchVal: string) => {
  searchInput.value = searchVal
}
watch(showEmptyResult, (newVal) => {
  if (!newVal) return
  showDetailModal.value = false
})

watch(showDetailModal, (newVal) => {
  if (newVal) return
  selectedPokemon.value = null
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
      <empty-result @go-home="handleGoHome" v-if="isEmptyFavorites" />
      <div v-else class="scroll-container">
        <pokemon-list :pokemons="filteredFavorites" @select="handlePokemonSelect" />
      </div>
    </template>
  </pokemon-view-layout>
  <modal-component v-if="!showEmptyResult" v-model="showDetailModal">
    <div v-if="isDetailLoading" class="detail-loader-container">
      <loading-component />
    </div>
    <pokemon-detail-card v-else-if="pokemonDetail" :pokemon="pokemonDetail" />
  </modal-component>
</template>
