import { createRouter, createWebHistory } from 'vue-router'
import AppRoutes from './AppRoutes'
import { WELCOME_COMPLETED_KEY } from '@/common/utils/sessionStorageConstants'

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
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: AppRoutes.Welcome }
    }
  ],
})

router.beforeEach((to, from) => {
  const hasCompletedWelcome = sessionStorage.getItem(WELCOME_COMPLETED_KEY) === 'true'
  if (!hasCompletedWelcome && to.name !== AppRoutes.Welcome) {
    return { name: AppRoutes.Welcome }
  }
})

export default router
