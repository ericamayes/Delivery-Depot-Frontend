import React from "react";

export default function OrderCards({ order }){
    return(
        <div>
            <div className="order-card">
                <h4 className="order-card-dish">{order.name.slice(0,10)}...</h4>
                <h6 className="order-card-restaurant">{order.restaurant.slice(0,25)}</h6>
                <h6 className="order-card-price">${order.price}</h6>
                <img className="order-card-image" src={order.image_url}/>
            </div>
        </div>
    )
}