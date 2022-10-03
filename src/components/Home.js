import React from "react";


function Home () {

    const [foods, setFoods] = useState([ ]);
    
  
    useEffect( () => {
        fetch("")
        .then((res) => res.json())
        .then((data) => setFoods(data.data))
       }, [] )


    return (
        
        <header>
            <h1>
              Delivery Depot
              <span role="img">
                <img className="logo" src="https://png.pngitem.com/pimgs/s/208-2089295_transparent-moving-png-images-transportation-transparent-background-png.png"></img>
              </span>
            </h1>
            <nav>
              <div className="navigation">
                  <button>
                    <NavLink className="button" exact to="/">
                      Home
                    </NavLink>
                  </button>
                  <button>
                    <NavLink className="button" to="/About">
                      About
                    </NavLink>
                  </button>
                  <button>
                    <NavLink className="button" to="/Contact">
                      Contact
                    </NavLink>
                  </button>
                  <button>
                    <NavLink className="button" to="/Help">
                      Help
                    </NavLink>
                  </button>
              </div>
            </nav>
        </header>
      );
    }

    export default Home;