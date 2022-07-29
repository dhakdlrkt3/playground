import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HOME',
    component: HomePage,
  },
  {
    path: '/one',
    name: 'ONE',
    component: () => import(/* webpackChunkName: "one" */ '@/pages/PlaygroundOne.vue'),
  },
  {
    path: '/two',
    name: 'TWO',
    component: () => import(/* webpackChunkName: "two" */ '@/pages/PlaygroundTwo.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
