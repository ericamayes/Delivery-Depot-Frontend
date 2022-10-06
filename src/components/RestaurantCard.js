import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './CreateContext';

function RestaurantCard( {service, id} ) {
  const {name, category, image_url} = service;
  const { restaurantId, setRestaurantId } = useContext(UserContext)
//   should we also do rating? can't access it from the current table, though

  function handleClick(){
    setRestaurantId(service.id)
    navigate(`/restaurants/${id}/order`)
  }

  const navigate = useNavigate();
  return (
      <li onClick={handleClick} className="individual-card">
        <img src={image_url} alt={name} />
        <h4>{name}</h4>
        <p>Category: {category}</p>
      </li>
  );
}

export default RestaurantCard;