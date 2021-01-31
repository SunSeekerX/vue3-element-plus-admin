/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-17 18:27:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-31 15:04:54
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index'

const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect.vue'),
      },
    ],
  },
  {
    path: '/',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/index.vue'),
      },
      // {
      //   path: '/home',
      //   name: 'Home',
      //   component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      // },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
