import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/archives',
    name: 'Archive',
    component: () => import('@/views/Archives')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('@/views/Post')
  },
  {
    path: '/projects',
    name: 'Project',
    component: () => import('@/views/Projects')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About')
  },
  {
    path: '*',
    component: () => import('@/views/PageNotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
