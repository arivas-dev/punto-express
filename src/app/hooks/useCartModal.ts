"use client";

import { CartModalContext } from "../context/CartModalContext";
import { useContext } from "react";

export const useCartModal = () => {
  const context = useContext(CartModalContext);

  if (context === undefined) {
    throw new Error("useCartModal must be used within a CartProvider");
  }

  return context;
};
