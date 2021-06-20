# 查询

## 是否是润年

```js
// 判断本年 是否是润年
rdata.isLeapYear()

// 判断 '2004-1-1' 所属年份 是否润年
rdate.isLeapYear('2004-1-1') // true
```

## 是否有效日期

```js
rdate.isValid('') // true
```

## 是否今天

API 来检测传入的日期是否为今天,不传参则检测日期默认为今天

```js
rdate.isToday() // true
```

## 是否昨天

API 来检测传入的日期是否为今天,不传参则检测日期默认为今天

```js
rdate.isYesterday(rdate.add(-1, 'day')) // true
rdate.isYesterday(rdate.subtract(1, 'day')) // true
```

## 是否明天

API 来检测传入的日期是否为明天,不传参则检测日期默认为当前日期

```js
rdate.isTomorrow(rdate.add(1, 'day')) // true
```

## 是否今年

API 来检测传入的日期年份是否属于今年,不传参则检测日期默认为当前日期

```js
rdate.isThisYear(rdate.format()) // true
rdate.isThisYear() // true
```

## 是否日期

API 来检测传入的日期字符串 是否符合 HH-MM-DD 格式

```js
rdate.isDate() // false

rdate.isDate('2020') // false

rdate.isDate('2020-1') // false

rdate.isDate('2020-1-1') //true

rdate.isDate('2020-2-1') // true

rdate.isDate('2020-2-30') // false
```

## 是否时间

API 来检测传入的时间字符串 是否符合 HH:mm:ss 格式

```js
rdate.isTime() // false

rdate.isTime('00:00:00') // true

rdate.isTime('24:00:00') // false

rdate.isTime('00:59:00') // true

rdate.isTime('00:60:00') // false

rdate.isTime('00:00:59') // true

rdate.isTime('00:00:60') // false
```

## 是否日期时间

API 来检测传入的日期时间字符串 是否符合 YYYY-MM-DD HH:mm:ss 格式

```js
rdate.isDateTime() //false

rdate.isDateTime('2020/1/1') // false

rdate.isDateTime('2020/1/1') // false

rdate.isDateTime('2020/1/1 12') // false

rdate.isDateTime('2020/1/1 12:12') // false

rdate.isDateTime('2020/1/1 12:12:12') // true

rdate.isDateTime('2020/1/1 24:12:12') // false

rdate.isDateTime('2020/1/1 12:60:12') // false

rdate.isDateTime('2020/1/1 12:59:12') // true

rdate.isDateTime('2020/1/1 12:59:60') // false

rdate.isDateTime('2000/2/30 12:59:59') // false

rdate.isDateTime('2000/2/28 12:59:59') // true
```

## 是否日期之间

检测一个日期（check）是否在另外两个日期（from,to）之间

语法：

```js
rdate.isBetween(from, to, check)
```

示例：

```js
rdate.isBetween('2021/6/20', '2021/6/22', '2021/6/19') // false

rdate.isBetween('2021/6/20', '2021/6/22', '2021/6/20') // true

rdate.isBetween('2021/6/20', '2021/6/22', '2021/6/21') // true

rdate.isBetween('2021/6/20', '2021/6/22', '2021/6/22') // true

rdate.isBetween('2021/6/20', '2021/6/22', '2021/6/23') // false

rdate.isBetween('2021/6/20', '2021/6/21', '2021/6/21 00:00:00') // true

rdate.isBetween('2021/6/20', '2021/6/21', '2021/6/21 00:00:01') // false
```

## 之前

检测一个日期是否在另一个提供的 date-time 之前，第二个参数 没有传时，默认当前 date-time

```js
// '2021-6-20 11:33:00' 是否在 '2021-6-20 00:00:00' 之前
rdate.isBefore('2021-6-20 11:33:00', '2021-6-20') // true
```

## 之后

检测一个日期是否在另一个提供的 date-time 之后，第二个参数 没有传时，默认当前 date-time

```js
// '2021-6-20 11:33:00' 是否在 '2021-6-20 00:00:00' 之后
rdate.isAfter('2021-6-20 11:33:00', '2021-6-20') // false
```

## 相同

语法：

```js
rdate.isSame(d1, unit, d2)
```

```js
// 检测两个日期 是否相同（通过转换成时间戳进行比较）
rdate.isSame('2021-5-20 12:13:10', '', '2021-5-20 12:13:10') // true

// 检测指定日期 是否和 当前日期（ new Date() ）相同
rdate.isSame('2021-5-20 12:13:10')

// 检测指定日期的年份 是否和 当前日期（ new Date() ）的年份 相同
rdate.isSame('2021-5-20 12:13:10', 'year')

// 检测指定日期的月份 是否和 当前日期（ new Date() ）的月份 相同
rdate.isSame('2021-5-20 12:13:10', 'month')

// 检测指定日期的日期 是否和 当前日期（ new Date() ）的日期 相同
rdate.isSame('2021-5-20 12:13:10', 'date')
```

所有可用单位列表

| 单位         | 缩写 | 描述 |
| :----------- | :--- | :--- |
| year         | y    | 年份 |
| month        | M    | 月份 |
| date         | D    | 日期 |
| hour         | h    | 小时 |
| minute       | m    | 分钟 |
| second       | s    | 秒   |
| milliseconds | ms   | 毫秒 |
| day          | d    | 星期 |

## 相同或之前

检测一个日期 和 另外个日期 是否相同 或是 之前

```js
rdate.isSameOrBefore('2021-1-20', '2021-6-20') // false

rdate.isSameOrBefore('2021-6-20', '2021-6-20') // true

rdate.isSameOrBefore('2021-11-20', '2021-6-20') // true

rdate.isSameOrBefore('2021-11-20') // true

rdate.isSameOrBefore('2021-3-20') // false
```

第二个参数不传则默认当前日期（new Date()）

## 相同或之后

检测一个日期 和 另外个日期 是否相同 或是 之后

```js
rdate.isSameOrAfter('2021-1-20', '2021-6-20') // true
```
