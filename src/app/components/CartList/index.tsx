"use client";

import { CartItem } from "./CartItem";
import { useCart } from "@/app/hooks/useCart";
import { Product } from "@/app/interfaces";

export function CartList() {
  const { cart } = useCart();
  return (
    <div className="mt-6 relative flex-1 px-4 sm:px-6 pb-20">
      <div className="absolute inset-0 px-4 sm:px-6 ">
        {cart.map((product: Product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
