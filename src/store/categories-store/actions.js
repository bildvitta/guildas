import CategoriesAPI from "src/services/categories/categories-api";

const actions = {
  async setCategories({ commit }) {
    let categories = await CategoriesAPI.getCategories('/categories')
    
    commit('setCategories', categories)
  }
};

export default actions;
