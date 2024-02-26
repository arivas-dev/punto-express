'use client';

import { CartProvider } from "./CartContext";
import { CartModalProvider } from "./CartModalContext";
import { ProductModalProvider } from "./ProductModalContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return <CartProvider>
        <CartModalProvider>
            <ProductModalProvider>
                {children}
            </ProductModalProvider>
        </CartModalProvider>
    </CartProvider>
}