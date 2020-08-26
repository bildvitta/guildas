import servicesAPI from 'src/services/services'
import { LocalStorage } from 'quasar'

const actions = {
  async setCategories ({ commit }) {
    const categories = await servicesAPI.getList('/categories')

    commit('setCategories', categories)
    LocalStorage.set('categories', categories)
  }
}

export default actions