/**
 * 基本方法
 * 直接获取当前时间的各个信息 或 获取指定时间的各个信息
 * 查看当前时间 或 指定时间的：年月日时分秒 周 星期 季度
 * @param {String | Number | Date} dt ：日期 或 时间戳 或 日期对象
 */

import {
    _dt,
    _details,
    _initFormat
} from "./helper"

import {
    format
} from "./core"

import {isYesterday} from "./verify"

export const year = function (dt) {
    return _details(dt).year
}
export const month = function (dt) {
    return _details(dt).month
}
export const date = function (dt) {
    return _details(dt).date
}
export const hour = function (dt) {
    return _details(dt).hour
}
export const minute = function (dt) {
    return _details(dt).minute
}
export const second = function (dt) {
    return _details(dt).second
}
export const millisecond = function (dt) {
    return _details(dt).millisecond
}

/**
 * 获取 （给定日期 | 当前日期） 对应的季度
 * @param {String | Number } dt ：日期 或 时间戳
 */
export const quarter = function (dt) {
    let d = _dt(dt)
    let m = d.getMonth()
    return m < 3 ? 1 : m < 6 ? 2 : m < 9 ? 3 : 4
}

/**
 * 计算 当前时辰 或 指定时间 （年月日时分秒）
 * 
 * 凌晨0：00－6：00，
 * 早上 6：00-8:00；
 * 上午 8：00-12：00，上午是指8-12点工作时间
 * 中午12：00-14：00,中午是指12-14点午休时间
 * 下午14：00-18：00，下午是指14-18点下午工作时间
 * 晚上18：00-21：00；
 * 深夜：21：00-24：00
 *
 * @param { string | number } dt ：指定时间
 */
export const when = function (dt) {
    let hour = _dt(dt).getHours()
    return ['凌晨', '早上', '上午', '中午', '下午', '晚上', '深夜'][
        hour >= 0 && hour <= 6 ? 0 :
        hour > 6 && hour <= 8 ? 1 :
        hour > 8 && hour <= 12 ? 2 :
        hour > 12 && hour <= 14 ? 3 :
        hour > 14 && hour <= 18 ? 4 :
        hour > 18 && hour <= 21 ? 5 : 6
    ]
}


/**
 * 
 * @param { String } key 
 * @param {String | Number | Date} dt ：日期 或 时间戳 或 日期对象
 */
export const get = function (key, dt) {
    return _details(dt)[Object.keys(_details(dt)).find(i => i.charAt(0) === key || i === key || (i.charAt(0) + i.charAt(5) === key) || (i === "month" && key == "M"))]
}

/**
 * 时间转换成数组
 * 获取年月日时分秒
 * @param {String | Number} dt 
 */
export const toArray = function (dt) {
    return Object.values(_details(dt)).slice(0, 6)
}
/**
 * 
 * 时间转换成对象
 * 获取年月日时分秒
 */
export const toObject = function (dt) {
    let r = _details(dt)
    delete r.millisecond
    return r
}

/**
 * 获取 （给定日期 | 当前日期） 对应的回显星期
 * 根据 （给定日期 | 当前日期）回显对应的星期
 * @param {String | Number } dt ：日期 或 时间戳
 * @param {String} prefix :前缀
 */
export const previwWeekByDate = function (dt = new Date(), prefix = '星期') {
    let d = _dt(dt)
    return prefix + ['日', '一', '二', '三', '四', '五', '六'][d.getDay()]
}


/**
 * 获取 （给定日期 | 当前日期） 对应的回显月份
 * 根据 （给定日期 | 当前日期）回显对应的月份
 * @param {String | Number } dt ：日期 或 时间戳
 * @param {String} suffix ：后缀
 */
export const previwMonthByDate = function (dt = new Date(), suffix = '月') {
    let d = _dt(dt)
    return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][d.getMonth()] + suffix
}

/**
 * 星期回显
 * 只是用来回显
 *  @param {String | Number}  i: 回显对应的数字
 *  @param {String}  invalidTip: 传入的数字超出有效数字范围的提示语，默认是 Invalid week
 * 
 */
export const previewWeek = function (i, prefix = "周", invalidTip) {
    if (i === 0) i = 7
    return i > 0 && i < 8 ? prefix + ['一', '二', '三', '四', '五', '六', '日'][i - 1] : invalidTip === undefined ? 'Invalid week' : invalidTip
}

/**
 * 月份回显
 * 只是用来回显
 * @param { String | Number} i ：回显对应的数字
 * @param { String } invalidTip  ：传入的数字超出有效数字范围的提示语，默认是 Invalid week
 * @return String
 */
export const previewMonth = function (i, invalidTip) {
    return i > 0 && i < 13 ? ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][i - 1] + '月' : invalidTip === undefined ? 'Invalid month' : invalidTip
}



// 周的首末日期
export const weekFirstLast = function (...args) {
    let dt = _initFormat(args, 'yyyy-MM-dd').dt;
    let ft = _initFormat(args, 'yyyy-MM-dd').format;
    let w = dt.getDay() == 0 ? 7 : dt.getDay()
    dt.setDate(dt.getDate() - w + 1)
    return {
        first: format(dt, ft),
        last: format(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 6), ft),
    }
}

// 月的首末日期
export const monthFirstLast = function (...args) {
    let dt = _initFormat(args, 'yyyy-MM-dd').dt;
    let ft = _initFormat(args, 'yyyy-MM-dd').format;
    return {
        first: format(new Date(dt.getFullYear(), dt.getMonth(), 1), ft),
        last: format(new Date(dt.getFullYear(), dt.getMonth() + 1, 0), ft),
    }
}


/**
 * ※ 
 * 本周第一天
 * @param { String } format ：格式，默认 yyyy-MM-dd
 */
export const getCurWeekFirstDay = function () {
    return weekFirstLast(new Date(), 'yyyy-MM-dd').first
}


/**
 * ※ 
 * 本周最后一天
 */
export const getCurWeekLastDay = function () {
    return weekFirstLast(new Date(), 'yyyy-MM-dd').last
}


/**
 * ※ 
 * 任一月份第一天
 */
export const getMonthFirstDay = function (dt) {
    let d = _dt(dt)
    return format(d, 'yyyy-MM-') + '01'
}

/**
 * ※ 
 * 任一月份最后一天
 * @param { String | Number} dt ：日期 或 时间戳
 */
export const getMonthLastDay = function (dt) {
    let d = _dt(dt)
    d.setMonth(d.getMonth() + 1) //月份+1
    d.setDate(1) //日设置成1号
    d.setDate(d.getDate() - 1) //倒退1日到当前月末最后一天
    return format(d, 'yyyy-MM-dd')
}


/**
 * ※ 
 * 获取两个日期相差多少天
 * @param {String | Number} d1 ：日期 或 时间戳
 * @param {String | Number} d2 ：日期 或 时间戳
 */
export const getDaysByDate = function (d1, d2) {
    let ret = parseInt(Math.abs(new Date(d1) - new Date(d2)) / 86400000)
    return isNaN(ret) ? 0 : ret
}


/**
 * ※ 
 * 获取 （给定日期 | 当前日期）为基准的 半年之前的日期
 * @param { String | Number } dt ：日期 或 时间戳
 */
export const getHalfYear = function (dt) {
    return format(new Date(_dt(dt) - 15768000000), 'yyyy-MM-dd')
}

/**
 * ※ 
 * gap 间隙，
 * 距 （给定日期|当前日期） 所属的周 前进后退 n 周的周首末日期
 * @param { Number } n ：前进（+） 后退（-）n 周后的日期
 * @param { String | Number } dt ：日期 或 时间戳
 * @param { String } ft ：格式
 */
export const getGapWeek = function (n = 0, dt = new Date(), ft = 'yyyy-MM-dd') {
    let {
        first,
        last
    } = weekFirstLast(dt)
    if (!n) return {
        first,
        last
    }
    return weekFirstLast(getGapDate(n * 7, n > 0 ? last : first), ft)
}



/**
 * ※ 
 * gap 间隙，意味距  （给定日期|当前日期）前后日期
 * 距 （给定日期|当前日期） n 天 的日期
 * @param { Number } n ：前进（+） 后退（-）n 天后的日期
 * @param { String | Number } dt ：日期 或 时间戳
 */
export const getGapDate = function (n = 0, dt = new Date(), ft) {
    let d = _dt(dt);
    d.setDate(d.getDate() + n);
    return format(d, ft || 'yyyy-MM-dd')
}


/**
 * ※ 
 * gap 间隙，意味距  （给定日期|当前日期）工作日（周一~周五的日期）
 * @param { String | Number } dt ：日期 或 时间戳
 * @param { String } ft ：格式
 */
export const getWeekWorkday = function (dt = new Date(), ft = 'yyyy-MM-dd') {
    let d = new Date(dt)
    let w = d.getDay() == 0 ? 7 : d.getDay()
    d.setDate(d.getDate() - w + 1)
    let first = format(d, ft)
    d.setDate(d.getDate() + 4)
    let last = format(d, ft)
    return {
        first,
        last
    }
}

/**
 * ※ 
 * gap 间隙，意味距  （给定日期|当前日期）工作日（周一~周五的日期）
 * @param { Number } n ：n周的工作日的首末日期
 * @param { String | Number } dt ：日期 或 时间戳
 * @param { String } ft ：格式
 */
export const getGapWeekWorkday = function (n = 0, dt = new Date(), ft = 'yyyy-MM-dd') {
    let {
        first,
        last
    } = getWeekWorkday(dt)
    if (!n) return {
        first,
        last
    }
    return getWeekWorkday(getGapDate(n * 5, n > 0 ? last : first), ft)
}

/**
 * ※ 
 * 距 （给定日期|当前日期） n 年 的日期
 * @param { Number } n ：前进（+） 后退（-）n 年后的日期
 * @param { String | Number } dt ：日期 或 时间戳
 */
export const getGapYearDate = function (n = 0, dt = new Date(), ft = 'yyyy-MM-dd') {
    let d = _dt(dt);
    d.setFullYear(d.getFullYear() + n);
    return format(d, ft)
}

/**
 * ※ 
 * 距 （给定日期 | 当前日期） n 月 的日期
 * @param { Number } n ：前进（+） 后退（-）n 月后的日期
 * @param { String | Number } dt dt ：日期 或 时间戳
 */
export const getGapMonthDate = function (n = 0, dt = new Date(), ft = 'yyyy-MM-dd') {
    let d = _dt(dt);
    d.setMonth(d.getMonth() + n);
    return format(d, ft)
}

/**
 * 获取当前日期所在周任意星期对应的日期 ,比如我想知道这周5的日期你能告诉我吗？这个函数 就可以告诉你
 * @param { Number } week ：星期
 * @param {String | Number } dt ：日期 或 时间戳
 */
export const getWeekByDate = function (week, dt, ft = 'yyyy-MM-dd') {
    if (!week) return ''
    // 获取日期时间
    let d = _dt(dt)
    //统一：用户传入 0 或 7 都是星期日
    let w = week === 0 ? 7 : week
    let i = d.getDay() === 0 ? 7 : d.getDay()
    if (w !== i) d.setDate(d.getDate() - (i - w));
    return format(d, ft)
}

/**
 * 获取（给定日期 | 当前日期） 所在对应月份的第几周
 * @param {String | Number } dt ：日期 或 时间戳info
 */
export const getMonthWeek = function (dt) {
    let d = format(_dt(dt), 'yyyy-MM-dd')
    let info = getMonthWeekInfo(d)
    return info[d].w
}

/**
 * 获取（给定日期 | 当前日期） 所在对应月份的星期信息
 * @param {String | Number } dt ：日期 或 时间戳
 */
export const getMonthWeekInfo = function (dt) {
    let dd = _dt(dt),
        ret = {},
        n = 1,
        isFirst = true,
        days = getMonthDays(dd),
        Month = dd.getMonth() + 1,
        prefix = dd.getFullYear() + '-' + (String(Month).padStart(2, 0)) + '-'
    for (let i = 1; i < days + 1; i++) {
        let re = weekFirstLast(prefix + i)
        let last = re.last
        if (month(last) !== Month && isFirst) {
            n++
            isFirst = false
        } else if (new Date(prefix + i).getDay() == 1) {
            n++
        }
        ret[prefix + String(i).padStart(2, 0)] = {
            ...re,
            w: n,
            d: days
        }
    }
    return ret
}


/**
 * 获取（给定日期 | 当前日期） 所在对应月份天数
 * @param {String | Number } dt ：日期 或 时间戳
 */
export const getMonthDays = function (dt) {
    let dd = _dt(dt);
    return new Date(dd.getFullYear(), dd.getMonth() + 1, 0).getDate()
}

/**
 * 获取 （给定日期 | 当前日期） 所在对应年份的第几周
 * @param {String | Number } dt ：日期 或 时间戳
 */
export const getYearWeek = function (dt) {
    let dd = _dt(dt)
    let d1 = new Date(dd.getFullYear(), dd.getMonth(), dd.getDate()),
        d2 = new Date(dd.getFullYear(), 0, 1),
        d = Math.round((d1 - d2) / 86400000);
    return Math.ceil((d + ((d2.getDay() + 1) - 1)) / 7);
}

/**
 * 获取 （给定日期 | 当前日期） 所在对应季度的第几周
 * @param {String | Number } dt ：日期 或 时间戳
 */
export const getQuarterWeek = function (dt) {
    let dd = _dt(dt),
        y = dd.getFullYear(),
        m = dd.getMonth() + 1,
        d = dd.getDate(),
        ret = getYearWeek([y, m, d].join('/'));
    if (m < 4) {
        return ret
    } else {
        let month = m < 7 ? 4 : m < 10 ? 7 : 10
        let week = ret - getYearWeek([y, month, 1].join('/'));
        var day = new Date(y, month, 1);
        if (day.getDay() > 1) week += 1;
        return week
    }
}

/**
 * 生成 基于当前 / 指定时间的 过去 n 天时间（包含当天日期）
 * @param {Number} days 基于当前 / 指定时间的 过去 n 天时间（包含当天日期）
 * @param {Boolean} dt 指定时间
 * @return 日期数组
 */
export const getPassDaysDate = function (days, dt) {
    if (!arguments.length) return [];
    return [...Array(days * 1 + 1).keys()].map(days => new Date((dt ? new Date(dt) : Date.now()) - 86400000 * days).toLocaleDateString()).map(item => item.split(/\/|-/).map(i => i.padStart(2, '0')).join('-')).splice(1)
}

/**
 * 计算两个日期间所有日期，以数组形式返回
 * 新增时间：2020/8/23
 * @param { string | number } startDate : 开始日期（13位时间戳 | 字符串日期）
 * @param { string | number } endDate ：结束日期（13位时间戳 | 字符串日期）
 * @return 日期间所有日期，以数组形式返回
 */
export const getBetweenDates = function (startDate, endDate) {
    // 如果开始日期都没有，直接返回 []
    if (!startDate) return []
    // 辅助函数
    let helper = (s, i) => new Date((+new Date(s) + i * 86400000)).toLocaleDateString().replace(/\//g, '-')
    // 开始日期时间戳
    let startDateStamp = +new Date(new Date(startDate).toLocaleDateString())
    // 结束日期时间戳
    let endDateStamp = endDate ? +new Date(new Date(endDate).toLocaleDateString()) : +new Date(new Date().toLocaleDateString())
    // 如果两者相等
    if (startDateStamp === endDateStamp) return [helper(new Date(endDate ? new Date() : startDate), 0)]
    // 获取最小的日期作为开始日期
    startDate = startDateStamp < endDateStamp ? new Date(startDateStamp) : new Date(endDate ? endDateStamp : +new Date())
    // 获取最大的日期作为结束日期
    endDate = startDateStamp < endDateStamp ? new Date(endDate ? endDateStamp : +new Date()) : new Date(startDateStamp)
    // 计算相差天数
    let gapDays = parseInt(Math.abs(startDateStamp - endDateStamp) / 86400000) + 1
    // 返回结果
    return Array(gapDays).fill(0).reduce((p, c, i) => [...p, helper(startDate, i)], [])
}

/**
 * 时刻回显
 * @param {Number String Date} dt 
 */
export const previewMoment = function(dt) {
    let target = +new Date(_dt(dt)),
        cur = +new Date,
        diff = parseInt((cur - target) / 1e3),
        minute = parseInt(diff / 60),
        hour = parseInt(diff / 3600);
    return  diff<= 60 ? "刚刚" : 
            minute < 60 ? minute + "分钟前" : 
            date(_dt(dt)) === date() ? hour + "小时前" :
            isYesterday(_dt(dt)) ? "昨天" :
            year(_dt(dt)) === year() ? format(_dt(dt), "M月d日") : format(_dt(dt), "YYYY/MM/dd")
}
