"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/src/lib/cart";

export function AddToCart({ id, title, priceCents, size, qty = 1 }: { id: string; title: string; priceCents: number; size?: number; qty?: number }) {
  const { add } = useCart();
  return (
    <Button onClick={() => add({ id, title, priceCents, qty, size })}>Ajouter au panier</Button>
  );
}


