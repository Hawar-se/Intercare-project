import Vue from "vue";
 import profile from "../views/profile.vue";
 import reviews from"../views/reviews.vue";
 import favorite from "../components/favorite.vue";
 import VueRouter from "vue-router";
 import Home from "../views/Home.vue";
 import forumRoutes from './forum';

 
 Vue.use(VueRouter);
 

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: profile
  },
  {
    path: "/reviews",
    name: "reviews",
    component:reviews
  },
  {
    path:"/favorite",
    name:"favorite",
    component:favorite
  },
  
  forumRoutes
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
