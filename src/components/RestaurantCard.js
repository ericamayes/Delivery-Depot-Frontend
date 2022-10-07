import { useNavigate } from "react-router-dom";
// import Card from 'react-bootstrap/Card'

function RestaurantCard( {service, id, ratings, handleRestaurantClick, restaurantId, setRestaurantId, setRestaurantName } ) {
  const {name, category, image_url} = service;
//   should we also do rating? can't access it from the current table, though

    function handleClicking(){
      handleRestaurantClick()
      setRestaurantId(service.id)
      setRestaurantName(name)
    }

  const navigate = useNavigate();
  return (
      <li onClick={() => handleClicking()} className="individual-card">
        <div className="container-card">
          <div className="row">
            <div className="col">
              <div className="card h-100">
                <img className="card-image" variant="top" src={image_url} alt={name}/>
                <div className="card-text">
                  <h3>{name}</h3>
                  <p><em>{category}</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
  );
}

export default RestaurantCard;
