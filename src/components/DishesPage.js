
import React, { useState, useEffect, useContext } from "react";
import Orders from './Orders'
import DishList from './DishList'
import RestaurantSearchBar from "./RestaurantSearchBar";
import SideBar from "./SideBar";



function DishPage () {
    const [restaurant, setRestaurant] = useState(null);
    const [header, setHeader] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    
    const [id, setId] = useState(null);

   

    useEffect(() => {
        fetch(`http://localhost:9292/restaurants/${window.location.href.split(/\//)[5]}/dishes`)
        .then((r) => r.json())
      .then((restaurant) => setRestaurant(restaurant));
  }, []);
console.log(window.location.href.substring(-7))





  if (!restaurant) return <h2>Loading available restaurants...</h2>;
// REWRITE FILTER METHOD HERE
  const displayedDishes = restaurant


  return (
    <div className="restaurant-page">
      <SideBar />
      <div className="main-column">
        <div className="restaurant-header">
          <span role="img">
              <img className="delivery-picture" src="https://cdn-icons-png.flaticon.com/512/1048/1048329.png"></img>
          </span>
          <h1 className="restaurant-header"></h1>
          </div>



 
        <RestaurantSearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
        <DishList restaurants={displayedDishes}/>
      </div>
      <div className="order-column">
        <h3>My Order:</h3>
        <div className="order-column-top">
            <p>Deliver to:</p>
        </div>
      </div>
    </div>
  );
}


export default DishPage;