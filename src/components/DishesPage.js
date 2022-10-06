import React, { useState, useEffect } from "react";
import Orders from './Orders'
import DishList from './DishList'
import RestaurantSearchBar from "./RestaurantSearchBar";
import SideBar from "./SideBar";


function DishPage () {
    const [restaurant, setRestaurant] = useState(null);
    const [header, setHeader] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(`http://localhost:9292/delivery/${window.location.href.slice(-1)}/restaurants`)
        .then((r) => r.json())
      .then((restaurant) => setRestaurant(restaurant));
  }, []);

  useEffect(() => {
    console.log(restaurant)
  }, [restaurant])

  useEffect(() => {
    let id = window.location.href.slice(-1)
    switch (id) {
        case '1': 
            setHeader("Grubhub");
            break;
        case '2':
            setHeader("Postmates");
            break;
        case '3':
            setHeader("Doordash");
            break;
        case '4':
            setHeader("Uber Eats");
            break;
        case '5':
            setHeader("JoyRun");
            break;
        default:
            setHeader("Invalid ID");
    }
  }, [])

  if (!restaurant) return <h2>Loading available restaurants...</h2>;

  const displayedRestaurants = restaurant.filter((restaurant) => {
    return restaurant.category.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div className="restaurant-page">
      <SideBar />
      <div className="main-column">
        <div className="restaurant-header">
          <span role="img">
              <img className="delivery-picture" src="https://png.pngitem.com/pimgs/s/208-2089295_transparent-moving-png-images-transportation-transparent-background-png.png"></img>
          </span>
          <h1 className="restaurant-header">Uber Eats</h1>
        </div>
        <RestaurantSearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
        <DishList restaurants={displayedRestaurants}/>
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