import React from 'react';
import './Card.css';

const Card = (props) => {
    const { cart } = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: </p>
            <p>Tax: </p>
            <h6>Grand Total: $1559 </h6>
        </div>
    );
};

export default Card;