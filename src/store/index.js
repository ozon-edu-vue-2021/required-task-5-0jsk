import Vue from "vue";
import Vuex from "vuex";
import { modules } from "./modules";
import { plugin as axiosPlugin } from "@/plugins/axios";

Vue.use(Vuex);

const actions = {
  async init({ dispatch }) {
    dispatch("Products/query", { count: 30 });
  },
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  plugins: [axiosPlugin],
  actions,
  modules,
});
