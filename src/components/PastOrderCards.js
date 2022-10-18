import React from 'react';

export default function PastOrderCards({ order }){
    console.log(order)
    console.log(order)
    return (
        <div className="past-order-cards">
            <img className="past-order-image" src={order.image_url}/>
            <h4 className="order-dish-name">{order.dish_name}</h4>
            <span className="order-dish-price">${order.price}</span>
            <h5 className="order-dish-restaurant">Ordered from: {order.restaurant_name}</h5>
        </div>
    )
}