"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/src/lib/cart";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartPage() {
  const { state, remove, setQty, totalCents } = useCart();
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-semibold">Panier</h1>
        {state.items.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-[1fr_320px]">
            <ul className="space-y-4">
              {state.items.map((i) => (
                <li key={i.id} className="flex items-center justify-between rounded-2xl border p-3">
                  <div className="flex items-center gap-3">
                    <img src={i.image || "/file.svg"} alt="" className="h-16 w-16 rounded border bg-muted" />
                    <div>
                      <div className="font-medium">{i.title}</div>
                      <div className="text-sm text-muted-foreground">{i.size ? `EU ${i.size}` : "Taille unique"}</div>
                      <div className="text-sm">{(i.priceCents / 100).toFixed(2)} €</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      value={i.qty}
                      onChange={(e) => setQty(i.id, Number(e.target.value))}
                      className="w-16 rounded border px-2 py-1"
                    />
                    <Button variant="outline" onClick={() => remove(i.id)}>Supprimer</Button>
                  </div>
                </li>
              ))}
            </ul>
            <aside className="h-fit rounded-2xl border p-4">
              <div className="mb-2 flex items-center justify-between">
                <span>Sous-total</span>
                <span className="font-medium">{(totalCents / 100).toFixed(2)} €</span>
              </div>
              <Link href="/checkout" className="mt-3 block">
                <Button className="w-full">Commander</Button>
              </Link>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}


