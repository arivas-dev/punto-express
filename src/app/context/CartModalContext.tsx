"use client";

import {
  cartModalReducer,
  cartInitialState,
  CART_MODAL_ACTION_TYPES,
} from "../reducers/cart-modal";
import { createContext, useReducer } from "react";

interface ICartState {
  modal: typeof cartInitialState;
  toggleModal: () => void;
}

type Action = {
  type: string;
};

type CartReducer = (
  state: typeof cartInitialState,
  action: Action
) => typeof cartInitialState;

export const CartModalContext = createContext<ICartState>({
  modal: cartInitialState,
  toggleModal: () => {},
});

function useCartModalReducer() {
  const [state, dispatch] = useReducer<CartReducer>(
    cartModalReducer,
    cartInitialState
  );

  function toggleModal() {
    return dispatch({
      type: CART_MODAL_ACTION_TYPES.TOGGLE_MODAL,
    });
  }

  return { state, toggleModal };
}

export function CartModalProvider({ children }: { children: React.ReactNode }) {
  const { state, toggleModal } = useCartModalReducer();

  return (
    <CartModalContext.Provider
      value={{
        modal: state,
        toggleModal,
      }}
    >
      {children}
    </CartModalContext.Provider>
  );
}
