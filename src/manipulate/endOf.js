import format from '../display/format'
const endOf = function (unit = 'd', dt = new Date(), ft = 'YYYY-MM-DD HH:mm:ss') {
    let d = new Date(dt)
    unit = typeof unit === 'string' && unit.length > 1 ? unit.toLowerCase() : unit
    switch (unit) {
        case 'year':
        case 'y':
            d.setMonth(0)
            d.setDate(1)
            d.setFullYear(d.getFullYear() + 1)
            d.setDate(d.getDate() - 1)
            d.setHours(23)
            d.setSeconds(59)
            d.setMinutes(59)
            d.setMilliseconds(999)
            break
        case 'month':
        case 'M':
            d.setMonth(d.getMonth() + 1)
            d.setDate(1)
            d.setDate(0)
            d.setHours(23)
            d.setSeconds(59)
            d.setMinutes(59)
            d.setMilliseconds(999)
            break
        case 'date':
        case 'day':
        case 'D':
        case 'd':
            d.setHours(23)
            d.setSeconds(59)
            d.setMinutes(59)
            d.setMilliseconds(999)
            break
        case 'hour':
        case 'h':
            d.setHours(0)
            d.setSeconds(59)
            d.setMinutes(59)
            d.setMilliseconds(999)
            break
        case 'minute':
        case 'm':
            d.setMinutes(0)
            d.setMilliseconds(999)
            break
        case 'second':
        case 's':
            d.setHours(23)
            d.setSeconds(59)
            d.setMinutes(59)
            d.setMilliseconds(999)
            break
        case 'week':
        case 'w':
            let w = d.getDay() // 0
            w = w == 0 ? 7 : w
            d.setDate(d.getDate() + (7 - w))
            d.setHours(23)
            d.setSeconds(59)
            d.setMinutes(59)
            d.setMilliseconds(999)
            break
        case 'quarter':
        case 'Q':
            let q = Math.floor((d.getMonth() + 3) / 3)
            d.setMonth(q * 3)
            d.setDate(1)
            d.setDate(0)
            d.setHours(23)
            d.setSeconds(59)
            d.setMinutes(59)
            d.setMilliseconds(999)
            break
    }
    return format(d, ft)
}
export default endOf
