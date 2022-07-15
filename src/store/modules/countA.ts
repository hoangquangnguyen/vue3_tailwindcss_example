const state = {
  count: 0,
};
const getters = {};
const mutations = {
  increase(state: any) {
    state.count++;
  },
};
const actions = {
  increase(context: any) {
    context.commit("increase");
  },
};

export default {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
