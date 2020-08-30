import { _initFormat } from "./helper"
import { when , previwWeekByDate } from "./date"

/**
  * ※  Rdate 核心方法
  * @param  {...any} args :形参，生效的最多为前两个参数
  * 1个参数情况：
  *      1.1 参数为格式，则默认格式化当前时间
  *      1.2 参数为时间戳或字符串时间，则使用默认格式去格式化化给定的 时间戳或字符串时间
  * 2个参数情况：
  * 第一个参数表示格式化的日期，可以是时间戳或字符串时间
  * 第二个参数表示格式
  */
export const format = function(...args) {
    let dt = _initFormat(args,'yyyy-MM-dd hh:mm:ss').dt;
    let ft = _initFormat(args,'yyyy-MM-dd hh:mm:ss').format;
    // 时间补位对象
    let ret = {
        "M+": String((dt.getMonth() + 1)).padStart(2, 0),
        "d+": String(dt.getDate()).padStart(2, 0),
        "h+": String(dt.getHours()).padStart(2, 0),
        "m+": String(dt.getMinutes()).padStart(2, 0),
        "s+": String(dt.getSeconds()).padStart(2, 0)
    }
    // 需特别处理年
    let year = String(dt.getFullYear())
    /**
        * 标记并缓存模板内容
        */
    let mapVal = [] 
    ft = ft.replace(/\[(.+?)\]/g,function(a){
        mapVal.push(a.slice(1,-1))
        return "|"
    })

    /**
        * 星期兼容:星期/周
        */
    if(ft.includes('w')){//星期
        ft = ft.replace(/((w)+)/g, () => previwWeekByDate(dt))
    }

    if(ft.includes('W')){//周
        ft = ft.replace(/((W)+)/g, () => previwWeekByDate(dt,'周'))
    }

    /**
        * 时辰替换
        */
    if(ft.includes('t')){
        ft = ft.replace(/((t)+)/g, () => when(dt))
    }
    /**
        * 年的的标识字母 兼容连续的大写 小写
        */
    if(ft.includes('Y')){
        ft = ft.replace(/((Y)+)/g, a => year.substr(4-a.length))
        
    }
    if(ft.includes('y')){
        ft = ft.replace(/((y)+)/g, a => year.substr(4-a.length))
        
    }
    /**
        * 兼容时的字母大小写
        */
    if(ft.includes('H')){
        ft = ft.replace(/((H)+)/g, a => ret['h+'].substr(0, a.length))
    }
        
    /**
        * 开始进行正常的时间格式替换
        */
    for (let k in ret) {
        if (ft.includes(k.substr(0, 1))) {
            ft = ft.replace(new RegExp(k, "g"), a=>ret[k].substr(0, a.length))
        }
    }
    
    /**
        * 模板字符串处理
        */
    let formatArr = ft.split('|')
    let res  = ''
    for(let i=0;i<formatArr.length;i++){
        res += (formatArr[i]+mapVal[i])
    }
    /** 
        * 处理特殊情况
    */
    if((res+' ').slice(-10,-1)==='undefined' && formatArr[formatArr.length-1]!=='|'){
        res = res.slice(0,-9)
    }
    // 返回处理的结果
    return res
}