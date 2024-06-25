import React from 'react';
import { ProductItem } from "./ProductItem";
import { useBasket } from '../BasketContext';

export const ProductList = () => {
    const { state, dispatch } = useBasket();
    return (
        <div>
            <h3>Product List</h3>
            <div className="list">
                {state.products.map(product => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};
