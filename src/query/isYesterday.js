import {compatibleDt} from "../utils"
/**
 * @description: 传入日期是否就是当天
 * @param {Date | String | Number} dt：
 * @return {Boolean}
 */
const isYesterday =(dt = new Date())=>['getFullYear', 'getMonth', 'getDate'].every(i => new Date(new Date() - 24*60*60*1000)[i]() === new Date(compatibleDt(dt))[i]())
export default isYesterday
