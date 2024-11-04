import axios from "axios";
import queryString from "query-string";
import { localDataNames } from "../constants/appInfos";

const baseURL = `http://192.168.1.158:3002`;

const getAccessToken = () => {
  const res = localStorage.getItem(localDataNames.authData);

  return res ? JSON.parse(res).token : "";
};

const axiosClient = axios.create({
  baseURL,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config: any) => {
  const accesstoken = getAccessToken();
  config.headers = {
    Authorization: `Bearer ${accesstoken}`,
    Accept: "application/json",
    ...config.headers,
  };
  config.data;
  console.log(config);
  return config;
});

axiosClient.interceptors.response.use(
  (res) => {
    if (res.data && res.status >= 200 && res.status < 300) {
      return res.data;
    } else {
      return Promise.reject(res.data);
    }
  },
  (error) => {
    const { response } = error;
    return Promise.reject(response.data);
  }
);
export default axiosClient;
