import format from '../display/format'
import subtract from '../manipulate/subtract'
/**
 * @description: 传入日期是否就是当天
 * @param {Date | String | Number} dt：
 * @return {Boolean}
 */
const isYesterday = function (dt) {
    const ft = 'YYYY-MM-DD'
    const d = subtract(1, 'day')
    return format(new Date(d), ft) === format(new Date(dt), ft)
}
export default isYesterday
