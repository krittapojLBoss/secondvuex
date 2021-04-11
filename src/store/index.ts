import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: false,
  },
  mutations: {
    setValues(state, value) {
      state.status = !value;
    },
  },
  getters: {
    getValue(state) {
      return state.status;
    },
  },
  actions: {
    changeNum(context) {
      context.commit("setValues", this.getters.getValue);
    },
  },
  modules: {},
});
