import {compatibleDt} from "../utils"
/**
 * @description: 传入日期是否就是当天
 * @param {Date | String | Number} dt：
 * @return {Boolean}
 */
const isTomorrow = (dt = new Date())=>['getFullYear', 'getMonth', 'getDate'].every(i => new Date(+new Date() + 86400000)[i]() === new Date(compatibleDt(dt))[i]())

export default isTomorrow
