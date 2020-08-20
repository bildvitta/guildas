import { date } from 'quasar'

export const formatDate = dateToFormat => date.formatDate(dateToFormat, 'DD MMMM')

export const formatTime = timeToFormat => `${timeToFormat.split(':')[0]}:${timeToFormat.split(':')[1]}`

export const modifySubjectAvatarObject = subject => {
  if (!subject.image) {
    subject.image = {
      small: 'https://via.placeholder.com/325x182'
    }

    return subject
  } else {
    subject.image = {
      small: process.env.BASE_URL + subject.image?.formats?.small?.url
    }

    return subject
  }
}