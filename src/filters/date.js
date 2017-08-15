export default function(date, format) {
  if (date == null) {
    return '未知时间'
  }
  if (date.length === 0) {
    return ''
  }
  if (format == null) {
    format = 'yyyy-MM-dd'
  }

  const t = new Date(date)

  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(sign) {
    switch (sign) {
      case 'yyyy':
        return timeFormat(t.getFullYear())
      case 'MM':
        return timeFormat(t.getMonth() + 1)
      case 'mm':
        return timeFormat(t.getMinutes())
      case 'dd':
        return timeFormat(t.getDate())
      case 'HH':
        return timeFormat(t.getHours())
      case 'ss':
        return timeFormat(t.getSeconds())
    }
  })

  function timeFormat(i) {
    return (i < 10 ? '0' : '') + i
  }
}
