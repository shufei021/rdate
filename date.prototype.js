/*
 * date.common.js v1.0.0
 * Anthor  Shu Fei
 * update Date:2018-07-21
 */


/**
 * (验证类)
 * 检查年份是否是闰年
 * 参数可选,表示检查给定的年份
 * 不传参默认检查当前年份
 */
Date.prototype.isLeapYear=function(){
    var y=arguments[0]?arguments[0].split(' ')[0].split(/[\_./-]/)[0]:this.getFullYear();
    return y%4===0&&y%100!==0 || y%400===0
};

/**
 * (验证类)
 * 只验证年月日是否合法
 * 参数一个,表示给定验证的日期
 * 验证日期
 */
Date.prototype.isValidDate=function(date){
 	var f=date.split(/[\_./-]/);
 	var s=f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2]);
	var reg=/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/;
	return reg.test(s);
}; 

/**
 * (验证类)
 * 只验证时分秒是否合法
 * 参数一个,表示给定验证的时分秒
 * 验证时间
 */
Date.prototype.isValidTime=function(time){
 	var f=time.split(':');
 	var s=f[0]+':'+(f[1].length<2?'0'+f[1]:f[1])+':'+(f[2].length<2?'0'+f[2]:f[2]);
	var reg=/^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/;
	return reg.test(s);
};

/**
 * (验证类)
 * 检查验证完整日期 年月日时分秒格式是否合法
 * 参数一个,表示给定验证的年月日时分秒
 * 验证日期时间格式
 */
Date.prototype.isValidateDateTime=function(dateTime){
 	var a=dateTime.split(' ');
 	var f=a[0].split(/[\_./-]/);
 	var s=a[1].split(':');
 	var zf=f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2]);
 	var zs=s[0]+':'+(s[1].length<2?'0'+s[1]:s[1])+':'+(s[2].length<2?'0'+s[2]:s[2]);
 	var regDate=/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/;
 	var regTime=/^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/;
 	return regDate.test(zf)&&regTime.test(zs)
}


 /*
 * (获取类)
 * 第一个参数n必填,表示获取日期的前n天或后n天
 * 第二个参数可选,表示给定日期,获取给定日期的前n天或后n天,否则获取为当前日期的前n天或后n天
 * n为正表示前n天 -n表示后n天
 */
Date.prototype.getBeAfDateByDate=function(n){
    var dt =arguments[1]?new Date(arguments[1]):this;
    dt.setDate(dt.getDate() + n);
    return dt.getFullYear()+'-'+(dt.getMonth()+1<10?'0'+(dt.getMonth()+1):(dt.getMonth()+1))+'-'+(dt.getDate()<10?'0'+dt.getDate():dt.getDate());
};

/*
 * (获取类)
 * 第一个参数n必填,表示获取日期的前n月或后n月日期
 * 第二个参数可选,表示给定日期,获取给定日期的前n月或后n月,否则获取为当前日期的前n月或后n月日期
 * 传参获取n月前的日期 6为半年前 12为1年前
 * n为正表示前n月 -n表示后n月
 */
Date.prototype.getBeAfDateByMonth=function(n){
    var dt =arguments[1]?new Date(arguments[1]):this;
    dt.setMonth(dt.getMonth() + n);
    return dt.getFullYear()+'-'+(dt.getMonth()+1<10?'0'+(dt.getMonth()+1):(dt.getMonth()+1))+'-'+(dt.getDate()<10?'0'+dt.getDate():dt.getDate());
};

/*
 * (获取类)
 * 不传参则获取当天的星期
 * 传参的参数表示给定的日期,返回对应的星期,参数个数为年月日
 * 获取当前时间所在的星期,
 */
Date.prototype.getWeek=function(){
	var i=arguments[0]?new Date(arguments[0]).getDay():this.getDay();
	return ['日','一','二','三','四','五','六'][i];
};

/*
 * (获取类)
 * 第一个参数n必填,星期一 ~ 星期日对应参数是1 ~ 0
 * 第二参数可选,表示给定日期,不填写默认为当前日期
 * 获取当前日期或给定日期所在周,给定一个星期n,返回对应的日期
 */

Date.prototype.getWeekByDate=function(week){
	var t=arguments[1]?new Date(arguments[1]):this
	var i=t.getDay()==0?7:t.getDay();
	var week=week==0?7:week;
	return i==week?t:(function(){t.setDate(t.getDate() -(i-week));return t})()
};


/* (获取类)
 * 任意给一个日期，获取这个日期所在的月份有多少天
 */
Date.prototype.getMaxDayOfDate=function(date){
   var dt=arguments[0]?new Date(arguments[0]):this
    dt.setMonth(dt.getMonth() + 1)
    dt.setDate(1)
    dt.setDate(dt.getDate() -1)
    return dt.getDate() 
};


/* (获取类)
 * 获取日期所在年的第几周
 * 
 */
Date.prototype.getWeekNumOfYear=function(date){
	if(arguments[0]){
		var eStamp=new Date(arguments[0]).getTime();
		var dt=new Date(arguments[0]);
		dt.setMonth(0)
		dt.setDate(1)
		var sStamp=dt.getTime()
		return Math.ceil(((eStamp-sStamp)/1000/24/60/60 + 1)/7)
	}else{
		var dt=this;
		var eStamp=new Date(dt).getTime();
		dt.setMonth(0)
		dt.setDate(1)
		var sStamp=dt.getTime()
		return Math.ceil((eStamp-sStamp)/1000/24/60/60/7)
	}
};

/* (获取类)
 * 获取两个时间戳相差多少天
 */ 
Date.prototype.getDaysByStamps=function(stamp1,stamp2){
	return parseInt(Math.abs(stamp1-stamp2)/1000/60/60/24);
};

/**
 * 
 * (获取类)
 * 日期天数差  参数格式:年月日
 * 第一个参数：开始日期 必填项
 * 第二个参数可选，填写则表示给定结束日期，不填写结束日期默认为当前日期
 */	
Date.prototype.getDateDiff=function(){
	if(arguments.length===1){
		var e=arguments[0].split(' ')[1]?arguments[0]:arguments[0]+' 00:00:00';
		return parseInt(Math.abs(new Date(d).getTime() - new Date(e).getTime())/1000/24/60/60);
	}else if(arguments.length===2){
		var s=arguments[0].split(' ')[1]?arguments[0]:arguments[0]+' 00:00:00';
		var e=arguments[1].split(' ')[1]?arguments[1]:arguments[1]+' 00:00:00';
		return parseInt(Math.abs(new Date(s).getTime() - new Date(e).getTime())/1000/24/60/60);
	}else{
		return '';
	}
};


/* 
 * (获取类)
 * 只传开始日期,返回开始日期到当前日期的所有日期
 * 起止日期都传,返回起止日期之间并包含起止日期在内的所有日期
*/
Date.prototype.getAllDatesBetween=function(startDate,endDate){
    var arr=[];
    var endDate=endDate?endDate:(this.getFullYear()+'-'+(this.getMonth()+1)+'-'+this.getDate());
    var days=parseInt(Math.abs(new Date(startDate.split(' ')[0]+' 00:00:00') - new Date(endDate.split(' ')[0]+' 00:00:00'))/1000/24/60/60)+1;
    for(var i=0;i<days;i++){
        var stamp=new Date(new Date(startDate).getTime()+i*86400000);
        arr.push(stamp.getFullYear()+'-'+((stamp.getMonth()+1)<10?'0'+(stamp.getMonth()+1):(stamp.getMonth()+1))+'-'+(stamp.getDate()<10?'0'+stamp.getDate():stamp.getDate()));
    }
    return arr;
};



/*
* (获取类)
* 获取日期中部分信息
* 可获取信息:y M d h s m
* 年月日时分秒
* 第一个参数为日期部分信息的名字必填项
* 第二个参数可选,表示给定时间戳,获取时间戳转成日期的信息
*/
Date.prototype.getDatePart=function(name){
	var t=arguments[1]?new Date(arguments[1]):this;
	switch(name) {
		case '年':
		return t.getFullYear();
		break;
		case '月':
		return t.getMonth()+1;
		break;
		case '日':
		return t.getDate();
		break;
		case '时':
		return t.getHours();
		break;
		case '分':
		return t.getMinutes();
		break;
		case '秒':
		return t.getSeconds();
		break;
		default:
		return '';
	}
};

/**
 * 
 * (工具类)
 * 日期分割为数组
 * 没有传参数则分割当前时间
 * 传参数则分割指定时间
 */
Date.prototype.dateToArray=function(){
	if(arguments.length===0){//当前日期
		return [this.getFullYear(),this.getMonth()+1,this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds()]
	}else if(arguments.length===1){//指定日期
		var s=arguments[0].split(' ')[1]?arguments[0]:arguments[0]+' 00:00:00';
		var t=new Date(s);
		return [t.getFullYear(),t.getMonth()+1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()]
	}else{
		return ''
	}
};

/**
 * (工具类)
 * 日期格式化成标准的2位
 * 第一个参数必填,适合日期部分 . _ / - 日期合法 没有补零
 */
Date.prototype.dateToStandard=function(){
	var at=arguments[0].split(' ');
	var f=at[0].split(/[\_./-]/);
	if(at[1]){
		var s=at[1].split(':');
		return f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2])+' '+(s[0].length<2?'0'+s[0]:s[0])+':'+(s[1].length<2?'0'+s[1]:s[1])+':'+(s[2].length<2?'0'+s[2]:s[2])
	}else{
		return f[0]+'-'+(f[1].length<2?'0'+f[1]:f[1])+'-'+(f[2].length<2?'0'+f[2]:f[2])
	}
};

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

Date.prototype.datePlusMinus=function(n){
	var t=arguments[1]?new Date(arguments[1]).getTime():this.getTime();
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
Date.prototype.dateFormat=function(format){
	var t=arguments[1]?new Date(arguments[1]):this;
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
	    format = format.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
		    format = format.replace(RegExp.$1, RegExp.$1.length == 1? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
};



/* (工具类)
 * 日期转字符串
 * 参数是时间戳,可选 (指定时间戳转日期格式 1530902499242 => 2018-07-07 02:41:39)
 * 没有参数,默认格式化当前日期时间
 */ 
Date.prototype.dateToString=function(){
	var now=arguments[0]? new Date(arguments[0]):this;
	var y=now.getFullYear(); 
	var m=now.getMonth()+1; 
	var d=now.getDate(); 
	var hh=now.getHours(); 
	var mm=now.getMinutes(); 
	var ss=now.getSeconds(); 
	return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d)+' '+(hh<10?'0'+hh:hh)+':'+(mm<10?'0'+mm:mm)+':'+(ss<10?'0'+ss:ss);
};

