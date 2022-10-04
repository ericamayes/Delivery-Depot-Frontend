import React, { useState, useEffect } from "react";


function RestaurantPage () {
    const [service, setService] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9292/delivery/${window.location.href.slice(-1)}/restaurants`)
        .then((r) => r.json())
      .then((service) => console.log(service));
  }, []);

  if (!service) return <h2>Loading available restaurants...</h2>;

//   return (
//     <div>
//       <h2>{game.title}</h2>
//       <p>Genre: {game.genre}</p>
//       <h4>Reviews</h4>
//       {game.reviews.map((review) => (
//         <div>
//           <h5>{review.user.name}</h5>
//           <p>Score: {review.score}</p>
//           <p>Comment: {review.comment}</p>
//         </div>
//       ))}
//     </div>
//   );

}

export default RestaurantPage;