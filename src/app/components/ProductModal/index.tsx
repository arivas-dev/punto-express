"use client";

import { Rate } from "../Rate";
import { useCart } from "@/app/hooks/useCart";
import { useProductModal } from "@/app/hooks/useProductModal";
import { Product } from "@/app/interfaces";
import Image from "next/image";
import { useState } from "react";

export function ProductModal({ product }: { product: Product }) {
  const {
    modal: { show },
    toggleModal,
  } = useProductModal();
  const { cart, addToCart, removeFromCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const isProductInCart = (productId: number) =>
    cart.some((product: Product) => product.id === productId);

  return (
    // a modal with tailwindcss , to show product details, and medium image size of the product
    // modall will allow user to add product to cart or close the modal
    <div
      className={`inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 transition-transform w-12/6 ${
        show ? "fixed" : "hidden"
      }`}
    >
      <div className="bg-white p-4 flex w-6/12 h-4/6">
        <div className="flex flex-col product-card w-6/12 h-full min-h-full">
          <Image
            src={product.image}
            alt={product.title}
            className="object-contain w-6/12 m-auto"
            width={300}
            height={300}
          />
        </div>
        {/* right container with product details */}
        <div className="flex flex-col ml-4 w-6/12">
          <h3 className="text-2xl font-semibold">{product.title}</h3>
          <p className="text-sm font-light line-clamp-5 mt-5">
            {product.description}
          </p>

          {!isProductInCart(product.id) && (
            <span className="flex justify-between mt-10 items-center">
              <strong className="text-sm font-semibold">Quantity</strong>
              <div className="flex items-center">
                <button
                  className="bg-gray-200 px-2 py-1 rounded-md"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  -
                </button>
                <span className="px-2">{quantity}</span>
                <button
                  className="bg-gray-200 px-2 py-1 rounded-md"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </span>
          )}

          <span className="flex justify-between mt-4">
            <strong className="text-sm font-semibold">Category</strong>
            <p className="text-sm font-light">{product.category}</p>
          </span>

          <span className="flex justify-between mt-4">
            <strong className="text-sm font-semibold">Total</strong>
            <p className="text-sm font-light">${product.price}</p>
          </span>

          {/* rating with minimalist style icon */}
          {/* rating with minimalist style icon */}
          <Rate product={product} />

          <span className="flex justify-between mt-4">
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
            <button
              onClick={() => toggleModal()}
              className="bg-gray-200 px-2 py-1 rounded-md text-sm"
            >
              Close
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
