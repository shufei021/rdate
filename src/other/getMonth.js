import { _dt } from '../utils'
/**
 * 获取 （给定日期 | 当前日期） 对应的回显月份
 * 根据 （给定日期 | 当前日期）回显对应的月份
 * @param {String | Number } dt ：日期 或 时间戳
 * @param {String} suffix ：后缀
 */
const getMonth = function (dt = new Date(), suffix = '月') {
    return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][_dt(dt).getMonth()] + suffix
}
export default getMonth
