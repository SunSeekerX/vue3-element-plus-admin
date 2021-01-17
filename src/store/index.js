/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-17 18:27:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-17 20:35:40
 */

import { createStore } from 'vuex'

import app from './modules/app'
import getters from './getters'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
  },
  getters,
})
