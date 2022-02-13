import axios from "axios";
let instance = axios.create({
  baseURL: "http://localhost:5001/e-commerce-b929b/us-central1/api",
});
export default instance;
