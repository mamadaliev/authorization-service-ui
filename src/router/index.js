import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../layouts/Home"
import Login from "../layouts/Login"
import Register from "../layouts/Register"
import Notes from "../layouts/Notes"
import Targets from "../layouts/Targets"
import Profile from "../layouts/Profile"
import Settings from "../layouts/Settings"

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
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/profile/settings",
    name: "settings",
    component: Settings
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
