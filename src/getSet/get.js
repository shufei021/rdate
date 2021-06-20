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
const get = function (unit, dt = new Date()) {
    let d = new Date(dt)
    switch (unit) {
        case 'date':
        case 'D':
            return d.getDate()
        case 'day':
        case 'd':
            return d.getDay()
        case 'month':
        case 'M':
            return d.getMonth()
        case 'year':
        case 'y':
            return d.getFullYear()
        case 'hour':
        case 'h':
            return d.getHours()
        case 'minute':
        case 'm':
            return d.getMinutes()
        case 'second':
        case 's':
            return d.getSeconds()
        case 'millisecond':
        case 'ms':
            return d.getMinutes()
    }
}
export default get
