/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-17 18:27:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-29 15:42:52
 */

/**
 * @name 引入依赖库
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'normalize.css'
import 'element-plus/lib/theme-chalk/index.css'

/**
 * @name 引入文件
 */
import App from './App.vue'
import router from './router'
import store from './store'

console.log(process.env)

createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app')
