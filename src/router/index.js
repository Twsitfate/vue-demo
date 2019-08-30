import Vue from 'vue'
import Router from 'vue-router'
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')

Vue.use(Router)

let routers = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

routers = routers.concat('')
export default new Router({
  routes: routers
})
