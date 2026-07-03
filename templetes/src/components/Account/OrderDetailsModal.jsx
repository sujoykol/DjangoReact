import React from "react";

const OrderDetailsModal = ({ show, order, onClose }) => {

    if (!show) return null;

    return (
        <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,.5)" }}
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Order Details</h5>

                        <button
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>

                    <div className="modal-body">
                        <p>Order Number: {order?.order_number}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderDetailsModal;