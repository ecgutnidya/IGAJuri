import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Anketler from "../views/Anketler.vue";
import Jüriler from "../views/Juriler.vue";
import SurveyContent from "../views/SurveyContent.vue";
const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/jüriler",
  },
  {
    path: "/",
    name: "/",
    redirect: "/surveycontent",
  },
  {
    path: "/",
    name: "/",
    redirect: "/anketler",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
      path: "/jüriler",
      name: "JÜRİLER",
      component: Jüriler,
  },
  {
    path: "/surveycontent",
    name: "SurveyContent",
    component: SurveyContent,
  },
  {
    path: "/anketler",
    name: "ANKETLER",
    component: Anketler,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },

  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;

