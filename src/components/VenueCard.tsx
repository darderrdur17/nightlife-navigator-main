import { motion } from "framer-motion";
import { Clock, MapPin, Music, Utensils, Wine, Sparkles, Heart } from "lucide-react";
import type { Venue } from "@/data/venues";

interface VenueCardProps {
  venue: Venue;
  index?: number;
  onClick?: () => void;
  isSaved?: boolean;
  onToggleSave?: () => void;
}

const typeConfig = {
  bar: {
    icon: Wine,
    label: "Bar",
    className: "tag-bar"
  },
  club: {
    icon: Music,
    label: "Club",
    className: "tag-club"
  },
  munchies: {
    icon: Utensils,
    label: "Munchies",
    className: "tag-munchies"
  }
};

export function VenueCard({ venue, index = 0, onClick, isSaved = false, onToggleSave }: VenueCardProps) {
  const config = typeConfig[venue.type];
  const Icon = config.icon;

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleSave?.();
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="venue-card cursor-pointer relative"
      onClick={onClick}
    >
      {/* Save Button */}
      {onToggleSave && (
        <button
          onClick={handleSaveClick}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all ${
            isSaved 
              ? "bg-primary text-primary-foreground" 
              : "bg-card/80 hover:bg-card text-muted-foreground hover:text-primary"
          }`}
          aria-label={isSaved ? "Remove from saved" : "Save venue"}
        >
          <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
        </button>
      )}

      {/* Header with Type Tag */}
      <div className="flex items-start justify-between p-4 pb-2">
        <div className="flex-1 pr-10">
          <h3 className="font-display text-2xl leading-tight">{venue.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="price-tag">{venue.pricing}</span>
            {venue.openPast2am && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-heading uppercase bg-secondary text-secondary-foreground">
                <Sparkles className="w-3 h-3" />
                Late Night
              </span>
            )}
          </div>
        </div>
        <span className={`${config.className} inline-flex items-center gap-1.5 px-3 py-1.5 font-heading text-sm uppercase`}>
          <Icon className="w-4 h-4" />
          {config.label}
        </span>
      </div>

      {/* Description */}
      <div className="px-4 pb-3">
        {venue.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{venue.description}</p>
        )}
        {venue.whereToGoIf && !venue.description && (
          <p className="text-sm italic text-muted-foreground">Go here if {venue.whereToGoIf}</p>
        )}
      </div>

      {/* Details Grid */}
      <div className="border-t-2 border-foreground bg-muted/30 px-4 py-3 grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary shrink-0" />
          <span className="font-heading uppercase text-xs truncate">{venue.neighborhood}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary shrink-0" />
          <span className="font-heading uppercase text-xs truncate">{venue.hours.split(";")[0]}</span>
        </div>
      </div>

      {/* Tags/Genre/Cuisine */}
      {(venue.genre || venue.cuisine || venue.barType) && (
        <div className="px-4 py-2 border-t-2 border-foreground">
          <p className="font-heading text-xs uppercase text-muted-foreground">
            {venue.genre || venue.cuisine || venue.barType}
          </p>
        </div>
      )}

      {/* Recommendations */}
      {venue.recs && (
        <div className="px-4 py-3 bg-primary/5 border-t-2 border-foreground">
          <p className="text-xs font-medium text-foreground">
            <span className="font-heading uppercase text-primary">Try: </span>
            {venue.recs}
          </p>
        </div>
      )}
    </motion.article>
  );
}
