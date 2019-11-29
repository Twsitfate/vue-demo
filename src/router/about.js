const About = () => import('@/views/About.vue')

const routers = [
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

export default routers
