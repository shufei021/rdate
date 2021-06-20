import endOf from '../manipulate/endOf'
/**
 * 获取 月份天数
 * @param { Number } m （月份）：1~12
 * @param {Date| String | Number } d ：Date 对象、"2020/1/1"、时间戳
 */
const daysInMonth = function (d = new Date()) {
    return endOf('M', new Date(d), 'D')
}
export default daysInMonth
