(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Rdate = factory());
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * ※ 
   * Rdate 的静态方法
   * 用于 根据参数获取时间 的兼容：输入日期
   * 第1种情况：用户没有传参数，即 dt === undefined，此时返回当前日期时间
   * 第2种情况：用户传参数不符合规定（标准的时间戳和日期），此时返回当前日期时间
   * 第3种情况：用户传参数符合规定（标准的时间戳和日期），此时返回给定日期
   */
  var _dt = function _dt(dt) {
    return dt ? new Date(typeof dt == 'string' && dt.indexOf('-') > -1 ? dt.replace(/-/g, '/') : dt) : new Date();
  };
  /** 
   * ※
   * Rdate 的静态方法
   * 初始化 dt 和 format
   * @param { Array } args ：参数解构后的数组
   * @param { String } ft  ：格式
   */

  var _initFormat = function _initFormat(args, ft) {
    var _args = _slicedToArray(args, 2),
        a = _args[0],
        b = _args[1],
        dt = new Date(),
        format = ft;

    if (args.length == 1) {
      // 参数长度为1个时，检测传入的值的两种情况，不是格式就是时间，传入参数请按规则
      isNaN(new Date(a).valueOf()) ? format = a : dt = new Date(typeof a == 'string' ? a.replace(/-/g, '/') : a);
    } else if (args.length >= 2) {
      // 参数长度为2个时，正常对应
      dt = new Date(typeof a == 'string' ? a.replace(/-/g, '/') : a);
      format = b;
    }

    return {
      dt: dt,
      format: format
    };
  };
  /**
   * ※ 
   * Rdate 的静态方法
   * 用于获取时间详情
   * @param {String | Number | Date} dt ：日期 或 时间戳 或 日期对象
   */

  var _details = function _details() {
    var dt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

    var d = _dt(dt);

    return {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      date: d.getDate(),
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds(),
      millisecond: d.getMilliseconds()
    };
  };

  var year = function year(dt) {
    return _details(dt).year;
  };
  var month = function month(dt) {
    return _details(dt).month;
  };
  var date = function date(dt) {
    return _details(dt).date;
  };
  var hour = function hour(dt) {
    return _details(dt).hour;
  };
  var minute = function minute(dt) {
    return _details(dt).minute;
  };
  var second = function second(dt) {
    return _details(dt).second;
  };
  var millisecond = function millisecond(dt) {
    return _details(dt).millisecond;
  };
  /**
   * 获取 （给定日期 | 当前日期） 对应的季度
   * @param {String | Number } dt ：日期 或 时间戳
   */

  var quarter = function quarter(dt) {
    var d = _dt(dt);

    var m = d.getMonth();
    return m < 3 ? 1 : m < 6 ? 2 : m < 9 ? 3 : 4;
  };
  /**
   * 计算 当前时辰 或 指定时间 （年月日时分秒）
   * 
   * 凌晨0：00－6：00，
   * 早上 6：00-8:00；
   * 上午 8：00-12：00，上午是指8-12点工作时间
   * 中午12：00-14：00,中午是指12-14点午休时间
   * 下午14：00-18：00，下午是指14-18点下午工作时间
   * 晚上18：00-21：00；
   * 深夜：21：00-24：00
   *
   * @param { string | number } dt ：指定时间
   */

  var when = function when(dt) {
    var hour = _dt(dt).getHours();

    return ['凌晨', '早上', '上午', '中午', '下午', '晚上', '深夜'][hour >= 0 && hour <= 6 ? 0 : hour > 6 && hour <= 8 ? 1 : hour > 8 && hour <= 12 ? 2 : hour > 12 && hour <= 14 ? 3 : hour > 14 && hour <= 18 ? 4 : hour > 18 && hour <= 21 ? 5 : 6];
  };
  /**
   * 
   * @param { String } key 
   * @param {String | Number | Date} dt ：日期 或 时间戳 或 日期对象
   */

  var get = function get(key, dt) {
    return _details(dt)[Object.keys(_details(dt)).find(function (i) {
      return i.charAt(0) === key || i === key || i.charAt(0) + i.charAt(5) === key || i === "month" && key == "M";
    })];
  };
  /**
   * 时间转换成数组
   * 获取年月日时分秒
   * @param {String | Number} dt 
   */

  var toArray = function toArray(dt) {
    return Object.values(_details(dt)).slice(0, 6);
  };
  /**
   * 
   * 时间转换成对象
   * 获取年月日时分秒
   */

  var toObject = function toObject(dt) {
    var r = _details(dt);

    delete r.millisecond;
    return r;
  };
  /**
   * 获取 （给定日期 | 当前日期） 对应的回显星期
   * 根据 （给定日期 | 当前日期）回显对应的星期
   * @param {String | Number } dt ：日期 或 时间戳
   * @param {String} prefix :前缀
   */

  var previwWeekByDate = function previwWeekByDate() {
    var dt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '星期';

    var d = _dt(dt);

    return prefix + ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
  };
  /**
   * 获取 （给定日期 | 当前日期） 对应的回显月份
   * 根据 （给定日期 | 当前日期）回显对应的月份
   * @param {String | Number } dt ：日期 或 时间戳
   * @param {String} suffix ：后缀
   */

  var previwMonthByDate = function previwMonthByDate() {
    var dt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '月';

    var d = _dt(dt);

    return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][d.getMonth()] + suffix;
  };
  /**
   * 星期回显
   * 只是用来回显
   *  @param {String | Number}  i: 回显对应的数字
   *  @param {String}  invalidTip: 传入的数字超出有效数字范围的提示语，默认是 Invalid week
   * 
   */

  var previewWeek = function previewWeek(i) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "周";
    var invalidTip = arguments.length > 2 ? arguments[2] : undefined;
    if (i === 0) i = 7;
    return i > 0 && i < 8 ? prefix + ['一', '二', '三', '四', '五', '六', '日'][i - 1] : invalidTip === undefined ? 'Invalid week' : invalidTip;
  };
  /**
   * 月份回显
   * 只是用来回显
   * @param { String | Number} i ：回显对应的数字
   * @param { String } invalidTip  ：传入的数字超出有效数字范围的提示语，默认是 Invalid week
   * @return String
   */

  var previewMonth = function previewMonth(i, invalidTip) {
    return i > 0 && i < 13 ? ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][i - 1] + '月' : invalidTip === undefined ? 'Invalid month' : invalidTip;
  }; // 周的首末日期

  var weekFirstLast = function weekFirstLast() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var dt = _initFormat(args, 'yyyy-MM-dd').dt;

    var ft = _initFormat(args, 'yyyy-MM-dd').format;

    var w = dt.getDay() == 0 ? 7 : dt.getDay();
    dt.setDate(dt.getDate() - w + 1);
    return {
      first: format(dt, ft),
      last: format(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 6), ft)
    };
  }; // 月的首末日期

  var monthFirstLast = function monthFirstLast() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var dt = _initFormat(args, 'yyyy-MM-dd').dt;

    var ft = _initFormat(args, 'yyyy-MM-dd').format;

    return {
      first: format(new Date(dt.getFullYear(), dt.getMonth(), 1), ft),
      last: format(new Date(dt.getFullYear(), dt.getMonth() + 1, 0), ft)
    };
  };
  /**
   * ※ 
   * 本周第一天
   * @param { String } format ：格式，默认 yyyy-MM-dd
   */

  var getCurWeekFirstDay = function getCurWeekFirstDay() {
    return weekFirstLast(new Date(), 'yyyy-MM-dd').first;
  };
  /**
   * ※ 
   * 本周最后一天
   */

  var getCurWeekLastDay = function getCurWeekLastDay() {
    return weekFirstLast(new Date(), 'yyyy-MM-dd').last;
  };
  /**
   * ※ 
   * 任一月份第一天
   */

  var getMonthFirstDay = function getMonthFirstDay(dt) {
    var d = _dt(dt);

    return format(d, 'yyyy-MM-') + '01';
  };
  /**
   * ※ 
   * 任一月份最后一天
   * @param { String | Number} dt ：日期 或 时间戳
   */

  var getMonthLastDay = function getMonthLastDay(dt) {
    var d = _dt(dt);

    d.setMonth(d.getMonth() + 1); //月份+1

    d.setDate(1); //日设置成1号

    d.setDate(d.getDate() - 1); //倒退1日到当前月末最后一天

    return format(d, 'yyyy-MM-dd');
  };
  /**
   * ※ 
   * 获取两个日期相差多少天
   * @param {String | Number} d1 ：日期 或 时间戳
   * @param {String | Number} d2 ：日期 或 时间戳
   */

  var getDaysByDate = function getDaysByDate(d1, d2) {
    var ret = parseInt(Math.abs(new Date(d1) - new Date(d2)) / 86400000);
    return isNaN(ret) ? 0 : ret;
  };
  /**
   * ※ 
   * 获取 （给定日期 | 当前日期）为基准的 半年之前的日期
   * @param { String | Number } dt ：日期 或 时间戳
   */

  var getHalfYear = function getHalfYear(dt) {
    return format(new Date(_dt(dt) - 15768000000), 'yyyy-MM-dd');
  };
  /**
   * ※ 
   * gap 间隙，
   * 距 （给定日期|当前日期） 所属的周 前进后退 n 周的周首末日期
   * @param { Number } n ：前进（+） 后退（-）n 周后的日期
   * @param { String | Number } dt ：日期 或 时间戳
   * @param { String } ft ：格式
   */

  var getGapWeek = function getGapWeek() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var dt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
    var ft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'yyyy-MM-dd';

    var _weekFirstLast = weekFirstLast(dt),
        first = _weekFirstLast.first,
        last = _weekFirstLast.last;

    if (!n) return {
      first: first,
      last: last
    };
    return weekFirstLast(getGapDate(n * 7, n > 0 ? last : first), ft);
  };
  /**
   * ※ 
   * gap 间隙，意味距  （给定日期|当前日期）前后日期
   * 距 （给定日期|当前日期） n 天 的日期
   * @param { Number } n ：前进（+） 后退（-）n 天后的日期
   * @param { String | Number } dt ：日期 或 时间戳
   */

  var getGapDate = function getGapDate() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var dt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
    var ft = arguments.length > 2 ? arguments[2] : undefined;

    var d = _dt(dt);

    d.setDate(d.getDate() + n);
    return format(d, ft || 'yyyy-MM-dd');
  };
  /**
   * ※ 
   * gap 间隙，意味距  （给定日期|当前日期）工作日（周一~周五的日期）
   * @param { String | Number } dt ：日期 或 时间戳
   * @param { String } ft ：格式
   */

  var getWeekWorkday = function getWeekWorkday() {
    var dt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var ft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd';
    var d = new Date(dt);
    var w = d.getDay();
    d.setDate(d.getDate() - w + 1);
    var first = format(d, ft);
    d.setDate(d.getDate() + 4);
    var last = format(d, ft);
    return {
      first: first,
      last: last
    };
  };
  /**
   * ※ 
   * gap 间隙，意味距  （给定日期|当前日期）工作日（周一~周五的日期）
   * @param { Number } n ：n周的工作日的首末日期
   * @param { String | Number } dt ：日期 或 时间戳
   * @param { String } ft ：格式
   */

  var getGapWeekWorkday = function getGapWeekWorkday() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var dt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
    var ft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'yyyy-MM-dd';

    var _getWeekWorkday = getWeekWorkday(dt),
        first = _getWeekWorkday.first,
        last = _getWeekWorkday.last;

    if (!n) return {
      first: first,
      last: last
    };
    return getWeekWorkday(getGapDate(n * 5, n > 0 ? last : first), ft);
  };
  /**
   * ※ 
   * 距 （给定日期|当前日期） n 年 的日期
   * @param { Number } n ：前进（+） 后退（-）n 年后的日期
   * @param { String | Number } dt ：日期 或 时间戳
   */

  var getGapYearDate = function getGapYearDate() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var dt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
    var ft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'yyyy-MM-dd';

    var d = _dt(dt);

    d.setFullYear(d.getFullYear() + n);
    return format(d, ft);
  };
  /**
   * ※ 
   * 距 （给定日期 | 当前日期） n 月 的日期
   * @param { Number } n ：前进（+） 后退（-）n 月后的日期
   * @param { String | Number } dt dt ：日期 或 时间戳
   */

  var getGapMonthDate = function getGapMonthDate() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var dt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
    var ft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'yyyy-MM-dd';

    var d = _dt(dt);

    d.setMonth(d.getMonth() + n);
    return format(d, ft);
  };
  /**
   * 获取当前日期所在周任意星期对应的日期 ,比如我想知道这周5的日期你能告诉我吗？这个函数 就可以告诉你
   * @param { Number } week ：星期
   * @param {String | Number } dt ：日期 或 时间戳
   */

  var getWeekByDate = function getWeekByDate(week, dt) {
    var ft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'yyyy-MM-dd';
    if (!week) return ''; // 获取日期时间

    var d = _dt(dt); //统一：用户传入 0 或 7 都是星期日


    var w = week === 0 ? 7 : week;
    var i = d.getDay() === 0 ? 7 : d.getDay();
    if (w !== i) d.setDate(d.getDate() - (i - w));
    return format(d, ft);
  };
  /**
   * 获取（给定日期 | 当前日期） 所在对应月份的第几周
   * @param {String | Number } dt ：日期 或 时间戳info
   */

  var getMonthWeek = function getMonthWeek(dt) {
    var d = format(_dt(dt), 'yyyy-MM-dd');
    var info = getMonthWeekInfo(d);
    return info[d].w;
  };
  /**
   * 获取（给定日期 | 当前日期） 所在对应月份的星期信息
   * @param {String | Number } dt ：日期 或 时间戳
   */

  var getMonthWeekInfo = function getMonthWeekInfo(dt) {
    var dd = _dt(dt),
        ret = {},
        n = 1,
        isFirst = true,
        days = getMonthDays(dd),
        Month = dd.getMonth() + 1,
        prefix = dd.getFullYear() + '-' + String(Month).padStart(2, 0) + '-';

    for (var i = 1; i < days + 1; i++) {
      var re = weekFirstLast(prefix + i);
      var last = re.last;

      if (month(last) !== Month && isFirst) {
        n++;
        isFirst = false;
      } else if (new Date(prefix + i).getDay() == 1) {
        n++;
      }

      ret[prefix + String(i).padStart(2, 0)] = _objectSpread2(_objectSpread2({}, re), {}, {
        w: n,
        d: days
      });
    }

    return ret;
  };
  /**
   * 获取（给定日期 | 当前日期） 所在对应月份天数
   * @param {String | Number } dt ：日期 或 时间戳
   */

  var getMonthDays = function getMonthDays(dt) {
    var dd = _dt(dt);

    return new Date(dd.getFullYear(), dd.getMonth() + 1, 0).getDate();
  };
  /**
   * 获取 （给定日期 | 当前日期） 所在对应年份的第几周
   * @param {String | Number } dt ：日期 或 时间戳
   */

  var getYearWeek = function getYearWeek(dt) {
    var dd = _dt(dt);

    var d1 = new Date(dd.getFullYear(), dd.getMonth(), dd.getDate()),
        d2 = new Date(dd.getFullYear(), 0, 1),
        d = Math.round((d1 - d2) / 86400000);
    return Math.ceil((d + (d2.getDay() + 1 - 1)) / 7);
  };
  /**
   * 获取 （给定日期 | 当前日期） 所在对应季度的第几周
   * @param {String | Number } dt ：日期 或 时间戳
   */

  var getQuarterWeek = function getQuarterWeek(dt) {
    var dd = _dt(dt),
        y = dd.getFullYear(),
        m = dd.getMonth() + 1,
        d = dd.getDate(),
        ret = getYearWeek([y, m, d].join('/'));

    if (m < 4) {
      return ret;
    } else {
      var _month = m < 7 ? 4 : m < 10 ? 7 : 10;

      var week = ret - getYearWeek([y, _month, 1].join('/'));
      var day = new Date(y, _month, 1);
      if (day.getDay() > 1) week += 1;
      return week;
    }
  };

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

  var format = function format() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var dt = _initFormat(args, 'yyyy-MM-dd hh:mm:ss').dt;

    var ft = _initFormat(args, 'yyyy-MM-dd hh:mm:ss').format; // 时间补位对象


    var ret = {
      "M+": String(dt.getMonth() + 1).padStart(2, 0),
      "d+": String(dt.getDate()).padStart(2, 0),
      "h+": String(dt.getHours()).padStart(2, 0),
      "m+": String(dt.getMinutes()).padStart(2, 0),
      "s+": String(dt.getSeconds()).padStart(2, 0)
    }; // 需特别处理年

    var year = String(dt.getFullYear());
    /**
        * 标记并缓存模板内容
        */

    var mapVal = [];
    ft = ft.replace(/\[(.+?)\]/g, function (a) {
      mapVal.push(a.slice(1, -1));
      return "|";
    });
    /**
        * 星期兼容:星期/周
        */

    if (ft.includes('w')) {
      //星期
      ft = ft.replace(/((w)+)/g, function () {
        return previwWeekByDate(dt);
      });
    }

    if (ft.includes('W')) {
      //周
      ft = ft.replace(/((W)+)/g, function () {
        return previwWeekByDate(dt, '周');
      });
    }
    /**
        * 时辰替换
        */


    if (ft.includes('t')) {
      ft = ft.replace(/((t)+)/g, function () {
        return when(dt);
      });
    }
    /**
        * 年的的标识字母 兼容连续的大写 小写
        */


    if (ft.includes('Y')) {
      ft = ft.replace(/((Y)+)/g, function (a) {
        return year.substr(4 - a.length);
      });
    }

    if (ft.includes('y')) {
      ft = ft.replace(/((y)+)/g, function (a) {
        return year.substr(4 - a.length);
      });
    }
    /**
        * 兼容时的字母大小写
        */


    if (ft.includes('H')) {
      ft = ft.replace(/((H)+)/g, function (a) {
        return ret['h+'].substr(0, a.length);
      });
    }
    /**
        * 开始进行正常的时间格式替换
        */


    var _loop = function _loop(k) {
      if (ft.includes(k.substr(0, 1))) {
        ft = ft.replace(new RegExp(k, "g"), function (a) {
          return ret[k].substr(0, a.length);
        });
      }
    };

    for (var k in ret) {
      _loop(k);
    }
    /**
        * 模板字符串处理
        */


    var formatArr = ft.split('|');
    var res = '';

    for (var i = 0; i < formatArr.length; i++) {
      res += formatArr[i] + mapVal[i];
    }
    /** 
        * 处理特殊情况
    */


    if ((res + ' ').slice(-10, -1) === 'undefined' && formatArr[formatArr.length - 1] !== '|') {
      res = res.slice(0, -9);
    } // 返回处理的结果


    return res;
  };

  /**
   * 
   * ***********
   * * 验证api *
   * ***********
   */

  /**
   * 是否润年
   * 能被4整除而不能被100整除.(如2004年就是闰年,1900年不是)
   * @param { Number | String } : 4位数年份，必需
   * @return 布尔值
   */
  var isLeapYear = function isLeapYear(y) {
    return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
  };
  /**
   * 判断时间（时分秒）格式是否有效
   * @param { String } str ：时分秒，必需
   * @return 布尔值
   */

  var isTime = function isTime(str) {
    var ret = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
    if (ret == null) return false;
    if (ret[1] >= 24 || ret[3] >= 60 || ret[4] >= 60) return false;
    return true;
  };
  /**
   * 判断日期（年月日）格式是否有效
   * @param {String} str ：年月日，必需
   * @return 布尔值
   */

  var isDate = function isDate(str) {
    var ret = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (ret == null) return false;
    var d = new Date(ret[1], ret[3] - 1, ret[4]);
    return d.getFullYear() == ret[1] && d.getMonth() + 1 == ret[3] && d.getDate() == ret[4];
  };
  /**
   * 判断 完整的年月日时分秒格式是否有效
   * @param { String } str ：年月日时分秒，必需
   * @return 布尔值 
   */

  var isDateTime = function isDateTime(str) {
    var ret = str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
    if (ret == null) return false;
    var d = new Date(ret[1], ret[3] - 1, ret[4], ret[5], ret[6], ret[7]);
    return d.getFullYear() == ret[1] && d.getMonth() + 1 == ret[3] && d.getDate() == ret[4] && d.getHours() == ret[5] && d.getMinutes() == ret[6] && d.getSeconds() == ret[7];
  };
  /**
   * 验证一个日期是不是今天
   * @param { String } dt： 日期，必需
   * @return 布尔值 
   */

  var isToday = function isToday(dt) {
    return new Date().toLocaleDateString() == new Date(typeof dt == 'string' ? dt.replace(/-/g, "/") : dt).toLocaleDateString();
  };
  /**
   * 验证传入的日期是否是昨天
   * @param {String} dt： 日期，必需
   */

  var isYesterday = function isYesterday(dt) {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toLocaleDateString() === new Date(dt).toLocaleDateString();
  };

  /**
   * # 时间戳
   */
  /**
   * ※ 
   * 获取 （给定日期 | 当前日期） 前进（+）后退（-）n 天后的时间戳
   * @param { Number } n : 前进（+）后退（-）n 天后的时间戳，不传默认是0，当天
   * @param { String } dt : 给定日期
   */

  var getStamp = function getStamp(dt, n) {
    var a = arguments;
    if (!a.length) return +new Date(); // 如果只有 一个参数,则视为对当前时间的加减

    if (a.length == 1 && typeof a[0] === "number") {
      n = a[0];
      dt = undefined;
    }

    var d = _dt(dt);

    d.setDate(d.getDate() + (n === undefined ? 0 : n));
    return +d;
  };
  /**
   * ※ 
   * 获取基于 （给定日期/当前时间） 的 前一天/后一天的时间戳
   * @param  { String } dt : 给定日期
   */

  var getStampBeforAfter = function getStampBeforAfter(dt) {
    var d = _dt(dt),
        b;

    d.setDate(d.getDate() - 1);
    b = +d;
    d.setDate(d.getDate() + 2);
    return {
      before: b,
      after: +d
    };
  };
  /**
   * ※ 
   * 定日期/今日 起止日期时间（00：00：00 ~ 23：59：59）
   * @param { String } dt: 给定日期
   */

  var getStampStartEnd = function getStampStartEnd(dt) {
    var d = _dt(dt);

    return {
      start: +new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0),
      end: +new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59)
    };
  };
  /**
   * ※ 
   * 获取两个时间戳相差多少天
   * @param { Number } stamp1 ：时间戳
   * @param { Number } stamp2 ：时间戳
   */

  var getDaysByStamp = function getDaysByStamp(stamp1, stamp2) {
    return parseInt(Math.abs(stamp1 - stamp2) / 86400000);
  };

  /**
   *核心方法
   *
   */

  function Rdate() {
    if (!(this instanceof Rdate)) {
      throw new TypeError("Cannot call a class as a function");
    }

    this.version = '1.0.0';
    this.author = 'rookie_fly';
    this.update = '2020-8-30';
  }

  Rdate.prototype = {
    /** 核心方法*/
    format: format,

    /** 常用方法*/
    year: year,
    month: month,
    date: date,
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    quarter: quarter,
    when: when,
    get: get,
    toArray: toArray,
    toObject: toObject,
    previwWeekByDate: previwWeekByDate,
    previwMonthByDate: previwMonthByDate,
    previewWeek: previewWeek,
    previewMonth: previewMonth,
    weekFirstLast: weekFirstLast,
    monthFirstLast: monthFirstLast,
    getCurWeekFirstDay: getCurWeekFirstDay,
    getCurWeekLastDay: getCurWeekLastDay,
    getMonthFirstDay: getMonthFirstDay,
    getMonthLastDay: getMonthLastDay,
    getDaysByDate: getDaysByDate,
    getHalfYear: getHalfYear,
    getGapDate: getGapDate,
    getGapWeek: getGapWeek,
    getGapYearDate: getGapYearDate,
    getGapMonthDate: getGapMonthDate,
    getWeekByDate: getWeekByDate,
    getMonthWeek: getMonthWeek,
    getYearWeek: getYearWeek,
    getQuarterWeek: getQuarterWeek,
    getWeekWorkday: getWeekWorkday,
    getGapWeekWorkday: getGapWeekWorkday,
    getMonthDays: getMonthDays,
    getMonthWeekInfo: getMonthWeekInfo,

    /** 验证方法*/
    isLeapYear: isLeapYear,
    isTime: isTime,
    isDate: isDate,
    isDateTime: isDateTime,
    isToday: isToday,
    isYesterday: isYesterday,

    /** 时间戳方法*/
    getStamp: getStamp,
    getStampBeforAfter: getStampBeforAfter,
    getStampStartEnd: getStampStartEnd,
    getDaysByStamp: getDaysByStamp
  };

  return Rdate;

})));
//# sourceMappingURL=rdate.js.map
