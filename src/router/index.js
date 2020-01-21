import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../layouts/Home.vue"
import Login from "../layouts/Login.vue"
import Register from "../layouts/Register.vue"
import Notes from "../layouts/Notes.vue"
import Targets from "../layouts/Targets.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/notes",
    name: "notes",
    component: Notes
  },
  {
    path: "/targets",
    name: "targets",
    component: Targets
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
