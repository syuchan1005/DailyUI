import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/1',
    },
    {
      path: '/1',
      name: 'home',
      component: Home,
    },
  ],
});
