import axios from "axios";

export const instance = axios.create({
  baseURL: "http://161.35.27.123/",
});
