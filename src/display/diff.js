const absFloor = n => (n < 0 ? Math.ceil(n) || 0 : Math.floor(n))
const handler = function (value, dt) {
    let d = new Date(dt)
    d.setMonth(d.getMonth() + value * 1)
    return d
}
const monthDiff = (a, b) => {
    a = new Date(a)
    b = new Date(b)
    if (a.getDate() < b.getDate()) return -monthDiff(b, a)
    const wholeMonthDiff = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth())
    const anchor = handler(wholeMonthDiff, a)
    const c = b - anchor < 0
    const anchor2 = handler(wholeMonthDiff + (c ? -1 : 1), a)
    return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0)
}

const diff = function (d1, d2, unit = 'millisecond', float) {
    const SECONDS_A_MINUTE = 60
    const SECONDS_A_HOUR = SECONDS_A_MINUTE * 60
    const SECONDS_A_DAY = SECONDS_A_HOUR * 24
    const SECONDS_A_WEEK = SECONDS_A_DAY * 7
    const MILLISECONDS_A_SECOND = 1e3
    const MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND
    const MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND
    const MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND
    const MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND
    const diff = new Date(d1) - new Date(d2)
    let result = monthDiff(d1, d2)
    unit = unit.length > 1 ? unit.toLowerCase() : unit
    switch (unit) {
        case 'year':
        case 'y':
            result /= 12
            break
        case 'month':
        case 'M':
            break
        case 'day':
        case 'd':
            result = diff / MILLISECONDS_A_DAY
            break
        case 'hour':
        case 'h':
            result = diff / MILLISECONDS_A_HOUR
            break
        case 'minute':
        case 'm':
            result = diff / MILLISECONDS_A_MINUTE
            break
        case 'second':
        case 's':
            result = diff / MILLISECONDS_A_SECOND
            break
        case 'millisecond':
        case 'ms':
            result = diff
            break
        case 'week':
        case 'w':
            result = diff / MILLISECONDS_A_WEEK
            break
        case 'quarter':
        case 'Q':
            result /= 3
            break
        default:
            result = diff
    }
    return float ? result : absFloor(result)
}
export default diff
