import React from 'react';

const availableMethods = [
  { id: 'payment-1', name: 'Paypal', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt orci ac eros volutpat maximus lacinia quis diam.' },
  { id: 'payment-2', name: 'Payoneer', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt orci ac eros volutpat maximus lacinia quis diam.' },
  { id: 'payment-3', name: 'Check Payment', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt orci ac eros volutpat maximus lacinia quis diam.' },
  { id: 'payment-4', name: 'Direct Bank Transfer', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt orci ac eros volutpat maximus lacinia quis diam.' },
  { id: 'payment-5', name: 'Cash on Delivery', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt orci ac eros volutpat maximus lacinia quis diam.' },
];

const PaymentMethods = ({ selectedPayment, onPaymentChange, onOrderSubmit }) => {
  return (
    <div className="checkout-payment p-4 border rounded bg-light">
      <h2 className="fw-bold text-dark mb-4">Payment Methods</h2>
      <div className="payment-methods d-flex flex-column gap-3 mb-4">
        {availableMethods.map((method) => (
          <div className="payment-method border rounded p-3 bg-white shadow-sm" key={method.id}>
            <div className="form-check">
              <input 
                type="radio" 
                className="form-check-input" 
                id={method.id} 
                name="payment"
                checked={selectedPayment === method.id}
                onChange={() => onPaymentChange(method.id)}
              />
              <label className="form-check-label fw-bold text-dark" htmlFor={method.id}>
                {method.name}
              </label>
            </div>
            
            {/* Smooth transition indicator content toggled directly by runtime selection values */}
            {selectedPayment === method.id && (
              <div className="payment-content mt-2 pt-2 border-top text-secondary small" style={{ lineHeight: '1.6' }}>
                <p className="mb-0">{method.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="checkout-btn mt-4">
        <button className="btn btn-primary w-100 py-3 fw-bold text-uppercase tracking-wider" onClick={onOrderSubmit}>
          Place Order
        </button>
        
      </div>
    </div>
  );
};

export default PaymentMethods;