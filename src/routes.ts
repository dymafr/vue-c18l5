import { RouteRecordRaw } from 'vue-router';
import PageA from './PageA.vue';
import PageB from './PageB.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PageA,
  },
  {
    path: '/a/:userId?',
    component: PageA,
    props: true,
  },
  {
    path: '/b',
    component: PageB,
  },
];
