import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requireGuest: true },
    },

    {
    path: "/restos",
    name: "restos",
    component: () => import("../views/RestoView.vue"),
    meta: { requireAuth: true },
    },

    {
      path: "/create",
      name: "CreateResto",
      component: () => import("../views/CreateResto.vue"),
      meta: { requireAuth: true },
      },

    {
      path: "/restos/:id",
      name: "restos-show",
      component: () => import("../views/RestoDetailView.vue"),
      meta: { requireAuth: true },
    },

    {
      path: "/home",
      name: "home",
      component: () => import("../views/bcs/HomeView.vue"),
      meta: { requireAuth: true },
    },

    {
      path: "/register",
      name: "register",
      component: () => import("../views/bcs/RegisterView.vue"),
      meta: { requireGuest: true },
    },
      
  ]
});

router.beforeEach((to, from) => {
  const authenticated = localStorage.getItem("access_token");

  if (to.meta.requireGuest && authenticated) {
    return {
      name: "restos",
      name: "home",
    };
  } else if (to.meta.requireAuth && !authenticated) {
    return{
      name: "register",
      name: "login",
    };
  }
})

export default router
