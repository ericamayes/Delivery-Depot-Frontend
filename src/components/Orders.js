import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"; 
import PastOrders from "./PastOrders";

function Orders () {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/orders/list')
        .then(r => r.json())
        .then(data => {
            setOrders(data)
        })
    }, [])
    return (
        <div className="order-page">
            <NavBar />
            <h1 className="previous-orders">Previous Orders</h1>
            <PastOrders orders={orders}/>
        </div>
    );
};

export default Orders;