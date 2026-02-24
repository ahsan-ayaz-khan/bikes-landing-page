import axios from "axios";

const axiosClient = axios.create({
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("[AxiosClient] Request failed:", error?.message ?? error);
    return Promise.reject(error);
  },
);

export default axiosClient;
