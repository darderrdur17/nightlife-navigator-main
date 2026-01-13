import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Venue } from "@/data/venues";

// SF neighborhood coordinates (approximate centers)
const neighborhoodCoords: Record<string, [number, number]> = {
  "Mission": [37.7599, -122.4148],
  "SoMa": [37.7785, -122.4056],
  "Castro": [37.7609, -122.4350],
  "North Beach": [37.8060, -122.4103],
  "Chinatown": [37.7941, -122.4078],
  "Union Square": [37.7879, -122.4074],
  "Nob Hill": [37.7930, -122.4161],
  "Hayes Valley": [37.7763, -122.4255],
  "Financial District": [37.7946, -122.3999],
  "Dogpatch": [37.7614, -122.3866],
  "Tenderloin": [37.7847, -122.4141],
  "Lower Nob Hill": [37.7877, -122.4156],
  "Marina": [37.8037, -122.4368],
  "NoPa": [37.7745, -122.4405],
  "Fillmore District": [37.7849, -122.4319],
  "Outer Sunset": [37.7558, -122.4942],
  "Inner Richmond": [37.7803, -122.4614],
  "Outer Richmond": [37.7789, -122.4828],
  "Civic Center": [37.7786, -122.4177],
  "Ocean Ave": [37.7254, -122.4486],
  "Jackson Square": [37.7963, -122.4034],
  "Cow Hollow": [37.7982, -122.4367],
  "Japantown": [37.7851, -122.4295],
};

// Add small random offset to prevent markers from stacking
const getCoords = (neighborhood: string, index: number): [number, number] => {
  const base = neighborhoodCoords[neighborhood] || [37.7749, -122.4194];
  const offset = 0.002;
  return [
    base[0] + (Math.random() - 0.5) * offset + index * 0.0005,
    base[1] + (Math.random() - 0.5) * offset + index * 0.0005
  ];
};

interface VenueMapProps {
  venues: Venue[];
  selectedVenue?: Venue | null;
  onVenueSelect: (venue: Venue) => void;
  className?: string;
}

const typeColors = {
  bar: "#e63946",
  club: "#9333ea",
  munchies: "#16a34a"
};

export function VenueMap({ venues, selectedVenue, onVenueSelect, className = "" }: VenueMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on SF
    const map = L.map(mapRef.current, {
      center: [37.7749, -122.4194],
      zoom: 13,
      zoomControl: true,
    });

    // Dark theme tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update markers when venues change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers
    venues.forEach((venue, index) => {
      const coords = getCoords(venue.neighborhood, index);
      const color = typeColors[venue.type];
      
      const icon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            width: 28px;
            height: 28px;
            background: ${color};
            border: 3px solid #1a1a1a;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.4);
            cursor: pointer;
            font-size: 12px;
            color: white;
            font-weight: bold;
          ">
            ${venue.type === 'bar' ? '🍷' : venue.type === 'club' ? '🎵' : '🍔'}
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      const marker = L.marker(coords, { icon })
        .addTo(map)
        .on('click', () => onVenueSelect(venue));

      // Popup with venue info
      marker.bindPopup(`
        <div style="font-family: 'Oswald', sans-serif; min-width: 150px;">
          <strong style="font-size: 14px; text-transform: uppercase;">${venue.name}</strong>
          <div style="font-size: 11px; color: #666; margin-top: 4px;">
            ${venue.neighborhood} • ${venue.pricing}
          </div>
          ${venue.whereToGoIf ? `<div style="font-size: 11px; margin-top: 4px; font-style: italic;">Go if ${venue.whereToGoIf}</div>` : ''}
        </div>
      `);

      markersRef.current.push(marker);
    });
  }, [venues, onVenueSelect]);

  // Center on selected venue
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !selectedVenue) return;

    const venueIndex = venues.findIndex(v => v.id === selectedVenue.id);
    const coords = getCoords(selectedVenue.neighborhood, venueIndex);
    map.setView(coords, 15, { animate: true });
  }, [selectedVenue, venues]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-full min-h-[400px] rounded-lg border-3 border-foreground ${className}`}
      style={{ background: '#1a1a1a' }}
    />
  );
}
