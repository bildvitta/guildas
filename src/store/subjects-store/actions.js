import { LocalStorage } from 'quasar'
import SubjectsAPI from 'src/services/subjects/subjects-api'
import { modifySubjectAvatarObject } from 'src/helpers/filters'


const actions = {
  async setSubjects ({ commit }) {
    let subjects = await SubjectsAPI.getSubjects('/subjects')

    for (let subject in subjects) {
      subjects[subject] = modifySubjectAvatarObject(subjects[subject])
    }

    commit('setSubjects', subjects)
    LocalStorage.set('subjects', subjects)
  },

  async setSubjectById ({ state, commit }, id) {
    if (state.subjects.length > 0) {
      commit('setSubjects', state.subjects.find(subject => subject.id === Number(id)))
    }

    let subject = await SubjectsAPI.getSubjects(`/subjects/${id}`)

    subject = modifySubjectAvatarObject(subject)

    commit('setSubjects', subject)
  }
}

export default actions
