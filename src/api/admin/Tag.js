import BaseApi from "../Base";

export default {
  show(id) {
    return BaseApi.get(`/admin/tags/${id}`);
  },
  store(params) {
    return BaseApi.post("/admin/tags", params);
  },
  update(id, params) {
    return BaseApi.put(`/admin/tags/${id}`, params);
  },
  destroy(id, params) {
    return BaseApi.delete(`/admin/tags/${id}`, params);
  },
};
