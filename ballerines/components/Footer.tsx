import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 md:grid-cols-4">
        <div>
          <h4 className="mb-2 font-semibold">Boutique</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><Link href="/shop">Nouveautés</Link></li>
            <li><Link href="/shop?gender=WOMEN">Femmes</Link></li>
            <li><Link href="/shop?gender=KIDS">Enfants</Link></li>
            <li><Link href="/shop?gender=MEN">Hommes</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Éco-responsable</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><Link href="/eco">Seconde vie</Link></li>
            <li><Link href="/trade-in">Programme de reprise</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Légal</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><Link href="/privacy">Confidentialité</Link></li>
            <li><Link href="/terms">CGV</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Walk Ballerines</p>
        </div>
      </div>
    </footer>
  );
}


