'use client';
import { ICartState } from "@/app/types/ICartState";
import { useCart } from "../../hooks/useCart";

import Image from 'next/image'
import products from '../../../../products.json'
import { ProductItem } from "./ProductItem";
import { ProductModal } from "../ProductModal";
import { useState } from "react";
import { Product } from "@/app/types";
import { useProductModal } from "@/app/hooks/useProductModal";

const productsList : Product[] = products

export function ProductList() {
    const [productSelected, setProductSelected] = useState({} as Product)
    const { toggleModal } = useProductModal()

    const handleModal = (product : Product)=> {
        console.log("product:", product)
        toggleModal()
        setProductSelected(product)
    }

    return (
        <div className="products-container gap-4 ">
            {productsList.map((product : Product) => (
                <ProductItem key={product.id}  product={product}  onClick={() => handleModal(product)}/>
            ))}
            <ProductModal product={productSelected}/>

        </div>
    )
}