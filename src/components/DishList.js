import React from 'react';
import DishCard from './DishCard'

function DishList ( {restaurants, handleSetOrder, restaurantName, setDisplay } ) {
    return (
        <ul className="cards nw22">{restaurants.map((restaurant) => {
            return <DishCard key = {restaurant.id} restaurant = {restaurant} handleSetOrder={handleSetOrder} restaurantName={restaurantName} setDisplay={setDisplay}/>
        })}</ul>
      );
};

export default DishList;