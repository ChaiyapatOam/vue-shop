import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/profile.vue"),
  },
  {
    path: "/addproduct",
    component: () => import("../views/addproduct.vue"),
  },
  {
    path: "/checkout",
    component: () => import("../views/checkout.vue"),
  },
  {
    path: "/orders",
    component: () => import("../views/orders.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
