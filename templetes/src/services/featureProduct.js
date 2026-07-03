import api from "../api/axios";


export const getFeaturedProducts = async () => {
  const response = await api.get("/featured-products/");
  return response.data;
};

export const getRecentProducts = async () => {
  const response = await api.get("/recent-products/");
  return response.data;
}