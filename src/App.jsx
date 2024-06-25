import React, { useEffect } from 'react';
import './App.css';
import { ProductList } from './components/ProductList';
import { Basket } from './components/Basket';
import { useBasket } from './BasketContext';

function App() {
    const { state, dispatch } = useBasket();

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('http://localhost:3000/products');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            dispatch({ type: 'SET_PRODUCTS', payload: data });
          } catch (error) {
            console.error('Failed to fetch products:', error);
          }
        };
      
        fetchProducts();
      }, [dispatch]);
      

    useEffect(() => {
        dispatch({ type: 'CALCULATE_TOTAL' });
    }, [state.basket]);

    return (
        <div className="row">
            <ProductList />
            <Basket />
        </div>
    );
}

export default App;
