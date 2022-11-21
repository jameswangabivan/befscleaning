import { createWebHistory, createRouter } from "vue-router";

import HomeComp from "@/components/HomeComp.vue";
import LoginComp from "@/components/user/LoginComp.vue";
import RegisterComp from "@/components/user/RegisterComp.vue";

import { useStore } from "vuex";
const store = useStore;
const loggedInStatus = store?.state?.auth?.loggedIn;

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComp,
  },
  {
    path: "/home/",
    component: HomeComp,
  },
  {
    path: "/login",
    component: LoginComp,
  },
  {
    path: "/register/",
    component: RegisterComp,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const publicPages = ['/login/', '/', '/register/', '/home/', '/send-sms/', "/history/"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = loggedInStatus;

  if (authRequired && !loggedIn) {
    next('/login/');
  } else {
    next();
  }
});

export default router;