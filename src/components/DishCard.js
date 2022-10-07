

function DishCard( {restaurant} ) {
    const {name,  price, image_url} = restaurant;
  
    function handleClick(){
  
    }
    
  //   should we also do rating? can't access it from the current table, though
  
    return (
      <li className="individual-card">
        <div className="container-card">
            <div className="row">
                <div className="col">
                    <div className="dish-card h-100">
                        <img className="card-image" variant="top" src={image_url} alt={name} />
                            <div className="dish-card-header">
                                <h4>{name}</h4>
                                    <div className="primary">
                                        <btn className = "order-btn" onClick={handleClick}>
                                            Add to order
                                        </btn>
                                    </div>
                            </div>
                                <p className="dish-price"> ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    </li>
    );
  }
  
  
  export default DishCard;