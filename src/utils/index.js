/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-17 18:54:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-31 15:11:24
 */

import storage from 'web-storage-apis'
import getEnv from '@/config/index'

storage.setConfig({
  // 在 localStorage无法使用的情况下是否使用cookie作为回退
  isUsingCookie: true,
  // 是否开启调试模式
  debug: getEnv('VUE_APP_STORAGE_DEBUG'),
  // 写入的数据是否混淆
  isReadable: true,
})

export { storage }
