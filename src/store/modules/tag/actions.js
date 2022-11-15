import Tag from "@/api/Tag";
import TagAdmin from "@/api/admin/Tag";

const actions = {
  getTags({ commit }, params) {
    commit("SET_IS_PENDING", true);
    return Tag.list(params)
      .then((response) => {
        commit("SET_DATA", response.data);
      })
      .catch(() => {
        throw new Error("Could not get list tag!");
      })
      .finally(() => {
        commit("SET_IS_PENDING", false);
      });
  },
  getTag({ commit }, id) {
    commit("SET_IS_PENDING", true);
    return TagAdmin.show(id)
      .then((response) => {
        commit("SET_ITEM", response.data);
      })
      .catch(() => {
        throw new Error("Could not get tag!");
      })
      .finally(() => {
        commit("SET_IS_PENDING", false);
      });
  },
  store({ commit }, data) {
    commit("SET_IS_PENDING", true);
    return TagAdmin.store(data)
      .then((response) => {
        if (+response.code === 0) {
          throw new Error(response.data.errors);
        }
      })
      .catch((error) => {
        throw new Error(error.message);
      })
      .finally(() => {
        commit("SET_IS_PENDING", false);
      });
  },
  update({ commit }, tag) {
    commit("SET_IS_PENDING", true);
    const { id, ...data } = tag;
    return TagAdmin.update(id, data)
      .then((response) => {
        if (+response.code === 0) {
          throw new Error(response.data.errors);
        }
      })
      .catch((error) => {
        throw new Error(error.message);
      })
      .finally(() => {
        commit("SET_IS_PENDING", false);
      });
  },
  destroy({ commit }, id) {
    commit("SET_IS_PENDING", true);
    return TagAdmin.destroy(id)
      .then((response) => {
        if (+response.code === 0) {
          throw new Error(response.data.errors);
        }
        commit("UPDATE_DATA", { id });
      })
      .catch((error) => {
        throw new Error(error.message);
      })
      .finally(() => {
        commit("SET_IS_PENDING", false);
      });
  },
};

export default actions;
