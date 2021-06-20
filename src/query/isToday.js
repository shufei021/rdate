/**
 * @description: 传入日期是否就是当天
 * @param {Date | String | Number} dt：
 * @return {Boolean}
 */
const isToday = function (dt = new Date()) {
    let n = new Date(),
        c = new Date(dt)
    return n.getFullYear() === c.getFullYear() && n.getMonth() === c.getMonth() && n.getDate() === c.getDate()
}
export default isToday
