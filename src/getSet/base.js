import format from '../display/format'
import { FORMAT_DEFAULT } from '../utils'
const base = function (t, n, d = new Date(), ft = FORMAT_DEFAULT) {
    let is = n === 0 || n,
        dt = new Date(d)
    if (is) {
        if (t === 8) {
            let day = dt.getDay()
            dt.setDate(dt.getDate() - ((day === 0 ? 7 : day) - n))
        } else if (t === 6) {
            dt.setMonth(n - 1)
        } else {
            dt[t == 1 ? 'setMilliseconds' : t == 2 ? 'setSeconds' : t == 3 ? 'setMinutes' : t == 4 ? 'setHours' : t == 5 ? 'setDate' : 'setFullYear'](n)
        }
        return format(dt, ft)
    } else {
        return dt[t == 1 ? 'getMilliseconds' : t == 2 ? 'getSeconds' : t == 3 ? 'getMinutes' : t == 4 ? 'getHours' : t == 5 ? 'getDate' : t == 6 ? 'getMonth' : t == 7 ? 'getFullYear' : 'getDay']()
    }
}
export default base
