import { createWebHistory, createRouter } from "vue-router";

import AuthLayout from "../layouts/auth.vue";

import Home from "../views/home.vue";
import Login from "../views/auth/login.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: AuthLayout, children: [{path: '', component: Login}] },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})