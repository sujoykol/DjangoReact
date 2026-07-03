import React from "react";

const CheckoutSummary = ({ cart }) => {
  console.log("CheckoutSummary cart:", cart);
  

    const items = cart?.items || [];

const subtotal = cart?.total || 0;
const shipping = items.length > 0 ? 50 : 0;
const discount =
    cart?.coupon
        ? (subtotal * cart.coupon.discount_percent) / 100
        : 0;

const grandTotal = subtotal + shipping - discount;

 if (items.length === 0) {
  return (
    <div className="checkout-summary p-4 border rounded bg-light">
      <h2 className="fw-bold text-dark mb-4">Cart Total</h2>

      <div className="text-center py-4">
        <h5 className="text-muted">Your cart is empty.</h5>
      </div>

      <hr />

      <div className="d-flex justify-content-between mb-2">
        <span>Sub Total</span>
        <span>$0.00</span>
      </div>

      <div className="d-flex justify-content-between mb-2">
        <span>Shipping Cost</span>
        <span>$0.00</span>
      </div>

      <hr />

      <div className="d-flex justify-content-between">
        <h4 className="fw-bold">Grand Total</h4>
        <h4 className="fw-bold text-primary">$0.00</h4>
      </div>
    </div>
  );
}


  return (
    <div className="checkout-summary p-4 border rounded bg-light">
      <h2 className="fw-bold text-dark mb-4">Cart Total</h2>

      <div className="checkout-content">

        <h3 className="fs-5 fw-bold border-bottom pb-2 mb-3 text-secondary">
          Products
        </h3>

        <div className="mb-3">

          {cart.items.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center text-secondary mb-3"
            >
              <div>
                <div className="fw-semibold">
                  {item.product_name}
                </div>

                <small className="text-muted">
                  Qty : {item.quantity}
                </small>
              </div>

              <span className="fw-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

        </div>

        <div className="d-flex justify-content-between border-top pt-3 mb-2 text-dark">
          <span>Sub Total</span>
          <span className="fw-bold">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        {cart.coupon && (
          <div className="d-flex justify-content-between mb-2 text-success">
            <span>
              Coupon ({cart.coupon.code})
            </span>

            <span className="fw-bold">
              -${discount.toFixed(2)}
            </span>
          </div>
        )}

        <div className="d-flex justify-content-between mb-2 text-dark">
          <span>Shipping Cost</span>

          <span className="fw-bold">
            ${shipping.toFixed(2)}
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center border-top pt-3">

          <h4 className="fw-bold text-dark mb-0">
            Grand Total
          </h4>

          <h4 className="fw-bold text-primary mb-0">
            ${grandTotal.toFixed(2)}
          </h4>

        </div>

      </div>
    </div>
  );
};

export default CheckoutSummary;