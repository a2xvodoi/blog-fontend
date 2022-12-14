import Blog from "@/api/Blog";
import BlogAdmin from "@/api/admin/Blog";

const actions = {
  getBlogs({ commit }, params) {
    commit("SET_IS_PENDING", true);
    return Blog.list(params)
      .then((response) => {
        commit("SET_DATA", response.data);
      })
      .catch(() => {
        throw new Error("Could not get list blogs!");
      })
      .finally(() => {
        commit("SET_IS_PENDING", false);
      });
  },
  getBlogsByTag({ commit }, data) {
    commit("SET_IS_PENDING", true);
    const { slug, ...params } = data;
    return Blog.listByTag(slug, params)
      .then((response) => {
        commit("SET_DATA", response.data);
      })
      .catch(() => {
        throw new Error("Could not get list blogs!");
      })
      .finally(() => {
        commit("SET_IS_PENDING", false);
      });
  },
  get({ commit }, id) {
    commit("SET_IS_PENDING", true);
    return BlogAdmin.show(id)
      .then((response) => {
        commit("SET_ITEM", response.data);
      })
      .catch(() => {
        throw new Error("Could not get blog!");
      })
      .finally(() => {
        commit("SET_IS_PENDING", false);
      });
  },
  getBySlug({ commit }, { slug }) {
    commit("SET_IS_PENDING", true);
    return Blog.show(slug)
      .then((response) => {
        commit("SET_ITEM", response.data);
      })
      .catch(() => {
        throw new Error("Could not get blog!");
      })
      .finally(() => {
        commit("SET_IS_PENDING", false);
      });
  },
  latest({ commit }) {
    commit("SET_IS_PENDING", true);
    return Blog.latest()
      .then((response) => {
        commit("SET_LATEST", response.data);
      })
      .catch(() => {
        throw new Error("Could not get blog!");
      })
      .finally(() => {
        commit("SET_IS_PENDING", false);
      });
  },
  getInfoAuthor({ commit }, { slug }) {
    return Blog.author(slug)
      .then((response) => {
        commit("UPDATE_ITEM", { author: response.data });
      })
      .catch(() => {
        throw new Error("Could not get info user!");
      });
  },
  store({ commit }, data) {
    commit("SET_IS_PENDING", true);
    return BlogAdmin.store(data)
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
  update({ commit }, blog) {
    commit("SET_IS_PENDING", true);
    const { id, ...data } = blog;
    return BlogAdmin.update(id, data)
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
    return BlogAdmin.destroy(id)
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
