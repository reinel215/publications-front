import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.API_URL,
});

export const getAxiosClient = () => {
  return axiosClient;
};
