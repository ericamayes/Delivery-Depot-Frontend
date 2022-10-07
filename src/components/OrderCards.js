import React from "react";

export default function OrderCards({ item }){
    return(
        <div>
            <div className="order-card">
                <h4 className="order-card-dish">{item.name.slice(0,10)}...</h4>
                <h6 className="order-card-restaurant">{item.restaurant_name.slice(0,25)}</h6>
                <h6 className="order-card-price">${item.price}</h6>
                <img className="order-card-image" src={item.image_url} alt={item.name.slice(0,10)}/>
            </div>
        </div>
    )
}