const state = () => ({
  headers: [],
  data: [],
});

const mutations = {
  updateHeaders(state, obj) {
    state.headers = obj;
  },
  updateData(state, obj) {
    state.data = obj;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
