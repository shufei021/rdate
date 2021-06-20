import { _dt } from '../utils'
/**
 * 获取 （给定日期 | 当前日期） 对应的回显星期
 * 根据 （给定日期 | 当前日期）回显对应的星期
 * @param {String | Number } dt ：日期 或 时间戳
 * @param {String} prefix :前缀
 */
const getWeek = function (dt = new Date(), prefix = '星期') {
    return prefix + ['日', '一', '二', '三', '四', '五', '六'][_dt(dt).getDay()]
}
export default getWeek
