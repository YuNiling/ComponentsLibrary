const state = () => ({
  column: [],
  data: [],
});

const mutations = {
  updateColumn(state, obj) {
    state.column = obj;
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
