import api from "../api/axios";

export const createOrder = async () => {
    const response = await api.post("/orders/create/");
    return response.data;
};


export const getOrders = async () => {
    const response = await api.get("/orders/");
    return response.data;
};

export const getOrderDetails = async (id) => {
    const response = await api.get(`/orders/${id}/`);
    return response.data;
};