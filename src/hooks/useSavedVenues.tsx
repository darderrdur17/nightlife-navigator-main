import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { toast } from "sonner";

export function useSavedVenues() {
  const { user } = useAuth();
  const [savedVenueIds, setSavedVenueIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  // Fetch saved venues when user changes
  useEffect(() => {
    if (!user) {
      setSavedVenueIds(new Set());
      setLoading(false);
      return;
    }

    const fetchSavedVenues = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("saved_venues")
        .select("venue_id")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching saved venues:", error);
      } else {
        setSavedVenueIds(new Set(data.map((sv) => sv.venue_id)));
      }
      setLoading(false);
    };

    fetchSavedVenues();
  }, [user]);

  const toggleSave = useCallback(async (venueId: string) => {
    if (!user) {
      toast.error("Please sign in to save venues");
      return;
    }

    const isSaved = savedVenueIds.has(venueId);

    if (isSaved) {
      // Remove from saved
      const { error } = await supabase
        .from("saved_venues")
        .delete()
        .eq("user_id", user.id)
        .eq("venue_id", venueId);

      if (error) {
        toast.error("Failed to unsave venue");
        return;
      }

      setSavedVenueIds((prev) => {
        const next = new Set(prev);
        next.delete(venueId);
        return next;
      });
      toast.success("Removed from saved");
    } else {
      // Add to saved
      const { error } = await supabase
        .from("saved_venues")
        .insert({ user_id: user.id, venue_id: venueId });

      if (error) {
        toast.error("Failed to save venue");
        return;
      }

      setSavedVenueIds((prev) => new Set(prev).add(venueId));
      toast.success("Saved!");
    }
  }, [user, savedVenueIds]);

  const isSaved = useCallback((venueId: string) => {
    return savedVenueIds.has(venueId);
  }, [savedVenueIds]);

  return { savedVenueIds, loading, toggleSave, isSaved };
}
