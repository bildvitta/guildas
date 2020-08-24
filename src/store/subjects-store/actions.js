import { LocalStorage } from 'quasar'
import SubjectsAPI from 'src/services/subjects/subjects-api'
import { modifySubjectImagesObject } from 'src/helpers/filters'
import { createDialog } from 'src/helpers/dialog'

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
  },

  filterEventsOnSubjects ({ state, commit }, eventName) {
    if (!eventName) return 

    const filteredEvents = []

    for (const event in state.subjects.events) {
      if (state.subjects.events[event].name.toLowerCase().includes(eventName.toLowerCase())) {
        filteredEvents.push(state.subjects.events[event])
      }
    }

    //Nothing found on search
    if (!filteredEvents.length) {
      createDialog('Ooops :/', 'A nave só encontrou poeira cósmica.')
      return commit('setSubjects', LocalStorage.getItem('subjects')) 
    }

    //Success on search
    commit('filterSubjectEvents', filteredEvents)
  }
}

export default actions