import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import CartTable from "../components/Cart/CartTable";
import CartCoupon from "../components/Cart/CartCoupon";
import CartSummary from "../components/Cart/CartSummary";

import {
  getCart,
  removeCartItem,
  updateCartItem,
} from "../services/cartService";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState(null);

  const [subTotal, setSubTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const shippingCost = 0;

  // ============================
  // Load Cart
  // ============================

  const loadCart = async () => {
    try {
      const data = await getCart();

    setCartItems(data.items);

    setSubTotal(data.total);

    setCoupon(data.coupon);
    } catch (error) {
      console.error(error);
    }
  };

  // Load cart once

  useEffect(() => {
    loadCart();
  }, []);

  // ============================
  // Calculate Grand Total
  // ============================

 useEffect(() => {

  let discount = 0;

  if (coupon) {
    discount =
      (Number(subTotal) * Number(coupon.discount_percent)) / 100;
  }

  const total =
    Number(subTotal) - discount + Number(shippingCost);

  console.log("SubTotal:", subTotal);
  console.log("Coupon:", coupon);
  console.log("Discount:", discount);
  console.log("Grand Total:", total);

  setGrandTotal(total);

}, [subTotal, coupon]);

  // ============================
  // Remove Item
  // ============================

  const removeItem = async (itemId) => {
    try {
      await removeCartItem(itemId);

      await loadCart();

      window.dispatchEvent(
        new Event("cart-updated")
      );
    } catch (error) {
      console.error(error);
    }
  };

  // ============================
  // Update Quantity
  // ============================

  const updateQuantity = async (
    itemId,
    quantity
  ) => {
    try {
      await updateCartItem(
        itemId,
        quantity
      );

      await loadCart();

      window.dispatchEvent(
        new Event("cart-updated")
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Breadcrumb />

      <div className="cart-page py-5 bg-white">
        <div className="container">

          <div className="row mb-5">

            <div className="col-md-12">

              <CartTable
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />

            </div>

          </div>

          <div className="row g-4">

            <div className="col-md-6">

              <CartCoupon
                onCouponApplied={setCoupon}
              />

            </div>

            <div className="col-md-6">

              <CartSummary
                subTotal={subTotal}
                shippingCost={shippingCost}
                coupon={coupon}
                grandTotal={grandTotal}
              />

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Cart;