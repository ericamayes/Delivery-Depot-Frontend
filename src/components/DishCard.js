import React from 'react';

function DishCard( {restaurant, handleSetOrder, restaurantName, setDisplay} ) {
    const {name,  price, image_url} = restaurant;
  
    function handleClick(){
        handleSetOrder({
            name: name,
            price: price,
            restaurant_name: restaurantName,
            image_url: image_url
        })
        setDisplay(true);
    }
    
  //   should we also do rating? can't access it from the current table, though
  
    return (
      <li onClick={() => handleClick()} className="individual-card dish-cards-styling">
        <div className="container-card">
            <div className="row">
                <div className="dishes-col">
                    <div className="dish-card h-100">
                        <img className="card-image" variant="top" src={image_url} alt={name} />
                            <div className="dish-card-header">
                                {name.length > 17 ? (
                                <h4>{name.slice(0,17)}...</h4>
                                 ) : (
                                  <h4>{name}</h4> 
                                 )}
                                    <div className="primary">
                                        <btn className = "order-btn" onClick={() => handleClick}>
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