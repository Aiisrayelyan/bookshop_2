import React, { createContext, useReducer, useContext } from 'react';

const BasketContext = createContext();

const initialState = {
    products: [],
    basket: [],
    totalValue: 0
};

function basketReducer(state, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload };
        case 'ADD_TO_BASKET':
            const existingItem = state.basket.find(item => item.id === action.payload.id);
            if (existingItem) {
                const updatedBasket = state.basket.map(item =>
                    item.id === action.payload.id ? { ...item, count: item.count + 1 } : item
                );
                return { ...state, basket: updatedBasket };
            } else {
                return { ...state, basket: [...state.basket, { ...action.payload, count: 1 }] };
            }
        case 'INCREMENT':
        case 'DECREMENT':
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.payload ? { ...item, count: item.count + (action.type === 'INCREMENT' ? 1 : -1) } : item
                )
            };
        case 'REMOVE':
            return { ...state, basket: state.basket.filter(item => item.id !== action.payload) };
        case 'CALCULATE_TOTAL':
            return {
                ...state,
                totalValue: state.basket.reduce((total, item) => total + item.price * item.count, 0)
            };
        default:
            return state;
    }
}

export const BasketProvider = ({ children }) => {
    const [state, dispatch] = useReducer(basketReducer, initialState);

    return (
        <BasketContext.Provider value={{ state, dispatch }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => useContext(BasketContext);
