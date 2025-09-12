import Link from "next/link";

type Tile = { title: string; subtitle?: string; cta: string; image: string };

const tiles: Tile[] = [
  { title: "Confort amorti", subtitle: "Collection SoftStep", cta: "Acheter", image: "/window.svg" },
  { title: "Le renfo commence ici", subtitle: "Studio", cta: "Acheter", image: "/globe.svg" },
  { title: "Nouvelle couleur", subtitle: "Classique", cta: "Acheter", image: "/file.svg" },
  { title: "Éco-recyclé", subtitle: "Seconde vie", cta: "Découvrir", image: "/vercel.svg" },
];

export function EditorialGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16">
      <div className="grid gap-4 md:grid-cols-2">
        {tiles.map((t, i) => (
          <article key={i} className="relative overflow-hidden rounded-2xl bg-muted">
            <img src={t.image} alt="" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-50%" />
            <div className="absolute bottom-4 left-4 space-y-1 text-white">
              {t.subtitle ? <p className="text-xs opacity-90">{t.subtitle}</p> : null}
              <h3 className="text-xl font-semibold">{t.title}</h3>
              <Link href="/shop" className="pointer-events-auto mt-2 inline-block rounded-full bg-white px-4 py-1 text-sm text-black">{t.cta}</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


