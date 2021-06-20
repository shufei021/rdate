/**
 * 是否润年
 * 能被4整除而不能被100整除.(如2004年就是闰年,1900年不是)
 * @param { Number | String } : 4位数年份，必需
 * @return 布尔值
 */
const isLeapYear = function (dt = new Date()) {
    let d = new Date(dt)
    let y = d.getFullYear()
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
}
export default isLeapYear
