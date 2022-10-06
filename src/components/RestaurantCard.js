import { useNavigate } from "react-router-dom";

function RestaurantCard( {service, id} ) {
  const {name, category, image_url} = service;
//   should we also do rating? can't access it from the current table, though
  const navigate = useNavigate();
  return (
      <li onClick={() => navigate(`/restaurants/${id}/order`)} className="individual-card">
        <img src={image_url} alt={name} />
        <h4>{name}</h4>
        <p>Category: {category}</p>
      </li>
  );
}

export default RestaurantCard;