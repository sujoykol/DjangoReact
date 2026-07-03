import api from "../api/axios";



export const addToCart = async (productId, quantity = 1) => {
  return api.post("cart/add/", {
    product_id: productId,
    quantity,
  });
};


export const getCart = async () => {

  const response = await api.get("cart/");

  return response.data;
};

// services/cartService.js



export const updateCartItem = async (itemId, quantity) => {
  const response = await api.put(
    `cart/update/${itemId}/`,
    { quantity }
  );

  return response.data;
};

export const removeCartItem = async (itemId) => {
  const response = await api.delete(
    `cart/remove/${itemId}/`
  );

  return response.data;
};