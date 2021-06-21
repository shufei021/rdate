# 取值/赋值

## 年

获取或设置年份。

```js
// 获取当前年份
rdate.year()

// 设置当前日期当中的年份为2025
rdate.year(2025)

//设置 指定日期的年份为指定年份
rdate.year(2025, '2021-1-1 12:59:59') //"2025-01-01 12:59:59"

// 指定格式
rdate.year(2025, '2021-1-1 12:59:59', 'yyyy-MM-dd') // "2025-01-01"
```

## 月

获取或设置月份。

接受 0 到 11 的数字。如果超过这个范围，将一直持续到年底。

```js
// 获取当前月份
rdate.month()

// 设置当前日期当中的月份为5
rdate.month(5)

//设置 指定日期的月份为指定月份
rdate.month(2, '2021-1-1 12:59:59') //"2025-02-01 12:59:59"
```

:::warning 注意
月份的索引为 0，因此 设置 1 月时则实际设置 值为 0
:::

## 日期

获取或设置月份的日期。

接受从 1 到 31 的数字。如果超过这个范围，将持续到日。

```js
// 获取当前日期
rdate.date()

// 设置当前日期当中的日期为20
rdate.date(20)

//设置 指定日期的日期为指定日期
rdate.date(20, '2021-1-1 12:59:59') //"2025-01-20 12:59:59"

// 指定格式
rdate.date(20, '2021-1-1 12:59:59', 'yyyy-MM-dd') // "2025-01-20"
```

## 小时

获取或设置小时。

接受 0 到 59 的数字。如果超过这个范围，将持续到日。

```js
// 获取当前小时
rdate.hour()

// 设置当前日期小时为20
rdate.hour(20)

//设置 指定日期的小时为指定小时
rdate.hour(20, '2021-1-1 12:59:59') // "2021-01-01 20:59:59"
```

## 分钟

获取或设置分钟。

接受 0 到 59 的数字。如果超过这个范围，将持续到小时。

```js
// 获取当前日期的分钟
rdate.minute()

// 设置当前日期当中的分钟为20
rdate.minute(20)

//设置 指定日期的年份为指定年份
rdate.minute(20, '2021-1-1 12:59:59') //"2025-01-01 12:20:59"
```

## 秒

获取或设置秒。

接受 0 到 59 的数字。如果超过这个范围，将持续到分钟。

```js
// 获取当前日期秒数
rdate.second()

// 设置当前日期当中的秒数为指定秒数
rdate.second(20)

//设置 指定日期的年份为指定年份
rdate.second(20, '2021-1-1 12:59:59') //"2025-01-01 12:59:20"
```

## 毫秒

获取或设置毫秒。

接受 0 到 999 的数字。如果超过这个范围，将持续到秒。

```js
// 获取当前时间的毫秒数
rdate.millisecond()

// 设置当前日期当中的秒数为指定毫秒数
rdate.millisecond(2025)

//设置 指定日期的毫秒数为 指定 毫秒数
rdate.millisecond(20, '2021-1-1 12:59:59', '毫秒数为SSS') // "毫秒数为020"
```

## 星期

获取或设置星期几。

接受 0(上周星期日) 到 7(本周星期日)的数字。如果超过这个范围，将持续到几周。

```js
// 获取当前星期
rdate.day()

// 设置当前日期当中回退到周2日期
rdate.day(2)

//设置 指定日期的回退至周2的日期
rdate.year(2, '2021-1-1 12:59:59') //"2020-12-29 12:59:59"
```

## 季度

获取或设置季度。

```js
// 获取当前星期
rdate.quarter()

rdate.quarter(1, '2021-1-1') // '2021-01-10 00:00:00'
rdate.quarter(2, '2021-1-1') // '2021-04-10 00:00:00'
rdate.quarter(3, '2021-1-1') // '2021-07-10 00:00:00'
rdate.quarter(4, '2021-1-1') // '2021-10-10 00:00:00'

rdate.quarter(1, '2021-2-1') // '2021-02-10 00:00:00'
rdate.quarter(2, '2021-2-1') // '2021-05-10 00:00:00'
rdate.quarter(3, '2021-2-1') // '2021-08-10 00:00:00'
rdate.quarter(4, '2021-2-1') // '2021-11-10 00:00:00'

rdate.quarter(1, '2021-3-1') // '2021-03-10 00:00:00'
rdate.quarter(2, '2021-3-1') // '2021-06-10 00:00:00'
rdate.quarter(3, '2021-3-1') // '2021-09-10 00:00:00'
rdate.quarter(4, '2021-3-1') // '2021-12-10 00:00:00'

rdate.quarter(1, '2021-4-1') // '2021-01-10 00:00:00'
rdate.quarter(2, '2021-4-1') // '2021-04-10 00:00:00'
rdate.quarter(3, '2021-4-1') // '2021-07-10 00:00:00'
rdate.quarter(4, '2021-4-1') // '2021-10-10 00:00:00'
```

## 设置

unit 作为第一个参数，value 作为第二个参数，返回一个字符串日期。

语法：

```js
rdate.set(unit, value)
```

单位不区分大小写，支持复数和缩写形式。

```js
// 什么都不传，返回格式化后的当前时间 格式：YYYY-MM-DD HH:mm:ss
rdate.set()

// 设置当前时间年份为 2025
rdate.set('year', 2025)

// 设置 '1990-2-28 23:59:59' 的年份值为 2025
rdate.set('year', 2025, '1990-2-28 23:59:59') // "2025-02-28 23:59:59"

// 设置当前时间月份为 12
rdate.set('month', 11)

// 设置 '1990-2-28 23:59:59' 的月份为 12
rdate.set('month', 11, '1990-2-28 23:59:59') // "2025-12-28 23:59:59"
```

:::warning 注意
月份的索引为 0，因此 设置 1 月时则实际设置 值为 0
:::
所有可用单位列表

| 单位        | 缩写 | 描述                     |
| :---------- | :--- | :----------------------- |
| year        | y    | 年                       |
| month       | M    | 月份(0-11)               |
| date        | D    | 日期                     |
| hour        | h    | 小时                     |
| minute      | m    | 分钟                     |
| second      | s    | 秒                       |
| millisecond | ms   | 毫秒                     |
| day         | d    | 星期(星期日 0，星期六 6) |

## 获取

get 接受 unit 作为第一个参数，dt 作为第二个参数，返回一个字符串日期。

语法：

```js
rdate.get(unit, dt)
```

单位不区分大小写，支持复数和缩写形式。

```js
// 获取当前时间的

rdate.get('year')
rdate.get('month') // start 0
rdate..get('date')
rdate..get('hour')
rdate..get('minute')
rdate..get('second')
rdate..get('millisecond')
rdate..get('day')

// 获取指定日期的 年份
rdate.get('year','1990-1-1')
```

## 最大值

获取 日期列表中的最大值

语法：

```js
rdate.max(d1, d2, d3, ...d)
```

示例：

```js
rdate.max('1990-1-1', '2020-1-1', '2025-2-3') //  "2025-2-3"
```

## 最小值

获取 日期列表中的最小值

语法：

```js
rdate.min(d1, d2, d3, ...d)
```

示例：

```js
rdate.min('1990-1-1', '2020-1-1', '2025-2-3') //  "1990-1-1"
```