import Link from "next/link";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs tracking-wide">Nouveautés</span>
          <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
            Just feel it.
          </h1>
          <p className="max-w-prose text-lg text-muted-foreground">
            Des ballerines raffinées pour chaque jour. Styles épurés, matières responsables, confort premium.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/shop" className="rounded-full bg-primary px-7 py-3 text-primary-foreground">Acheter</Link>
            <Link href="/eco" className="rounded-full border px-7 py-3">Programme éco</Link>
          </div>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
          <img src="/globe.svg" alt="Visuel collection" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}



