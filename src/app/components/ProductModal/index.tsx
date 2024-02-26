import { useProductModal } from "@/app/hooks/useProductModal"
import { Product } from "@/app/types"


export function ProductModal({ product }: { product: Product }) {
    const { modal: { show }, toggleModal } = useProductModal()

    return (
        // a modal with tailwindcss , to show product details, and medium image size of the product
        // modall will allow user to add product to cart or close the modal
        <div className={`inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 transition-transform w-12/6 ${show ? 'fixed' : 'hidden'}`}>
            <div className="bg-white p-4 flex w-6/12 h-4/6">
                {/* left container with image full heigth of container */}
                <div className="flex flex-col product-card w-6/12 h-full min-h-full">
                    <img src={product.image} alt={product.title} className="object-contain w-6/12 m-auto" />
                </div>
                {/* right container with product details */}
                <div className="flex flex-col ml-4 w-6/12">
                    <h3 className="text-2xl font-semibold">{product.title}</h3>
                    <p className="text-sm font-light">{product.description}</p>
                    <p className="text-sm font-semibold">${product.price}</p>
                    
                    <button
                        onClick={() => toggleModal()}
                        className="bg-gray-200 px-2 py-1 rounded-md text-sm mt-4"
                    >
                        Close
                    </button>
                </div>

            </div>
        </div>
    )
}