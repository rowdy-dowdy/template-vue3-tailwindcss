import { createRouter, createWebHistory } from 'vue-router'
import {store} from '../store'

const routes = [
  {
    path: '/',
    name: 'home-main',
    meta: { title: 'Oozy / Oozy'},
    component: () => import('../views/home/home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: { title: 'Page Not Found / Oozy'},
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { 
      el: '#app',
      top: 0 
    }
  },
})

export default router