'use client';
import { ICartState } from "@/app/types/ICartState";
import { useCart } from "../../hooks/useCart";

import Image from 'next/image'
import products from '../../../../products.json'
import { ProductItem } from "./ProductItem";

export function ProductList() {

    return (
        <div className="products-container gap-4 ">
            {products.map((product) => (
                <ProductItem key={product.id}  product={product}  />
            ))}
        </div>
    )
}