"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/src/lib/cart";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { state, totalCents, clear } = useCart();
  const router = useRouter();
  function pay() {
    setTimeout(() => {
      const fakeOrderId = Math.random().toString(36).slice(2);
      clear();
      router.push(`/order/${fakeOrderId}`);
    }, 800);
  }
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-semibold">Paiement</h1>
        {state.items.length === 0 ? (
          <p>Votre panier est vide. <Link href="/shop" className="underline">Continuer vos achats</Link></p>
        ) : (
          <div className="grid gap-6 md:grid-cols-[1fr_360px]">
            <section className="space-y-4">
              <div className="rounded-2xl border p-4">
                <h2 className="mb-2 font-semibold">Adresse</h2>
                <div className="text-sm text-muted-foreground">Saisie simplifiée (mock)</div>
              </div>
              <div className="rounded-2xl border p-4">
                <h2 className="mb-2 font-semibold">Récapitulatif</h2>
                <ul className="space-y-2 text-sm">
                  {state.items.map((i) => (
                    <li key={i.id} className="flex items-center justify-between">
                      <span>{i.title} × {i.qty}</span>
                      <span>{((i.qty * i.priceCents) / 100).toFixed(2)} €</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <aside className="h-fit rounded-2xl border p-4">
              <div className="mb-2 flex items-center justify-between"><span>Total</span><span className="font-medium">{(totalCents/100).toFixed(2)} €</span></div>
              <Button className="w-full" onClick={pay}>Payer (mock)</Button>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}


