import Vue from 'vue'
import VueRouter from 'vue-router'
import dataMaintain from './dataMaintain'
import manage from './manage'
import powerGrid from './powerGrid'
import problem from './problem'
import technology from './technology'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   meta: {
  //     title: '登陆'
  //   },
  //   component: () => import('@/views/login')
  // },
  {
    path: '/',
    redirect: 'technology',
    component: () => import('@/views/layout'),
    children: [...manage, ...powerGrid, ...problem, ...technology]
  },
  {
    path: '/index',
    redirect: '/index',
    component: () => import('@/views/layout2'),
    children: [
      {
        path: '/gaotanxing/index',
        name: 'index',
        meta: {
          title: '高弹性'
        },
        component: () => import('@/views/gaotanxing/guide.vue')
      },
      // {
      //   path: '/gaotanxing/home',
      //   name: 'home',
      //   meta: {
      //     title: '高弹性'
      //   },
      //   component: () => import('@/views/gaotanxing/index2.vue')
      // }
    ]
  },
  {
    path: '/home',
    redirect: '/home',
    component: () => import('@/views/layout3'),
    children: [
      {
        path: '/gaotanxing/carbonEmission',
        name: 'index',
        meta: {
          title: '高弹性'
        },
        component: () => import('@/views/gaotanxing/carbonEmission.vue')
      },
      {
        path: '/gaotanxing/home',
        name: 'home',
        meta: {
          title: '高弹性'
        },
        component: () => import('@/views/gaotanxing/index2.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
