import { format } from '../display'
/**
 * @description: 检测 一个日期 是否在另个日期之前
 * @param {String} dt
 * @param {String} check
 * @return {Boolean}
 */
const isBefore = function (dt, check = new Date()) {
    return new Date(format(check,'YYYY/MM/DD')) < new Date(format(dt,'YYYY/MM/DD'))
}
export default isBefore
