import api from "../api/axios";

// Get Wishlist
export const getWishlist = async () => {
  const response = await api.get("wishlist/");
  return response.data;
};

// Add to Wishlist
export const addToWishlist = async (productId) => {
  const response = await api.post("wishlist/", {
    product: productId,
  });

  return response.data;
};

// Remove from Wishlist
export const removeWishlist = async (wishlistId) => {
  const response = await api.delete(`wishlist/${wishlistId}/`);
  return response.data;
};