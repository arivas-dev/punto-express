import { CartModal } from "../components/CartModal"
import { Layout } from "../components/Layout"
import PageTitle from "../components/PageTitle"
import { ProductModal } from "../components/ProductModal"
import { Checkout } from "../components/Checkout"
import { useCartModal } from "../hooks/useCartModal"

export default function Index() {
    return (
        <Layout>
            <PageTitle>
                <PageTitle.Title>Contact us</PageTitle.Title>
                <PageTitle.Description>
                    Don't hesitate to contact us
                </PageTitle.Description>
            </PageTitle>

            {/* contact us form */}
            <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">

                <div className="">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium">
                        Name
                    </label>

                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your full name here"
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
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
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>
                        </div>
                    </div>


                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium mt-4">
                        Phone
                    </label>

                    <div className="relative">
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your phone number here"
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
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
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>



                        </div>
                    </div>


                    <label
                        htmlFor="message"
                        className="block text-sm font-medium mt-4">
                        Message
                    </label>

                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your message here"
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
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
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>
                        </div>
                    </div>




                    <div className="mt-4 flex justify-center">
                        <button className="mt-4 mb-8 rounded-md bg-gray-900 px-6 py-3 font-medium text-white w-2/12">
                            Send message
                        </button>
                    </div>
                </div>
            </div>
            <CartModal />
        </Layout >
    )
}
