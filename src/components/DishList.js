import React from 'react';
import DishCard from './DishCard'

function DishList ( {restaurants, setOrder, restaurantName, setDisplay } ) {
    return (
        <ul className="cards">{restaurants.map((restaurant) => {
            return <DishCard key = {restaurant.id} restaurant = {restaurant} setOrder={setOrder} restaurantName={restaurantName} setDisplay={setDisplay}/>
        })}</ul>
      );
};

export default DishList;