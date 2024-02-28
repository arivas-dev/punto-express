"use client";

import { useNav } from "../../hooks/useNav";
import { useCart } from "@/app/hooks/useCart";
import { useCartModal } from "@/app/hooks/useCartModal";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const NavItem = ({
  text,
  path,
  currentPath,
}: {
  text: string;
  path: string;
  currentPath: string;
}) => (
  <Link
    href={path}
    className={`text-sm ${path === currentPath ? "font-bold" : "font-light"}`}
  >
    {text}
  </Link>
);

export function Header() {
  const { cart } = useCart();
  const { toggleModal } = useCartModal();
  const { path } = useNav();

  return (
    <div className="flex justify-center w-full px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between w-full">
        {/* Brand */}
        <div className="flex items-center flex-col mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">Naty Shop</h1>
        </div>
        <div className="flex items-center md:gap-20 mb-4 md:mb-0 flex-row justify-center gap-4">
          <NavItem text="Products" path="/" currentPath={path} />
          <NavItem text="Categories" path="/categories" currentPath={path} />
          <NavItem text="News" path="/news" currentPath={path} />
          <NavItem text="Contact" path="/contact" currentPath={path} />
          <NavItem text="About" path="/about" currentPath={path} />
        </div>
        


        {/* Search */}
        <div className="hidden items-center gap-4 md:flex">
          <input
            type="text"
            placeholder="Search"
            className="p-2 text-sm font-light w-full"
          />
          <button className="bg-black text-white p-2 w-full">Search</button>
        </div>

        {/* Cart with flotant quantity */}
        <div
          className="flex items-center relative cursor-pointer w-fit"
          onClick={() => toggleModal()}
        >
          <CiShoppingCart size={30} />
          <span className="bg-black text-white p-2 rounded-full cart-float-quantity">
            {cart.length}
          </span>
        </div>
      </div>
    </div>
  );
}
