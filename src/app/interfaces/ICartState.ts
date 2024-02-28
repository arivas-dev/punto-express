import { Product } from ".";
import { cartInitialState } from "../reducers/cart";

export interface ICartState {
  cart: typeof cartInitialState;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  addQuantity: (product: Product) => void;
  minusQuantity: (product: Product) => void;
}
