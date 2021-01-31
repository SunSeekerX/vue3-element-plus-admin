/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-31 15:11:50
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-31 15:16:28
 */
'use strict'
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  lintOnSave: NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 8081,
  },
}
