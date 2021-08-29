import format from '../display/format'
/**
 * @description: 传入日期是否就是当天
 * @param {Date | String | Number} dt：
 * @return {Boolean}
 */

const isTomorrow = function (dt = new Date()) {
    return ['getFullYear', 'getMonth', 'getDate'].every(i => new Date(+new Date() + 86400000)[i]() === new Date(dt)[i]())
}
export default isTomorrow
