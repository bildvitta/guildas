const mutations = {
  setSubjects (state, subjects) {
    state.subjects = subjects
  },

  filterSubjectEvents (state, events) {
    state.subjects.events = events
  }
}

export default mutations