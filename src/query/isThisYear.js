import format from '../display/format'
const isThisYear = function (dt = new Date()) {
    return format(dt, 'YYYY') === format(new Date(), 'YYYY')
}
export default isThisYear
