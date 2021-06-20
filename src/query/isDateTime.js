/**
 * 判断 完整的年月日时分秒格式是否有效
 * @param { String } str ：年月日时分秒，必需
 * @return 布尔值
 */
const isDateTime = function (str) {
    if (!arguments.length) return false
    let ret = str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/)
    if (ret == null) return false
    let d = new Date(ret[1], ret[3] - 1, ret[4], ret[5], ret[6], ret[7])
    return d.getFullYear() == ret[1] && d.getMonth() + 1 == ret[3] && d.getDate() == ret[4] && d.getHours() == ret[5] && d.getMinutes() == ret[6] && d.getSeconds() == ret[7]
}
export default isDateTime
