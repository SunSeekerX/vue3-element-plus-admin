/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-17 18:51:56
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-18 11:12:09
 */

import { storage } from '@/utils/index'

export default {
  namespaced: true,
  state: () => ({
    sidebar: {
      opened: storage.getStorageSync('sidebarStatus')
        ? !!+storage.getStorageSync('sidebarStatus')
        : true,
      withoutAnimation: false,
      device: 'desktop',
      size: storage.getStorageSync('size') || 'medium',
    },
  }),
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
      if (state.sidebar.opened) {
        storage.setStorageSync('sidebarStatus', 1)
      } else {
        storage.setStorageSync('sidebarStatus', 0)
      }
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      storage.setStorageSync('sidebarStatus', 0)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    SET_SIZE: (state, size) => {
      state.size = size
      storage.setStorageSync('size', size)
    },
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    setSize({ commit }, size) {
      commit('SET_SIZE', size)
    },
  },
}
