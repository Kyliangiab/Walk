import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { SearchInput } from "./SearchInput";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="hover:opacity-90" aria-label="Accueil">
          <BrandLogo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/shop" className="hover:text-primary">Nouveautés</Link>
          <Link href="/shop?gender=MEN" className="hover:text-primary">Homme</Link>
          <Link href="/shop?gender=WOMEN" className="hover:text-primary">Femme</Link>
          <Link href="/shop?gender=KIDS" className="hover:text-primary">Enfant</Link>
          <Link href="/eco" className="hover:text-primary">Pour le sport</Link>
          <Link href="/shop" className="hover:text-primary">Sportswear</Link>
        </nav>
        <div className="flex items-center gap-3">
          <SearchInput />
          <Link href="/account" className="hidden text-sm md:inline">Compte</Link>
          <Link href="/cart" className="rounded-full bg-primary px-4 py-1 text-primary-foreground">Panier</Link>
        </div>
      </div>
    </header>
  );
}


