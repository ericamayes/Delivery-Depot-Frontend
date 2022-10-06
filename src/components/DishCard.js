function DishCard( {restaurant} ) {
  const {name, category, image_url} = restaurant;
//   should we also do rating? can't access it from the current table, though

  return (
    <li className="individual-card">
      <img src={image_url} alt={name} />
      <h4>{name}</h4>
      <p>Category: {category}</p>
      <btn className = "order-btn">
        Add to order
      </btn>
    </li>
  );
}


export default DishCard;