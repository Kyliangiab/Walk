import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Filters } from "@/components/shop/Filters";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const mockProducts = Array.from({ length: 12 }).map((_, i) => ({
  title: `Ballerine modèle ${i + 1}`,
  price: 5900 + (i % 5) * 500,
  badge: i % 4 === 0 ? "Éco" : undefined,
}));

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl gap-6 px-4 py-8 md:grid md:grid-cols-[256px_1fr]">
        <div className="hidden md:block">
          <Filters />
        </div>
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Boutique</h1>
            <div className="flex items-center gap-3">
              <div className="text-sm text-muted-foreground hidden sm:block">{mockProducts.length} articles</div>
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger>
                    <Button variant="outline">Filtres</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <Filters />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {mockProducts.map((p, i) => (
              <ProductCard key={i} title={p.title} price={p.price} badge={p.badge} href={`/product/${i+1}`} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


