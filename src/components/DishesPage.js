import React, {useEffect, useState} from "react";

export default function DishesPage(){
    const [dishes, setDishes] = useState(null)


    useEffect(() => {
        fetch(`http://localhost:9292/restaurants/${window.location.href.split(/\//)[5]}/dishes`)
        .then(r => r.json())
        .then(data => {
            setDishes(data)
        })
    }, [])

    return (
        <div>
            hello, world
        </div>
    )
}