import BaseApi from "../Base";

export default {
  list(params) {
    return BaseApi.get("/admin/blogs", params);
  },
  show(id) {
    return BaseApi.get(`/admin/blogs/${id}`);
  },
  store(params) {
    return BaseApi.post("/admin/blogs", params);
  },
  update(id, params) {
    return BaseApi.put(`/admin/blogs/${id}`, params);
  },
  destroy(id, params) {
    return BaseApi.delete(`/admin/blogs/${id}`, params);
  },
};
