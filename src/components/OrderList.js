import React from 'react';
import OrderCards from './OrderCards';

export default function OrderList({ order }){
    if (order.length != 0) {
    return(
        <div>{order.map((order) => {
            return <OrderCards item={order} />
        })}
        </div>
    )}
}


{/* <div id="text-area" className="flex flex-wrap z-0 absolute">{wordsArray.map((word) => {
                    return createWords(word, wordsArray.indexOf(word))
                })}
                </div> */}