import EventsAPI from 'src/services/events/events-api'
import { LocalStorage } from 'quasar'

const actions = {
	async setEvents ({ commit }) {
		const eventsStorage = LocalStorage.getItem('events')

		if (eventsStorage) {
			return commit('setEvents', eventsStorage)
		}

		let events = await EventsAPI.getEvents('/events')
		commit('setEvents', events)

		LocalStorage.set('events', events)

	}
}

export default actions
