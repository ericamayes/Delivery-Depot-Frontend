import React from "react";

export default function OrderCards({ item }){
    console.log(item["newOrder"].name)
    return(
        <div>
            <div className="order-card">
                <h4 className="order-card-dish">{item["newOrder"].name ? item["newOrder"].name.slice(0,11): item["newOrder"].name}...</h4>
                <h6 className="order-card-restaurant">{item["newOrder"].restaurant_name}</h6>
                <h6 className="order-card-price">${item["newOrder"].price}</h6>
                <img className="order-card-image" src={item["newOrder"].image_url} alt={item["newOrder"].name}/>
            </div>
        </div>
    )
}