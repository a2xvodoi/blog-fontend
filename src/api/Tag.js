import BaseApi from "./Base";

export default {
  list(params) {
    return BaseApi.get("/tags", { params });
  }
};
