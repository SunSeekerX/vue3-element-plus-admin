/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-17 18:27:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-17 18:35:20
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
