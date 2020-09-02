import { date } from 'quasar'

export const formatDate = dateToFormat => {
  return dateToFormat && date.formatDate(dateToFormat, 'DD MMMM')
}

export const formatTime = timeToFormat => {
  return timeToFormat ? ` // ${timeToFormat.split(':')[0]}:${timeToFormat.split(':')[1]}` : 'Data não especificada'
}

export const modifySubjectImagesObject = subject => {
  
  subject = modifySubjectEventsAvatarObject(subject)

  return {
    ...subject,
    image: {
      small: subject.image
        ? process.env.BASE_URL + subject.image?.formats?.small?.url
        : 'https://via.placeholder.com/325x182',
      medium: subject.image
        ? process.env.BASE_URL + subject.image?.formats?.medium?.url
        : 'https://via.placeholder.com/750x364'
    }
  }
}

export const modifySubjectEventsAvatarObject = subject => {
  if (!subject.events.length) return subject
  
  for (const event in subject.events) {
    subject.events[event].avatar = {
      small: subject.events[event]?.avatar
        ? process.env.BASE_URL + subject.events[event]?.avatar?.formats?.small?.url 
        : 'https://via.placeholder.com/325x182',
      medium: subject.events[event]?.avatar
        ? process.env.BASE_URL + subject.events[event]?.avatar?.formats?.medium?.url
        : 'https://via.placeholder.com/750x364'
    }
  }

  return subject
}

export const modifyEventAvatarObject = event => {
  return {
    ...event,
    avatar: {
      small: event.avatar
        ? process.env.BASE_URL + event.avatar.formats.small.url
        : 'https://via.placeholder.com/325x182',
      medium: event.avatar
        ?  process.env.BASE_URL + event.avatar.formats.medium.url
        : 'https://via.placeholder.com/750x364'
    }
  }
}