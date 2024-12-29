import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_ENV && import.meta.env.VITE_NODE_BASE_URL
      ? import.meta.env.VITE_NODE_BASE_URL
      : "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});


export default api