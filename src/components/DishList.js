import React from 'react';
import DishCard from './DishCard'

function DishList ( {restaurants} ) {
    return (
        <ul className="cards">{restaurants.map((restaurant) => {
            return <DishCard key = {restaurant.id} restaurant = {restaurant}/>
        })}</ul>
      );
};

export default DishList;