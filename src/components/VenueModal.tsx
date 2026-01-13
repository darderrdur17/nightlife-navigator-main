import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, MapPin, Music, Wine, Utensils, Sparkles, ExternalLink, Instagram, Heart } from "lucide-react";
import type { Venue } from "@/data/venues";

interface VenueModalProps {
  venue: Venue | null;
  onClose: () => void;
  isSaved?: boolean;
  onToggleSave?: () => void;
}

const typeConfig = {
  bar: { icon: Wine, label: "Bar", color: "bg-primary" },
  club: { icon: Music, label: "Club", color: "bg-club" },
  munchies: { icon: Utensils, label: "Munchies", color: "bg-munchies" }
};

export function VenueModal({ venue, onClose, isSaved = false, onToggleSave }: VenueModalProps) {
  if (!venue) return null;
  
  const config = typeConfig[venue.type];
  const Icon = config.icon;

  return (
    <AnimatePresence>
      {venue && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 bottom-4 top-auto max-h-[80vh] md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:w-full z-50 overflow-hidden"
          >
            <div className="bg-card border-2 border-foreground shadow-brutal-lg overflow-y-auto max-h-[80vh]">
              {/* Header */}
              <div className={`${config.color} text-primary-foreground p-4 relative`}>
                <div className="absolute top-4 right-4 flex gap-2">
                  {onToggleSave && (
                    <button
                      onClick={onToggleSave}
                      className={`p-2 transition-colors ${
                        isSaved 
                          ? "bg-card text-primary" 
                          : "bg-card/20 hover:bg-card/40"
                      }`}
                      aria-label={isSaved ? "Remove from saved" : "Save venue"}
                    >
                      <Heart className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className="p-2 bg-card/20 hover:bg-card/40 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5" />
                  <span className="font-heading text-sm uppercase">{config.label}</span>
                  {venue.openPast2am && (
                    <span className="flex items-center gap-1 ml-2 px-2 py-0.5 bg-card/20 text-xs font-heading uppercase">
                      <Sparkles className="w-3 h-3" />
                      Late Night
                    </span>
                  )}
                </div>
                
                <h2 className="font-display text-4xl">{venue.name}</h2>
                <p className="font-heading text-xl mt-1">{venue.pricing}</p>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                {/* Description */}
                {venue.description && (
                  <p className="text-foreground">{venue.description}</p>
                )}
                
                {/* Where to go if */}
                {venue.whereToGoIf && (
                  <div className="bg-muted p-3 border-2 border-foreground">
                    <p className="font-heading text-xs uppercase text-muted-foreground mb-1">Perfect if</p>
                    <p className="text-foreground italic">{venue.whereToGoIf}</p>
                  </div>
                )}

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading text-xs uppercase text-muted-foreground">Neighborhood</p>
                      <p className="font-medium">{venue.neighborhood}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading text-xs uppercase text-muted-foreground">Hours</p>
                      <p className="font-medium text-sm">{venue.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Type-specific info */}
                {venue.genre && (
                  <div>
                    <p className="font-heading text-xs uppercase text-muted-foreground mb-1">Genre</p>
                    <p className="font-medium">{venue.genre}</p>
                  </div>
                )}
                
                {venue.barType && (
                  <div>
                    <p className="font-heading text-xs uppercase text-muted-foreground mb-1">Vibe</p>
                    <p className="font-medium">{venue.barType}</p>
                  </div>
                )}
                
                {venue.cuisine && (
                  <div>
                    <p className="font-heading text-xs uppercase text-muted-foreground mb-1">Cuisine</p>
                    <p className="font-medium">{venue.cuisine}</p>
                  </div>
                )}

                {venue.drinks && (
                  <div>
                    <p className="font-heading text-xs uppercase text-muted-foreground mb-1">Drinks</p>
                    <p className="font-medium">{venue.drinks}</p>
                  </div>
                )}

                {/* Recommendations */}
                {venue.recs && (
                  <div className="bg-primary/10 p-3 border-2 border-primary">
                    <p className="font-heading text-xs uppercase text-primary mb-1">What to Order</p>
                    <p className="font-medium">{venue.recs}</p>
                  </div>
                )}

                {/* Tags */}
                {venue.tags && venue.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {venue.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-heading uppercase bg-muted border border-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Good to know */}
                {venue.goodToKnow && (
                  <div className="bg-accent/20 p-3 border-2 border-accent">
                    <p className="font-heading text-xs uppercase text-accent-foreground mb-1">Good to Know</p>
                    <p className="text-sm">{venue.goodToKnow}</p>
                  </div>
                )}

                {/* Accolades */}
                {venue.accolades && (
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="font-medium">{venue.accolades}</span>
                  </div>
                )}

                {/* Social Media */}
                {venue.socialMedia && (
                  <a
                    href={venue.socialMedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-heading text-sm uppercase"
                  >
                    <Instagram className="w-4 h-4" />
                    Follow on Instagram
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
