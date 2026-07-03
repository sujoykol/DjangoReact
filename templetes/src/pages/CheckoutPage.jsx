import { useEffect, useState } from "react";
import Breadcrumb from '../components/common/Breadcrumb';
import AddressForm from '../components/Checkout/AddressForm';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';
import PaymentMethods from '../components/Checkout/PaymentMethods';
import { getCart } from "../services/cartService";
import { createOrder } from "../services/ordersService";

const CheckoutPage = () => {
   const [addresses, setAddresses] = useState([]);
   const [loading, setLoading] = useState(true);
   const [cart, setCart] = useState(null);
   const [selectedPayment, setSelectedPayment] = useState("payment-5");
 
   useEffect(() => {
    loadCart();
}, []);

const loadCart = async () => {

    try {

        const data = await getCart();

        setCart(data);

    } catch (error) {

        console.error(error);

    }

};

const products = cart?.items || [];
const subTotal = cart?.subtotal || 0;
const shippingCost = cart?.shipping || 0;
const grandTotal = cart?.grand_total || 0;
const handlePlaceOrder = async () => {
    try {
        const order = await createOrder({
            payment_method: selectedPayment,
        });
        // Refresh the UI
        await loadCart();   // Reload the updated cart
        window.dispatchEvent(new Event("cart-updated"));

        console.log(order);
        alert("Order placed successfully!");

    } catch (error) {
        console.error(error);
        alert("Unable to place order.");
    }
};

   
  return (
    <>
      <Breadcrumb />
      
      <div className="checkout py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            
            {/* Left Column Layout: Core Form Modules */}
            <div className="col-lg-7 col-md-12">
              <AddressForm />
             {/* <AddressForm 
                type="billing"
                title="Billing Address"
                showToggles={true}
                createAccount={createAccount}
                setCreateAccount={setCreateAccount}
                shipToDifferent={shipToDifferent}
                setShipToDifferent={setShipToDifferent}
              /> */}

              {/* Conditional Display Window for Separate Shipping Location Data */}
              
            </div>

            {/* Right Column Layout: Aggregation Summaries & Payment Gates */}
            <div className="col-lg-5 col-md-12">
              <div className="d-flex flex-column gap-4">
                
              <CheckoutSummary 
                cart={cart}
                /> 
                
              <PaymentMethods 
                  selectedPayment={selectedPayment}
                  onPaymentChange={setSelectedPayment}
                  onOrderSubmit={handlePlaceOrder}
                /> 

                
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};


export default CheckoutPage;