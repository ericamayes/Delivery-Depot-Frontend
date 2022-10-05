import React from 'react';
import RestaurantCard from './RestaurantCard'

function RestaurantList ( {services} ) {
    return (
        <ul className="cards">{services.map((service) => {
            return <RestaurantCard key = {service.id} service = {service}/>
        })}</ul>
      );
};

export default RestaurantList;