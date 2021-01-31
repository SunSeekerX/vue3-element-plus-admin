/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-18 09:49:35
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-31 15:06:48
 */

import dev from './dev.config'
import pro from './pro.config'

const _envs = {
  dev,
  pro,
}

const VUE_APP_ENV = process.env.VUE_APP_ENV || 'pro'

/**
 * @name Get env
 * @param {String} key
 */
export default function getEnv(key) {
  // Check env exist
  if (Object.keys(_envs).includes(VUE_APP_ENV)) {
    const val = _envs[VUE_APP_ENV][key]
    if (![null, undefined].includes(val)) {
      return val
    } else {
      console.warn(`ENV: Cannot get the ${key} value!`)
      return null
    }
  } else {
    console.warn(`ENV: Cannot find the ${process.env.ENV} environment!`)
  }
}
