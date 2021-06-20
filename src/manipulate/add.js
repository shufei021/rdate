import format from '../display/format'
import { FORMAT_DEFAULT } from '../utils'

/**
 * @description:
 * @param {*} value
 * @param {*} unit
 * @param {*} dt
 * @param {*} ft
 */
const add = function (value, unit, dt = new Date(), ft = FORMAT_DEFAULT) {
    let d = new Date(dt)

    unit = typeof unit === 'string' && unit.length > 1 ? unit.toLowerCase() : unit
    switch (unit) {
        case 'day':
        case 'd':
            d.setDate(d.getDate() + value)
            break
        case 'week':
        case 'w':
            d.setDate(d.getDate() + 7 * value)
            break
        case 'month':
        case 'M':
            d.setMonth(d.getMonth() + value)
            break
        case 'quarter':
        case 'Q':
            d.setMonth(d.getMonth() + 3 * value)
            break
        case 'year':
        case 'y':
            d.setFullYear(d.getFullYear() + value)
            break
        case 'hour':
        case 'h':
            d.setHours(d.getHours() + value)
            break
        case 'minute':
        case 'm':
            d.setMinutes(d.getMinutes() + value)
            break
        case 'second':
        case 's':
            d.setSeconds(d.getSeconds() + value)
            break
        case 'millisecond':
        case 'ms':
            d.setMilliseconds(d.getMilliseconds() + value)
    }
    return format(d, ft)
}
export default add
