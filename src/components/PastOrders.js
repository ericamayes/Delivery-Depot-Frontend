import React from 'react';
import PastOrderCards from './PastOrderCards';

export default function PastOrders({ orders }){

    return(
        <ul className="past-order-list">{orders.map((order) => {
            return <PastOrderCards order={order}/>
        })}</ul>
    )
}