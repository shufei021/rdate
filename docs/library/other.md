# 其它

## 中文月份

根据日期获取转换成中文的月份

```js
// 获取当前日期的月份
rdate.getMonth()

// 根据日期获取月份
rdate.getMonth('2021-2-2') // "二月"

rdate.getMonth('2021-2-2', '月份') // "二月份"
```

## 中文星期

根据日期获取转换成中文星期

```js
rdate.getWeek('2021-2-2') // "星期二"

rdate.getWeek('2021-2-2', '周') // "周二"
```

## 星期回显

接收 1-7

```js
rdate.previewWeek() // "Invalid week"
rdate.previewWeek(1) // "周一"
rdate.previewWeek(7) // "周日"
```

## 月份回显

接收 1-12

```js
rdate.previewMonth(1) // "一月"
rdate.previewMonth(12) // "十二月"
```
