import api from "../api/axios";

export const getBanners = async () => {
  const response = await api.get("/banners/");
  return response.data;
};