import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/projects.vue')
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import(/* webpackChunkName: "about" */ '../views/resources.vue')
  },
  {
    path: '/awards',
    name: 'awards',
    component: () => import(/* webpackChunkName: "about" */ '../views/awards.vue')
  },
  {
    path: '/sports',
    name: 'sports',
    component: () => import(/* webpackChunkName: "about" */ '../views/sports.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
