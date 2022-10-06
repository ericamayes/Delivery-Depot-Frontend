import React from 'react';
import RestaurantCard from './RestaurantCard'

function RestaurantList ( {services, id } ) {
    return (
        <ul className="cards">{services.map((service) => {
            return <RestaurantCard id = {id} key = {service.id} service = {service}/>
        })}</ul>
      );
};

export default RestaurantList;