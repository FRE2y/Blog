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
    component: () => import('@/views/PostView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
