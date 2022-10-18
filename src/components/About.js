import React from "react"; 
import NavBar from "./NavBar";

function About () {
    return(
        <div className="about-page">
            <NavBar/>
        <h1 className="head"> About Us</h1>
            <h4 className = "about-bio" >We have created a database for food delivery that allows a user on the front end to send a request for a dish to a given restaurant and delivery service.</h4>
        <div id="about">
            <div className="about-card">
                <p className="about-name"> Erica Hashert</p>
                <ul id = "icons0">
                    <li><a href="https://www.linkedin.com/in/erica-hashert-251a0724b/"><img className="icons"src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/></a></li>
                    <li><a href="https://github.com/ericahashert"><img className="icons"src="https://cdn-icons-png.flaticon.com/512/536/536452.png"/></a></li>
                </ul>
            </div>
            <div className="about-card">
                <p className="about-name">Konstantin Stanmeyer</p>
                <ul id = "icons1">
                    <li><a href="https://www.linkedin.com/in/edwarddickey/"><img className="icons"src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/></a> </li>
                    <li><a href="https://github.com/edwarddickey?tab=repositories"><img className="icons"src="https://cdn-icons-png.flaticon.com/512/536/536452.png"/></a></li>
                </ul>
            </div>
            <div className="about-card">
                <p className="about-name">Edward Dickey</p>
                <ul id = "icons2">
                    <li><a href="https://www.linkedin.com/in/konstantin-stanmeyer-b06b88185/"><img className="icons"src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/></a></li>
                    <li><a href="https://github.com/konstantinstanmeyer"><img className="icons"id = "img2" src="https://cdn-icons-png.flaticon.com/512/536/536452.png"/></a></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default About;
