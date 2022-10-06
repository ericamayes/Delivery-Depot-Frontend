import React, {useEffect} from "react";

export default function DishesPage(){
    useEffect(() => {
        fetch(`http://localhost:9292/restaurants/${window.location.href.split(/\//)[5]}/dishes`)
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