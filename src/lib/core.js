/*
 * @Description: Rdate 日期核心方法
 * @Author: shufei
 * @Date: 2020-10-08 09:38:52
 * @LastEditTime: 2020-11-13 11:56:03
 * @LastEditors: shufei
 */

import { _initFormat, padStart } from './helper'
import { when, previwWeekByDate } from './date'

/**
 * ※  Rdate 核心方法
 * @param  {...any} args :形参，生效的最多为前两个参数
 * 1个参数情况：
 *      1.1 参数为格式，则默认格式化当前时间
 *      1.2 参数为时间戳或字符串时间，则使用默认格式去格式化化给定的 时间戳或字符串时间
 * 2个参数情况：
 * 第一个参数表示格式化的日期，可以是时间戳或字符串时间
 * 第二个参数表示格式
 */
export const format = function (...args) {
    let dt = _initFormat(args, 'yyyy-MM-dd hh:mm:ss').dt
    let ft = _initFormat(args, 'yyyy-MM-dd hh:mm:ss').format
    let ret = {
        Y: String(dt.getFullYear()),
        y: String(dt.getFullYear()),
        M: padStart(dt.getMonth() + 1, 2, 0),
        d: padStart(dt.getDate(), 2, 0),
        h: padStart(dt.getHours(), 2, 0),
        H: padStart(dt.getHours(), 2, 0),
        m: padStart(dt.getMinutes(), 2, 0),
        s: padStart(dt.getSeconds(), 2, 0),
        W: previwWeekByDate(dt, '周'),
        w: previwWeekByDate(dt),
        t: when(dt)
    }
    ft = ft.replace(/\[([^\]]+)]|y{1,4}|Y{1,4}|M{1,2}|d{1,2}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|t|w|W|S/g, function (b) {
        // 匹配中的首字符
        let k = b.charAt(0)
        // 匹配到的字符串长度
        let len = b.length
        if (b.includes('[')) {
            // 如果是模板字符串，去除首尾返回
            return b.slice(1, -1)
        } else if (['Y', 'y'].includes(k)) {
            // 如果是年份，根据正则处理返回
            return b.replace(new RegExp('((' + k + ')+)', 'g'), a => ret[k].substr(4 - a.length))
        } else {
            // 如果匹配字符串长度为1并且非星期（W、w）和 非时辰（t）转成实际数字 其他一律原样返回
            return len == 1 && !['W', 'w', 't'].includes(k) ? Number(ret[k]) : ret[k]
        }
    })
    return ft
}
