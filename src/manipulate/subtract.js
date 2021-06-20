import { FORMAT_DEFAULT } from '../utils'

import add from './add'
const subtract = function (value, unit, dt = new Date(), ft = FORMAT_DEFAULT) {
    return add(-value, unit, dt, ft)
}
export default subtract
