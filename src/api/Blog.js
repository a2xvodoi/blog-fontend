import { authHeader } from "@/utils/helper";
import BaseApi from "./Base";

export default {
  list(params) {
    return BaseApi.get("/blogs", { params, headers: authHeader() });
  },
  listByTag(slug, params) {
    return BaseApi.get(`/tags/${slug}`, { params, headers: authHeader() });
  },
  latest(params) {
    return BaseApi.get(`/blogs/latest`, { params, headers: authHeader() });
  },
  show(slug, params) {
    return BaseApi.get(`/blogs/${slug}`, { params, headers: authHeader() });
  },
};
