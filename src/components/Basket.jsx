import React from 'react';
import { BasketItem } from "./BasketItem";
import { useBasket } from '../BasketContext';

export const Basket = () => {
    const { state } = useBasket();
    return (
        <div>
            <h3>Basket</h3>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Subtotal</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state.basket.map(item => (
                        <BasketItem key={item.id} {...item} />
                    ))}
                </tbody>
            </table>
            <h4>Total: {state.totalValue} USD</h4>
        </div>
    );
};
