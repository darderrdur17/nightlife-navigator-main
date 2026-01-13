import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Grid3X3 } from "lucide-react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { FilterPills } from "@/components/FilterPills";
import { VenueCard } from "@/components/VenueCard";
import { VenueModal } from "@/components/VenueModal";
import { VenueMap } from "@/components/VenueMap";
import { NeighborhoodFilter } from "@/components/NeighborhoodFilter";
import { PriceFilter } from "@/components/PriceFilter";
import { useSavedVenues } from "@/hooks/useSavedVenues";
import { useAuth } from "@/hooks/useAuth";
import { 
  allVenues, 
  neighborhoods,
  searchVenues, 
  filterVenues, 
  type Venue, 
  type VenueType 
} from "@/data/venues";

export default function ExplorePage() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [activeTypes, setActiveTypes] = useState<VenueType[]>(() => {
    const type = searchParams.get("type");
    return type ? [type as VenueType] : [];
  });
  const [openPast2am, setOpenPast2am] = useState(searchParams.get("late") === "true");
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [neighborhood, setNeighborhood] = useState("all");
  const [activePrices, setActivePrices] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  
  const { user } = useAuth();
  const { toggleSave, isSaved } = useSavedVenues();

  const filteredVenues = useMemo(() => {
    let results = allVenues;
    if (searchQuery) results = searchVenues(searchQuery, results);
    results = filterVenues(results, {
      types: activeTypes.length > 0 ? activeTypes : undefined,
      openPast2am: openPast2am || undefined,
      neighborhoods: neighborhood !== "all" ? [neighborhood] : undefined,
      pricing: activePrices.length > 0 ? activePrices : undefined,
    });
    return results;
  }, [searchQuery, activeTypes, openPast2am, neighborhood, activePrices]);

  const handleTypeToggle = (type: VenueType) => {
    setActiveTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  const handlePriceToggle = (price: string) => {
    setActivePrices(prev => prev.includes(price) ? prev.filter(p => p !== price) : [...prev, price]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-display text-5xl mb-2">Explore</h1>
          <p className="text-muted-foreground">Discover the best spots in San Francisco</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-4 mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search by name, neighborhood, vibe..." />
          
          <div className="flex flex-wrap items-center gap-4">
            <FilterPills activeTypes={activeTypes} onTypeToggle={handleTypeToggle} openPast2am={openPast2am} onOpenPast2amToggle={() => setOpenPast2am(p => !p)} resultCount={filteredVenues.length} />
            <NeighborhoodFilter neighborhoods={neighborhoods} value={neighborhood} onChange={setNeighborhood} />
            <PriceFilter activePrices={activePrices} onToggle={handlePriceToggle} />
          </div>

          <div className="flex gap-2">
            <button onClick={() => setViewMode("grid")} className={`px-4 py-2 font-heading text-sm uppercase border-2 flex items-center gap-2 ${viewMode === "grid" ? "border-primary bg-primary text-primary-foreground" : "border-foreground"}`}>
              <Grid3X3 className="w-4 h-4" /> Grid
            </button>
            <button onClick={() => setViewMode("map")} className={`px-4 py-2 font-heading text-sm uppercase border-2 flex items-center gap-2 ${viewMode === "map" ? "border-primary bg-primary text-primary-foreground" : "border-foreground"}`}>
              <Map className="w-4 h-4" /> Map
            </button>
          </div>
        </motion.div>

        {viewMode === "grid" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredVenues.map((venue, index) => (
                <VenueCard 
                  key={venue.id} 
                  venue={venue} 
                  index={index} 
                  onClick={() => setSelectedVenue(venue)}
                  isSaved={isSaved(venue.id)}
                  onToggleSave={user ? () => toggleSave(venue.id) : undefined}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="h-[600px]">
            <VenueMap venues={filteredVenues} selectedVenue={selectedVenue} onVenueSelect={setSelectedVenue} />
          </div>
        )}

        {filteredVenues.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <p className="font-display text-3xl text-muted-foreground mb-2">No spots found</p>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </main>
      <VenueModal 
        venue={selectedVenue} 
        onClose={() => setSelectedVenue(null)}
        isSaved={selectedVenue ? isSaved(selectedVenue.id) : false}
        onToggleSave={user && selectedVenue ? () => toggleSave(selectedVenue.id) : undefined}
      />
    </div>
  );
}
