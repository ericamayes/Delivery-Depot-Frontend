import React, { useState, useEffect } from "react";
import AddressForm from "./AddressForm";
import Orders from './Orders'
import RestaurantList from './RestaurantList'
import RestaurantSearchBar from "./RestaurantSearchBar";
import SideBar from "./SideBar";
import LoadingScreen from "./LoadingScreen";
import OrderList from "./OrderList";


function RestaurantPage () {
    const [service, setService] = useState(null);
    const [header, setHeader] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [addressChange, onAddressChange] = useState("");
    const [address, setAddress] = useState("");
    const [id, setId] = useState("");
    const [subtotal, setSubtotal] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [total, setTotal] = useState(0);
    const [promo, setPromo] = useState("");
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9292/delivery/${window.location.href.slice(-1)}/restaurants`)
        .then((r) => r.json())
      .then((service) => setService(service));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9292/restaurants/5/ratings`)
    .then((r) => r.json())
  .then(r => console.log(r));
}, []);

  useEffect(() => {
    setId(window.location.href.slice(-1))
  }, [])

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

  if (!service) return <LoadingScreen />;

  const displayedRestaurants = service.filter((service) => {
    return service.category.toLowerCase().includes(searchTerm.toLowerCase()) || service.name.toLowerCase().includes(searchTerm.toLowerCase());
  })

  function handleAddressSubmit(e){
    e.preventDefault();
    setAddress(addressChange);
  }

  function handleClick(e){
    e.preventDefault();
    setAddress("");
  }

  let unknownAddress = [
    <span className="unknown-km address-text-small">📍 ? km 🕑 ? mins</span>
  ]

  let confirmedAddress = [
    <span className="known-km address-text-small">📍 {Math.floor(Math.random() * 11)} km 🕑 {Math.floor(Math.random() * 21)} mins</span>
  ]

  const foodOrders = [
    {
      name: "Cheeseburger",
      restaurant: "Red Star Noodle",
      price: 14,
      image_url: "https://loremflickr.com/300/400/food,meal"
    },
    {
      name: "Not Cheeseburger",
      restaurant: "Red Star Noodle",
      price: 20,
      image_url: "https://loremflickr.com/300/400/food,meal"
    },
    {
      name: "Hamburger",
      restaurant: "Red Star Noodle",
      price: 15,
      image_url: "https://loremflickr.com/300/400/food,meal"
    }
  ]

  return (
    <div className="restaurant-page">
      <SideBar />
      <div className="main-column">
        <div className="restaurant-header">
          <span role="img">
            <a href="/">
              <img className="delivery-picture" src="https://cdn-icons-png.flaticon.com/512/1048/1048329.png"></img>
            </a>
          </span>
          <h1 className="restaurant-header">Uber Eats</h1>
        </div>
        <div className="sponsored-restaurant">
          <img className="sponsored-pic" src="https://images.unsplash.com/photo-1629814249584-bd4d53cf0e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"/>
          <p className="sponsor-text">Sponsored</p>
        </div>
        <RestaurantSearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
        <RestaurantList services={displayedRestaurants} id={id}/>
      </div>
      <div className="order-column">
        <h3>My Order:</h3>
        <div className="order-column-top">
            <p className="deliver-to"><strong>Deliver to:</strong></p>
            <p className="address-text">{address ? address : <AddressForm addressChange={addressChange} onAddressChange={onAddressChange} handleAddressSubmit={handleAddressSubmit}/>}</p>
            {address ? confirmedAddress : unknownAddress}
            {address ? <button className="change-address-button" onClick={handleClick}>change address</button> : null}
            <OrderList orders={foodOrders}/>
            <div className="checkout-info">
              <p className="subtotal"><strong>Subtotal: </strong>${subtotal}</p>
              <p className="delivery-fees"><strong>Delivery Fees: </strong>${deliveryFee}</p>
              <input
                className="promo-input"
                type="text"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                placeholder="Promo code?"
              />
              <p className="total"><strong>Total: </strong>${total}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantPage;