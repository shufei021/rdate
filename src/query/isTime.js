/**
 * 判断时间（时分秒）格式是否有效
 * @param { String } str ：时分秒，必需
 * @return 布尔值
 */
const isTime = function (str) {
    if (!arguments.length) return false
    let ret = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/)
    if (ret == null) return false
    if (ret[1] >= 24 || ret[3] >= 60 || ret[4] >= 60) return false
    return true
}
export default isTime
