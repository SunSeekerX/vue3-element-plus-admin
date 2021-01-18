/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-17 18:27:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-18 10:09:49
 */

import { createStore } from 'vuex'

import app from './modules/app'
import settings from './modules/settings'
import getters from './getters'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    settings,
  },
  getters,
})
