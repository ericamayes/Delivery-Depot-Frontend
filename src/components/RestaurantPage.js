import React, { useState, useEffect } from "react";
import Orders from './Orders'
import RestaurantList from './RestaurantList'
import RestaurantSearchBar from "./RestaurantSearchBar";


function RestaurantPage () {
    const [service, setService] = useState(null);
    const [header, setHeader] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

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

  const displayedRestaurants = service.filter((service) => {
    return service.category.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div className="restaurant-page">
      <nav className="side-nav-bar">
          <ul className="side-bar-ul">
              <li className="side-bar-li">
                  <a className="side-bar-link">
                      <img className="list-icon" alt="list" src="https://cdn-icons-png.flaticon.com/512/507/507205.png"/>
                  </a>
              </li>
              <li className="side-bar-li">
                  <a className="side-bar-link">
                      <img className="list-icon" alt="home" src="https://cdn.pixabay.com/photo/2013/07/12/12/56/home-146585_1280.png"/>
                      <span className="side-bar-text">home</span>
                  </a>
              </li>
              <li className="side-bar-li">
                  <a className="side-bar-link">
                      <img className="list-icon" alt="orders" src="https://cdn-icons-png.flaticon.com/512/6948/6948578.png"/>
                      <span className="side-bar-text">orders</span>
                  </a>
              </li>
              <li className="side-bar-li">
                  <a className="side-bar-link">
                      <img className="list-icon" alt="contact" src="https://cdn-icons-png.flaticon.com/512/597/597177.png"/>
                      <span className="side-bar-text">contact</span>
                  </a>
              </li>
              <li className="side-bar-li">
                  <a className="side-bar-link">
                      <img className="list-icon" alt="about" src="https://cdn-icons-png.flaticon.com/512/1/1176.png"/>
                      <span className="side-bar-text">about</span>
                  </a>
              </li>
          </ul>
      </nav>
      <div className="main-column">
        <div className="restaurant-header">
          <span role="img">
              <img className="delivery-picture" src="https://png.pngitem.com/pimgs/s/208-2089295_transparent-moving-png-images-transportation-transparent-background-png.png"></img>
          </span>
          <h1 className="restaurant-header">Uber Eats</h1>
        </div>
        <RestaurantSearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
        <RestaurantList services={displayedRestaurants}/>
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

export default RestaurantPage;