import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <h1 className="font-display text-8xl text-primary mb-4">404</h1>
        <h2 className="font-display text-3xl mb-4">Lost in the Night</h2>
        <p className="text-muted-foreground mb-8">
          Looks like this spot doesn't exist. Let's get you back to the party.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-brutal inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            to="/explore"
            className="btn-brutal inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground"
          >
            <Search className="w-4 h-4" />
            Explore
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
