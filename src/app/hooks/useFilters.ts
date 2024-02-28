'use client'
import { Product } from "@/app/interfaces";
import { useState } from "react";

type useFilters = {
  productsFiltered: Product[];
  onChangePriceSort: (event: React.FormEvent) => void;
  rangeFilter: number[];
  setRangeFilter: React.Dispatch<React.SetStateAction<number[]>>;
  setPriceFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const useFilters = ({
  products,
}: {
  products: Product[];
}): useFilters => {
  const [priceFilter, setPriceFilter] = useState("");
  const [rangeFilter, setRangeFilter] = useState([0, 100]);

  const onChangePriceSort = (event: React.FormEvent) => {
    var target = event.target as HTMLSelectElement;
    setPriceFilter(target.value);
  };

  const productsSorted: Product[] = products.sort((a: Product, b: Product) => {
    if (priceFilter === "lowToHigh") {
      return a.price - b.price;
    } else if (priceFilter === "higthToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  const productsFiltered: Product[] = productsSorted.filter(
    (product: Product) =>
      product.price >= rangeFilter[0] && product.price <= rangeFilter[1]
  );

  return {
    productsFiltered,
    onChangePriceSort,
    rangeFilter,
    setRangeFilter,
    setPriceFilter,
  };
};
