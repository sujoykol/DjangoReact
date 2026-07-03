import React from 'react';

const CartTable = ({ items, onUpdateQuantity, onRemoveItem }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-5 border rounded bg-light">
        <h4 className="text-muted">Your cart is currently empty.</h4>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center align-middle mb-0">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <a href={`/product-detail`}>
                  <img src={item.product_image} alt={item.product_name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="img-thumbnail" />
                </a>
              </td>
              <td>
                <a href={`/product-detail`} className="text-dark text-decoration-none fw-semibold">{item.product_name}</a>
              </td>
              <td>${item.price}</td>
              <td>
  <div className="d-inline-flex align-items-center border rounded">

    <button
      className="btn btn-sm btn-outline-secondary border-0 px-2"
      onClick={() =>
        onUpdateQuantity(
          item.id,
          Math.max(1, item.quantity - 1)
        )
      }
    >
      <i className="fa fa-minus"></i>
    </button>

    <input
      type="text"
      /*className="form-control form-control-sm text-center border-0 fw-bold bg-white"*/
      style={{ width: "45px" }}
      value={item.quantity}
      readOnly
    />

    

    <button
      className="btn btn-sm btn-outline-secondary border-0 px-2"
      onClick={() =>
        onUpdateQuantity(
          item.id,
          item.quantity + 1
        )
      }
    >
      <i className="fa fa-plus"></i>
    </button>

  </div>
</td>
              <td className="fw-bold text-primary">${item.price * item.quantity}</td>
              <td>
                <button className="btn btn-sm btn-outline-danger border-0" onClick={() => onRemoveItem(item.id)}>
                  <i className="fa fa-trash fs-5"></i>
                </button>

                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;