import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Proyecto from '../views/Proyecto.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path:'/About',
    name: 'About',
    component: About
  },
  {
    path:'/Proyecto/:id',
    name:'Proyecto',
    component: Proyecto
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
