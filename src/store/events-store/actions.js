import EventsAPI from 'src/services/events/events-api'
import { LocalStorage, Dialog } from 'quasar'
import { modifyEventAvatarObject } from 'src/helpers/filters'
import { createDialog } from 'src/helpers/dialog'

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
  },

  filterEvents ({ state, commit }, eventName) {
    commit('setEvents', LocalStorage.getItem('events'))

    if (!eventName) return

    const filteredEvents = []

    for (const event in state.events) {
      if (state.events[event].name.toLowerCase().includes(eventName.toLowerCase())) {
        filteredEvents.push(state.events[event])
      }
    }

    //Nothing found on search
    if (!filteredEvents.length) {
      createDialog('Ooops :/', 'A nave só encontrou poeira cósmica.')
      return commit('setEvents', LocalStorage.getItem('events')) 
    } 

    //Success on search
    commit('setEvents', filteredEvents)
  }
}

export default actions