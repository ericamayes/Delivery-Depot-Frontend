import React from 'react';
import RestaurantCard from './RestaurantCard'

function RestaurantList ( {ratings, services, id, handleRestaurantClick, restaurantId, setRestaurantId, setRestaurantName } ) {

    return (
        <ul className="cards">{services.map((service) => {
            return <RestaurantCard ratings={ratings} id = {id} key = {service.id} service = {service} handleRestaurantClick={handleRestaurantClick} restaurantId={restaurantId} setRestaurantId={setRestaurantId} setRestaurantName={setRestaurantName}/>
        })}</ul>
      );
};

export default RestaurantList;