/*
 * Date.js v1.0.0
 * Anthor  Shu Fei
 * update Date:2018-07-21
 */

/**
 * (验证类)
 * 检查年份是否是闰年
 * 参数可选,表示检查给定的年份
 * 不传参默认检查当前年份
 */
function isLeapYear(){
    var y=arguments[0]?arguments[0]:new Date().getFullYear();
    return y%4===0&&y%100!==0 || y%400===0
}

/**
 * (验证类)
 * 只验证年月日是否合法
 * 参数一个,表示给定验证的日期
 * 验证日期
 */
function isValidDate(date){
 	var f=date.split(/[\_./-]/);
 	var s=f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2]);
	var reg=/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/;
	return reg.test(s)
} 

/**
 * (验证类)
 * 只验证时分秒是否合法
 * 参数一个,表示给定验证的时分秒
 * 验证时间
 */
function isValidTime(time){
 	var f=time.split(':');
 	var s=f[0]+':'+(f[1].length<2?'0'+f[1]:f[1])+':'+(f[2].length<2?'0'+f[2]:f[2]);
	var reg=/^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/;
	return reg.test(s)
}

/**
 * (验证类)
 * 检查验证完整日期 年月日时分秒格式是否合法
 * 参数一个,表示给定验证的年月日时分秒
 * 验证日期时间格式
 */
function isValidateDateTime(dateTime){
 	var a=dateTime.split(' ');
 	var f=a[0].split(/[\_./-]/);
 	var s=a[1].split(':');
 	var zf=f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2]);
 	var zs=s[0]+':'+(s[1].length<2?'0'+s[1]:s[1])+':'+(s[2].length<2?'0'+s[2]:s[2]);
 	return isValidDate(zf)&&isValidTime(zs)
}


 /*
 * (获取类)
 * 第一个参数n必填,表示获取日期的前n天或后n天
 * 第二个参数可选,表示给定日期,获取给定日期的前n天或后n天,否则获取为当前日期的前n天或后n天
 * n为正表示前n天 -n表示后n天
 */
function getBeAfDateByDate(n){
    var dt =arguments[1]?new Date(arguments[1]):new Date();
    dt.setDate(dt.getDate() + n);
    return dt.getFullYear()+'-'+(dt.getMonth()+1<10?'0'+(dt.getMonth()+1):(dt.getMonth()+1))+'-'+(dt.getDate()<10?'0'+dt.getDate():dt.getDate())
}

/*
 * (获取类)
 * 第一个参数n必填,表示获取日期的前n月或后n月日期
 * 第二个参数可选,表示给定日期,获取给定日期的前n月或后n月,否则获取为当前日期的前n月或后n月日期
 * 传参获取n月前的日期 6为半年前 12为1年前
 * n为正表示前n月 -n表示后n月
 */
function getBeAfDateByMonth(n){
    var dt =arguments[1]?new Date(arguments[1]): new Date();
    dt.setMonth(dt.getMonth() + n);
    return dt.getFullYear()+'-'+(dt.getMonth()+1<10?'0'+(dt.getMonth()+1):(dt.getMonth()+1))+'-'+(dt.getDate()<10?'0'+dt.getDate():dt.getDate())
}

/*
 * (获取类)
 * 不传参则获取当天的星期
 * 传参的参数表示给定的日期,返回对应的星期,参数个数为年月日
 * 获取当前时间所在的星期,
 */
function getWeek(){
	var i=arguments[0]?new Date(arguments[0]).getDay():new Date().getDay()
	return ['日','一','二','三','四','五','六'][i]
}

/*
 * (获取类)
 * 第一个参数n必填,星期一 ~ 星期日对应参数是1 ~ 0
 * 第二参数可选,表示给定日期,不填写默认为当前日期
 * 获取当前日期或给定日期所在周,给定一个星期n,返回对应的日期
 */
function getWeekByDate(n){
	var i=arguments[1]?new Date(arguments[1]).getDay():new Date().getDay()
	if(i===n){
		return arguments[1]?dateToStandard(arguments[1]).split(' ')[0]:dateFormat('yyyy-MM-dd',new Date())
	}else if(i===0){
		switch(n){
			case 1:
			return arguments[1]?getBeAfDateByDate(-6,arguments[1]):getBeAfDateByDate(-6)
			case 2:
			return arguments[1]?getBeAfDateByDate(-5,arguments[1]):getBeAfDateByDate(-5)
			case 3:
			return arguments[1]?getBeAfDateByDate(-4,arguments[1]):getBeAfDateByDate(-4)
			case 4:
			return arguments[1]?getBeAfDateByDate(-3,arguments[1]):getBeAfDateByDate(-3)
			case 5:
			return arguments[1]?getBeAfDateByDate(-2,arguments[1]):getBeAfDateByDate(-2)
			case 6:
			return arguments[1]?getBeAfDateByDate(-1,arguments[1]):getBeAfDateByDate(-1)
		}
	}else if(i===1){
		switch(n){
			case 2:
			return getBeAfDateByDate(-1)
			case 3:
			return getBeAfDateByDate(-2)
			case 4:
			return getBeAfDateByDate(-3)
			case 5:
			return getBeAfDateByDate(-4)
			case 6:
			return getBeAfDateByDate(-5)
			case 0:
			return getBeAfDateByDate(-6)
		}
	}else{
		switch(n){
			case 1:
			return getBeAfDateByDate(1-i)
			case 2:
			return getBeAfDateByDate(2-i)
			case 3:
			return getBeAfDateByDate(3-i)
			case 4:
			return getBeAfDateByDate(4-i)
			case 5:
			return getBeAfDateByDate(5-i)
			case 6:
			return getBeAfDateByDate(6-i)
			case 0:
			return getBeAfDateByDate(7-i)
		}
	}
}

/* (获取类)
 * 任意给一个日期，获取这个日期所在的月份有多少天
 */
function getMaxDayOfDate(date){
    if(date){
        var t=date.split(' ')[0].split(/[\_./-]/,2);
        var d=t[0]+'-'+((t[1]-0+1)<10?'0'+(t[1]-0+1):(t[1]-0+1))+'-01';
        return getBeAfDateByDate(1,d).split('-')[2]   
    }else{
        var t=new Date().getFullYear()+'-'+((new Date().getMonth()+1)<10?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1))+'-01';
        return getBeAfDateByDate(1,t).split('-')[2]
    }
}


/* (获取类)
 * 获取日期所在年的第几周
 * 
 */
function getWeekNumOfYear(date){
	var date2=date;
	var y=date.split(/[/-]/)[0]-0;
	var m=date.split(/[/-]/)[1]-0;
	var date1=y+'-'+(m<10?'0'+m:m)+'-01';
	return Math.ceil((getDateDiff(date1,date2)+1)/7);
}

/* (获取类)
 * 获取两个时间戳相差多少天
 */ 
function getDaysByStamps(stamp1,stamp2){
	return parseInt(Math.abs(stamp1-stamp2)/1000/60/60/24)
}

/**
 * 
 * (获取类)
 * 日期天数差  参数格式:年月日
 * 第一个参数：开始日期 必填项
 * 第二个参数可选，填写则表示给定结束日期，不填写结束日期默认为当前日期
 */	
function getDateDiff(){
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


/* 
 * (获取类)
 * 只传开始日期,返回开始日期到当前日期的所有日期
 * 起止日期都传,返回起止日期之间并包含起止日期在内的所有日期
*/
function getAllDatesBetween(startDate,endDate){
    var arr=[];
    var now=new Date();
    var endDate=endDate?endDate:(now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate());
    var days=parseInt(Math.abs(new Date(startDate.split(' ')[0]+' 00:00:00') - new Date(endDate.split(' ')[0]+' 00:00:00'))/1000/24/60/60)+1;
    for(var i=0;i<days;i++){
        var stamp=new Date(new Date(startDate).getTime()+i*86400000);
        arr.push(stamp.getFullYear()+'-'+((stamp.getMonth()+1)<10?'0'+(stamp.getMonth()+1):(stamp.getMonth()+1))+'-'+(stamp.getDate()<10?'0'+stamp.getDate():stamp.getDate()))
    }
    return arr
}



/*
* (获取类)
* 获取日期中部分信息
* 可获取信息:y M d h s m
* 年月日时分秒
* 第一个参数为日期部分信息的名字必填项
* 第二个参数可选,表示给定时间戳,获取时间戳转成日期的信息
*/
function getDatePart(name){
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

/**
 * 
 * (工具类)
 * 日期分割为数组
 * 没有传参数则分割当前时间
 * 传参数则分割指定时间
 */
function dateToArray(){
	var d=new Date()
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
 * (工具类)
 * 日期格式化成标准的2位
 * 第一个参数必填,适合日期部分 . _ / - 日期合法 没有补零
 */
function dateToStandard(){
	var at=arguments[0].split(' ');
	var f=at[0].split(/[\_./-]/);
	if(at[1]){
		var s=at[1].split(':');
		return f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2])+' '+(s[0].length<2?'0'+s[0]:s[0])+':'+(s[1].length<2?'0'+s[1]:s[1])+':'+(s[2].length<2?'0'+s[2]:s[2])
	}else{
		return f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2])
	}
}

/**
 * (工具类)
 * 日期加减
 * 相对当前日期进行加减
 * 相对给定日期进行加减
 * 参数 n 必填项
 * 第二个参数可选，表示给定日期，对给定日期进行的加减
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
 * (工具类)
 * 日期格式化
 *
 * 参数：{format} 格式 必填项
 * 第二个参数可选,表示格式化的时间戳
 * 第二个参数不填，返回当前日期格式化后的字符串
 */
function dateFormat(format){
	var d=new Date();
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



/* (工具类)
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
