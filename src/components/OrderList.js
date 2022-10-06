import React from 'react';
import OrderCards from './OrderCards';

export default function OrderList({ orders }){
    const orderCards = orders.map((order) => {
        return (
            <OrderCards order={order} />
        )
    })
    return(
        <div>
            {orderCards}
        </div>
    )
}