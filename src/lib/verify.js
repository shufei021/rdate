/**
 * 
 * ***********
 * * 验证api *
 * ***********
 */


/**
 * 是否润年
 * 能被4整除而不能被100整除.(如2004年就是闰年,1900年不是)
 * @param { Number | String } : 4位数年份，必需
 * @return 布尔值
 */
export const isLeapYear = function (y) {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
}

/**
 * 判断时间（时分秒）格式是否有效
 * @param { String } str ：时分秒，必需
 * @return 布尔值
 */
export const isTime = function (str) {
    let ret = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/)
    if (ret == null) return false
    if (ret[1] >= 24 || ret[3] >= 60 || ret[4] >= 60) return false
    return true
}

/**
 * 判断日期（年月日）格式是否有效
 * @param {String} str ：年月日，必需
 * @return 布尔值
 */
export const isDate = function (str) {
    let ret = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/)
    if (ret == null) return false
    let d = new Date(ret[1], ret[3] - 1, ret[4])
    return (d.getFullYear() == ret[1] && d.getMonth() + 1 == ret[3] && d.getDate() == ret[4])
}

/**
 * 判断 完整的年月日时分秒格式是否有效
 * @param { String } str ：年月日时分秒，必需
 * @return 布尔值 
 */
export const isDateTime = function (str) {
    let ret = str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/)
    if (ret == null) return false
    let d = new Date(ret[1], ret[3] - 1, ret[4], ret[5], ret[6], ret[7])
    return (d.getFullYear() == ret[1] && (d.getMonth() + 1) == ret[3] && d.getDate() == ret[4] && d.getHours() == ret[5] && d.getMinutes() == ret[6] && d.getSeconds() == ret[7])
}


/**
 * 验证一个日期是不是今天
 * @param { String } dt： 日期，必需
 * @return 布尔值 
 */
export const isToday = function (dt) {
    return new Date().toLocaleDateString() == new Date(typeof dt == 'string' ? dt.replace(/-/g, "/") : dt).toLocaleDateString();
}

/**
 * 验证传入的日期是否是昨天
 * @param {String} dt： 日期，必需
 */
export const isYesterday = function (dt) {
    let d = new Date()
    d.setDate(d.getDate() - 1)
    return d.toLocaleDateString() === new Date(dt).toLocaleDateString()
}