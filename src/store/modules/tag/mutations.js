const mutations = {
  SET_IS_PENDING(state, payload) {
    state.isPending = payload;
  },
  SET_DATA(state, payload) {
    state.data = payload;
  },
  UPDATE_DATA(state, payload) {
    const index = state.data.findIndex((item) => item.id === payload.id);
    state.data.splice(index, 1);
  },
  SET_ITEM(state, payload) {
    state.item = payload;
  },
};

export default mutations;
