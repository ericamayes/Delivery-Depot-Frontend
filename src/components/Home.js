import React from "react"; 
import NavBar from './NavBar';
import deliveryDriver from '../assets/deliveryDriver.png';
import RestaurantCards from './RestaurantCards'


function Home () {

    // const [foods, setFoods] = useState([ ]);
    
  
    // useEffect( () => {
    //     fetch("")
    //     .then((res) => res.json())
    //     .then((data) => setFoods(data.data))
    //    }, [] )


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
        <RestaurantCards />
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