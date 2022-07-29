import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/one',
    name: 'one',
    component: () => import(/* webpackChunkName: "one" */ '@/pages/PlaygroundOne.vue'),
  },
  {
    path: '/two',
    name: 'two',
    component: () => import(/* webpackChunkName: "two" */ '@/pages/PlaygroundTwo.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
