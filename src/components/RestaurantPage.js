import React, { useState, useEffect } from "react";
import Orders from './Orders'


function RestaurantPage () {
    const [service, setService] = useState(null);
    const [header, setHeader] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9292/delivery/${window.location.href.slice(-1)}/restaurants`)
        .then((r) => r.json())
      .then((service) => setService(service));
  }, []);

  useEffect(() => {
    console.log(service)
  }, [service])

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
    

  if (!service) return <h2>Loading available restaurants...</h2>;

  return (
   <div className="main-div">
    <header className="restaurant-page-header"> 
        <div className="restaurant-header">
            <span role="img">
                <img className="delivery-picture" src="https://png.pngitem.com/pimgs/s/208-2089295_transparent-moving-png-images-transportation-transparent-background-png.png"></img>
            </span>
            <h1 className="restaurant-headers">{header}</h1>
        </div>
    </header>




    <div className="restaurant-page-form">
          <form className="cuisine-form">
            <label>
              <input className="cuisine-input" type="text" placeholder="What cuisine are you in the mood for?"/>
            </label>
            <input className="cuisine-submit" type="submit" value="Search" />
          </form>
    </div>
    <Orders />
    </div>
  );
}

export default RestaurantPage;