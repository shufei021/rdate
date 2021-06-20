/**
 * 判断日期（年月日）格式是否有效
 * @param {String} str ：年月日，必需
 * @return 布尔值
 */
const isDate = function (str) {
    if (!arguments.length) return false
    let ret = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/)
    if (ret == null) return false
    let d = new Date(ret[1], ret[3] - 1, ret[4])
    return d.getFullYear() == ret[1] && d.getMonth() + 1 == ret[3] && d.getDate() == ret[4]
}
export default isDate
