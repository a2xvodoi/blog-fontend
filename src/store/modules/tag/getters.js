const getters = {
  tagParent(state) {
    return state.data.filter((item) => item.parent_id === 0);
  },
};

export default getters;
