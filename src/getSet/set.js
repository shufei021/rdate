/**
    单位	缩写	描述
    date	D	    日期
    day	    d	    星期(星期日0，星期六6)
    month	M	    月份(0-11)
    year	y	    年
    hour	h	    小时
    minute	m	    分钟
    second	s	    秒
    millisecond	ms	毫秒 
 */
import format from '../display/format'

/**
 * @description: unit作为第一个参数，value作为第二个参数，返回一个带有更改的日期。
 * @param  {*}
 * @return {*}
 */
const set = function (unit, value, dt = new Date()) {
    let d = new Date(dt)
    unit = typeof unit === 'string' && unit.length > 1 ? unit.toLowerCase() : unit
    switch (unit) {
        case 'date':
        case 'D':
            d.setDate(value)
            break
        case 'day':
        case 'd':
            let day = d.getDay()
            d.setDate(d.getDate() - ((day === 0 ? 7 : day) - value))
            break
        case 'month':
        case 'M':
            d.setMonth(value)
            break
        case 'year':
        case 'y':
            d.setFullYear(value)
            break
        case 'hour':
        case 'h':
            d.setHours(value)
            break
        case 'minute':
        case 'm':
            d.setMinutes(value)
            break
        case 'second':
        case 's':
            d.setSeconds(value)
            break
        case 'millisecond':
        case 'ms':
            d.setMilliseconds(value)
            break
    }
    return format(d)
}
export default set
