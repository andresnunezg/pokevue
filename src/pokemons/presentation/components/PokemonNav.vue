<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import AppRoutes from '@/router/AppRoutes'
import ButtonComponent from '@/common/presentation/components/ButtonComponent.vue'
import ButtonVariant from '@/common/presentation/components/ButtonVariant'
import MenuIcon from '@/common/presentation/components/icons/MenuIcon.vue'
import StarIcon from '@/common/presentation/components/icons/StarIcon.vue'

const router = useRouter()
const route = useRoute()

const getIsActiveRoute = (routeName: AppRoutes): ButtonVariant => {
  return route.name === routeName
    ? ButtonVariant.Primary
    : ButtonVariant.Secondary
}

const navigateToAll = () => router.push({ name: AppRoutes.AllPokemons })
const navigateToFavorites = () => router.push({ name: AppRoutes.FavoritePokemons })
</script>

<template>
  <nav class="footer-nav">
    <button-component
      :variant="getIsActiveRoute(AppRoutes.AllPokemons)"
      label="All"
      @click="navigateToAll"
    >
      <template #trailing-icon>
        <menu-icon />
      </template>
    </button-component>

    <button-component
      :variant="getIsActiveRoute(AppRoutes.FavoritePokemons)"
      label="Favorites"
      @click="navigateToFavorites"
    >
      <template #trailing-icon>
        <star-icon />
      </template>
    </button-component>
  </nav>
</template>

<style lang="css" scoped>
.footer-nav {
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}
</style>
