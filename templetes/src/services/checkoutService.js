import api from "../api/axios";

export const getShippingAddresses = async () => {
    const response = await api.get("/shipping-addresses/");
    return response.data;
};

export const createShippingAddress = async (data) => {
    const response = await api.post("/shipping-addresses/", data);
    return response.data;
};

export const updateShippingAddress = async (id, data) => {
    const response = await api.put(`/shipping-addresses/${id}/`, data);
    return response.data;
};

export const deleteShippingAddress = async (id) => {
    await api.delete(`/shipping-addresses/${id}/`);
};