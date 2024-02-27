'use client';
import { useCart } from "@/app/hooks/useCart";
import { Product } from "@/app/types";
import { priceFormat } from "@/app/utils/priceFormat";
import { FaRegTrashAlt } from "react-icons/fa";



export function CartItem({ product }: { product: Product }) {
    const {cart,removeFromCart,addQuantity, minusQuantity} = useCart()

    return (
        <div className="flex flex-col border-b border-gray-200 py-4">
            <div className="flex flex-row items-center">
                <img src={product.image} alt={product.title} className="w-20 h-20 object-contain" />
                <div className="ml-4">
                    <span className="flex flex-row items-center justify-between">
                        <h3 className="font-semibold text-sm">{product.title}</h3>
                        <button
                            className="text-gray-500"
                            onClick={() => removeFromCart(product)}
                        >
                            <FaRegTrashAlt />
                        </button>
                    </span>
                    <p className="text-gray-500 text-xs line-clamp-3">{product.description}</p>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-4">
                <div className="flex flex-row items-center">
                    <button
                        className="bg-gray-200 px-2 py-1 text-sm rounded-md"
                        onClick={() => product.quantity && product.quantity > 1 ? minusQuantity(product) : null}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        value={product.quantity}
                        onChange={() => { }}
                        className="w-16 text-center border border-gray-200 rounded-md"
                    />
                    <button
                        className="bg-gray-200 px-2 py-1 text-sm rounded-md"
                        onClick={() => addQuantity(product)}
                    >
                        +
                    </button>
                </div>
                <p className="font-semibold text-lg">${priceFormat(product.price * (product.quantity || 1))}</p>
            </div>
        </div>
    )
}
