import React, { useState, useEffect } from "react";
import Orders from './Orders'
import RestaurantCards from './RestaurantList'


function RestaurantPage () {
    const [services, setServices] = useState(null);
    const [header, setHeader] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9292/delivery/${window.location.href.slice(-1)}/restaurants`)
        .then((r) => r.json())
      .then((services) => setServices(services));
  }, []);

  useEffect(() => {
    console.log(services)
  }, [services])

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

  useEffect(() => {
    const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {

            const select = dropdown.querySelector('.dropdown-select');
            const caret = dropdown.querySelector('.dropdown-caret');
            const menu = dropdown.querySelector('.dropdown-menu');
            const options = dropdown.querySelectorAll('.dropdown-menu li');
            const selected = dropdown.querySelector('.dropdown-selected');

            select.addEventListener('click', () => {
                select.classList.toggle('dropdown-select-clicked');
                caret.classList.toggle('dropdown-caret-rotate');
                menu.classList.toggle('dropdown-menu-open');
            });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                select.classList.remove('dropdown-select-clicked');
                caret.classList.remove('dropdown-caret-rotate');
                menu.classList.remove('dropdown-menu-open');
                options.forEach(option => {
                    option.classList.remove('active');
                })
                option.classList.add('active');
            });
        });
    });
}, []);
    

  if (!services) return <h2>Loading available restaurants...</h2>;

  return (
   
    <div className="order-page">
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
                            <span class="side-bar-text">home</span>
                        </a>
                    </li>
                    <li className="side-bar-li">
                        <a className="side-bar-link">
                            <img className="list-icon" alt="orders" src="https://cdn-icons-png.flaticon.com/512/6948/6948578.png"/>
                            <span class="side-bar-text">orders</span>
                        </a>
                    </li>
                    <li className="side-bar-li">
                        <a className="side-bar-link">
                            <img className="list-icon" alt="contact" src="https://cdn-icons-png.flaticon.com/512/597/597177.png"/>
                            <span class="side-bar-text">contact</span>
                        </a>
                    </li>
                    <li className="side-bar-li">
                        <a className="side-bar-link">
                            <img className="list-icon" alt="about" src="https://cdn-icons-png.flaticon.com/512/1/1176.png"/>
                            <span class="side-bar-text">about</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="main-column">
                <div className="restaurant-header">
                <span role="img">
                    <img className="delivery-picture" src="https://png.pngitem.com/pimgs/s/208-2089295_transparent-moving-png-images-transportation-transparent-background-png.png"></img>
                </span>
                <h1 className="restaurant-header">{header}</h1>
                </div>
                <div className="restaurant-page-form">
                    <form className="cuisine-form">
                        <label>
                            <input className="cuisine-input" type="text" placeholder="What cuisine are you in the mood for?"/>
                        </label>
                        <input className="cuisine-submit" type="submit" value="Search" />
                    </form>
                </div>
                <RestaurantCards services={services}/>
            </div>
            <div className="order-column">
                <h3>My Order:</h3>
                <div className="order-column-top">
                    <p>Deliver to:</p>
                    <div className="dropdown">
                        <div className="dropdown-select">
                            <span className="dropdown-selected">Chosen</span>
                            <div className="dropdown-caret"></div>
                        </div>
                        <ul className="dropdown-menu">
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li className="active">Chosen</li>
                            <li>Option 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
   
   
   
//    <div className="main-div">
//     <header className="restaurant-page-header"> 
//         <div className="restaurant-header">
//             <span role="img">
//                 <img className="delivery-picture" src="https://png.pngitem.com/pimgs/s/208-2089295_transparent-moving-png-images-transportation-transparent-background-png.png"></img>
//             </span>
//             <h1 className="restaurant-headers">{header}</h1>
//         </div>
//     </header>




//     <div className="restaurant-page-form">
//           <form className="cuisine-form">
//             <label>
//               <input className="cuisine-input" type="text" placeholder="What cuisine are you in the mood for?"/>
//             </label>
//             <input className="cuisine-submit" type="submit" value="Search" />
//           </form>
//     </div>
//     <Orders />
//     </div>
//   );
// }

export default RestaurantPage;