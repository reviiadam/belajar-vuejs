import { createRouter, createWebHistory } from 'vue-router'
import Modules from './modules'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Modules.LandingPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
