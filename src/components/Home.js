import React from "react"; 
import NavBar from './NavBar';
import deliveryDriver from '../assets/deliveryDriver.png';
import DeliveryCards from './DeliveryCards';


function Home () {
  return (
    <div className='home'>
      <NavBar />
      <div className="container">
      <div className="text-container">
        <h1 className="home-h1">Delivery in under an hour GUARANTEED</h1>
        <h3 className="home-h3">or your money back</h3>
      </div>
        <img className="delivery-image" alt="driver on scooter delivering food" src={deliveryDriver}/>
      </div>
      <DeliveryCards />
      </div>
  );
}

export default Home;