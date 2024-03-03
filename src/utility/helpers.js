import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showAlert = ({ type, msg }) => {
  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "info":
      toast.info(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "warning":
      toast.warning(msg);
      break;
    default:
      break;
  }
};

export let apiCall = (uri, type, payload) => {
  const instance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:8088`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  switch (type) {
    case "GET":
      return instance.get(uri);
    case "POST":
      return instance.post(uri, payload);
    case "DELETE":
      break;

    default:
      break;
  }
};

export let getStatus = async () => {
  let resp = await apiCall("/api/getCurrentUser", "GET");
  return resp.data;
};
