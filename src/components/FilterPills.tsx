import { motion } from "framer-motion";
import { Wine, Music, Utensils, Clock, ChevronDown } from "lucide-react";
import type { VenueType } from "@/data/venues";

interface FilterPillsProps {
  activeTypes: VenueType[];
  onTypeToggle: (type: VenueType) => void;
  openPast2am: boolean;
  onOpenPast2amToggle: () => void;
  resultCount: number;
}

const typeFilters: { type: VenueType; label: string; icon: typeof Wine }[] = [
  { type: "bar", label: "Bars", icon: Wine },
  { type: "club", label: "Clubs", icon: Music },
  { type: "munchies", label: "Munchies", icon: Utensils },
];

export function FilterPills({
  activeTypes,
  onTypeToggle,
  openPast2am,
  onOpenPast2amToggle,
  resultCount,
}: FilterPillsProps) {
  return (
    <div className="space-y-4">
      {/* Type Filters */}
      <div className="flex flex-wrap gap-2">
        {typeFilters.map(({ type, label, icon: Icon }) => {
          const isActive = activeTypes.includes(type);
          return (
            <motion.button
              key={type}
              whileTap={{ scale: 0.95 }}
              onClick={() => onTypeToggle(type)}
              className={`filter-pill ${isActive ? "active" : ""}`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </motion.button>
          );
        })}

        {/* Late Night Filter */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onOpenPast2amToggle}
          className={`filter-pill ${openPast2am ? "active" : ""}`}
        >
          <Clock className="w-4 h-4" />
          <span>Open Past 2AM</span>
        </motion.button>
      </div>

      {/* Results Counter */}
      <motion.div
        key={resultCount}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading text-sm uppercase tracking-wider text-muted-foreground"
      >
        <span className="text-primary font-display text-lg">{resultCount}</span> spots found
      </motion.div>
    </div>
  );
}
