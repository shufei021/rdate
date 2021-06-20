import { _dt } from '../utils'
const toArray = function (dt) {
    let d = _dt(dt)
    return [d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()]
}
export default toArray
