/**
 *核心方法
 *
 */
import {
    format
} from "./lib/core"
/**
 * 常用方法
 */
import {
    year,
    month,
    date,
    hour,
    minute,
    second,
    millisecond,
    quarter,
    when,
    get,
    toArray,
    toObject,
    previewWeek,
    previewMonth,
    previwWeekByDate,
    previwMonthByDate,
    weekFirstLast,
    monthFirstLast,
    getCurWeekFirstDay,
    getCurWeekLastDay,
    getMonthFirstDay,
    getMonthLastDay,
    getDaysByDate,
    getHalfYear,
    getGapDate,
    getGapWeek,
    getGapYearDate,
    getGapMonthDate,
    getWeekByDate,
    getMonthWeek,
    getYearWeek,
    getQuarterWeek,
    getWeekWorkday,
    getGapWeekWorkday,
    getMonthDays,
    getMonthWeekInfo,
    getPassDaysDate,
    getBetweenDates,
    previewMoment
} from "./lib/date"
/**
 * 时间戳
 */
import {
    isLeapYear,
    isTime,
    isDate,
    isDateTime,
    isToday,
    isYesterday
} from "./lib/verify"
/**
 * 验证
 */
import {
    getStamp,
    getStampBeforAfter,
    getStampStartEnd,
    getDaysByStamp
} from "./lib/stamp"

function Rdate() {
    if (!(this instanceof Rdate)) {
        throw new TypeError("Cannot call a class as a function")

    }
    this.version = '1.0.0'
    this.author = 'rookie_fly'
    this.update = '2020-8-30'
}

Rdate.prototype = {
    /** 核心方法*/
    format,
    /** 常用方法*/
    year,
    month,
    date,
    hour,
    minute,
    second,
    millisecond,
    quarter,
    when,
    get,
    toArray,
    toObject,
    previwWeekByDate,
    previwMonthByDate,
    previewWeek,
    previewMonth,
    previewMoment,
    weekFirstLast,
    monthFirstLast,
    getCurWeekFirstDay,
    getCurWeekLastDay,
    getMonthFirstDay,
    getMonthLastDay,
    getDaysByDate,
    getHalfYear,
    getGapDate,
    getGapWeek,
    getGapYearDate,
    getGapMonthDate,
    getWeekByDate,
    getMonthWeek,
    getYearWeek,
    getQuarterWeek,
    getWeekWorkday,
    getGapWeekWorkday,
    getMonthDays,
    getMonthWeekInfo,
    getPassDaysDate,
    getBetweenDates,
    /** 验证方法*/
    isLeapYear,
    isTime,
    isDate,
    isDateTime,
    isToday,
    isYesterday,
     /** 时间戳方法*/
    getStamp,
    getStampBeforAfter,
    getStampStartEnd,
    getDaysByStamp
}
export default Rdate