import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000.com",
  // You can add your headers here
});

export default API;
