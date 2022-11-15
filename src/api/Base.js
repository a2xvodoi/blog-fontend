import axios from "axios";
import Qs from "qs";

const BASE_URL = process.env.VUE_APP_BASE_API || "http://localhost:3000/api";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   "content-type": "application/json",
  // },
  paramsSerializer: {
    serialize: (params) => Qs.stringify(params, {arrayFormat: 'brackets'})
  },
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw new Error(error.message);
  }
);
export default axiosClient;
