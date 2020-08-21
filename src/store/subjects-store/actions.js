import { LocalStorage } from 'quasar'
import SubjectsAPI from 'src/services/subjects/subjects-api'
import { modifySubjectImagesObject } from 'src/helpers/filters'

const actions = {
  async setSubjects ({ commit }) {
    const subjects = await SubjectsAPI.getSubjects('/subjects')

    for (const subject in subjects) {
      subjects[subject] = modifySubjectImagesObject(subjects[subject])
    }

    commit('setSubjects', subjects)
    LocalStorage.set('subjects', subjects)
  },

  async setSubjectById ({ state, commit }, id) {
    if (state.subjects.length > 0) {
      commit('setSubjects', state.subjects.find(subject => subject.id === Number(id)))
    }

    let subject = await SubjectsAPI.getSubjects(`/subjects/${id}`)

    subject = modifySubjectImagesObject(subject)

    commit('setSubjects', subject)
  }
}

export default actions