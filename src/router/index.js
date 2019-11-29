import Vue from 'vue'
import Router from 'vue-router'
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Home = () => import('@/views/Home.vue')

Vue.use(Router)

import about_router from '@/router/about.js'

let routers = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

]

routers = routers.concat(about_router)
export default new Router({
  routes: routers
})
