import React, { useState } from 'react';
import { changePassword } from '../../services/authService'; // Import the changePassword function
export default function AccountSettings() {
  // Local state for Account Details form
  const [accountDetails, setAccountDetails] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    address: ''
  });

  // Local state for Password Change form
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Handler for Account Details input changes
  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler for Password Change input changes
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    try {
        await changePassword({
            old_password: passwordData.currentPassword,
            new_password: passwordData.newPassword,
            confirm_password: passwordData.confirmPassword,
        });

        alert("Password changed successfully.");

        setPasswordData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });

    } catch (error) {
        alert(
            error.response?.data?.error ||
            "Failed to change password."
        );
    }
};
  return (
    <div className="animate-fade-in">
      {/* Account Details Form */}
      <form onSubmit={handlePasswordSubmit} className="mb-5">
        <h3 className="text-secondary fw-normal mb-4" style={{ fontSize: '1.75rem' }}>Account Details</h3>
        <div className="row g-3">
          <div className="col-md-6">
            <input 
              type="text" 
              name="firstName" 
              className="form-control rounded-0 bg-white py-2" 
              placeholder="First Name" 
              value={accountDetails.firstName} 
              onChange={handleAccountChange} 
            />
          </div>
          <div className="col-md-6">
            <input 
              type="text" 
              name="lastName" 
              className="form-control rounded-0 bg-white py-2" 
              placeholder="Last Name" 
              value={accountDetails.lastName} 
              onChange={handleAccountChange} 
            />
          </div>
          <div className="col-md-6">
            <input 
              type="text" 
              name="mobile" 
              className="form-control rounded-0 bg-white py-2" 
              placeholder="Mobile" 
              value={accountDetails.mobile} 
              onChange={handleAccountChange} 
            />
          </div>
          <div className="col-md-6">
            <input 
              type="email" 
              name="email" 
              className="form-control rounded-0 bg-white py-2" 
              placeholder="Email" 
              value={accountDetails.email} 
              onChange={handleAccountChange} 
            />
          </div>
        
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary rounded-0 px-4 py-2 fw-medium">
              Update Account
            </button>
          </div>
        </div>
      </form>

      {/* Password Change Form */}
     <form onSubmit={handlePasswordSubmit}>
        <h3 className="text-secondary fw-normal mb-4" style={{ fontSize: '1.75rem' }}>Password change</h3>
        <div className="row g-3">
          <div className="col-12">
            <input 
              type="password" 
              name="currentPassword" 
              className="form-control rounded-0 bg-white py-2" 
              placeholder="Current Password" 
              value={passwordData.currentPassword} 
              onChange={handlePasswordChange} 
            />
          </div>
          <div className="col-md-6">
            <input 
              type="password" 
              name="newPassword" 
              className="form-control rounded-0 bg-white py-2" 
              placeholder="New Password" 
              value={passwordData.newPassword} 
              onChange={handlePasswordChange} 
            />
          </div>
          <div className="col-md-6">
            <input 
              type="password" 
              name="confirmPassword" 
              className="form-control rounded-0 bg-white py-2" 
              placeholder="Confirm Password" 
              value={passwordData.confirmPassword} 
              onChange={handlePasswordChange} 
            />
          </div>
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary rounded-0 px-4 py-2 fw-medium">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}