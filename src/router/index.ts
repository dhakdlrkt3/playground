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
  {
    path: '/three',
    name: 'THREE',
    component: () => import(/* webpackChunkName: "three" */ '@/pages/PlaygroundThree.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return { top: 0, left: 0 }
  },
})

export default router
