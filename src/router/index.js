import { createWebHistory, createRouter } from "vue-router";

import HomeComp from "@/components/HomeComp.vue";
import LoginComp from "@/components/user/LoginComp.vue";
import RegisterComp from "@/components/user/RegisterComp.vue";
import OurStory from "@/components/pages/OurStory.vue";
import Products from "@/components/pages/Products.vue";
import ContactUs from "@/components/pages/ContactUs.vue";
import DemoReq from "@/components/pages/DemoReq.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComp,
  },
  {
    path: "/home/",
    name: "home2",
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
  {
    path: "/our-story/",
    name: "history",
    component: OurStory,
  },

  {
    path: "/products/",
    name: "products",
    component: Products,
  },
  
  {
    path: "/demo/",
    name: "demo",
    component: DemoReq,
  },

  {
    path: "/contact-us/",
    name: "contacts",
    component: ContactUs,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
});

export default router;