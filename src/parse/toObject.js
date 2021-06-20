import { _dt } from '../utils'
const toObject = function (dt = new Date()) {
    let d = _dt(dt)
    return {
        year: d.getFullYear(),
        month: d.getMonth(),
        date: d.getDate(),
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds(),
        millisecond: d.getMilliseconds()
    }
}
export default toObject
