(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Rdate = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
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

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var Rdate = /*#__PURE__*/function () {
    function Rdate() {
      _classCallCheck(this, Rdate);

      this.version = "1.0.1";
      this.author = 'rookie_fly';
      this.creator = 'rookie_fly';
      this.createDate = '2018-07-27';
      this.updateDate = '2020-08-23';
    }
    /**
     * ---------------核心方法--------------------
     *                                           
     * 
     */

    /**
     * ※ 
     * @param  {...any} args :形参，生效的最多为前两个参数
     * 1个参数情况：
     *      1.1 参数为格式，则默认格式化当前时间
     *      1.2 参数为时间戳或字符串时间，则使用默认格式去格式化化给定的 时间戳或字符串时间
     * 2个参数情况：
     * 第一个参数表示格式化的日期，可以是时间戳或字符串时间
     * 第二个参数表示格式
     */


    _createClass(Rdate, [{
      key: "format",
      value: function format() {
        var _this = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var a = args[0],
            b = args[1],
            dt,
            format;

        if (!args.length) {
          dt = new Date();
          format = 'yyyy-MM-dd hh:mm:ss';
        } else if (args.length == 1) {
          if (isNaN(new Date(a).valueOf())) {
            format = a;
            dt = new Date();
          } else {
            dt = new Date(typeof a == 'string' ? a.replace(/-/g, '/') : a);
            format = 'yyyy-MM-dd hh:mm:ss';
          }
        } else if (args.length >= 2) {
          dt = new Date(typeof a == 'string' ? a.replace(/-/g, '/') : a);
          format = b;
        }

        var ret = {
          "y+": String(dt.getFullYear()),
          "M+": String(dt.getMonth() + 1).padStart(2, 0),
          "d+": String(dt.getDate()).padStart(2, 0),
          "h+": String(dt.getHours()).padStart(2, 0),
          "m+": String(dt.getMinutes()).padStart(2, 0),
          "s+": String(dt.getSeconds()).padStart(2, 0)
        }; // 模板内容base64加密

        format = format.replace(new RegExp(/\[(.+?)\]/g), function (a) {
          return '[' + window.btoa(a.slice(1, -1)) + ']';
        });
        /**
         * 星期替换
         */

        if (format.includes('w')) {
          format = format.replace(/((w)+)/g, function () {
            return _this.week(dt);
          });
        }
        /**
         * 时辰替换
         */


        if (format.includes('t')) {
          format = format.replace(/((t)+)/g, function () {
            return _this.when(dt);
          });
        }

        var _loop = function _loop(k) {
          if (format.includes(k.substr(0, 1))) {
            format = format.replace(new RegExp(k, "g"), function (a, b, c) {
              return Rdate.isMatch(format, b) ? a : ret[k].substr(0, a.length);
            });
          }
        };

        for (var k in ret) {
          _loop(k);
        } // 模板字符串处理


        format = format.replace(new RegExp(/\[(.+?)\]/g), function (a, b, c) {
          return window.atob(a.slice(1, -1));
        });
        return format;
      }
      /**
       * ※ 
       * Rdate 的静态方法
       * 用于 根据参数获取时间 的兼容：输入日期
       * 第1种情况：用户没有传参数，即 dt === undefined，此时返回当前日期时间
       * 第2种情况：用户传参数不符合规定（标准的时间戳和日期），此时返回当前日期时间
       * 第3种情况：用户传参数符合规定（标准的时间戳和日期），此时返回给定日期
       */

    }, {
      key: "getStamp",

      /**
       * 
       *                                           
       * ---------------核心方法--------------------
       */

      /**
       * --------------时间戳相关-------------------start----------------------------------------------
       */

      /**
       * ※ 
       * 获取 （给定日期 | 当前日期） 前进（+）后退（-）n 天后的时间戳
       * @param { Number } n : 前进（+）后退（-）n 天后的时间戳，不传默认是0，当天
       * @param { String } dt : 给定日期
       */
      value: function getStamp(dt, n) {
        var a = arguments;
        if (!a.length) return new Date().getTime(); // 如果只有 一个参数,则视为对当前时间的加减

        if (a.length == 1 && typeof a[0] === "number") {
          n = a[0];
          dt = undefined;
        }

        var d = Rdate._dt(dt);

        d.setDate(d.getDate() + (n === undefined ? 0 : n));
        return +d;
      }
      /**
       * ※ 
       * 获取基于 （给定日期/当前时间） 的 前一天/后一天的时间戳
       * @param  { String } dt : 给定日期
       */

    }, {
      key: "getStampBeforAfter",
      value: function getStampBeforAfter(dt) {
        var d = Rdate._dt(dt),
            b,
            a;

        d.setDate(d.getDate() - 1);
        b = +d;
        d.setDate(d.getDate() + 2);
        a = +d;
        return {
          before: b,
          after: a
        };
      }
      /**
       * ※ 
       * 定日期/今日 起止日期时间（00：00：00 ~ 23：59：59）
       * @param { String } dt: 给定日期
       */

    }, {
      key: "getStampStartEnd",
      value: function getStampStartEnd(dt) {
        var d = Rdate._dt(dt);

        return {
          start: +new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0),
          end: +new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59)
        };
      }
      /**
       * ※ 
       * 获取两个时间戳相差多少天
       * @param { Number } stamp1 ：时间戳
       * @param { Number } stamp2 ：时间戳
       */

    }, {
      key: "getDaysByStamp",
      value: function getDaysByStamp(stamp1, stamp2) {
        return parseInt(Math.abs(stamp1 - stamp2) / 86400000);
      }
      /**
      * --------------时间戳相关-------------------end----------------------------------------------
      */

      /**
       * --------------时间信息相关-------------------start----------------------------------------------
       */

      /**
       * ※ 
       * 本周第一天
       * @param { String } format ：格式，默认 yyyy-MM-dd
       */

    }, {
      key: "getCurWeekFirstDay",
      value: function getCurWeekFirstDay() {
        var d = new Date();
        var f = new Date(d - (d.getDay() - 1) * 86400000);
        return this.format(f, 'yyyy-MM-dd');
      }
      /**
       * ※ 
      * 本周最后一天
      */

    }, {
      key: "getCurWeekLastDay",
      value: function getCurWeekLastDay() {
        var d = new Date(this.getCurWeekFirstDay() + ' 00:00:00');
        d.setDate(d.getDate() + 6);
        return this.format(d, 'yyyy-MM-dd');
      }
      /**
       * ※ 
       * 任一月份第一天
       */

    }, {
      key: "getMonthFirstDay",
      value: function getMonthFirstDay(dt) {
        var d = Rdate._dt(dt);

        return this.format(d, 'yyyy-MM-') + '01';
      }
      /**
       * ※ 
       * 任一月份最后一天
       * @param { String | Number} dt ：日期 或 时间戳
       */

    }, {
      key: "getMonthLastDay",
      value: function getMonthLastDay(dt) {
        var d = Rdate._dt(dt);

        d.setMonth(d.getMonth() + 1); //月份+1

        d.setDate(1); //日设置成1号

        d.setDate(d.getDate() - 1); //倒退1日到当前月末最后一天

        return this.format(d, 'yyyy-MM-dd');
      }
      /**
       * ※ 
       * 获取两个日期相差多少天
       * @param {String | Number} d1 ：日期 或 时间戳
       * @param {String | Number} d2 ：日期 或 时间戳
       */

    }, {
      key: "getDaysByDate",
      value: function getDaysByDate(d1, d2) {
        return parseInt(Math.abs(new Date(d1) - new Date(d2)) / 86400000);
      }
      /**
       * ※ 
       * 获取 （给定日期 | 当前日期）为基准的 半年之前的日期
       * @param { String | Number } dt ：日期 或 时间戳
       */

    }, {
      key: "getHalfYear",
      value: function getHalfYear(dt) {
        return this.format(new Date(Rdate._dt(dt) - 15768000000), 'yyyy-MM-dd');
      }
      /**
       * ※ 
       * 距 （给定日期|当前日期） n 年 的日期
       * @param { Number } n ：前进（+） 后退（-）n 年后的日期
       * @param { String | Number } dt ：日期 或 时间戳
       */

    }, {
      key: "getGapYearDate",
      value: function getGapYearDate() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var dt = arguments.length > 1 ? arguments[1] : undefined;

        var d = Rdate._dt(dt);

        d.setFullYear(d.getFullYear() + n);
        return this.format(d, 'yyyy-MM-dd');
      }
      /**
       * ※ 
       * 距 （给定日期 | 当前日期） n 月 的日期
       * @param { Number } n ：前进（+） 后退（-）n 月后的日期
       * @param { String | Number } dt dt ：日期 或 时间戳
       */

    }, {
      key: "getGapMonthDate",
      value: function getGapMonthDate(n, dt) {
        var d = Rdate._dt(dt);

        d.setMonth(d.getMonth() + n);
        return this.format(d, 'yyyy-MM-dd');
      }
      /**
       * 获取当前日期所在周任意星期对应的日期 ,比如我想知道这周5的日期你能告诉我吗？这个函数 就可以告诉你
       * @param { Number } week ：星期
       * @param {String | Number } dt ：日期 或 时间戳
       */

    }, {
      key: "getWeekByDate",
      value: function getWeekByDate(week, dt) {
        if (!arguments.length) throw '缺少参数week！'; // 获取日期时间

        var d = Rdate._dt(dt); //统一：用户传入 0 或 7 都是星期日


        var w = week === 0 ? 7 : week;
        var i = d.getDay() === 0 ? 7 : d.getDay();

        if (w == i) {
          //如果传入的星期和日期对应的星期一致，就直接返回该传入的日期
          return this.format(d, 'yyyy-MM-dd');
        } else {
          d.setDate(d.getDate() - (i - w));
          return this.format(d, 'yyyy-MM-dd');
        }
      }
      /**
       * 获取（给定日期 | 当前日期） 所在对应月份的第几周
       * @param {String | Number } dt ：日期 或 时间戳
       */

    }, {
      key: "getMonthWeek",
      value: function getMonthWeek(dt) {
        var dd = Rdate._dt(dt);

        var date = new Date(dd.getFullYear(), dd.getMonth(), dd.getDate()),
            w = date.getDay(),
            d = date.getDate();
        if (w == 0) w = 7;
        return {
          getMonth: date.getMonth() + 1,
          getYear: date.getFullYear(),
          getWeek: Math.ceil((d + 6 - w) / 7)
        };
      }
      /**
       * 获取 （给定日期 | 当前日期） 所在对应年份的第几周
       * @param {String | Number } dt ：日期 或 时间戳
       */

    }, {
      key: "getYearWeek",
      value: function getYearWeek(dt) {
        var dd = Rdate._dt(dt);

        var d1 = new Date(dd.getFullYear(), dd.getMonth(), dd.getDate()),
            d2 = new Date(dd.getFullYear(), 0, 1),
            d = Math.round((d1 - d2) / 86400000);
        return Math.ceil((d + (d2.getDay() + 1 - 1)) / 7);
      }
      /**
       * 获取 （给定日期 | 当前日期） 对应的回显星期
       * @param {String | Number } dt ：日期 或 时间戳
       * @param {String} prefix :前缀
       */

    }, {
      key: "week",
      value: function week() {
        var dt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '星期';

        var d = Rdate._dt(dt);

        return prefix + ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
      }
      /**
       * 获取 （给定日期 | 当前日期） 对应的回显月份
       * @param {String | Number } dt ：日期 或 时间戳
       * @param {String} suffix ：后缀
       */

    }, {
      key: "month",
      value: function month() {
        var dt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
        var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '月';

        var d = Rdate._dt(dt);

        return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][d.getMonth()] + suffix;
      }
      /**
       * 获取 (给定日期 | 当前日期) 在对应的年份 | 月份 | 季度 中属于的第几周
       * @param {String | Number } dt ：日期 或 时间戳
       */

    }, {
      key: "weekInfo",
      value: function weekInfo(dt) {
        var getMonthWeek = function getMonthWeek(a, b, c) {
          var date = new Date(a, parseInt(b) - 1, c),
              w = date.getDay(),
              d = date.getDate();
          return Math.ceil((d + 6 - w) / 7);
        };

        var getYearWeek = function getYearWeek(a, b, c) {
          var date1 = new Date(a, parseInt(b) - 1, c),
              date2 = new Date(a, 0, 1),
              d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
          return Math.ceil((d + (date2.getDay() + 1 - 1)) / 7);
        };

        var today = Rdate._dt(dt);

        var y = today.getFullYear();
        var m = today.getMonth() + 1;
        var d = today.getDate();
        var quarter = "";
        var week = "";
        var result = getYearWeek(y, m, d);

        if (m < 4) {
          quarter = 1;
          week = result;
        } else if (m < 7) {
          quarter = 2;
          week = result - getYearWeek(y, 4, 1);
          var day = new Date(y, 4, 1);

          if (day.getDay() > 1) {
            week += 1;
          }
        } else if (m < 10) {
          quarter = 3;
          week = result - getYearWeek(y, 7, 1);
          var day = new Date(y, 7, 1);

          if (day.getDay() > 1) {
            week += 1;
          }
        } else {
          quarter = 4;
          week = result - getYearWeek(y, 10, 1);
          var day = new Date(y, 10, 1);

          if (day.getDay() > 1) {
            week += 1;
          }
        }

        return {
          year: y + '-' + m + '-' + d,
          yearWeek: getYearWeek(y, m, d),
          month: m,
          monthWeek: getMonthWeek(y, m, d),
          quarter: quarter,
          quarterWeek: week
        };
      }
      /**
       * 获取 （给定日期 | 当前日期）  所在周的起止日期
       * @param {String | Number} dt ：日期 或 时间戳
       */

    }, {
      key: "getWeek",
      value: function getWeek(dt) {
        var dd = Rdate._dt(dt);

        var week = dd.getDay(); //获取时间的星期数

        var minus = week ? week - 1 : 6;
        dd.setDate(dd.getDate() - minus); //获取minus天前的日期

        var start = this.format(dd, "yyyy-MM-dd");
        dd.setDate(dd.getDate() + 6);
        var end = this.format(dd, "yyyy-MM-dd");
        return {
          start: start,
          end: end
        };
      }
      /**
       * 星期回显
       * 
       *  @param {String | Number}  i: 回显对应的数字
       *  @param {String}  invalidTip: 传入的数字超出有效数字范围的提示语，默认是 Invalid week
       * 
       */

    }, {
      key: "previewWeek",
      value: function previewWeek(i) {
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "周";
        var invalidTip = arguments.length > 2 ? arguments[2] : undefined;
        return i > 0 && i < 8 ? prefix + ['一', '二', '三', '四', '五', '六', '日'][i - 1] : invalidTip === undefined ? 'Invalid week' : invalidTip;
      }
      /**
       * 月份回显
       * @param { String | Number} i ：回显对应的数字
       * @param { String } invalidTip  ：传入的数字超出有效数字范围的提示语，默认是 Invalid week
       * @return String
       */

    }, {
      key: "previewMonth",
      value: function previewMonth(i, invalidTip) {
        return i > 0 && i < 13 ? ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][i - 1] + '月' : invalidTip === undefined ? 'Invalid month' : invalidTip;
      }
      /**
       * 生成 基于当前 / 指定时间的 过去 n 天时间（包含当天日期）
       * @param {Number} days 基于当前 / 指定时间的 过去 n 天时间（包含当天日期）
       * @param {Boolean} s 指定时间
       * @return 日期数组
       */

    }, {
      key: "getPassDaysDate",
      value: function getPassDaysDate(days, s) {
        if (!arguments.length) return [];
        return _toConsumableArray(Array(days * 1 + 1).keys()).map(function (days) {
          return new Date((s ? new Date(s) : Date.now()) - 86400000 * days).toLocaleDateString();
        }).map(function (item) {
          return item.split(/\/|-/).map(function (i) {
            return i.padStart(2, '0');
          }).join('-');
        }).splice(1);
      }
      /**
       * --------------时间信息相关-------------------end----------------------------------------------
       */

      /**
       * --------------验证相关-------------------start----------------------------------------------
       */

      /**
      * 是否是润年
      * @param { String } year ：年份
      */

    }, {
      key: "isLeapYear",
      value: function isLeapYear(year) {
        return !(year % (year % 100 ? 4 : 400));
      }
      /**
       * 判断时间（时分秒）格式是否有效
       * @param { String } str ：时分秒
       */

    }, {
      key: "isTime",
      value: function isTime(str) {
        var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);

        if (a == null) {
          return false;
        }

        if (a[1] >= 24 || a[3] >= 60 || a[4] >= 60) {
          return false;
        }

        return true;
      }
      /**
       * 判断日期（年月日）格式是否有效
       * @param {String} str ：年月日
       */

    }, {
      key: "isDateTime",
      value: function isDateTime(str) {
        var result = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (result == null) return false;
        var d = new Date(result[1], result[3] - 1, result[4]);
        return d.getFullYear() == result[1] && d.getMonth() + 1 == result[3] && d.getDate() == result[4];
      }
      /**
       * 判断 完整的年月日时分秒格式是否有效
       * @param { String } str ：年月日时分秒
       */

    }, {
      key: "isAllDateTime",
      value: function isAllDateTime(str) {
        var result = str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
        if (result == null) return false;
        var d = new Date(result[1], result[3] - 1, result[4], result[5], result[6], result[7]);
        return d.getFullYear() == result[1] && d.getMonth() + 1 == result[3] && d.getDate() == result[4] && d.getHours() == result[5] && d.getMinutes() == result[6] && d.getSeconds() == result[7];
      }
      /**
       * 验证一个日期是不是今天
       * @param { String } dt： 日期
       */

    }, {
      key: "isToday",
      value: function isToday(dt) {
        return new Date().toLocaleDateString() == new Date(dt.replace(/-/g, '/')).toLocaleDateString();
      }
      /**
       * 验证传入的日期是否是昨天
       * @param {*} val 
       */

    }, {
      key: "isYesterday",
      value: function isYesterday(dt) {
        var yesterday = new Date(new Date() - 1000 * 60 * 60 * 24);
        var test = new Date(dt);

        if (yesterday.getYear() === test.getYear() && yesterday.getMonth() === test.getMonth() && yesterday.getDate() === test.getDate()) {
          return true;
        } else {
          return false;
        }
      } // 验证日期大小

    }, {
      key: "compareDate",
      value: function compareDate(d1, d2) {
        return new Date(d1.replace(/-/g, "/")) < new Date(d2.replace(/-/g, "/"));
      }
      /**
      * --------------验证相关-------------------end----------------------------------------------
      */

      /**
       * 新增 方法-----------------------------------------------------------------------
       */

      /**
       * 计算两个日期间所有日期，以数组形式返回
       * 新增时间：2020/8/23
       * @param { string | number } startDate : 开始日期（13位时间戳 | 字符串日期）
       * @param { string | number } endDate ：结束日期（13位时间戳 | 字符串日期）
       * @return 日期间所有日期，以数组形式返回
       */

    }, {
      key: "getGapDates",
      value: function getGapDates(startDate, endDate) {
        // 如果开始日期都没有，直接返回 []
        if (!startDate) return []; // 辅助函数

        var helper = function helper(s, i) {
          return new Date(+new Date(s) + i * 86400000).toLocaleDateString().replace(/\//g, '-');
        }; // 开始日期时间戳


        var startDateStamp = +new Date(new Date(startDate).toLocaleDateString()); // 结束日期时间戳

        var endDateStamp = endDate ? +new Date(new Date(endDate).toLocaleDateString()) : +new Date(new Date().toLocaleDateString()); // 如果两者相等

        if (startDateStamp === endDateStamp) return [helper(new Date(endDate ? new Date() : startDate), 0)]; // 获取最小的日期作为开始日期

        startDate = startDateStamp < endDateStamp ? new Date(startDateStamp) : new Date(endDate ? endDateStamp : +new Date()); // 获取最大的日期作为结束日期

        endDate = startDateStamp < endDateStamp ? new Date(endDate ? endDateStamp : +new Date()) : new Date(startDateStamp); // 计算相差天数

        var gapDays = parseInt(Math.abs(startDateStamp - endDateStamp) / 86400000) + 1; // 返回结果

        return Array(gapDays).fill(0).reduce(function (p, c, i) {
          return [].concat(_toConsumableArray(p), [helper(startDate, i)]);
        }, []);
      }
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

    }, {
      key: "when",
      value: function when(dt) {
        var hour = Rdate._dt(dt).getHours();

        return ['凌晨', '早上', '上午', '中午', '下午', '晚上', '深夜'][hour >= 0 && hour <= 6 ? 0 : hour > 6 && hour <= 8 ? 1 : hour > 8 && hour <= 12 ? 2 : hour > 12 && hour <= 14 ? 3 : hour > 14 && hour <= 18 ? 4 : hour > 18 && hour <= 21 ? 5 : 6];
      }
    }], [{
      key: "_dt",
      value: function _dt(dt) {
        return dt ? new Date(typeof dt == 'string' && dt.indexOf('-') > -1 ? dt.replace(/-/g, '/') : dt) : new Date();
      }
      /**
       * 前后 中括号是否配对
       * @param { String } str : 带 中括号的字符串
       * @param { Number } index ：查找开始的索引
       */

    }, {
      key: "isMatch",
      value: function isMatch(str, index) {
        // 往后查找 ]
        var index1 = str.indexOf('[', index);
        var index2 = str.indexOf(']', index); //肯定不能为 -1
        // 往前查找 [

        var index3 = str.lastIndexOf('[', index); //肯定不能为 -1

        var index4 = str.lastIndexOf(']', index);

        if (index2 > -1 && index3 > -1) {
          if (index1 == -1 && index4 == -1) {
            return true;
          } else {
            if (index1 > -1 && index4 == -1) {
              return index3 < index4;
            } else {
              return index2 < index1;
            }
          }
        }

        return false;
      }
    }]);

    return Rdate;
  }();

  return Rdate;

})));
//# sourceMappingURL=rdate.js.map
