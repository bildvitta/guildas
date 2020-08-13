import EventsAPI from 'src/services/events/events-api'

const actions = {
    async setEvents({commit}){
        let events = await EventsAPI.getEvents('/events')
        commit('setEvents', events)
    }
}

export default actions