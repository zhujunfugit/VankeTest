export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
// 时间各种格式转换
export default {
  formatDateAndTime(d) {
    /**
     * Format a date as 'YY-MM-dd hh:mm:SS'
     */
    d = d || new Date()
    return (
      this.formatDate(d) +
      '\u00A0\u00A0' +
      (d.getHours() < 10 ? '0' + d.getHours() : d.getHours()) +
      ':' +
      (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) +
      ':' +
      (d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds())
    ).replace(/\s+/g, ' ')
  },
  /**
   * Format a date as 'MM-dd hh:mm'
   */
  formatShortDateAndTime(d) {
    d = d || new Date()
    return (
      (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) +
      '-' +
      (d.getDate() < 10 ? '0' + d.getDate() : d.getDate()) +
      '\u00A0\u00A0' +
      (d.getHours() < 10 ? '0' + d.getHours() : d.getHours()) +
      ':' +
      (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes())
    ).replace(/\s+/g, ' ')
  },
  /**
   * Format a date as 'yyyy-MM-dd'
   */
  formatDate(d, divider) {
    divider = divider || '-'
    d = d || new Date()
    return d.getFullYear() + divider + this.formatShortDate(d)
  },
  /**
   * Format a date as 'yyyy-MM/'
   */
  formatMonth(d, divider) {
    divider = divider || '-'
    d = d || new Date()
    return (
      d.getFullYear() +
      divider +
      (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1)
    )
  },
  /**
   * Format a date as 'MM-dd'
   */
  formatShortDate(d, divider) {
    divider = divider || '-'
    d = d || new Date()
    return (
      (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) +
      divider +
      (d.getDate() < 10 ? '0' + d.getDate() : d.getDate())
    )
  },
  //转换 当天时分秒 0点0分0秒
  formatDateAndTimeStart() {
    let d = new Date()
    return (this.formatDate(d) + '\u00A0\u00A0' + '00:00:00').replace(
      /\s+/g,
      ' '
    )
  },
  //转换 当天时分秒 23点59分59秒
  formatDateAndTimeEnd() {
    let d = new Date()
    return (this.formatDate(d) + '\u00A0\u00A0' + '23:59:59').replace(
      /\s+/g,
      ' '
    )
  },
  //获取n天间隔
  getDiffDay(n, type) {
    let d = new Date()
    d.setDate(d.getDate() + n)
    if (type == 1) {
      return this.formatDate(d).replace(/\s+/g, ' ')
    } else {
      return this.formatDateAndTime(d).replace(/\s+/g, ' ')
    }
  },
  // 比较时间大小
  compareTime(time1, time2) {
    let isTime = false
    let yourtime = time1.replace(/-/g, '/') //替换字符，变成标准格式
    let d2
    if (time2 == null) {
      d2 = new Date() //取今天的日期
    } else {
      d2 = new Date(Date.parse(time2.replace(/-/g, '/')))
    }
    let d1 = new Date(Date.parse(yourtime))
    if (d1 > d2) {
      isTime = true
    }
    return isTime
  },
  //获取n天间隔 0点0分0秒
  getDiffDayFirst(n) {
    let d = new Date()
    d.setDate(d.getDate() + n)
    d.setHours(0)
    d.setMinutes(0)
    d.setSeconds(0)
    return this.formatDateAndTime(d).replace(/\s+/g, ' ')
  },
  //获取n天间隔 23点59分59秒
  getDiffDayLast(n) {
    let d = new Date()
    d.setDate(d.getDate() + n)
    d.setHours(23)
    d.setMinutes(59)
    d.setSeconds(59)
    return this.formatDateAndTime(d).replace(/\s+/g, ' ')
  }
}
