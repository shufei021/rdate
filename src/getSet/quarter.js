import format from '../display/format'
import { FORMAT_DEFAULT } from '../utils'
const quarter = function (n, d = new Date(), ft = FORMAT_DEFAULT) {
    let dt = new Date(d)
    let q = Math.floor((dt.getMonth() + 3) / 3)
    if (!arguments.length) return q //季度
    if (n === q) {
        return format(dt, ft)
    } else {
        dt.setMonth(dt.getMonth() + n * 3 - 3 * q)
        return format(dt, ft)
    }
}
export default quarter
