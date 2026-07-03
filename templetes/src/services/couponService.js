import api from "../api/axios";

export const applyCoupon = async (code) => {

  const response = await api.post(
    "coupons/apply/",
    {
      code
    }
  );

  return response.data;
};