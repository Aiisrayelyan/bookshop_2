import React from 'react';
import { useBasket } from '../BasketContext';

export const ProductItem = ({ id, title, price, photo }) => {
    const { dispatch } = useBasket();
    
    const moveToCart = () => {
        dispatch({ type: 'ADD_TO_BASKET', payload: { id, title, price } });
    };

    return (
        <div>
            <img src={photo} alt={title} />
            <p>{title}</p>
            <p><strong>{price} USD</strong></p>
            <button onClick={moveToCart}>Move to Basket</button>
        </div>
    );
};
