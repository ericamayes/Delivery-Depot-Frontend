function DishCard( {restaurant} ) {
  const {name, category, image_url} = restaurant;
//   should we also do rating? can't access it from the current table, though

  return (
    <li className="individual-card">
      <img src={image_url} alt={name} />
      <h4>{name}</h4>
      <p>Category: {category}</p>
    </li>
  );
}


export default DishCard;