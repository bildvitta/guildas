import { LocalStorage } from 'quasar'
import SubjectsAPI from 'src/services/subjects/subjects-api'

const actions = {
	async setSubjects ({ commit }) {
		const subjectsStorage = LocalStorage.getItem('subjects')

		if (subjectsStorage) {
			return commit('setSubjects', LocalStorage.getItem('subjects'))
		}

		const subjects = await SubjectsAPI.getSubjects('/subjects')

		commit('setSubjects', subjects)
		LocalStorage.set('subjects', subjects)
	}
}

export default actions
