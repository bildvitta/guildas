import EventsAPI from 'src/services/events/events-api'
import { LocalStorage } from 'quasar'

function modifyEventAvatarObject (event) {
  event.avatar = {
    small: event.avatar.formats.small.url,
    medium: event.avatar.formats.medium.url
  }

  return event
}

const actions = {
  async setEvents ({ commit }) {
    const eventsStorage = LocalStorage.getItem('events')

    if (eventsStorage) {
      return commit('setEvents', eventsStorage)
    }
    
    let events = await EventsAPI.getEvents('/events')

    for (let event in events) {
      events[event] = modifyEventAvatarObject(events[event])
      
    }

    commit('setEvents', events)
    LocalStorage.set('events', events)
  },

  async setEventById ({ state, commit }, id) {
    if (state.events.length > 0) {
      commit('setEvents', state.events.find(event => event.id === Number(id)))
    }    

    let event = await EventsAPI.getEvents(`/events/${id}`)

    event = modifyEventAvatarObject(event)
    console.log(event)

    commit('setEvents', event)
  }
}

export default actions
