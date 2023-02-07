import { BASE_URL_BE } from "../shared/constants";
import axios from "axios";
import queryString from "query-string";

const instance = axios.create({
  baseURL: BASE_URL_BE,
  headers: {
    "content-type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("notoken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => err
);

export default instance;
