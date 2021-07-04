import endOf from '../manipulate/endOf'
/**
 * 获取 月份天数
 * @param { Number } m （月份）：1~12
 * @param {Date| String | Number } d ：Date 对象、"2020/1/1"、时间戳
 */
const daysInMonth = function (d = new Date()) {
    return endOf('M', new Date(d), 'D')
}
export default daysInMonth


/*
const getMonthDays = (m, d = new Date()) => {
  // parse date-time
  const dt = new Date(d.toString())
  // get full year
  const year = dt.getFullYear()
  // get month
  const month = m === undefined ? dt.getMonth() + 1 : m
  // get days in month
  return new Date(year, month, 0).getDate()
}

// get the number of days in any month of this year  

getMonthDays(1)

getMonthDays(12)

// get the number of days in any month of the passed date 

getMonthDays(2,2021) // 28

getMonthDays(2,2000) // 29

*/
