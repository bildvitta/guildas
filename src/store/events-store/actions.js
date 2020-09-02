import serviceAPI from 'src/services/services'
import { LocalStorage } from 'quasar'
import { modifyEventAvatarObject } from 'src/helpers/filters'

const actions = {
  async setEvents ({ commit }, query) {
    const events = await serviceAPI.getList('/events', query)

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

    let event = await serviceAPI.getList(`/events/${id}`)

    commit('setEventById', modifyEventAvatarObject(event))
  }
}

export default actions