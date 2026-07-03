import React, { useState } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import { loginUser, registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  // Isolated states for form lifecycle management
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({ email: '', password: '', rememberMe: false });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

 const handleLoginSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      username: loginData.email,
      password: loginData.password,
    };

    const response = await loginUser(payload);

    localStorage.setItem("access_token", response.access);
    localStorage.setItem("refresh_token", response.refresh);
    window.dispatchEvent(
    new Event("auth-updated")
    );
   window.dispatchEvent(
     new Event("cart-updated")
   );

    navigate("/account");

  } catch (error) {
    console.error(error.response?.data);
    alert("Invalid Username or Password");
  }
};

const handleRegisterSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await registerUser(registerData);
    console.log("Registration success:", result);
    alert("Account created successfully");
  } catch (error) {
    console.error("Registration failed:", error.response?.data);
    alert("Registration failed");
  }
};


  return (
    <>
      <Breadcrumb />

      <div className="login py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            
            {/* Left Column: Login Section */}
            <div className="col-lg-6 col-md-12">
              <div className="login-form bg-light p-4 border rounded">
                <h2 className="fw-bold text-dark mb-4">Login</h2>
                <form onSubmit={handleLoginSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label text-secondary small fw-semibold">E-mail / Username</label>
                      <input 
                        type="text" 
                        name="email"
                        className="form-control" 
                        placeholder="E-mail / Username" 
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label text-secondary small fw-semibold">Password</label>
                      <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        placeholder="Password" 
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    <div className="col-12 mt-2">
                      <div className="form-check">
                        <input 
                          type="checkbox" 
                          className="form-check-input" 
                          id="rememberMe" 
                          name="rememberMe"
                          checked={loginData.rememberMe}
                          onChange={handleLoginChange}
                        />
                        <label className="form-check-label fw-medium text-dark" htmlFor="rememberMe">
                          Keep me Signed in
                        </label>
                      </div>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-primary px-4 py-2 fw-bold text-uppercase w-100">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Register Section */}
            <div className="col-lg-6 col-md-12">
              <div className="register-form bg-light p-4 border rounded">
                <h2 className="fw-bold text-dark mb-4">Register</h2>
                <form onSubmit={handleRegisterSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-secondary small fw-semibold">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        className="form-control" 
                        placeholder="First Name" 
                        value={registerData.firstName}
                        onChange={handleRegisterChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-secondary small fw-semibold">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        className="form-control" 
                        placeholder="Last Name" 
                        value={registerData.lastName}
                        onChange={handleRegisterChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-secondary small fw-semibold">E-mail</label>
                      <input 
                        type="email" 
                        name="email"
                        className="form-control" 
                        placeholder="E-mail" 
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-secondary small fw-semibold">Mobile No</label>
                      <input 
                        type="text" 
                        name="mobile"
                        className="form-control" 
                        placeholder="Mobile No" 
                        value={registerData.mobile}
                        onChange={handleRegisterChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-secondary small fw-semibold">Password</label>
                      <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        placeholder="Password" 
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-secondary small fw-semibold">Retype Password</label>
                      <input 
                        type="password" 
                        name="confirmPassword"
                        className="form-control" 
                        placeholder="Retype Password" 
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                        required
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-primary px-4 py-2 fw-bold text-uppercase w-100">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;