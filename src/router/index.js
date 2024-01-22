import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
  history: createWebHistory("/allods-armory/dist/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/users/:id-:slug",
      alias: "/users/:id",
      name: "user",
      component: () => import("../views/UserView.vue"),
    },
  ],
})

export default router
