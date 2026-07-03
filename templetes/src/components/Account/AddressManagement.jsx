import React, { useState } from 'react';

export default function AddressManagement() {
  // Local state initialized with mock address data
  const [addresses, setAddresses] = useState({
    payment: {
      street: '123 Main Street, Apt 4B',
      cityState: 'New York, NY 10001',
      mobile: '+1 (555) 123-4567'
    },
    shipping: {
      street: '789 Oak Avenue',
      cityState: 'Los Angeles, CA 90001',
      mobile: '+1 (555) 987-6543'
    }
  });

  // Handler for address editing logic
  const handleEditAddress = (type) => {
    console.log(`Editing ${type} address...`);
    // Add your logic to open a modal or toggle an inline form here
  };

  return (
    <div className="animate-fade-in">
      <h3 className="text-secondary fw-normal mb-4" style={{ fontSize: '1.75rem' }}>Address</h3>
      <div className="row g-4">
        
        {/* Left Column Section: Payment Destination Profile */}
        <div className="col-md-6">
          <h4 className="text-secondary fw-normal mb-3" style={{ fontSize: '1.35rem' }}>Payment Address</h4>
          <p className="text-secondary mb-1" style={{ fontSize: '0.95rem' }}>
            {addresses.payment.street}, {addresses.payment.cityState}
          </p>
          <p className="text-secondary mb-4" style={{ fontSize: '0.95rem' }}>
            Mobile: {addresses.payment.mobile}
          </p>
          <button 
            onClick={() => handleEditAddress('payment')}
            className="btn btn-primary rounded-0 px-4 py-2 fw-medium"
          >
            Edit Address
          </button>
        </div>

        {/* Right Column Section: Shipping Destination Profile */}
        <div className="col-md-6">
          <h4 className="text-secondary fw-normal mb-3" style={{ fontSize: '1.35rem' }}>Shipping Address</h4>
          <p className="text-secondary mb-1" style={{ fontSize: '0.95rem' }}>
            {addresses.shipping.street}, {addresses.shipping.cityState}
          </p>
          <p className="text-secondary mb-4" style={{ fontSize: '0.95rem' }}>
            Mobile: {addresses.shipping.mobile}
          </p>
          <button 
            onClick={() => handleEditAddress('shipping')}
            className="btn btn-primary rounded-0 px-4 py-2 fw-medium"
          >
            Edit Address
          </button>
        </div>

      </div>
    </div>
  );
}