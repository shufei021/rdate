import { _initArgs, padStart, FORMAT_DEFAULT } from '../utils'

import getWeek from '../other/getWeek'
/**
 * @param  {...any} args :形参，生效的最多为前两个参数
 * 1个参数情况：
 *      1.1 参数为格式，则默认格式化当前时间
 *      1.2 参数为时间戳或字符串时间，则使用默认格式去格式化化给定的 时间戳或字符串时间
 * 2个参数情况：
 * 第一个参数表示格式化的日期，可以是时间戳或字符串时间
 * 第二个参数表示格式
 */
const format = function (...args) {
    try {
        const { dt, ft } = _initArgs(args, FORMAT_DEFAULT)
        const map = {
            Y: String(dt.getFullYear()), //4位数 年份
            M: padStart(dt.getMonth() + 1, 2, 0), // 2位数 月份
            D: padStart(dt.getDate(), 2, 0), // 2位数 日期
            H: padStart(dt.getHours(), 2, 0), // 2位数 时
            m: padStart(dt.getMinutes(), 2, 0), // 2位数 分
            s: padStart(dt.getSeconds(), 2, 0), //2位数 秒
            S: padStart(dt.getMilliseconds(), 3, 0) + '', // 3位数 毫秒
            Q: Math.floor((dt.getMonth() + 3) / 3) + '' //季度
        }
        const result = ft.replace(/\[([^\]]+)]|y{1,4}|Y{1,4}|M{1,2}|d{1,2}|D{1,2}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|q|t|w|W|S{1,3}/g, match => {
            // 匹配中的首字符
            let k = match[0]
            // 匹配到的字符串长度
            let len = match.length
            switch (k) {
                case 'y':
                case 'Y':
                    return match.replace(new RegExp('((' + k + ')+)', 'g'), a => map.Y.substr(4 - a.length))
                case 'M':
                    return len == 1 ? Number(map.M) : map.M
                case 'D':
                case 'd':
                    return len == 1 ? Number(map.D) : map.D
                case 'H':
                case 'h':
                    return len == 1 ? Number(map.H) : map.H
                case 'm':
                    return len == 1 ? Number(map.m) : map.m
                case 's':
                    return len == 1 ? Number(map.s) : map.s
                case 'S':
                    return match.replace(new RegExp('((' + k + ')+)', 'g'), a => map.S.substr(3 - a.length))
                case '[':
                    return match.replace(/\[|\]/g, '')
                case 'q':
                    return map.Q
                case 'W':
                    return getWeek(dt, '周')
                case 'w':
                    return getWeek(dt)
                default:
                    return match
            }
        })
        return result
    } catch (e) {
        console.log(e)
        return new Date('') // Invalid Date
    }
}
export default format
