const state = () => ({
<<<<<<< HEAD
  headers: [],
=======
  column: [],
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
  data: [],
});

const mutations = {
<<<<<<< HEAD
  updateHeaders(state, obj) {
    state.headers = obj;
=======
  updateColumn(state, obj) {
    state.column = obj;
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
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
