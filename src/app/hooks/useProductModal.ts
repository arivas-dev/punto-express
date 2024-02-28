'use client'
import { ProductModalContext } from "../context/ProductModalContext";
import { useContext } from "react";

export const useProductModal = () => {
  const context = useContext(ProductModalContext);

  if (context === undefined) {
    throw new Error("useProductModal must be used within a CartProvider");
  }

  return context;
};
