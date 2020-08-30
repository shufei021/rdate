/**
 * ※ 
 * Rdate 的静态方法
 * 用于 根据参数获取时间 的兼容：输入日期
 * 第1种情况：用户没有传参数，即 dt === undefined，此时返回当前日期时间
 * 第2种情况：用户传参数不符合规定（标准的时间戳和日期），此时返回当前日期时间
 * 第3种情况：用户传参数符合规定（标准的时间戳和日期），此时返回给定日期
 */
export const _dt = function(dt){
    return dt?new Date(typeof dt == 'string' && dt.indexOf('-')>-1?dt.replace(/-/g,'/'):dt):new Date()
}

/** 
 * ※
 * Rdate 的静态方法
 * 初始化 dt 和 format
 * @param { Array } args ：参数解构后的数组
 * @param { String } ft  ：格式
 */
export const _initFormat = function(args,ft) {
    let [a,b] = args,
        dt=new Date(),
        format=ft;
    if(args.length==1){// 参数长度为1个时，检测传入的值的两种情况，不是格式就是时间，传入参数请按规则
        isNaN (new Date(a).valueOf())? (format = a) : (dt = new Date(typeof a == 'string'?a.replace(/-/g,'/'):a))
    }else if(args.length>=2){// 参数长度为2个时，正常对应
        dt = new Date(typeof a == 'string'?a.replace(/-/g,'/'):a)
        format = b
    }
    return {dt,format}
}

/**
 * ※ 
 * Rdate 的静态方法
 * 用于获取时间详情
 * @param {String | Number | Date} dt ：日期 或 时间戳 或 日期对象
 */
export const _details = function(dt=new Date()){
    let d = _dt(dt)
    return {
        year:d.getFullYear(),
        month:d.getMonth()+1,
        date:d.getDate(),
        hour:d.getHours(),
        minute:d.getMinutes(),
        second:d.getSeconds(),
        millisecond:d.getMilliseconds(),
    }
}