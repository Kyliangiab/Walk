"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/src/lib/cart";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = {
    id: params.slug,
    title: "Ballerine Classique",
    priceCents: 5900,
    compareAtCents: 6900,
    images: ["/file.svg", "/globe.svg"],
    sizes: [35, 36, 37, 38, 39, 40, 41, 42],
  };
  const [size, setSize] = React.useState<number | undefined>(undefined);
  const [qty, setQty] = React.useState<number>(1);
  const { add } = useCart();
  function addToCart() {
    if (!size) return;
    add({ id: product.id, title: product.title, priceCents: product.priceCents, qty, size });
  }
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl grid gap-8 px-4 py-10 md:grid-cols-2">
        <div className="space-y-3">
          <img src={product.images[0]} alt="" className="w-full rounded-2xl border bg-muted" />
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((src, i) => (
              <img key={i} src={src} alt="" className="rounded-xl border bg-muted" />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold leading-tight">{product.title}</h1>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="text-2xl font-semibold">{(product.priceCents / 100).toFixed(2)} €</span>
              <span className="text-sm text-muted-foreground line-through">{(product.compareAtCents / 100).toFixed(2)} €</span>
              <span className="rounded bg-secondary px-2 py-0.5 text-xs">- {(1 - product.priceCents / product.compareAtCents) * 100 | 0}%</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Ref. {params.slug} • 4.4/5 ★</div>
          </div>
          <div className="rounded-2xl border p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold">Taille</p>
              <a className="text-xs underline" href="#">Guide des tailles</a>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`rounded-full px-3 py-1 text-sm border ${size === s ? "border-primary bg-secondary" : "hover:border-primary"}`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-[120px_1fr] items-center gap-3">
              <div className="flex items-center rounded-full border">
                <button className="px-3 py-2" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <input className="w-12 border-x px-2 py-2 text-center" value={qty} onChange={(e)=> setQty(Math.max(1, Number(e.target.value)||1))} />
                <button className="px-3 py-2" onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <div>
                <Button disabled={!size} className="w-full" onClick={addToCart}>
                  {!size ? "Sélectionnez une taille" : "Ajouter au panier"}
                </Button>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Livraison GRATUITE dès 70€ • Retours gratuits 30 jours</p>

          <section className="grid gap-6 rounded-2xl border p-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold">Avantages du produit</h3>
              <ul className="list-inside list-disc text-sm text-muted-foreground space-y-1">
                <li>Confort et amorti</li>
                <li>Stabilité renforcée</li>
                <li>Respirabilité</li>
                <li>Légèreté</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Description</h3>
              <p className="text-sm text-muted-foreground">Ballerine polyvalente pour un usage quotidien. Matériaux responsables et confort premium.</p>
            </div>
          </section>
        </div>
      </main>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <h2 className="mb-4 text-2xl font-semibold">Produits similaires</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCard key={i} title={`Ballerine modèle ${i + 1}`} price={5900 + i * 500} href={`/product/sim-${i+1}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl grid gap-6 px-4 pb-12 md:grid-cols-2">
        <div className="rounded-2xl border p-4">
          <h3 className="mb-2 font-semibold">Avis clients</h3>
          <ul className="space-y-4 text-sm">
            {[{name:"Camille",rating:5,comment:"Très confortables"},{name:"Alex",rating:4,comment:"Bon maintien"},{name:"Inès",rating:4,comment:"Qualité/prix top"}].map((r,idx)=> (
              <li key={idx} className="border-b pb-3 last:border-0 last:pb-0">
                <div className="flex items-center gap-2"><span className="font-medium">{r.name}</span><span>{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</span></div>
                <p className="text-muted-foreground">{r.comment}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border p-6 text-center">
          <h3 className="mb-2 text-xl font-semibold">Reprenez vos anciennes ballerines</h3>
          <p className="mb-4 text-sm text-muted-foreground">Envoyez-nous vos anciennes paires et gagnez des points de réduction crédités sur votre compte.</p>
          <Link href="/trade-in">
            <Button>Participer au programme de reprise</Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}


