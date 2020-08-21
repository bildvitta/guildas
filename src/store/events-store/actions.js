import EventsAPI from 'src/services/events/events-api'
import { LocalStorage } from 'quasar'
import { modifyEventAvatarObject } from 'src/helpers/filters'

const actions = {
  async setEvents ({ commit }) {
    const events = await EventsAPI.getEvents('/events')
    for (const event in events) {
      events[event] = modifyEventAvatarObject(events[event])
    }

    commit('setEvents', events)
    LocalStorage.set('events', events)
  },

  async setEventById ({ state, commit }, id) {
    if (state.events.length) {
      commit('setEventById', state.events.find(event => event.id === Number(id)))
    }    

    let event = await EventsAPI.getEvents(`/events/${id}`)

    event = modifyEventAvatarObject(event)
    
    commit('setEventById', event)
  }
}

export default actions