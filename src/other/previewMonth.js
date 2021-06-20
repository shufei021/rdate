/**
 * 月份回显
 * 只是用来回显
 * @param { String | Number} i ：回显对应的数字
 * @param { String } invalidTip  ：传入的数字超出有效数字范围的提示语，默认是 Invalid week
 * @return String
 */
const previewMonth = function (i, invalidTip) {
    return i > 0 && i < 13 ? ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][i - 1] + '月' : invalidTip === undefined ? 'Invalid month' : invalidTip
}
export default previewMonth
