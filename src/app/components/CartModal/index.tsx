'use client';
import { useCartModal } from "@/app/hooks/useCartModal"
import { CartList } from "../CartList";
import { useCart } from "@/app/hooks/useCart";
import { Product } from "@/app/types";
import { priceFormat } from "@/app/utils/priceFormat";
import Link from "next/link";



export const CartModal = () => {

    const { modal, toggleModal } = useCartModal()
    const { cart } = useCart()

    const total = cart.reduce((acc: number, product: Product) => acc + product.price * (product.quantity || 1), 0)

    return (
        <div className={`fixed inset-0 overflow-hidden z-50 ${modal.show ? 'block' : 'hidden'}`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="absolute inset-0 overflow-hidden rela">
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none" aria-labelledby="slide-over-heading">
                    <div className="w-screen max-w-md relative">
                        <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                            {/* close modal button with x icon flex end and title flex start */}
                            <div className="px-4 sm:px-6 flex justify-between">
                                <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">Shopping cart</h2>
                                <button type="button" className="-m-2 p-2 rounded-md inline-flex text-gray-400 hover:text-gray-500" onClick={() => toggleModal()}>
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <CartList />


                        </div>
                        <footer className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-200 px-4 py-4 sm:px-6">
                            <div className="flex justify-between">
                                <span className="text-sm font-light">Total</span>
                                <span className="text-sm font-bold">${priceFormat(total)}</span>
                            </div>
                            <Link
                                href={"/checkout"}
                                className="relative flex w-full bg-black text-white p-2 rounded-md mt-4 justify-center items-center">
                                Checkout
                            </Link>
                        </footer>
                    </div>
                </section>

            </div>
        </div>
    )
}