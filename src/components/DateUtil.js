

function parseDate(time) {
  if (typeof time == 'string') {
    return new Date(time)
  }
  if (typeof time == 'object') {
    return time;
  }
}

/**
   * caculate date plus num minutes.
   * @param {*} date
   * @param {*} num
   */
function plusMinites(date, num) {
  return new Date(parseDate(date).getTime() + num * 60 * 1000)
}

/**
 * get duration of 2 time, unit:minute
 * @param {Date} time1
 * @param {Date} time2
 */
function getDuration(time1, time2) {
  return parseInt(Math.abs(parseDate(time1).getTime() - parseDate(time2).getTime()) / 1000 / 60)
}

/**
 * judge range contains range2
 * @param {Date} range
 * @param {Date} range2
 */
function isContain(range, range2) {
  return parseDate(range.startTime).getTime() <= parseDate(range2.startTime).getTime()
    && parseDate(range.endTime) >= parseDate(range2.endTime).getTime()
}

/**
 * 判断两个时间区间是否有重合部分
 * judge 2 time range is conflict. has repeat part.
 * @param {*} range
 * @param {*} range2
 */
function isTimeConflict(range, range2) {
  return !(parseDate(range.startTime).getTime() >= parseDate(range2.endTime).getTime() ||
    parseDate(range.endTime).getTime() <= parseDate(range2.startTime).getTime())
}



function format(d, format) {
  if (typeof d == 'string') {
    return d;
  }
  return d.getFullYear() + "-"
    + ("0" + (d.getMonth() + 1)).slice(-2) + "-"
    + ("0" + d.getDate()).slice(-2)
    + " " + ("0" + d.getHours()).slice(-2) + ":"
    + ("0" + d.getMinutes()).slice(-2) + ":"
    + ('0' + d.getSeconds()).slice(-2);
}


/**
 *  whether is same day
 * @param {Date} datea
 * @param {Date} dateb
 */
const sameDay = (datea, dateb) => {
  return datea.getFullYear() == dateb.getFullYear() && datea.getMonth() === dateb.getMonth() && datea.getDate() == dateb.getDate();
}

export {
  plusMinites,
  isTimeConflict,
  isContain,
  getDuration,
  format,
  sameDay
}
