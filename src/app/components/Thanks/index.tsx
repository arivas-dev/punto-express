"use client"
import { FaCircleCheck } from "react-icons/fa6"
import Link from "next/link"
import { useCart } from "@/app/hooks/useCart"
import { useEffect } from "react"

export const Thanks = () => {
  const { clearCart } = useCart()
  useEffect(() => {
    clearCart()
  }, [])
  return (
    <div>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-semibold text-white"
                  href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-semibold text-white"
                  href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-semibold text-white ring ring-black ring-offset-2"
                  href="#">
                  3
                </a>
                <span className="font-semibold text-neutral-400">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-1 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <div className="relative flex justify-start items-start mt-8 h-fit rounded-lg border bg-white px-2 py-2 sm:px-6">
            <div className="flex flex-col w-full justify-center items-center py-20">
              <FaCircleCheck className="text-green-500 text-6xl" />
              <h1 className="text-2xl font-semibold text-gray-900 mt-5">
                Thanks for your order!
              </h1>
              <p className="text-sm text-gray-500 w-full md:w-5/12 text-center mt-2">
                Yout order has been placed and is being processed. You will be
                receiving an email shortly with the details of your order.
              </p>
              <Link
                href={"/"}
                className="flex w-fit px-4 py-2 bg-black text-white rounded-md mt-10 hover:bg-neutral-800">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
