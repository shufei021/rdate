/**
 *
 * @description 辅助函数
 *
 */
const compatibleDt = dt => (typeof dt == 'string' && dt.includes('-') && !dt.includes('T') ? dt.replace(/-/g, '/') : dt)
export const FORMAT_DEFAULT = 'YYYY-MM-DD HH:mm:ss' // 默认格式
export const INVALID_DATE_STRING = 'Invalid Date' // 无效日期
export const isUndefined = s => s === undefined
/**
 * 用于 根据参数获取时间 的兼容：输入日期
 * 第1种情况：用户没有传参数，即 dt === undefined，此时返回当前日期时间
 * 第2种情况：用户传参数不符合规定（标准的时间戳和日期），此时返回当前日期时间
 * 第3种情况：用户传参数符合规定（标准的时间戳和日期），此时返回给定日期
 */
export const _dt = dt => (dt ? new Date(compatibleDt(dt)) : new Date())

/**
 * 初始化 dt 和 format
 * @param { Array } args ：参数解构后的数组
 * @param { String } format  ：格式
 */
export const _initArgs = function (args, format = FORMAT_DEFAULT) {
    let [a, b] = args,
        len = args.length,
        dt = new Date(),
        ft = format
    if (len == 1) {
        // 参数长度为1个时，检测传入的值的两种情况，不是格式就是时间，传入参数请按规则
        if (isNaN(new Date(a).valueOf())) {
            ft = a
        } else {
            dt = new Date(compatibleDt(a))
        }
    } else if (len == 2) {
        // 参数长度为2个时，正常对应
        dt = new Date(compatibleDt(a))
        ft = b
    }
    return { dt, ft }
}
/**
 * @description: 原生js ES7 padStart 的 Polyfill
 * @param  {String} string 原始字符串
 * @param {Number} length 填充长度
 * @param {String} padStart 填充字符串
 */
export const padStart = (string, length, pad) => {
    const s = String(string)
    if (!s || s.length >= length) return string
    return `${Array(length + 1 - s.length).join(pad)}${string}`
}
