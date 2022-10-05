import React from 'react';

export default function SideBar(){
    return (
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
    )
}