export function BrandLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden className="text-primary">
        <path
          d="M3 17c3-6 6-9 9-9s6 3 9 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="8" r="2" fill="currentColor" />
      </svg>
      <span className="font-medium tracking-wide text-lg">Walk Ballerines</span>
    </div>
  );
}


