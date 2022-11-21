import BaseApi from "./Base";
import { authHeader } from '@/utils/helper';

export default {
  register(params) {
    return BaseApi.post("/register", params, { headers: authHeader() });
  },
  login(params) {
    return BaseApi.post("/login", params, { headers: authHeader() });
  },

  check(params) {
    return BaseApi.get("/check", params, { headers: authHeader() });
  }
};
