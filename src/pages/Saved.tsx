import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { VenueCard } from "@/components/VenueCard";
import { VenueModal } from "@/components/VenueModal";
import { allVenues, type Venue } from "@/data/venues";
import { useAuth } from "@/hooks/useAuth";
import { useSavedVenues } from "@/hooks/useSavedVenues";
import { Button } from "@/components/ui/button";

export default function SavedPage() {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const { user, loading: authLoading } = useAuth();
  const { savedVenueIds, toggleSave, isSaved, loading: venuesLoading } = useSavedVenues();

  // Get saved venues from the allVenues list
  const savedVenues = allVenues.filter(v => savedVenueIds.has(v.id));

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8">
          <div className="flex items-center justify-center py-16">
            <div className="animate-pulse text-muted-foreground">Loading...</div>
          </div>
        </main>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Heart className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
            <p className="font-display text-3xl text-foreground mb-2">
              Sign in to save spots
            </p>
            <p className="text-muted-foreground mb-6">
              Create an account to save your favorite venues and sync across devices
            </p>
            <Link to="/auth">
              <Button className="btn-primary inline-flex items-center gap-2">
                <LogIn className="w-5 h-5" />
                Sign In
              </Button>
            </Link>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <h1 className="font-display text-5xl">Saved</h1>
          </div>
          <p className="text-muted-foreground">
            Your favorite spots for the perfect night out
          </p>
        </motion.div>

        {/* Saved Venues */}
        {venuesLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="animate-pulse text-muted-foreground">Loading your saved spots...</div>
          </div>
        ) : savedVenues.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedVenues.map((venue, index) => (
              <VenueCard
                key={venue.id}
                venue={venue}
                index={index}
                onClick={() => setSelectedVenue(venue)}
                isSaved={true}
                onToggleSave={() => toggleSave(venue.id)}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Heart className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
            <p className="font-display text-3xl text-muted-foreground mb-2">
              No saved spots yet
            </p>
            <p className="text-muted-foreground mb-6">
              Explore and save your favorite venues
            </p>
            <Link to="/explore">
              <Button className="btn-primary">
                Explore Venues
              </Button>
            </Link>
          </motion.div>
        )}
      </main>

      {/* Venue Modal */}
      <VenueModal 
        venue={selectedVenue} 
        onClose={() => setSelectedVenue(null)}
        isSaved={selectedVenue ? isSaved(selectedVenue.id) : false}
        onToggleSave={selectedVenue ? () => toggleSave(selectedVenue.id) : undefined}
      />
    </div>
  );
}
