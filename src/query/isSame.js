import { startOf, endOf } from '../manipulate'
/**
 * @description: date - time 的年月日时分秒毫秒 局部/全部相同
 * @param {String} d1 日期字符串
 * @param {String} d2 日期字符串
 * @param {String} units 单位
 * @return {Boolean}
 */
const isSame = function (d1, units = '', d2 = new Date()) {
    let dt1 = new Date(d1)
    let dt2 = new Date(d2)
    let m = ['y', 'year'].includes(units)
        ? 'getFullYear'
        : ['M', 'month'].includes(units)
        ? 'getMonth'
        : ['D', 'date'].includes(units)
        ? 'getDate'
        : ['h', 'hour'].includes(units)
        ? 'getHours'
        : ['m', 'minute'].includes(units)
        ? 'getMinutes'
        : ['s', 'second'].includes(units)
        ? 'getSeconds'
        : ['d', 'day'].includes(units)
        ? 'getDay'
        : ['ms', 'milliseconds'].includes(units)
        ? 'getMilliseconds'
        : ''
    return m ? dt1[m]() === dt2[m]() : +dt1 === +dt2
}
export default isSame
