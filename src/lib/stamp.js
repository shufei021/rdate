/**
 * # 时间戳
 */
import { _dt } from "./helper"
/**
 * ※ 
 * 获取 （给定日期 | 当前日期） 前进（+）后退（-）n 天后的时间戳
 * @param { Number } n : 前进（+）后退（-）n 天后的时间戳，不传默认是0，当天
 * @param { String } dt : 给定日期
 */

export const getStamp = function(dt, n) {
    let a = arguments
    if (!a.length) return +new Date()
    // 如果只有 一个参数,则视为对当前时间的加减
    if (a.length == 1 && typeof a[0] === "number") {
        n = a[0]
        dt = undefined
    }
    let d = _dt(dt)
    d.setDate(d.getDate() + (n === undefined ? 0 : n))
    return +d
}


/**
 * ※ 
 * 获取基于 （给定日期/当前时间） 的 前一天/后一天的时间戳
 * @param  { String } dt : 给定日期
 */
 export const getStampBeforAfter = function(dt) {
    let d = _dt(dt),b
    d.setDate(d.getDate() - 1)
    b = +d
    d.setDate(d.getDate() + 2)
    return {before: b,after: +d}
}


/**
 * ※ 
 * 定日期/今日 起止日期时间（00：00：00 ~ 23：59：59）
 * @param { String } dt: 给定日期
 */
export const getStampStartEnd = function(dt) {
    let d = _dt(dt)
    return {
        start: +new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0),
        end: +new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59)
    }
}


/**
 * ※ 
 * 获取两个时间戳相差多少天
 * @param { Number } stamp1 ：时间戳
 * @param { Number } stamp2 ：时间戳
 */
export const getDaysByStamp = function(stamp1, stamp2) {
    return parseInt(Math.abs(stamp1 - stamp2) / 86400000)
}