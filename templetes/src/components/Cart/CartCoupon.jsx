import React, { useState } from "react";
import { applyCoupon } from "../../services/couponService";

const CartCoupon = ({ onCouponApplied }) => {

  const [coupon, setCoupon] = useState("");

  const handleApply = async (e) => {

    e.preventDefault();

    try {

      const data = await applyCoupon(coupon);
      console.log(data);

      alert(data.message);

      onCouponApplied(data.coupon);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Invalid Coupon"
      );

    }

  };

  return (
    <div className="coupon p-4 border rounded bg-light">

      <form
        onSubmit={handleApply}
        className="d-flex gap-2"
      >

        <input
          type="text"
          className="form-control py-2"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) =>
            setCoupon(e.target.value)
          }
        />

        <button
          type="submit"
          className="btn btn-primary px-4 fw-semibold text-nowrap"
        >
          Apply Code
        </button>

      </form>

    </div>
  );
};

export default CartCoupon;