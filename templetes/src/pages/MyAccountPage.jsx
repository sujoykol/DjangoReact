import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import OrderTable from '../components/Account/OrderTable';
import AccountSettings from '../components/Account/AccountSettings';
import AddressManagement from '../components/Account/AddressManagement';

const MyAccountPage = () => {
   const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('address'); // Default to address view to inspect the update immediately

  // 1. Address Configurations State Map
  const [addresses, setAddresses] = useState({
    payment: {
      street: '123 Payment Street',
      cityState: 'Los Angeles, CA',
      mobile: '012-345-6789'
    },
    shipping: {
      street: '123 Shipping Street',
      cityState: 'Los Angeles, CA',
      mobile: '012-345-6789'
    }
  });

  // 2. Account Details Context State Form
  const [accountDetails, setAccountDetails] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    address: ''
  });

  // 3. Password Modification Parameters State
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const navigationItems = [
    { id: 'orders', label: 'Orders', icon: 'fa-shopping-bag' },
    { id: 'address', label: 'address', icon: 'fa-map-marker-alt' },
    { id: 'details', label: 'Account Details', icon: 'fa-user' },
    { id: 'logout', label: 'Logout', icon: 'fa-sign-out-alt' },
  ];



  // Global State Set Mutation Functions
  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditAddress = (type) => {
    console.log(`Trigger address edit panel workflow for: ${type}`);
  };

  const handleTabClick = (tabId) => {
    if (tabId === 'logout') {
      console.log('Execute authentication clearance callback');
      return;
    }
    setActiveTab(tabId);
  };

  const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  window.dispatchEvent(
  new Event("auth-updated")
);
  window.dispatchEvent(
    new Event("cart-updated")
);

  navigate("/login");
};

  return (
    <div className="my-account py-5 bg-white">
      <div className="container">
        <div className="row g-4">
          
          {/* Left Side: Navigation Links */}
          <div className="col-lg-3 col-md-4">
            <div className="nav flex-column rounded border overflow-hidden">
              {navigationItems.map((item) => {
                const isSelected = activeTab === item.id;
                return (
                   <button
    key={item.id}
    className={`nav-link text-start border-bottom px-4 py-3 fw-medium text-capitalize border-0 ${
        activeTab === item.id
            ? "bg-primary text-white"
            : "bg-light text-secondary"
    }`}
    style={{ borderRadius: 0, outline: "none", boxShadow: "none" }}
    onClick={() => {
        if (item.id === "logout") {
            logout();
        } else {
            handleTabClick(item.id);
        }
    }}
>
    <i
        className={`fa ${item.icon} me-3 ${
            activeTab === item.id ? "text-white" : "text-primary"
        }`}
        style={{ width: "18px" }}
    ></i>

    {item.label}
</button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Tab Displays */}
          <div className="col-lg-9 col-md-8">
            <div className="tab-content p-4 rounded bg-light border h-100 min-vh-50">
              
             

              {/* Orders Historical Records Datatable View */}
              {activeTab === 'orders' && (
                <OrderTable />
              )}

              

              {/* Address Split Layout Window Block matching image_e1409b.png */}
              {activeTab === 'address' && (
                <AddressManagement />
              )}

              {/* Account Details Form Section Field Matrix */}
              {activeTab === 'details' && (
                <AccountSettings/>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;