import CategoriesAPI from "src/services/categories/categories-api";
import { LocalStorage } from "quasar";

const actions = {
  async setCategories({ commit }) {
    if (LocalStorage.getItem("categories")) {
      commit("setCategories", LocalStorage.getItem("categories"));
    } else {
      let categories = await CategoriesAPI.getCategories("/categories");
      commit("setCategories", categories);
      LocalStorage.set('categories', categories)
    }
  }
};

export default actions;
