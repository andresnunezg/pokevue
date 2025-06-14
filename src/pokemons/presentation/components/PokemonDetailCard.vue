<script setup lang="ts">
import { ref } from 'vue'
import capitalize from '@/common/utils/capitalize'
import type Pokemon from '@/pokemons/domain/models/Pokemon'
import ButtonComponent from '@/common/presentation/components/ButtonComponent.vue'
import PokemonDetailRow from './PokemonDetailRow.vue'

const props = defineProps<{
  pokemon: Pokemon
}>()

const { weight, height } = props.pokemon.physicalAttributes
const types = props.pokemon.types.map((t) => capitalize(t.name)).join(', ')

const defaultLabel = 'Share to my friends'
const buttonLabel = ref(defaultLabel)

const handleShareClick = () => {
  navigator.clipboard.writeText(props.pokemon.getInfoAsCsv).then(() => {
    buttonLabel.value = 'Copied!'
    setTimeout(() => {
      buttonLabel.value = defaultLabel
    }, 2000)
  })
}
</script>

<template>
  <article class="detail-card">
    <header class="detail-card__header">
      <div class="detail-card__header-background"></div>
      <div v-show="pokemon.frontDefaultArtwork" class="detail-card_header-pokemon">
        <img :src="pokemon.frontDefaultArtwork" loading="eager" :alt="pokemon.name" />
      </div>
    </header>
    <div class="detail-card__content">
      <pokemon-detail-row title="Name" :value="capitalize(pokemon.name)" />
      <pokemon-detail-row title="Weight" :value="weight" />
      <pokemon-detail-row title="Height" :value="height" />
      <pokemon-detail-row title="Types" :value="types" />
      <div class="detail-card__actions">
        <button-component :label="buttonLabel" @click="handleShareClick" />
      </div>
    </div>
  </article>
</template>

<style lang="css" scoped>
.detail-card {
  width: 100%;
  background-color: var(--color-bg-primary);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
}

.detail-card__header {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.detail-card__header-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/detail-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
}

.detail-card_header-pokemon {
  position: absolute;
  height: 220px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & img {
    max-height: 100%;
    object-fit: contain;
  }
}

.detail-card__content {
  padding: var(--spacing-xl);
}

.detail-card__actions {
  margin-top: var(--spacing-md);
}
</style>
