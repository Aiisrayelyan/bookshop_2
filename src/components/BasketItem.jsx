import React from 'react';
import { useBasket } from '../BasketContext';

export const BasketItem = ({ id, title, price, count }) => {
    const { dispatch } = useBasket();

    const incrementCount = () => dispatch({ type: 'INCREMENT', payload: id });
    const decrementCount = () => dispatch({ type: 'DECREMENT', payload: id });
    const removeItem = () => dispatch({ type: 'REMOVE', payload: id });

    const subtotal = count * price;

    return (
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{subtotal}</td>
            <td>
                <button onClick={decrementCount} disabled={count <= 1}>-</button>
                <button onClick={incrementCount}>+</button>
                <button onClick={removeItem}>x</button>
            </td>
        </tr>
    );
};
