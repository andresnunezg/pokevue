import { createRouter, createWebHistory } from 'vue-router'
import AppRoutes from './AppRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/${AppRoutes.AllPokemons}`,
      name: AppRoutes.AllPokemons,
      component: () => import('../pokemons/presentation/views/AllPokemonsView.vue'),
    },
    {
      path: `/${AppRoutes.Welcome}`,
      name: AppRoutes.Welcome,
      component: () => import('../pokemons/presentation/views/WelcomeView.vue'),
    },
    {
      path: `/${AppRoutes.FavoritePokemons}`,
      name: AppRoutes.FavoritePokemons,
      component: () => import('../pokemons/presentation/views/FavoritePokemonsView.vue'),
    },
  ],
})

export default router
