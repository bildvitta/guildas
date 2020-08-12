import CategoriesAPI from 'src/services/categories/categories-api'

const actions = {
  getCategories ({commit}) {
    let categories = CategoriesAPI.getCategories('/categories')
    console.log(categories)
    commit('setCategories', categories)
  }
}

export default actions