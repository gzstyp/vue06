import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Index from '../views/Index'
import Book from '../views/Book'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',//name可以不写
    component: Home
  },
  {
    path: '/book',
    component: Book
  },
  {
    path: '/index',
    component: Index
  },

  //下面的这个是3.0的写法,但同样也是 import 的
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
