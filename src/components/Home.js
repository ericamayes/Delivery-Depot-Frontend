import React from "react"; 
import NavBar from './NavBar';
import deliveryDriver from '../assets/deliveryDriver.png';
import DeliveryCards from './DeliveryCards';


function Home () {
  return (
    <div className='Home'>
      <NavBar />
      <div className="container">
      <div className="text-container">
        <h1>Delivery in under an hour GUARANTEED</h1>
        <h3>or your money back</h3>
      </div>
        <img className="delivery-image" alt="driver on scooter delivering food" src={deliveryDriver}/>
      </div>
      <DeliveryCards />
      <div className="form">
        <form className="zipcode-form">
          <label>
            <input className="form-input" type="text" placeholder="Enter your zipcode..."/>
          </label>
          <input className="submit" type="submit" value="Submit" />
        </form>
        </div>
      </div>
  );
}

export default Home;