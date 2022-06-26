import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(VueRouter)

const Home = () => import('@/views/Home')
const Find = () => import('@/views/Find')
const My = () => import('@/views/My')
const Consult = () => import('@/views/Consult')

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'find', component: Find },
      { path: 'consult', component: Consult },
      { path: 'my', component: My }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
