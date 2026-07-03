import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
const publicUrls = [
  "/banners/",
  "/brands/",
  "/products/",
  "/categories/",
  "/featured-products/",
  "/recent-products/",
];


api.interceptors.request.use((config) => {
  const isPublic = publicUrls.some((url) =>
    config.url.startsWith(url)
  );

  if (!isPublic) {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;