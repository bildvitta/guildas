import SubjectsAPI from 'src/services/subjects/subjects-api'

const actions = {
    async setSubjects({commit}){
        let subjects = await SubjectsAPI.getSubjects('/subjects')
        commit('setSubjects', subjects)
    }
}

export default actions