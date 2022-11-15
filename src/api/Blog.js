import BaseApi from "./Base";

export default {
  listByTag(slug, params) {
    return BaseApi.get(`/tags/${slug}`, { params });
  },
  show(slug) {
    return BaseApi.get(`/blogs/${slug}`);
  },
};
