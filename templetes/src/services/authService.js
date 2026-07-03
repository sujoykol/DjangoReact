import api from "../api/axios";


export const loginUser = async (data) => {
  const response = await api.post("/auth/login/", data);
  return response.data;
};


export const registerUser = async (data) => {
  const payload = {
    username: data.email, // IMPORTANT: username = email
    email: data.email,
    full_name: `${data.firstName} ${data.lastName}`,
    phone_number: data.mobile,
    password: data.password,
    password2: data.confirmPassword,
  };

  const res = await api.post("/auth/register/", payload);
  return res.data;
};


export const changePassword = async (data) => {
    const response = await api.put(
        "/auth/change-password/",
        data
    );
    return response.data;
};