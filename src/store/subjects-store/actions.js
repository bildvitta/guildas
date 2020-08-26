import { LocalStorage } from 'quasar'
import servicesAPI from 'src/services/services'
import { modifySubjectImagesObject } from 'src/helpers/filters'
import { createDialog } from 'src/helpers/dialog'

const actions = {
  async setSubjects ({ commit }) {
    const subjects = await servicesAPI.getList('/subjects')

    for (const subject in subjects) {
      subjects[subject] = modifySubjectImagesObject(subjects[subject])
    }

    commit('setSubjects', subjects)
    LocalStorage.set('subjects', subjects)
  },

  async setSubjectById ({ state, commit }, id) {
    if (state.subjects.length > 0) {
      return commit('setSubjects', state.subjects.find(subject => subject.id === Number(id)))
    }
    console.log('teste')

    let subject = await servicesAPI.getList(`/subjects/${id}`)

    commit('setSubjects', modifySubjectImagesObject(subject))
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