import Vue from 'vue';
import Router from 'vue-router';
import Day1 from './views/Day1.vue';
import Day2 from './views/Day2.vue';

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
      name: 'day1',
      component: Day1,
    },
    {
      path: '/2',
      name: 'day2',
      component: Day2,
    },
  ],
});
