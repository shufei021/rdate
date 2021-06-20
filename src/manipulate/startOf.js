import format from '../display/format'
const startOf = function (unit, dt = new Date(), ft = 'YYYY-MM-dd HH:mm:ss') {
    let d = new Date(dt)
    unit = typeof unit === 'string' && unit.length > 1 ? unit.toLowerCase() : unit
    switch (unit) {
        case 'year':
        case 'y':
            d.setMonth(0)
            d.setDate(1)
            d.setHours(0)
            d.setSeconds(0)
            d.setMinutes(0)
            d.setMilliseconds(0)
            break
        case 'month':
        case 'M':
            d.setDate(1)
            d.setHours(0)
            d.setSeconds(0)
            d.setMinutes(0)
            d.setMilliseconds(0)
            break
        case 'date':
        case 'day':
        case 'D':
        case 'd':
            d.setHours(0)
            d.setSeconds(0)
            d.setMinutes(0)
            d.setMilliseconds(0)
            break
        case 'hour':
        case 'h':
            d.setSeconds(0)
            d.setMinutes(0)
            d.setMilliseconds(0)
            break
        case 'minute':
        case 'm':
            d.setMinutes(0)
            d.setMilliseconds(0)
            break
        case 'second':
        case 's':
            d.setMilliseconds(0)
            break
        case 'week':
        case 'w':
            let w = d.getDay()
            w = w == 0 ? 7 : w
            d.setDate(d.getDate() - (w - 1))
            d.setHours(0)
            d.setSeconds(0)
            d.setMinutes(0)
            d.setMilliseconds(0)
            break
        case 'quarter':
        case 'Q':
            let q = Math.floor((d.getMonth() + 3) / 3)
            d.setMonth(q * 3 - 3)
            d.setDate(1)
            d.setHours(0)
            d.setSeconds(0)
            d.setMinutes(0)
            d.setMilliseconds(0)
    }
    return format(d, ft)
}
export default startOf
