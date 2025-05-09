import { createContext, useState } from "react";
import type { CartItem } from "../components/Cart";

interface CartContextType {
  cartItems: CartItem[];
  handleAddToCart: (item: CartItem) => void;
  handleRemoveFromCart: (itemId: string) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleAddToCart(item: CartItem) {
    if (cartItems.find((cartItem) => cartItem.id === item.id)) {
      return;
    }

    setCartItems((prev) => [...prev, item]);
  }

  function handleRemoveFromCart(itemId: string) {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  }

  return (
    <CartContext.Provider
      value={{ cartItems, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
