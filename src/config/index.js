/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-18 09:49:35
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-18 11:08:23
 */

import dev from './dev.config'
import pro from './pro.config'

const _envs = {
  dev,
  pro,
}

const ENV = process.env.VUE_APP_ENV || 'pro'

/**
 * @name Get env
 * @param {String} key
 */
export default function getEnv(key) {
  const val = _envs[ENV][key]
  if (![null, undefined].includes(val)) {
    return val
  } else {
    console.error(`ENV: Cannot get the ${key} value!`)
    return null
  }
}
