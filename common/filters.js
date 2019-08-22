export default {
  // 将时间戳装换成日期
  dateTime(time, type) {
    if (time==undefined) return "";
    let date = new Date(time), //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      Y = date.getFullYear() + "-",
      M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-",
      D =
        date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ",
      h = date.getHours() + ":",
      m = date.getMinutes() + ":",
      s = date.getSeconds();
    // 如果type=1返回日期加时间
    // 否则返回日期
    if (type === 1) {
      return Y + M + D + h + m + s;
    } else {
      return Y + M + D;
    }
  }
};
