import { useNavigate } from "react-router-dom";

const CartSummary = ({
  subTotal = 0,
  shippingCost = 0,
  coupon = null,
  grandTotal = 0,
}) => {

  const safeSubTotal = Number(subTotal);
  const safeShippingCost = Number(shippingCost);
  const safeGrandTotal = Number(grandTotal);
  const navigate = useNavigate();
  const discount = coupon
    ? (safeSubTotal * Number(coupon.discount_percent || 0)) / 100
    : 0;
     console.log({
  subTotal,
  shippingCost,
  coupon,
  grandTotal,
});
  return (
    <div className="cart-summary p-4 border rounded bg-light">

      <div className="cart-content mb-4">

        <h3 className="fw-bold text-dark border-bottom pb-2 mb-3">
          Cart Summary
        </h3>

        <div className="d-flex justify-content-between mb-2">
          <span>Sub Total</span>
          <span>${safeSubTotal.toFixed(2)}</span>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>Discount</span>
          <span className="text-success">
            - ${discount.toFixed(2)}
          </span>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>Shipping</span>
          <span>${safeShippingCost.toFixed(2)}</span>
        </div>

        <div className="d-flex justify-content-between border-top pt-3">
          <strong>Grand Total</strong>
          <strong className="text-primary">
           ${Number(safeGrandTotal || 0).toFixed(2)}
          </strong>
        </div>

      </div>

      <div className="d-flex gap-3">
        <button className="btn btn-outline-secondary w-100">
          Update Cart
        </button>

      
        <button className="btn btn-primary w-100"onClick={() => navigate("/checkout")}>
    Checkout
</button>
      </div>

    </div>
  );
};

export default CartSummary;