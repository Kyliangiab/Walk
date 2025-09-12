export function SearchInput() {
  return (
    <label className="hidden items-center gap-2 rounded-full border px-3 py-1 md:flex">
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      <input
        placeholder="Rechercher"
        className="w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
    </label>
  );
}


