import { createRouter, createWebHistory } from "vue-router";
import { getToken } from "@/utils/auth";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/Login.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  let token = getToken();
  if (!token) {
    if (to.path == "/login") {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
