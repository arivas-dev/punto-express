'use client';
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "@/app/hooks/useCart";
import { useCartModal } from "@/app/hooks/useCartModal";
import { useEffect } from "react";
import { useNav } from "./hook/useNav";
import Link from "next/link";

const NavItem = ({ text, path, currentPath }: { text: string, path: string, currentPath: string }) => {
    return (
        <Link href={path} className={`text-sm ${path === currentPath ? 'font-bold' : 'font-light'}`}>
           {text}
        </Link>
    )
}

export function Header() {
    const { cart } = useCart()
    const { toggleModal } = useCartModal()
    const { path } = useNav()


    return (
        <div className="flex justify-center w-full">
            <div className="flex justify-between w-full">
                {/* Brand */}
                <div className="flex items-center flex-col">
                    <h1 className="text-3xl font-bold">Naty Shop</h1>
                </div>
                <div className="flex items-center gap-20 ">
                    <NavItem text="Products" path="/" currentPath={path} />
                    <NavItem text="Categories" path="/categories" currentPath={path} />
                    <NavItem text="News" path="/news" currentPath={path} />
                    <NavItem text="Contact" path="/contact" currentPath={path} />
                    <NavItem text="About" path="/about" currentPath={path} />

                </div>

                {/* Search */}
                <div className="flex items-center gap-4 w-20">
                    <input type="text" placeholder="Search" className="p-2 text-sm font-light" />
                    <button className="bg-black text-white p-2">Search</button>
                </div>

                {/* Cart with flotant quantity */}
                <div className="flex items-center relative cursor-pointer " onClick={() => toggleModal()}>
                    <CiShoppingCart size={30} />
                    <span className="bg-black text-white p-2 rounded-full cart-float-quantity">{cart.length}</span>
                </div>
            </div>
        </div>
    )
}