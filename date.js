/*!
 * Date.js v1.0.0
 * (c) 2018 Shu Fei
 * update Date:2018-07-19
 */

var d=new Date();

/**
 * 
 * 检查年份是否是闰年
 * 
 */
function isLeapYear(){
	var y=arguments[0]?arguments[0]:d;
	return y.getFullYear()%4===0&&y.getFullYear()%100!==0 || y.getFullYear()%400===0
}

/**
 * 
 * 日期格式化
 *
 * 参数：{format} 格式 必填项
 * 第二个参数可选,表示格式化的时间戳
 * 第二个参数不填，返回当前日期格式化后的字符串
 */
function dateFormat(format){
	var t=arguments[1]?new Date(arguments[1]):d;
	var date = {
	  "M+": t.getMonth() + 1,
	  "d+": t.getDate(),
	  "h+": t.getHours(),
	  "m+": t.getMinutes(),
	  "s+": t.getSeconds(),
	  "q+": Math.floor((t.getMonth() + 3) / 3),
	  "S+": t.getMilliseconds()
	};
	if (/(y+)/i.test(format)) {
	    format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
		    format = format.replace(RegExp.$1, RegExp.$1.length == 1? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
}

/**
 * 
 * 日期加减
 * 
 * 相对当前日期进行加减
 * 相对给定日期进行加减
 *  参数 n 必填项
 *  第二个参数可选，表示给定日期，对给定日期进行的加减
 * -n 减去n天
 *  n 加上n天
 */

function datePlusMinus(n){
	var t=arguments[1]?new Date(arguments[1]).getTime():d.getTime();
	var date=new Date(t+n*86400000);
	var y=date.getFullYear(); 
	var MM=date.getMonth()+1; 
	var dd=date.getDate(); 
	var hh=date.getHours(); 
	var mm=date.getMinutes(); 
	var ss=date.getSeconds(); 
	return y+'-'+(MM<10?'0'+MM:MM)+'-'+(dd<10?'0'+dd:dd)+' '+(hh<10?'0'+hh:hh)+':'+(mm<10?'0'+mm:mm)+':'+(ss<10?'0'+ss:ss);
}

/**
 * 日期天数差
 * 时间差
 * 日期差
 * 第一个参数：开始日期 必填项
 * 第二个参数可选，填写则表示给定结束日期，不填写结束日期默认为当前日期
 */	
function dateDiff(){
	if(arguments.length===1){//相对于当前日期
		var e=arguments[0].split(' ')[1]?arguments[0]:arguments[0]+' 00:00:00';
		return parseInt(Math.abs(new Date(d).getTime() - new Date(e).getTime())/1000/24/60/60)
	}else if(arguments.length===2){//比较两个指定日期
		var s=arguments[0].split(' ')[1]?arguments[0]:arguments[0]+' 00:00:00';
		var e=arguments[1].split(' ')[1]?arguments[1]:arguments[1]+' 00:00:00';
		return parseInt(Math.abs(new Date(s).getTime() - new Date(e).getTime())/1000/24/60/60)
	}else{
		return ''
	}
}

/**
 * 
 * 
 * 日期分割为数组
 * 没有传参数则分割当前时间
 * 传参数则分割指定时间
 */
function dateToArray(){
	if(arguments.length===0){//当前日期
		return [d.getFullYear(),d.getMonth()+1,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()]
	}else if(arguments.length===1){//指定日期
		var s=arguments[0].split(' ')[1]?arguments[0]:arguments[0]+' 00:00:00';
		var t=new Date(s);
		return [t.getFullYear(),t.getMonth()+1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()]
	}else{
		return ''
	}
}

/**
 * 
 * 日期格式化成标准的2位
 * 格式化 / - 
 */
function dateStandard(){
	var at=arguments[0].split(' ');
	var f=at[0].split(/[/|-]/);
	if(at[1]){
		var s=at[1].split(':');
		return f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2])+' '+(s[0].length<2?'0'+s[0]:s[0])+':'+(s[1].length<2?'0'+s[1]:s[1])+':'+(s[2].length<2?'0'+s[2]:s[2])
	}else{
		return f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2])
	}
}

/*
 * 
 * 只验证年月日合法性 
 */
function isValidDate(date){
	var reg=/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/;
	return reg.test(dateStandard(date))
} 

/* 
 * 
 * 完整日期时间检查
 * 
 */
function validateDateTime(v) {
	var t=dateStandard(v).split(' ');
	console.log(t[0])
	if(isValidDate(t[0])){
	    var reg = /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;
	    return reg.test(dateStandard(v))
	}else{
		return false;
	}
}

/*
 * 完整日期时间检查
 */
function checkDateTime(d){
	var datePart=isValidDate(d.split(' ',1)[0]);
	var timePart=validateDateTime(d);
	return datePart&&timePart
} 

/*
* 获取日期中部分信息
* 可获取信息:y M d h s m
* 年月日时分秒
* 第一个参数为日期部分信息的名字必填项
* 第二个参数可选,表示给定时间戳,获取时间戳转成日期的信息
*/
function datePart(name){
	var t=arguments[1]?new Date(arguments[1]):new Date();
	var y=t.getFullYear()
	var M=t.getMonth()+1
	var d=t.getDate()
	var h=t.getHours()
	var s=t.getMinutes()
	var m=t.getSeconds()
	switch(name) {
		case 'y':
		return y;
		break;
		case 'M':
		return M;
		break;
		case 'd':
		return d;
		break;
		case 'h':
		return h;
		break;
		case 's':
		return s;
		break;
		case 'm':
		return m;
		break;
		default:
		return '';
	}
}

/*
 * 日期转字符串
 * 参数是时间戳,可选 (指定时间戳转日期格式 1530902499242 => 2018-07-07 02:41:39)
 * 没有参数,默认格式化当前日期时间
 */ 
function dateToString(){
	var now=arguments[0]? new Date(arguments[0]):d
	var y=now.getFullYear(); 
	var m=now.getMonth()+1; 
	var d=now.getDate(); 
	var hh=now.getHours(); 
	var mm=now.getMinutes(); 
	var ss=now.getSeconds(); 
	return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d)+' '+(hh<10?'0'+hh:hh)+':'+(mm<10?'0'+mm:mm)+':'+(ss<10?'0'+ss:ss);
}

/*
 * getAllDates(startDate,endDate)方法:
 * 只传开始日期,返回开始日期到当前日期的所有日期
 * 起止日期都传,返回起止日期之间并包含起止日期在内的所有日期
 */
function getAllDates(startDate,endDate){
    var s=startDate,e=endDate;
    var startDate,endDate,arr=[];
    if(endDate){
        if(new Date(startDate).getTime()<=new Date(endDate).getTime()){
            startDate=s
            endDate=e
        }else{
            startDate=e
            endDate=s
        }
    }else{
        var now=new Date();
        startDate=s
        endDate=now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()
    }
    var days=parseInt(Math.abs(new Date(startDate.split(' ')[0]+' 00:00:00') - new Date(endDate.split(' ')[0]+' 00:00:00'))/1000/24/60/60)+1;
    for(var i=0;i<days;i++){
        var stamp=new Date(new Date(startDate).getTime()+i*86400000);
        arr.push(stamp.getFullYear()+'-'+((stamp.getMonth()+1)<10?'0'+(stamp.getMonth()+1):(stamp.getMonth()+1))+'-'+(stamp.getDate()<10?'0'+stamp.getDate():stamp.getDate()))
    }
    return arr
}

/*
 * 不传参则获取当天的星期
 * 传参的参数表示给定的日期,返回对应的星期,参数个数为年月日
 * 获取当前时间所在的星期,
 */
function getWeek(){
	var i=arguments[0]?new Date(arguments[0]).getDay():new Date().getDay()
	return ['日','一','二','三','四','五','六'][i]
}

/*
 * 
 * 不传参则返回当前标准化日期
 * 传参获取n月前的日期 6为半年前 12为1年前
 */
function getDateByMonth(){
    var dt =arguments[1]?new Date(arguments[1]): new Date();
    var n=arguments[0]?arguments[0]:0;
    dt.setMonth(dt.getMonth() - n);
    return dt.getFullYear()+'-'+(dt.getMonth()+1<10?'0'+(dt.getMonth()+1):(dt.getMonth()+1))+'-'+(dt.getDate()<10?'0'+dt.getDate():dt.getDate())
}
/*
 * 
 * 第一个参数n必填,表示获取日期的前n天或后n天
 * 第二个参数可选,表示给定日期,获取给定日期的前n天或后n天,否则获取为当前日期的前n天或后n天
 * n为正表示前n天 -n表示后n天
 */
function getDateByDate(n){
    var dt =arguments[1]?new Date(arguments[1]):new Date();
    var n=n?n:0;
    dt.setDate(dt.getDate() - n);
    return dt.getFullYear()+'-'+(dt.getMonth()+1<10?'0'+(dt.getMonth()+1):(dt.getMonth()+1))+'-'+(dt.getDate()<10?'0'+dt.getDate():dt.getDate())
}



/*
 * 获取两个时间戳相差多少天
 */ 
function getDaysByStamps(stamp1,stamp2){
	return parseInt(Math.abs(stamp1-stamp2)/1000/60/60/24)
}

/*
 * 获取两个日期相差多少天
 */
function getDaysByDates(date1,date2){
	return parseInt(Math.abs(new Date(date1)-new Date(date2))/1000/60/60/24)
}


/*
 * 任意给一个日期，获取这个日期所在的月份有多少天
 */
function MaxDayOfDate(date){
	var t=date.split(/[/-]/).splice(0,2);
	var d=t[0]+'-'+(t[1]-0+1)+'-01';
	return getDateByDate(1,d).split('-')[2]

}


/*
 * 判断日期所在年的第几周
 * 
 */

function WeekNumOfYear(date){
	var date2=date;
	var y=date.split(/[/-]/)[0]-0;
	var m=date.split(/[/-]/)[1]-0;
	var date1=y+'-'+(m<10?'0'+m:m)+'-01';
	return Math.ceil((getDaysByDates(date1,date2)+1)/7);
}

	













