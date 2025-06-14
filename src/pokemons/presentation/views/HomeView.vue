<script setup lang="ts">
import { useTemplateRef, computed } from 'vue'
import useGetPokemons from '../controllers/useGetPokemons.controller'
import SearchInputComponent from '@/common/presentation/components/SearchInputComponent.vue'
import PokemonList from '../components/PokemonList.vue'
import LoadingComponent from '@/common/presentation/components/LoadingComponent.vue'

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
</script>

<template>
  <main class="home-container">
    <section v-if="pokemonsList" class="pokemon-list">
      <div class="search-input-container">
        <search-input-component />
      </div>
      <div ref="scrollContainer" class="scroll-container" @scroll="handleScroll">
        <pokemon-list
          v-for="(group, index) in pokemonsList.pages"
          :key="index"
          :pokemons="group.pokemon"
        />
        <div v-if="isLoading" class="loader-container">
          <loading-component />
        </div>
      </div>
    </section>
  </main>
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
  & .loader-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: var(--spacing-xl) 0;
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
</style>
