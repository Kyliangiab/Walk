type Props = {
  title: string;
  price: number;
  image?: string;
  badge?: string;
};

export function ProductCard({ title, price, image = "/file.svg", badge }: Props) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card">
      <div className="relative aspect-[4/5] w-full bg-muted">
        <img src={image} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
        {badge ? (
          <span className="absolute left-2 top-2 rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="flex items-center justify-between px-3 py-3">
        <div className="truncate">
          <div className="truncate text-sm">{title}</div>
          <div className="text-xs text-muted-foreground">Ballerine</div>
        </div>
        <div className="font-medium">{(price / 100).toFixed(2)} €</div>
      </div>
    </div>
  );
}


