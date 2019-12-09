import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/campgrounds',
    name: 'campgrounds',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Campgrounds.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Register.vue'),
  },
  {
    path: '/verify',
    name: 'verify',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Verify.vue'),
  },
  {
    path: '/new',
    name: 'NewCampground',
    component: () => import(/* webpackChunkName: "about" */ '../views/New.vue'),
    beforeEnter(to: any, from: any, next: any) {
      if (store.state.idToken) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/edit/:id',
    name: 'EditCampground',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Edit.vue'),
    beforeEnter(to: any, from: any, next: any) {
      if (store.state.idToken) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/campground/:id',
    name: 'ShowCampground',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Show.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
