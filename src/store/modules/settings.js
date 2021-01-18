/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-18 10:03:01
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-18 10:09:18
 */

import getEnv from '@/config'

const [showSettings, tagsView, fixedHeader, sidebarLogo] = [
  getEnv('showSettings'),
  getEnv('tagsView'),
  getEnv('fixedHeader'),
  getEnv('sidebarLogo'),
]

export default {
  namespaced: true,
  state: () => ({
    // theme: variables.theme,
    showSettings: showSettings,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo,
  }),
  mutations: {
    CHANGE_SETTING: (state, { key, value }) => {
      // eslint-disable-next-line no-prototype-builtins
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    },
  },
  actions: {
    changeSetting({ commit }, data) {
      commit('CHANGE_SETTING', data)
    },
  },
}
