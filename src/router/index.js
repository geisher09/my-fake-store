import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products/Products.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Products
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/my-fake-store/'),
  routes
})

export default router
