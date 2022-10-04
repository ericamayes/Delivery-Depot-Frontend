import React from "react"; 
import doorDashLogo from '../assets/doorDashLogo.png';
import grubhubLogo from '../assets/grubhubLogo.png';
import uberEatsLogo from '../assets/uberEatsLogo.png';
import joyRunLogo from '../assets/joyRunLogo.png';
import postmatesLogo from '../assets/postmatesLogo.png';




function RestaurantCards() {
return (
    <div className="restaurant-cards">
        <div className="grubhub-logo">
            <p>GRUBHUB</p>
        </div>
        <div className="postmates-logo">
            <p>POSTMATES</p>
        </div>
        <div className="doordash-logo">
            <p>DOORDASH</p>
        </div>
        <div className="uber-eats-logo">
            <p>UBER EATS</p>
        </div>
        <div className="joyrun-logo">
            <p>JOYRUN</p>
        </div>
    </div>
)

}

export default RestaurantCards;