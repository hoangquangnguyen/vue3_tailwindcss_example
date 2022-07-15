import { createStore } from "vuex";
import moduleC from "./modules/countA";

const state = {
  count: 0,
};
const getters = {
  getCount(state: any) {
    return state.count;
  },
};
const mutations = {
  plus1Count(state: any) {
    state.count += 1;
  },
  plusNCount(state: any, payload: number) {
    state.count += payload;
  },
};
const actions = {
  plus1Count(context: any) {
    context.commit("plus1Count");
  },
  plusNCount(context: any, payload: number) {
    context.commit("plusNCount", payload);
  },
};

const moduleA = {
  namespaced: true,
  state: () => ({ count: 0 }),
  mutations: {
    increase(state: any) {
      state.count++;
    },
  },
  actions: {
    increase(context: any) {
      context.commit("increase");
    },
  },
  getters: {},
};

const moduleB = {
  namespaced: true,
  state: () => ({ count: 0 }),
  mutations: {
    increase(state: any) {
      state.count++;
    },
  },
  actions: {
    increase(context: any) {
      context.commit("increase");
    },
  },
  getters: {},
};

const modules = { a: moduleA, b: moduleB, c: moduleC };

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
});
