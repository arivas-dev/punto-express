'use client';
import { CiShoppingCart } from "react-icons/ci";


import { Header } from "../Header";
import { useCartModal } from "@/app/hooks/useCartModal";




export function Layout({ children }: { children: React.ReactNode }) {
    const { toggleModal } = useCartModal()
    
    return <div className="p-40 pt-10">

        <Header />
        {children}
    </div>
}