import format from '../display/format'
/**
 * @description: 传入日期是否就是当天
 * @param {Date | String | Number} dt：
 * @return {Boolean}
 */
const isYesterday = function (dt = new Date()) {
    const ft = 'YYYY-MM-DD'
    dt = new Date(dt)
    dt.setDate(dt.getDate() - 1)
    return format(dt, ft) === format(new Date(), ft)
}
export default isYesterday
