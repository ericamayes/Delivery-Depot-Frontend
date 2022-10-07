import React from 'react';
import OrderCards from './OrderCards';

export default function OrderList({ order }){
    if (order.length != 0) {
    return(
        <div>
            <OrderCards item={order}/>
        </div>
    )}
}