import { date } from 'quasar'

export function formatDate (dateToFormat) {
  return date.formatDate(dateToFormat, 'DD MMMM')
}
  
export function formatTime (timeToFormat) {
  const time = timeToFormat.split(':')
  return `${time[0]}:${time[1]}`
}


