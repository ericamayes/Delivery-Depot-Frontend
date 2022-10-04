import React from "react";
import { Link } from "react-router-dom";

function NavBar () {

    return (
      <header>
        <div className="header">
          <span role="img">
                <img className="logo" src="https://png.pngitem.com/pimgs/s/208-2089295_transparent-moving-png-images-transportation-transparent-background-png.png"></img>
            </span>
            <h2>DeliveryDepot</h2>
            <nav className="navbar">
                <ul className="navbar-container">
                  <Link className="nav-links" to="/">
                    Home
                  </Link>
                  <Link className="nav-links" to="/orders">
                    Orders
                  </Link>
                  <Link className="nav-links" to="/contact">
                    Contact
                  </Link>
                  <Link className="nav-links" to="/about">
                    About
                  </Link>
                </ul>
            </nav>
        </div>
      </header>
    );
  }
  
  export default NavBar;