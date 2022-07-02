import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(VueRouter)

const Home = () => import('@/views/Home')
const Find = () => import('@/views/Find')
const My = () => import('@/views/My')
const Consult = () => import('@/views/Consult')
const City = () => import('@/views/City')
const Login = () => import('@/views/Login')
const Collect = () => import('@/views/Collect')
const Housing = () => import('@/views/Housing')
const Release = () => import('@/views/Release')
const Details = () => import('@/views/Details')
const ReSearch = () => import('@/views/ReSearch')

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'find', component: Find },
      { path: 'consult', component: Consult },
      { path: 'my', component: My, name: 'my' }
    ]
  },
  { path: '/city', component: City },
  { path: '/login', component: Login },
  { path: '/housing', component: Housing },
  { path: '/collect', component: Collect },
  { path: '/release', component: Release },
  { path: '/details', component: Details },
  { path: '/research', component: ReSearch }
]

const router = new VueRouter({
  routes
})

export default router
