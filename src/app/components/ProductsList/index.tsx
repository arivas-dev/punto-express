"use client";

import { useFilters } from "../../hooks/useFilters";
import { useProductList } from "../../hooks/useProductList";
import { ProductModal } from "../ProductModal";
import { ProductItem } from "./ProductItem";
import { useProductModal } from "@/app/hooks/useProductModal";
import { Product } from "@/app/interfaces";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";

export default function Index() {
  const [productSelected, setProductSelected] = useState({} as Product);
  const { toggleModal } = useProductModal();

  const { products, isLoading }: { products: Product[]; isLoading: boolean } =
    useProductList();

  const { productsFiltered, onChangePriceSort, setRangeFilter, rangeFilter } =
    useFilters({ products });

  const handleModal = (product: Product) => {
    toggleModal();
    setProductSelected(product);
  };

  return (
    <>
      {/* filters container, justify contents flex end */}
      <div className="flex justify-end h-20">
        {/* filter for prices */}
        <div className=" bg-gray-50 flex px-10 py-5 pb-20 gap-10">
          <div className="">
            <label htmlFor="price" className="block text-sm font-medium">
              Price
            </label>
            <select
              id="price"
              name="price"
              onChange={(event: React.FormEvent) => onChangePriceSort(event)}
              defaultValue=""
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="" disabled>
                Sort by price
              </option>
              <option value="lowToHigh">Lowest to highest</option>
              <option value="higthToLow">Highest to lowest</option>
            </select>
          </div>

          <div>
            <label htmlFor="price-range" className="block text-sm font-medium">
              Price range
            </label>
            <input
              type="range"
              name="price-range"
              id="price-range"
              min="1"
              max="100"
              onChange={(event: React.FormEvent) => {
                var target = event.target as HTMLInputElement;
                setRangeFilter([0, parseInt(target.value)]);
              }}
              className="w-full mt-3 rounded-md border-gray-300 focus:outline-none focus:bg-gray-700  focus:border-gray-500 sm:text-sm"
            />

            <span className="text-xs text-gray-500 mt-0">
              0 - {rangeFilter[1]}
            </span>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-96">
          <FiLoader />
        </div>
      )}

      {!isLoading && products.length === 0 && (
        <div className="flex justify-center items-center h-96">
          <h1>No products found</h1>
        </div>
      )}

      {!isLoading && products.length > 0 && (
        <div className="products-container gap-4 ">
          {productsFiltered.map((product: Product) => (
            <ProductItem
              key={product.id}
              product={product}
              onClick={() => handleModal(product)}
            />
          ))}

          <ProductModal product={productSelected} />
        </div>
      )}
    </>
  );
}
