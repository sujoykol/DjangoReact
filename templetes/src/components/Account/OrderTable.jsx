import { useEffect, useState } from "react";
import {
    getOrders,
    getOrderDetails,
} from "../../services/ordersService";;
import OrderDetailsModal from "./OrderDetailsModal";

export default function OrderTable() {

    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            const data = await getOrders();
            setOrders(data);
             console.log(data);   
        } catch (error) {
            console.error(error);
        }
    };
    const openOrder = async (id) => {

    const order = await getOrderDetails(id);

    setSelectedOrder(order);

    setShowModal(true);

};

    return (
        <div className="animate-fade-in">
            <div className="table-responsive rounded border bg-white">

                <table
                    className="table table-bordered text-center align-middle mb-0"
                    style={{ fontSize: "0.95rem" }}
                >
                    <thead className="table-primary text-white">
                        <tr>
                            <th className="py-3 fw-bold border-0 bg-primary">
                                No
                            </th>
                            <th className="py-3 fw-bold border-0 bg-primary">
                                Order No
                            </th>
                            <th className="py-3 fw-bold border-0 bg-primary">
                                Date
                            </th>
                            <th className="py-3 fw-bold border-0 bg-primary">
                                Total
                            </th>
                            <th className="py-3 fw-bold border-0 bg-primary">
                                Status
                            </th>
                            <th className="py-3 fw-bold border-0 bg-primary">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {orders.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="py-5">
                                    No Orders Found
                                </td>
                            </tr>
                        ) : (

                            orders.map((order, index) => (

                                <tr key={order.id}>

                                    <td>{index + 1}</td>

                                    <td>{order.order_number}</td>

                                    <td>
                                        {new Date(order.created_at).toLocaleDateString()}
                                    </td>

                                    <td>${order.grand_total}</td>

                                    <td>{order.order_status}</td>

                                    <td>
                                        <button className="btn btn-primary btn-sm"
                                        onClick={() => openOrder(order.id)}>
                                        View
                                        </button>
                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>
                <OrderDetailsModal
    show={showModal}
    order={selectedOrder}
    onClose={() => setShowModal(false)}
/>

            </div>
        </div>
    );
}