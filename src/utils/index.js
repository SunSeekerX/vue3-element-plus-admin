/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-17 18:54:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-17 18:55:09
 */

import storage from 'web-storage-apis'

storage.setConfig({
  // 在 localStorage无法使用的情况下是否使用cookie作为回退
  isUsingCookie: true,
  // 是否开启调试模式
  debug: true,
  // 写入的数据是否混淆
  isReadable: true,
})

export { storage }
