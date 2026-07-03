import api from "../api/axios";

export const getBrands = async () => {
  const response = await api.get("/brands/");
  return response.data;
};