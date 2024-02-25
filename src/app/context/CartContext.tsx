'use client';

import { createContext, useReducer, useState, Dispatch } from "react";
import { cartReducer, cartInitialState } from '../reducers/cart.js'
import { Product } from '../types/product.js'
import { ICartState } from "../types/ICartState.js";

type Action = {
    type: string;
    payload: Product | null;
};

type CartReducer = (state: typeof cartInitialState, action: Action) => typeof cartInitialState;






export const CartContext = createContext<ICartState>({
    cart: cartInitialState,
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {}
})


function useCartReducer() {
    const [state, dispatch] = useReducer<CartReducer>(cartReducer, cartInitialState)

    function addToCart(product: Product) {
        return dispatch({
            type: 'ADD_TO_CART',
            payload: product
        });
    }

    const removeFromCart = (product : Product) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART', payload : null})

    return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

    return <CartContext.Provider value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart
    }}>
        {children}
    </CartContext.Provider>
}