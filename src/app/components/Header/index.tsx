'use client';
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "@/app/hooks/useCart";

export function Header() {
    const {cart} = useCart()

    return (
        <div className="flex justify-center w-full">
            <div className="flex justify-between w-full">
                {/* Brand */}
                <div className="flex items-center flex-col">
                    <h1 className="text-3xl font-bold">Naty Shop</h1>
                </div>
                <div className="flex items-center gap-20 ">
                    <p className="text-sm font-bold">Products</p>
                    <p className="text-sm font-light">Categories</p>
                    <p className="text-sm font-light">News</p>
                    <p className="text-sm font-light">Contact</p>
                    <p className="text-sm font-light">About</p>
                </div>

                {/* Search */}
                <div className="flex items-center gap-4 w-20">
                    <input type="text" placeholder="Search" className="p-2 text-sm font-light" />
                    <button className="bg-black text-white p-2">Search</button>
                </div>

                {/* Cart with flotant quantity */}
                <div className="flex items-center relative ">
                    <CiShoppingCart size={30} />
                    <span className="bg-black text-white p-2 rounded-full cart-float-quantity">{cart.length}</span>
                </div>
            </div>
        </div>
    )
}