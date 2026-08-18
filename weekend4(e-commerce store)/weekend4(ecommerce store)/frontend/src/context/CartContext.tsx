import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { addCartItem, deleteCartItem, getCart, updateCartItem } from "../api/api";
import type { CartItem } from "../types";

type CartContextType = {
  cart: CartItem[];
  total: number;
  loading: boolean;
  refreshCart: () => Promise<void>;
  addToCart: (productId: number, quantity?: number) => Promise<void>;
  increaseQuantity: (id: number) => Promise<void>;
  decreaseQuantity: (id: number) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  async function refreshCart() {
    const token = localStorage.getItem("token");
    if (!token) { setCart([]); setTotal(0); return; }
    setLoading(true);
    try {
      const data = await getCart();
      setCart(data.cart);
      setTotal(Number(data.total));
    } catch {
      setCart([]);
      setTotal(0);
    } finally { setLoading(false); }
  }

  useEffect(() => { refreshCart(); }, []);

  async function addToCart(productId: number, quantity = 1) {
    await addCartItem(productId, quantity);
    await refreshCart();
  }
  async function increaseQuantity(id: number) {
    const item = cart.find(x => x.id === id);
    if (item) { await updateCartItem(id, item.quantity + 1); await refreshCart(); }
  }
  async function decreaseQuantity(id: number) {
    const item = cart.find(x => x.id === id);
    if (!item) return;
    if (item.quantity === 1) await deleteCartItem(id);
    else await updateCartItem(id, item.quantity - 1);
    await refreshCart();
  }
  async function removeFromCart(id: number) {
    await deleteCartItem(id);
    await refreshCart();
  }

  return <CartContext.Provider value={{ cart, total, loading, refreshCart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
    {children}
  </CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used inside CartProvider");
  return value;
}
