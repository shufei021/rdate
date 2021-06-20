import isBefore from './isBefore'
import { _dt } from '../utils'
const isSameOrBefore = function (d1, d2 = new Date()) {
    return isBefore(d1, d2) || +new Date(_dt(d1)) === +new Date(_dt(d2))
}
export default isSameOrBefore
