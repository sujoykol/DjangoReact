import api from "../api/axios";

export const getProducts = async (
  search = "",
  ordering = "",
  page = 1,
  category = "",
  brand = ""
) => {
  const response = await api.get(
    `/products/?search=${search}&ordering=${ordering}&page=${page}&category=${category}&brand=${brand}`
  );

  return response.data;
};

export const getProductDetails = async (slug) => {
  const response = await api.get(`/products/${slug}/`);
  return response.data;
};

export const getFeaturedProducts = async () => {
  const response = await api.get("/featured-products/");
  return response.data;
};

export const getRecentProducts = async () => {
  const response = await api.get("/recent-products/");
  return response.data;
};
export const getRelatedProducts = async (id) => {

    const response = await api.get(
        `/products/${id}/related/`
    );

    return response.data;
};