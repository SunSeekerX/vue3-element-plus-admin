/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-17 18:27:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-17 18:44:06
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
