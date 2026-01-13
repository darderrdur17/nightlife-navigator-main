import { DollarSign } from "lucide-react";

interface PriceFilterProps {
  activePrices: string[];
  onToggle: (price: string) => void;
}

const prices = ["$", "$$", "$$$", "$$$$"];

export function PriceFilter({ activePrices, onToggle }: PriceFilterProps) {
  return (
    <div className="flex items-center gap-2">
      <DollarSign className="w-4 h-4 text-muted-foreground" />
      <div className="flex gap-1">
        {prices.map((price) => (
          <button
            key={price}
            onClick={() => onToggle(price)}
            className={`px-3 py-1.5 font-heading text-sm uppercase border-2 transition-all ${
              activePrices.includes(price)
                ? "border-primary bg-primary text-primary-foreground"
                : "border-foreground bg-background text-foreground hover:bg-muted"
            }`}
          >
            {price}
          </button>
        ))}
      </div>
    </div>
  );
}
