import axios from "axios";
import { createServices } from "@/common/helpers";

const axiosInstance = axios.create({
  baseURL: "https://random-data-api.com/api/",
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    const errorMessage = "Произошла ошибка при получении ответа от сервера";

    console.error(errorMessage);
    throw new Error(error);
  }
);

export const plugin = (store) => {
  store.$api = createServices();
}

export default axiosInstance;
