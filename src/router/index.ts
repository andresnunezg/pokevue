import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppRoutes from "./AppRoutes"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: AppRoutes.Home,
      component: HomeView,
    },
    {
      path: `/${AppRoutes.Welcome}`,
      name: AppRoutes.Welcome,
      component: () => import('../views/WelcomeView.vue'),
    },
  ],
})

export default router
