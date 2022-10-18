import React from "react";
import { Link } from "react-router-dom";

function NavBar () {

    return (
      <header>
        <div className="header">
          <span role="img">
                <img className="logo" src="https://cdn-icons-png.flaticon.com/512/1048/1048329.png"></img>
            </span>
            <span>
            <h2 className="delivery-depot">DeliveryDepot</h2>
          </span>
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