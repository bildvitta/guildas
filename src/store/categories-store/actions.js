import CategoriesAPI from 'src/services/categories/categories-api'
import { LocalStorage } from 'quasar'

const actions = {
  async setCategories ({ commit }) {
    
    const categories = await CategoriesAPI.getCategories('/categories')

    commit('setCategories', categories)
    LocalStorage.set('categories', categories)
  }
}

export default actions
