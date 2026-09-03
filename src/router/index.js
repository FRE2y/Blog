import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('@/views/postView.vue'),
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('@/views/favoriteView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
