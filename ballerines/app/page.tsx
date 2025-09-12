import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";
import { PromoBar } from "../components/PromoBar";
import { EditorialGrid } from "../components/EditorialGrid";

export default function Home() {
  const highlight = [
    { title: "Ballerine Classique Rose", price: 5900, badge: "Éco" },
    { title: "Ballerine Noire Intemporelle", price: 6900 },
    { title: "Ballerine Cuir Chocolat", price: 7900 },
    { title: "Ballerine Satin Ivoire", price: 6500 },
  ];

  return (
    <div className="min-h-screen">
      <PromoBar />
      <Header />
      <main>
        <Hero />
        <section className="mx-auto max-w-7xl px-4 py-12">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">Sélection du moment</h2>
            <a href="/shop" className="text-sm underline">Tout voir</a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {highlight.map((p, i) => (
              <ProductCard key={i} title={p.title} price={p.price} badge={p.badge} />
            ))}
          </div>
        </section>
        <EditorialGrid />
      </main>
      <Footer />
    </div>
  );
}
