<script setup lang="ts">
import PokemonNav from '../components/PokemonNav.vue'
</script>

<template>
  <main class="home-container">
    <header class="home-header">
      <slot name="header"></slot>
    </header>

    <section class="home-content pokemon-list">
      <slot name="content"></slot>
    </section>

    <section class="home-footer">
      <footer>
        <pokemon-nav />
      </footer>
    </section>
  </main>
</template>

<style lang="css">
@media (max-width: 640px) {
  .home-header,
  .home-content {
    padding: 0 var(--spacing-md);
  }
}

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100dvh;
  height: 100dvh;
  max-height: 100dvh;
  overflow: hidden;

  & .home-header,
  & .home-footer {
    flex-grow: 0;
  }
  & .home-header,
  & .home-content {
    max-width: 640px;
    width: 100%;
  }
  & .home-header {
    padding-top: 2rem;
    margin-bottom: var(--spacing-xl);
  }
  & .home-content {
    flex: 1;
    overflow: hidden;
    position: relative;
  }
  & .home-footer {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--color-bg-tertiary);
    padding: var(--spacing-md);
    & footer {
      max-width: 640px;
      width: 100%;
    }
  }
}
.scroll-container {
  height: 100%;
  overflow-y: auto;
}
.loader-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--spacing-xl) 0;
}
.detail-loader-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--spacing-xl) 0;
}
</style>
