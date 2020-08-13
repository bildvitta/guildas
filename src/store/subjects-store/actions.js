import { LocalStorage, SessionStorage } from "quasar";
import SubjectsAPI from "src/services/subjects/subjects-api";

const actions = {
  async setSubjects({ commit }) {
    if (LocalStorage.getItem("subjects")) {
      commit("setSubjects", LocalStorage.getItem("subjects"));
    } else {
      let subjects = await SubjectsAPI.getSubjects("/subjects");
      commit("setSubjects", subjects);
      LocalStorage.set('subjects', subjects)
    }
  }
};

export default actions;
