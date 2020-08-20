const mutations = {
  setEvents (state, events) {
    state.events = events
  },

  setEventById (state, event) {
    state.eventById = event
  }
}

export default mutations