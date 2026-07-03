import React from "react";

const ProductSort = ({ onSort }) => {
  return (
    <div className="product-short">
      <select
        className="form-control"
        onChange={(e) => onSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="-created_at">Newest</option>
        <option value="price">Price Low to High</option>
        <option value="-price">Price High to Low</option>
      </select>
    </div>
  );
};

export default ProductSort;