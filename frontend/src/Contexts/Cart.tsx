'use client';
import React, { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from "react";

interface CartOptions {
    showCart: boolean;
    setShowCart: Dispatch<SetStateAction<boolean>>;
}

const CartContext = createContext<CartOptions | {}>({});

interface LayoutProps {
    children: ReactNode;
};

export const CartProvider: React.FC<LayoutProps> = ({ children }) => {
    const [showCart, setShowCart] = useState(false);

    return (
        <CartContext.Provider value={{
            showCart,
            setShowCart
        }}>
            { children }
        </CartContext.Provider>
    );
};

export function useCart(){
    const context = useContext(CartContext);
    return context;
}