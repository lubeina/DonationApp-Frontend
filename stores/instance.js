import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://192.168.8.111:80/"
  baseURL: "http://172.20.10.3:80/",
  // baseURL: "http://192.168.8.156:80/",
});
