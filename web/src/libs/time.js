export function timeToMillion (startStr, endStr) {
  let times// 如果是2个参数就是时间差
  if (endStr) {
    var startT = new Date(startStr).getTime()
    var endT = new Date(endStr).getTime()
    times = (endT - startT) / 1000// 如果是一个参数，参数值是秒数
  } else {
    times = startStr
  }
  var day, hour, minute, endOutStr, second
  if (times > 0) {
    // console.log(times)
    day = Math.floor(times / (60 * 60 * 24))
    hour = Math.floor(times / (60 * 60)) - (day * 24)
    minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60)
    second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
    if (day <= 9) day = '0' + day
    if (hour <= 9) hour = '0' + hour
    if (minute <= 9) minute = '0' + minute
    if (second <= 9) second = '0' + second
    if (parseInt(day) !== 0) {
      endOutStr = day + '天' + hour + '小时' + minute + '分钟' + second + '秒'
    } else {
      if (parseInt(hour) !== 0) {
        endOutStr = hour + '小时' + minute + '分钟' + second + '秒'
      } else {
        endOutStr = minute + '分钟' + second + '秒'
      }
    }
  } else {
    endOutStr = 0
  }

  return endOutStr
}
