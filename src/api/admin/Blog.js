import { authHeader } from "@/utils/helper";
import BaseApi from "../Base";

export default {
  show(id, params) {
    return BaseApi.get(
      `/admin/blogs/${id}`,
      { params },
      { headers: authHeader() }
    );
  },
  store(params) {
    return BaseApi.post("/admin/blogs", params, { headers: authHeader() });
  },
  update(id, params) {
    return BaseApi.put(`/admin/blogs/${id}`, params, { headers: authHeader() });
  },
  destroy(id, params) {
    return BaseApi.delete(`/admin/blogs/${id}`, params, {
      headers: authHeader(),
    });
  },
};
