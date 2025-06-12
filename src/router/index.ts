import { createRouter, createWebHistory } from 'vue-router'
import AppRoutes from './AppRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: AppRoutes.Home,
      component: () => import('../pokemons/presentation/views/HomeView.vue'),
    },
    {
      path: `/${AppRoutes.Welcome}`,
      name: AppRoutes.Welcome,
      component: () => import('../pokemons/presentation/views/WelcomeView.vue'),
    },
  ],
})

export default router
