import EventsAPI from 'src/services/events/events-api'
import { LocalStorage } from 'quasar'

function modifyEventAvatarObject (event) {
  if (!event.avatar) {
    event.avatar = {
      small: 'https://via.placeholder.com/325x182',
      medium: 'https://via.placeholder.com/750'
    }

    return event
  } else {
    event.avatar = {
      small: process.env.BASE_URL + event.avatar.formats.small.url,
      medium: process.env.BASE_URL + event.avatar.formats.medium.url
    }

    return event
  }
}

const actions = {
  async setEvents ({ commit }) {
    let events = await EventsAPI.getEvents('/events')
    for (let event in events) {
      events[event] = modifyEventAvatarObject(events[event])
    }

    commit('setEvents', events)
    LocalStorage.set('events', events)
  },

  async setEventById ({ state, commit }, id) {
    if (state.events.length > 0) {
      commit('setEventById', state.events.find(event => event.id === Number(id)))
    }    

    let event = await EventsAPI.getEvents(`/events/${id}`)

    event = modifyEventAvatarObject(event)
    
    commit('setEventById', event)
  }
}

export default actions
