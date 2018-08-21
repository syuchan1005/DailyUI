import Vue from 'vue';
import Router from 'vue-router';
import Top from './views/Top.vue';

Vue.use(Router);

const days = [
  'Sign up',
  'Credit Card Checkout',
  'Landing Page (above the fold)',
  'Calculator',
];

const routes = [{
  path: '/',
  name: 'top',
  component: Top,
}];
days.forEach((v, i) => {
  routes.push({
    component: () => import(`@/views/Day${i + 1}.vue`),
    path: `/${i + 1}`,
    meta: {
      day: i + 1,
      theme: v,
    },
  });
});

const router = new Router({
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.theme
    ? `DailyUI Day${to.meta.day}: ${to.meta.theme}`
    : 'DailyUI';
  next();
});

export default router;
