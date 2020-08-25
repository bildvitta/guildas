import EventsAPI from 'src/services/events/events-api'
import { LocalStorage, Dialog } from 'quasar'
import { modifyEventAvatarObject } from 'src/helpers/filters'
import { createDialog } from 'src/helpers/dialog'

const actions = {
  async setEvents ({ commit }, query) {
    const url = query ? `/events?name_contains=${query}` : '/events/' 
    const events = await EventsAPI.getEvents(url)

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