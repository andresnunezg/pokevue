<script setup lang="ts">
import ButtonComponent from '@/pokemons/presentation/components/ButtonComponent.vue'
import PikachuBackgroundIcon from '@/pokemons/presentation/components/icons/PikachuBackgroundIcon.vue'
</script>

<template>
  <main class="welcome">
    <section class="card">
      <div class="pikachu-img-container">
        <pikachu-background-icon />
      </div>
      <h1 class="text-subtitle text-bold text-center">Welcome to Pokédex</h1>
      <p class="text-body text-center">
        The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the
        Pokémon world.
      </p>
      <div class="btn-container">
        <button-component label="Get started" />
      </div>
    </section>
  </main>
</template>

<style scoped lang="css">
.welcome {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  & .pikachu-img-container {
    height: 275px;
  }
  & .card {
    max-width: 540px;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
    & .btn-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
}
</style>
