import { createRouter, createWebHistory } from 'vue-router'
import loginView from '../views/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginView',
      component: loginView
    },
  ]
})

export default router
