import React from "react"; 
import doorDashLogo from '../assets/doorDashLogo.png';
import grubhubLogo from '../assets/grubhubLogo.png';
import uberEatsLogo from '../assets/uberEatsLogo.png';
import joyRunLogo from '../assets/joyRunLogo.png';
import postmatesLogo from '../assets/postmatesLogo.png';
import { Link } from "react-router-dom";




function DeliveryCards() {
return (
    <div className="restaurant-cards">
        <Link className="grubhub-logo logo2" to="/restaurants/1">
            <p>GRUBHUB</p>
        </Link>
        <Link className="postmates-logo logo2" to="/restaurants/2">
            <p>POSTMATES</p>
        </Link>
        <Link className="doordash-logo logo2" to="/restaurants/3">
            <p>DOORDASH</p>
        </Link>
        <Link className="uber-eats-logo logo2" to="/restaurants/4">
            <p>UBER EATS</p>
        </Link>
        <Link className="joyrun-logo logo2" to="/restaurants/5">
            <p>JOYRUN</p>
        </Link>
    </div>
)}


export default DeliveryCards;