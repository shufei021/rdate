/**
 * 星期回显
 * 只是用来回显
 *  @param {String | Number}  i: 回显对应的数字
 *  @param {String}  invalidTip: 传入的数字超出有效数字范围的提示语，默认是 Invalid week
 */
const previewWeek = function (i, prefix = '周', invalidTip) {
    if (i === 0) i = 7
    return i > 0 && i < 8 ? prefix + ['一', '二', '三', '四', '五', '六', '日'][i - 1] : invalidTip === undefined ? 'Invalid week' : invalidTip
}
export default previewWeek
