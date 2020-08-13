import CategoriesAPI from 'src/services/categories/categories-api'
import { LocalStorage } from 'quasar'

const actions = {
  async setCategories ({ commit }) {
    const categoriesStorage = LocalStorage.getItem('categories')

    if (categoriesStorage) {
      return commit('setCategories', LocalStorage.getItem('categories'))
    }

    const categories = await CategoriesAPI.getCategories('/categories')
    commit('setCategories', categories)

    LocalStorage.set('categories', categories)
  }
}

export default actions
