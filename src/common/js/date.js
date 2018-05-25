/**
 *
 *日期格式转为日期标准字符串：2018-07-19,num为当前天减去的天数
 *
 **/
export function formatDate(date, num) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() - num;
  d = d < 10 ? '0' + d : d
  return y + '-' + m + '-' + d
}
/**
 *
 *时间戳转为日期格式 2017-05-02
 *
 **/

export function formatYMD(str) {
  var date = new Date(str);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  return y + '-' + m + '-' + d
}
/**
 *
 *日期格式转为日期标准字符串：2017-07-19 12:00:00
 *
 **/
export function formatDateTime(str) {
  var date = new Date(str);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;

  var weekDay = new Array(7);
  weekDay[0] = '星期日';
  weekDay[1] = '星期一';
  weekDay[2] = '星期二';
  weekDay[3] = '星期三';
  weekDay[4] = '星期四';
  weekDay[5] = '星期五';
  weekDay[6] = '星期六';
  return y + '-' + m + '-' + d + weekDay[date.getDay()];
}

/**
 *
 *日期格式转为时间标准字符串 12:00
 *
 **/
export function formatStartTime(str) {
  var date = new Date(str);
  var h = date.getHours();
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  return h + ':' + minute
}
