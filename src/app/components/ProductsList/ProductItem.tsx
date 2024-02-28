'use client'
import { useCart } from "@/app/hooks/useCart";
import { Product } from "@/app/interfaces";
import Image from "next/image";
import { useState } from "react";

export function ProductItem({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  const { addToCart, removeFromCart, cart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const isProductInCart = (productId: number) =>
    cart.some((product: Product) => product.id === productId);

  return (
    <div className={`product-container mt-10`}>
      <div
        key={product.id}
        className="product-card cursor-pointer"
        onClick={() => onClick()}
      >
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
        />
      </div>
      <span className="mt-4 product-container-title text-sm font-semibold tracking-normal">
        <h3 className="line-clamp-1">{product.title}</h3>
        <h3>${product.price}</h3>
      </span>
      <p className="text-sm font-light">{product.category}</p>
      {/* minimaist add to cart button and quantity input, and plus and minus buttons */}
      <div className="flex justify-between mt-4">
        <div
          className={`flex items-center ${
            isProductInCart(product.id) ? "hidden" : "block"
          }`}
        >
          <button
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="bg-gray-200 px-2 py-1 rounded-md"
          >
            -
          </button>
          <span className="px-2">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-200 px-2 py-1 rounded-md"
          >
            +
          </button>
        </div>
        {isProductInCart(product.id) ? (
          <button
            onClick={() => removeFromCart(product)}
            className="bg-gray-500 px-2 py-1 rounded-md text-sm text-white"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={() => addToCart({ ...product, quantity })}
            className="bg-gray-200 px-2 py-1 rounded-md text-sm"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
