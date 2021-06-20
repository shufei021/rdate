import isAfter from './isAfter'
import { _dt } from '../utils'
const isSameOrAfter = function (d1, d2 = new Date()) {
    return isAfter(d1, d2) || +new Date(_dt(d1)) === +new Date(_dt(d2))
}
export default isSameOrAfter
