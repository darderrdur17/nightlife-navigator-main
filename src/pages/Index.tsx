import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight, Wine, Music, Utensils, Sparkles } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { searchVenues, allVenues } from "@/data/venues";
import { VenueCard } from "@/components/VenueCard";
import { VenueModal } from "@/components/VenueModal";
import type { Venue } from "@/data/venues";
import mascotImage from "@/assets/mascot-hero.jpg";

const quickVibes = [
  { label: "Dance Floor", query: "dance" },
  { label: "Late Night Eats", query: "24h" },
  { label: "Cocktails", query: "cocktail" },
  { label: "Dive Bar", query: "dive" },
  { label: "Techno", query: "techno" },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  
  const searchResults = searchQuery.length > 0 
    ? searchVenues(searchQuery).slice(0, 6) 
    : [];

  const handleQuickVibe = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="hero-title">BASSLINE</h1>
              <p className="tagline">The city never sleeps, neither should you.</p>
              
              <p className="text-lg text-muted-foreground max-w-md">
                Find the perfect bar, club, or late-night spot in San Francisco. 
                Search, filter, and discover where to go tonight.
              </p>

              {/* Quick Stats */}
              <div className="flex gap-6 pt-4">
                <div className="text-center">
                  <p className="font-display text-3xl text-primary">{allVenues.length}</p>
                  <p className="font-heading text-xs uppercase text-muted-foreground">Spots</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl text-primary">SF</p>
                  <p className="font-heading text-xs uppercase text-muted-foreground">City</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl text-primary">24/7</p>
                  <p className="font-heading text-xs uppercase text-muted-foreground">Vibes</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Mascot Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <img
                  src={mascotImage}
                  alt="Bassline mascot"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-primary py-12">
        <div className="container space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-2xl text-primary-foreground text-center uppercase tracking-wider"
          >
            What are you feeling tonight?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto"
          >
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search bars, clubs, late-night food..."
            />
          </motion.div>

          {/* Quick Vibes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {quickVibes.map(({ label, query }) => (
              <button
                key={label}
                onClick={() => handleQuickVibe(query)}
                className="px-4 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground font-heading text-sm uppercase border border-primary-foreground/30 transition-colors"
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* Search Results Preview */}
          {searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto bg-card border-2 border-foreground p-4 shadow-brutal"
            >
              <p className="font-heading text-xs uppercase text-muted-foreground mb-3">
                {searchResults.length} results for "{searchQuery}"
              </p>
              <div className="space-y-2">
                {searchResults.slice(0, 4).map((venue) => (
                  <button
                    key={venue.id}
                    onClick={() => setSelectedVenue(venue)}
                    className="w-full flex items-center justify-between p-2 hover:bg-muted transition-colors text-left"
                  >
                    <div>
                      <p className="font-heading">{venue.name}</p>
                      <p className="text-xs text-muted-foreground">{venue.neighborhood} · {venue.pricing}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </button>
                ))}
              </div>
              {searchResults.length > 4 && (
                <Link
                  to={`/explore?q=${encodeURIComponent(searchQuery)}`}
                  className="block mt-3 text-center font-heading text-sm uppercase text-primary hover:underline"
                >
                  View all {searchResults.length} results →
                </Link>
              )}
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center pt-4"
          >
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 text-primary-foreground font-heading text-lg uppercase hover:underline"
            >
              Or go straight to our map
              <MapPin className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl text-center mb-12"
          >
            Explore by Vibe
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Bars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to="/explore?type=bar"
                className="block group venue-card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 border-2 border-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Wine className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl mb-2">Bars</h3>
                <p className="text-muted-foreground text-sm">
                  Cocktail dens, wine bars, dive spots & more
                </p>
              </Link>
            </motion.div>

            {/* Clubs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/explore?type=club"
                className="block group venue-card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-club/10 border-2 border-foreground flex items-center justify-center group-hover:bg-club group-hover:text-primary-foreground transition-colors">
                  <Music className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl mb-2">Clubs</h3>
                <p className="text-muted-foreground text-sm">
                  Dance floors, warehouses & mega-clubs
                </p>
              </Link>
            </motion.div>

            {/* Munchies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/explore?type=munchies"
                className="block group venue-card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-munchies/10 border-2 border-foreground flex items-center justify-center group-hover:bg-munchies transition-colors">
                  <Utensils className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl mb-2">Munchies</h3>
                <p className="text-muted-foreground text-sm">
                  Late-night eats when you're starving
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Late Night Picks */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
              <h2 className="font-display text-3xl text-primary-foreground">Open Past 2AM</h2>
            </div>
            <Link
              to="/explore?late=true"
              className="font-heading text-sm uppercase text-primary-foreground/80 hover:text-primary-foreground"
            >
              View All →
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allVenues
              .filter(v => v.openPast2am)
              .slice(0, 6)
              .map((venue, index) => (
                <VenueCard
                  key={venue.id}
                  venue={venue}
                  index={index}
                  onClick={() => setSelectedVenue(venue)}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t-2 border-foreground">
        <div className="container text-center">
          <h3 className="font-display text-2xl text-primary mb-2">BASSLINE</h3>
          <p className="text-sm text-muted-foreground">
            San Francisco Nightlife Guide · More cities coming soon
          </p>
        </div>
      </footer>

      {/* Venue Modal */}
      <VenueModal venue={selectedVenue} onClose={() => setSelectedVenue(null)} />
    </div>
  );
};

export default Index;
