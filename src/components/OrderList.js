import React from 'react';
import OrderCards from './OrderCards';

export default function OrderList({ order }){
    console.log(order)

    return(
        <div>
            <OrderCards item={order}/>
        </div>
    )
}