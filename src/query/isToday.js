import {compatibleDt} from "../utils"
/**
 * @description: 传入日期是否就是当天
 * @param {Date | String | Number} dt：
 * @return {Boolean}
 */

 const isToday =  (dt = new Date())=>['getFullYear', 'getMonth', 'getDate'].every(i => new Date()[i]() === new Date(compatibleDt(dt))[i]())
 export default isToday