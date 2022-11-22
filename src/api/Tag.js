import { authHeader } from "@/utils/helper";
import BaseApi from "./Base";

export default {
  list(params) {
    return BaseApi.get("/tags", { params, headers: authHeader() });
  },
};
