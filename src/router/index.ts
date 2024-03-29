import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/background",
    name: "background",
    component: () =>
      import(/* webpackChunkName: "backgroup" */ "../views/BackgroundView.vue"),
  },
  {
    path: "/vuexview",
    name: "vuexview",
    component: () =>
      import(/* webpackChunkName: "vuexview" */ "../views/VuexView.vue"),
  },
  {
    path: "/vuecomponent",
    name: "vuecomponent",
    component: () =>
      import(
        /* webpackChunkName: "vuecomponent" */ "../views/VueComponent.vue"
      ),
  },
  {
    path: "/buttonview",
    name: "buttonview",
    component: () =>
      import(/* webpackChunkName: "buttonview" */ "../views/ButtonView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
