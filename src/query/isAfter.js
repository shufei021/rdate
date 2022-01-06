import isBefore from './isBefore'
/**
 * @description: 检测 一个日期 是否在另个日期之前
 * @param {String} dt
 * @param {String} check
 * @return {Boolean}
 */

const isAfter = function (dt, check = new Date()) {
    if(+new Date(dt) === +new Date(check)){
        return false
    }else{
        return  !isBefore(dt, check)
    }
}
export default isAfter
