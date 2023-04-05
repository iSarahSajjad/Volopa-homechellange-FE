import axios from "axios";
import { toast } from "react-toastify";

import { store } from "../redux/store";
import { isExpectedError } from "../utills/errorHelpers";

const axiosObj = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});


axiosObj.interceptors.request.use(
  (config) => {
    const {
      auth: { token },
    } = store.getState();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

axiosObj.interceptors.response.use(null, (error) => {
  if (!isExpectedError(error)) {
    toast.error("An unexpected error has occured!");
  }

  return Promise.reject(error);
});

export { axiosObj };
