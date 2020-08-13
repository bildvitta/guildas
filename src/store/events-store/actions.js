import EventsAPI from "src/services/events/events-api";
import { LocalStorage } from "quasar";

const actions = {
  async setEvents({ commit }) {
    if (LocalStorage.getItem("events")) {
      commit("setEvents", LocalStorage.getItem("events"));
    } else {
      let events = await EventsAPI.getEvents("/events");
      commit("setEvents", events);
      LocalStorage.set('events', events)
    }
  }
};

export default actions;
