import format from '../display/format'

/**
 * @description: 指定日期 是否 在 指定的两个日期 之间
 * @param {*} from
 * @param {*} to
 * @param {*} check
 * @return {Boolean}
 */
const isBetween = function (from, to, check = new Date()) {
    from = new Date(format(from, 'YYYY/MM/DD HH:mm:ss'))
    to = new Date(format(to, 'YYYY/MM/DD HH:mm:ss'))
    check = new Date(format(check, 'YYYY/MM/DD HH:mm:ss'))
    return check >= from && check <= to
}
export default isBetween
