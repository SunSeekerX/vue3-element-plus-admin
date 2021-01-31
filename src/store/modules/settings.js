/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-18 10:03:01
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-31 15:09:51
 */

import { showSettings, tagsView, fixedHeader, sidebarLogo } from '@/config/default'

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
