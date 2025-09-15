"use client";
import React from "react";

export type CartItem = { id: string; title: string; variantId?: string; priceCents: number; qty: number; image?: string; size?: number };
type CartState = { items: CartItem[] };

function load(): CartState {
  if (typeof window === "undefined") return { items: [] };
  try {
    const raw = window.localStorage.getItem("cart:v1");
    return raw ? JSON.parse(raw) : { items: [] };
  } catch {
    return { items: [] };
  }
}
function save(state: CartState) {
  if (typeof window !== "undefined") window.localStorage.setItem("cart:v1", JSON.stringify(state));
}

type CartContextValue = {
  state: CartState;
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  setQty: (id: string, qty: number) => void;
  totalCents: number;
};

const CartContext = React.createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<CartState>(load);
  React.useEffect(() => save(state), [state]);

  const add = (item: CartItem) =>
    setState((s) => {
      const existing = s.items.find((i) => i.id === item.id && i.size === item.size);
      if (existing) {
        existing.qty += item.qty;
        return { items: [...s.items] };
      }
      return { items: [...s.items, item] };
    });
  const remove = (id: string) => setState((s) => ({ items: s.items.filter((i) => i.id !== id) }));
  const clear = () => setState({ items: [] });
  const setQty = (id: string, qty: number) =>
    setState((s) => ({ items: s.items.map((i) => (i.id === id ? { ...i, qty } : i)) }));
  const totalCents = state.items.reduce((sum, i) => sum + i.qty * i.priceCents, 0);

  return (
    <CartContext.Provider value={{ state, add, remove, clear, setQty, totalCents }}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}


