import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },

    {
    path: "/restos",
    name: "restos",
    component: () => import("../views/RestoView.vue"),
    },
  ]
})

export default router
