import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 10,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
