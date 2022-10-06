import React, {useEffect, useContext} from "react";
import { UserContext } from "./CreateContext";

export default function DishesPage(){
    const { restaurantId, setRestaurantId } = useContext(UserContext)

    useEffect(() => {
        fetch(`http://localhost:9292/restaurants/${restaurantId}/dishes`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
    }, [])

    return (
        <div>
            hello, world
        </div>
    )
}