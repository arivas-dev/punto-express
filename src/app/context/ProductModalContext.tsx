'use client';

import { createContext, useReducer, useState, Dispatch } from "react";
import { productModalReducer, cartInitialState, PRODUCT_MODAL_ACTION_TYPES } from '../reducers/product-modal'

interface ICartState {
    modal: typeof cartInitialState;
    toggleModal: () => void;
}

type Modal = {
    show: boolean;
}

type Action = {
    type: string;
};

type ProductModalReducer = (state: typeof cartInitialState, action: Action) => typeof cartInitialState;






export const ProductModalContext = createContext<ICartState>({
    modal: cartInitialState,
    toggleModal: () => {}
})


function useProductModalReducer() {
    const [state, dispatch] = useReducer<ProductModalReducer>(productModalReducer, cartInitialState)

    function toggleModal() {
        return dispatch({
            type: PRODUCT_MODAL_ACTION_TYPES.TOGGLE_MODAL
        });
    }

    return { state, toggleModal }
}

export function ProductModalProvider({ children }: { children: React.ReactNode }) {
    const { state, toggleModal } = useProductModalReducer()

    return <ProductModalContext.Provider value={{
        modal: state,
        toggleModal
    }}>
        {children}
    </ProductModalContext.Provider>
}