export type VenueType = "bar" | "club" | "munchies";

export interface Venue {
  id: string;
  name: string;
  type: VenueType;
  pricing: string;
  neighborhood: string;
  hours: string;
  description?: string;
  whereToGoIf?: string;
  barType?: string;
  genre?: string;
  cuisine?: string;
  drinks?: string;
  recs?: string;
  tags?: string[];
  vibe?: string;
  openPast2am?: boolean;
  socialMedia?: string;
  goodToKnow?: string;
  accolades?: string;
}

// Bars data from CSV - Complete list
export const bars: Venue[] = [
  {
    id: "bar-1",
    name: "Bar Part Time",
    type: "bar",
    pricing: "$$",
    neighborhood: "Mission",
    hours: "Tue 5–11; Wed 5–11; Thu 5–12; Fri 5–1; Sat 5–1; Sun–Mon Closed",
    description: "A glittering disco ball crowns a tight dance floor of natural-wine lovers and vinyl DJs.",
    whereToGoIf: "you want to dance",
    barType: "Wine Bar",
    drinks: "Natural Wine, Beer",
    recs: "Pet-nat by the glass, orange wine flights",
    tags: ["listening bar", "dance floor", "happy hour", "vinyl"],
    goodToKnow: "$10 cover on weekends"
  },
  {
    id: "bar-2",
    name: "Key Klub",
    type: "bar",
    pricing: "$$",
    neighborhood: "Nob Hill",
    hours: "Tue–Wed 4–11; Thu–Fri 4–12; Sat 2–12; Sun–Mon Closed",
    description: "Glowing lights, New American bites, and natural wine pours in a photogenic space.",
    whereToGoIf: "you want good pictures",
    barType: "Wine Bar",
    drinks: "Natural Wine, Beer",
    recs: "French toast, Burger",
    tags: ["wine bar", "new american", "date spot"]
  },
  {
    id: "bar-3",
    name: "Harlan Records",
    type: "bar",
    pricing: "$$",
    neighborhood: "Union Square",
    hours: "Mon 2–12; Tue–Fri 2–1:30; Sat 4–1:30; Sun 4–12",
    description: "Alley-hidden Japanese-leaning listening bar with eclectic vinyl sets.",
    whereToGoIf: "you love vinyl",
    barType: "Speakeasy / Listening Bar",
    drinks: "Cocktails",
    recs: "Espresso Martini, Japanese whisky highball",
    tags: ["listening bar", "vinyl", "retro", "intimate"],
    openPast2am: false
  },
  {
    id: "bar-4",
    name: "Mothership",
    type: "bar",
    pricing: "$$",
    neighborhood: "Mission",
    hours: "Tue–Thu 4–12; Fri 4–2; Sat 2–2; Sun 2–10; Mon Closed",
    description: "Verdant, space-themed Mission hideaway with inventive drinks and a lush patio.",
    whereToGoIf: "you want a great back patio",
    barType: "Cocktail Bar",
    drinks: "Cocktails",
    recs: "Frozen specials, seasonal signatures",
    tags: ["space bar", "immersive", "cocktails", "funky"],
    openPast2am: true
  },
  {
    id: "bar-5",
    name: "Trick Dog",
    type: "bar",
    pricing: "$$$",
    neighborhood: "Mission",
    hours: "Sun–Thu 4–12; Fri–Sat 4–2",
    description: "Ever-changing themed menus and playful, world-class cocktails.",
    whereToGoIf: "you want a menu that's a concept",
    barType: "Cocktail Bar",
    drinks: "Cocktails",
    recs: "Whatever's on the current themed list",
    tags: ["themed menus", "inventive", "buzzy"],
    accolades: "World's 50 Best Bars",
    openPast2am: true
  },
  {
    id: "bar-6",
    name: "Smuggler's Cove",
    type: "bar",
    pricing: "$$",
    neighborhood: "Hayes Valley",
    hours: "Daily 5–1:15",
    description: "Iconic multi-level tiki temple with hundreds of rums.",
    whereToGoIf: "you want tiki escapism",
    barType: "Tiki Bar",
    drinks: "Rum, Tiki Cocktails",
    recs: "Mai Tai, Zombie",
    tags: ["tiki", "immersive", "rum"],
    accolades: "World's 50 Best Bars"
  },
  {
    id: "bar-7",
    name: "ABV",
    type: "bar",
    pricing: "$$",
    neighborhood: "Mission",
    hours: "Daily 4–2",
    description: "Beloved neighborhood cocktail bar with a concise, dialed menu.",
    whereToGoIf: "you want flawless classics",
    barType: "Cocktail Bar",
    drinks: "Cocktails, Beer",
    recs: "Gimlet, Old Fashioned",
    tags: ["classic", "fast", "reliable"],
    accolades: "World's 50 Best Bars",
    openPast2am: true
  },
  {
    id: "bar-8",
    name: "Li Po Cocktail Lounge",
    type: "bar",
    pricing: "$",
    neighborhood: "Chinatown",
    hours: "Mon–Wed 2–1; Thu–Fri 2–2; Sat 1–2; Sun 1–1",
    description: "Historic Chinatown dive with the infamous Chinese Mai Tai.",
    whereToGoIf: "you want a classic SF dive",
    barType: "Dive Bar",
    drinks: "Mai Tais, Beer",
    recs: "Chinese Mai Tai",
    tags: ["historic", "dive", "neon"],
    openPast2am: true
  },
  {
    id: "bar-9",
    name: "Dalva",
    type: "bar",
    pricing: "$",
    neighborhood: "Mission",
    hours: "Mon–Tue 5–12; Wed–Sat 5–2; Sun 5–12",
    description: "Beloved Mission standby; back-room 'Hideout' hosts DJs and dancing.",
    whereToGoIf: "you want a classic Mission night",
    barType: "Neighborhood Bar + Back Room",
    drinks: "Beer, Cocktails",
    recs: "Shot & beer, house specials",
    tags: ["dance", "DJs", "classic"],
    openPast2am: true
  },
  {
    id: "bar-10",
    name: "Hi-Tops",
    type: "bar",
    pricing: "$",
    neighborhood: "Castro",
    hours: "Mon–Wed 12–12; Thu–Fri 12–2; Sat 10–2; Sun 10–12",
    description: "Lively sports-centric Castro bar with a big, friendly crowd.",
    whereToGoIf: "you want a queer sports bar vibe",
    barType: "Sports Bar",
    drinks: "Beer, Cocktails",
    recs: "Frozen drinks, beer pitchers",
    tags: ["queer", "sports", "lively"],
    openPast2am: true
  },
  {
    id: "bar-11",
    name: "True Laurel",
    type: "bar",
    pricing: "$$$",
    neighborhood: "Mission",
    hours: "Daily 5–12",
    description: "Inventive, produce-driven cocktails in a sleek, modern space.",
    whereToGoIf: "you want avant-garde drinks",
    barType: "Cocktail Bar",
    drinks: "Cocktails",
    recs: "Seasonal tasting menu, clarified milk punch",
    tags: ["inventive", "upscale", "date night"],
    accolades: "World's 50 Best Bars"
  },
  {
    id: "bar-12",
    name: "Tommy's Mexican Restaurant",
    type: "bar",
    pricing: "$$",
    neighborhood: "Outer Richmond",
    hours: "Wed–Mon 11am–10pm; Tue Closed",
    description: "Legendary tequila and mezcal bar with 300+ agave spirits.",
    whereToGoIf: "you're a tequila connoisseur",
    barType: "Tequila Bar",
    drinks: "Tequila, Mezcal, Margaritas",
    recs: "Tommy's Margarita, rare mezcal flights",
    tags: ["tequila", "legendary", "authentic"],
    accolades: "World's 50 Best Bars"
  },
  {
    id: "bar-13",
    name: "Verjus",
    type: "bar",
    pricing: "$$",
    neighborhood: "Jackson Square",
    hours: "Tue–Sat 5–12; Sun–Mon Closed",
    description: "European-style wine bar in a Parisian-feeling basement cave.",
    whereToGoIf: "you want to feel like you're in Paris",
    barType: "Wine Bar",
    drinks: "Natural Wine",
    recs: "Champagne, small plates, oysters",
    tags: ["romantic", "intimate", "european"]
  },
  {
    id: "bar-14",
    name: "Celeste",
    type: "bar",
    pricing: "$$$",
    neighborhood: "Polk Street",
    hours: "Wed–Sun 5–12; Mon–Tue Closed",
    description: "Intimate cocktail den with theatrical drinks and moody vibes.",
    whereToGoIf: "you want a theatrical experience",
    barType: "Cocktail Bar",
    drinks: "Cocktails",
    recs: "Signature presentations, absinthe service",
    tags: ["theatrical", "intimate", "speakeasy"]
  },
  {
    id: "bar-15",
    name: "Whitechapel",
    type: "bar",
    pricing: "$$",
    neighborhood: "Tenderloin",
    hours: "Daily 5–2",
    description: "Victorian-themed gin palace in an abandoned underground BART station.",
    whereToGoIf: "you love gin and immersive spaces",
    barType: "Cocktail Bar / Gin Bar",
    drinks: "Gin, Cocktails",
    recs: "G&Ts, gin flights",
    tags: ["immersive", "gin", "Victorian", "underground"],
    openPast2am: true
  },
  {
    id: "bar-16",
    name: "Bourbon & Branch",
    type: "bar",
    pricing: "$$$",
    neighborhood: "Tenderloin",
    hours: "Daily 6–2",
    description: "Password-required speakeasy with hidden rooms and classic cocktails.",
    whereToGoIf: "you want a real speakeasy experience",
    barType: "Speakeasy",
    drinks: "Cocktails",
    recs: "Old Fashioned, reservations-only back rooms",
    tags: ["speakeasy", "hidden", "reservations"],
    openPast2am: true,
    goodToKnow: "Reservations required, password at door"
  },
  {
    id: "bar-17",
    name: "Wildhawk",
    type: "bar",
    pricing: "$$",
    neighborhood: "Castro",
    hours: "Daily 5–2",
    description: "Neon-lit Castro cocktail bar with creative drinks and a fun crowd.",
    whereToGoIf: "you want a fun, queer-friendly night out",
    barType: "Cocktail Bar",
    drinks: "Cocktails",
    recs: "Signature cocktails, frozen drinks",
    tags: ["queer", "neon", "fun"],
    openPast2am: true
  },
  {
    id: "bar-18",
    name: "The Interval",
    type: "bar",
    pricing: "$$",
    neighborhood: "Fort Mason",
    hours: "Tue–Sat 11am–11pm; Sun 11am–6pm; Mon Closed",
    description: "Long Now Foundation's bar inside a museum of long-term thinking.",
    whereToGoIf: "you want an intellectual atmosphere",
    barType: "Museum Bar",
    drinks: "Cocktails, Wine, Coffee",
    recs: "Manual of Civilization drinks, library vibes",
    tags: ["unique", "intellectual", "museum"]
  },
  {
    id: "bar-19",
    name: "Zeitgeist",
    type: "bar",
    pricing: "$",
    neighborhood: "Mission",
    hours: "Daily 9am–2am",
    description: "Legendary biker dive with a massive beer garden.",
    whereToGoIf: "you want a legendary dive bar patio",
    barType: "Dive Bar / Beer Garden",
    drinks: "Beer, Bloody Marys",
    recs: "Bloody Mary, pitcher of beer",
    tags: ["dive", "patio", "iconic"],
    openPast2am: true,
    goodToKnow: "Cash only, no photos"
  },
  {
    id: "bar-20",
    name: "The Beehive",
    type: "bar",
    pricing: "$",
    neighborhood: "Mission",
    hours: "Daily 4pm–2am",
    description: "Unpretentious Mission dive with strong drinks and friendly bartenders.",
    whereToGoIf: "you want an authentic dive experience",
    barType: "Dive Bar",
    drinks: "Beer, Whiskey",
    recs: "Jameson shot, tallboy combos",
    tags: ["dive", "cheap", "friendly"],
    openPast2am: true
  }
];

// Clubs data from CSV - Complete list
export const clubs: Venue[] = [
  {
    id: "club-1",
    name: "Monroe's",
    type: "club",
    pricing: "$$",
    neighborhood: "North Beach",
    hours: "10pm–2am",
    genre: "Top 40's, rap",
    whereToGoIf: "you want a younger crowd",
    vibe: "Club/Lounge",
    openPast2am: false
  },
  {
    id: "club-2",
    name: "Audio",
    type: "club",
    pricing: "$$",
    neighborhood: "SoMa",
    hours: "10pm–2am+",
    genre: "House, techno, EDM",
    whereToGoIf: "you want the best sound system",
    vibe: "Club",
    openPast2am: true
  },
  {
    id: "club-3",
    name: "Halcyon",
    type: "club",
    pricing: "$$$",
    neighborhood: "SoMa",
    hours: "11pm–late",
    genre: "Techno, house",
    whereToGoIf: "you're not ready to go home",
    vibe: "Warehouse",
    openPast2am: true,
    goodToKnow: "Open till 6am"
  },
  {
    id: "club-4",
    name: "Public Works",
    type: "club",
    pricing: "$$",
    neighborhood: "Mission",
    hours: "9pm–3am",
    genre: "House, techno, hip-hop",
    whereToGoIf: "you want a warehouse-style party",
    vibe: "Warehouse",
    openPast2am: true
  },
  {
    id: "club-5",
    name: "1015 Folsom",
    type: "club",
    pricing: "$$$",
    neighborhood: "SoMa",
    hours: "10pm–3am",
    genre: "EDM, hip-hop, top 40's",
    whereToGoIf: "you want to experience the most iconic club in the Bay Area",
    vibe: "Mega-club",
    openPast2am: true
  },
  {
    id: "club-6",
    name: "The Midway",
    type: "club",
    pricing: "$$$",
    neighborhood: "Dogpatch",
    hours: "6pm–3am",
    genre: "Electronic, live shows",
    whereToGoIf: "you want a festival-like warehouse experience",
    vibe: "Warehouse",
    openPast2am: true
  },
  {
    id: "club-7",
    name: "Temple",
    type: "club",
    pricing: "$$$",
    neighborhood: "SoMa",
    hours: "10pm–4am",
    genre: "EDM, house, hip-hop",
    whereToGoIf: "you want multi-level stages & Vegas-style energy",
    vibe: "Multi-room",
    openPast2am: true
  },
  {
    id: "club-8",
    name: "The End Up",
    type: "club",
    pricing: "$$",
    neighborhood: "SoMa",
    hours: "10pm–6am (varies)",
    genre: "House, techno",
    whereToGoIf: "you want legendary Sunday morning parties",
    vibe: "Patio Club",
    openPast2am: true,
    goodToKnow: "Open since 1973, famous Sunday T-dance"
  },
  {
    id: "club-9",
    name: "Monarch",
    type: "club",
    pricing: "$$",
    neighborhood: "SoMa",
    hours: "5pm–2am",
    genre: "House, disco, funk",
    whereToGoIf: "you want an intimate underground dance floor",
    vibe: "Club/Lounge",
    openPast2am: false
  },
  {
    id: "club-10",
    name: "F8",
    type: "club",
    pricing: "$$",
    neighborhood: "SoMa",
    hours: "9pm–2am+",
    genre: "Bass, dubstep, drum & bass",
    whereToGoIf: "you want heavy bass music",
    vibe: "Club",
    openPast2am: true
  },
  {
    id: "club-11",
    name: "Butter",
    type: "club",
    pricing: "$$",
    neighborhood: "SoMa",
    hours: "10pm–2am",
    genre: "Hip-hop, R&B, dancehall",
    whereToGoIf: "you want hip-hop and R&B bangers",
    vibe: "Club",
    openPast2am: false
  },
  {
    id: "club-12",
    name: "Oasis",
    type: "club",
    pricing: "$$",
    neighborhood: "SoMa",
    hours: "9pm–3am",
    genre: "Pop, dance, drag shows",
    whereToGoIf: "you want drag shows and queer nightlife",
    vibe: "Club/Performance",
    openPast2am: true
  },
  {
    id: "club-13",
    name: "El Rio",
    type: "club",
    pricing: "$",
    neighborhood: "Mission",
    hours: "3pm–2am",
    genre: "Salsa, cumbia, soul, R&B",
    whereToGoIf: "you want a legendary queer patio party",
    vibe: "Patio Club",
    openPast2am: false,
    goodToKnow: "Salsa Sundays are legendary"
  },
  {
    id: "club-14",
    name: "Great Northern",
    type: "club",
    pricing: "$$$",
    neighborhood: "SoMa",
    hours: "10pm–4am",
    genre: "House, techno, electronic",
    whereToGoIf: "you want big-name DJs and a sleek warehouse vibe",
    vibe: "Warehouse",
    openPast2am: true
  }
];

// Munchies data from CSV - Complete list
export const munchies: Venue[] = [
  {
    id: "munchies-1",
    name: "Pinecrest",
    type: "munchies",
    pricing: "$",
    cuisine: "Western",
    neighborhood: "Union Square",
    hours: "Mon–Wed 7am–11pm; Thu 7am–12am; Fri–Sat 24h; Sun 12am–11pm",
    recs: "Steak & eggs, chili hash browns, banana pancakes",
    openPast2am: true
  },
  {
    id: "munchies-2",
    name: "Taishan",
    type: "munchies",
    pricing: "$$",
    cuisine: "Chinese",
    neighborhood: "Chinatown",
    hours: "Daily 11am–3am",
    recs: "Eel claypot rice, pork tripe soup, beef bone pot",
    openPast2am: true
  },
  {
    id: "munchies-3",
    name: "Grubstake",
    type: "munchies",
    pricing: "$$",
    cuisine: "Western",
    neighborhood: "Lower Nob Hill",
    hours: "Daily 5pm–4am",
    recs: "Codfish plate, cheeseburger, pie",
    openPast2am: true
  },
  {
    id: "munchies-4",
    name: "Cocobang",
    type: "munchies",
    pricing: "$$",
    cuisine: "Korean",
    neighborhood: "Lower Nob Hill",
    hours: "Daily 5pm–2am",
    recs: "Kimchi fried rice, corn cheese, spicy tofu soup",
    openPast2am: false
  },
  {
    id: "munchies-5",
    name: "Toyose",
    type: "munchies",
    pricing: "$$",
    cuisine: "Korean",
    neighborhood: "Outer Sunset",
    hours: "Daily 6pm–2am",
    recs: "Seafood pancake, kimchi stew, fried rice",
    openPast2am: false
  },
  {
    id: "munchies-6",
    name: "Taqueria El Farolito",
    type: "munchies",
    pricing: "$",
    cuisine: "Mexican",
    neighborhood: "Mission",
    hours: "Daily 10am–2:30am",
    recs: "Super burrito, lengua tacos",
    openPast2am: true
  },
  {
    id: "munchies-7",
    name: "Orphan Andy's",
    type: "munchies",
    pricing: "$",
    cuisine: "Western",
    neighborhood: "Castro",
    hours: "Daily 24h",
    recs: "Patty melt, chicken-fried steak, hotcakes",
    openPast2am: true
  },
  {
    id: "munchies-8",
    name: "Bob's Donut",
    type: "munchies",
    pricing: "$",
    cuisine: "Western",
    neighborhood: "Nob Hill",
    hours: "Daily 24h",
    recs: "Apple fritter, bear claw, glazed donut",
    openPast2am: true
  },
  {
    id: "munchies-9",
    name: "Naan N Curry",
    type: "munchies",
    pricing: "$$",
    cuisine: "Indian",
    neighborhood: "Civic Center",
    hours: "Daily 11am–3am",
    recs: "Chicken tikka masala, garlic naan, lamb biryani",
    openPast2am: true
  },
  {
    id: "munchies-10",
    name: "Panchita's Pupuseria",
    type: "munchies",
    pricing: "$",
    cuisine: "Salvadoran",
    neighborhood: "Mission",
    hours: "Mon–Thu & Sun 10am–11pm; Fri–Sat 10am–2:30am",
    recs: "Revuelta pupusas, tamales",
    openPast2am: true
  },
  {
    id: "munchies-11",
    name: "Sam's",
    type: "munchies",
    pricing: "$",
    cuisine: "Western",
    neighborhood: "North Beach",
    hours: "Daily 11am–3am",
    recs: "Cheeseburger, onion rings",
    openPast2am: true
  },
  {
    id: "munchies-12",
    name: "ZZAN",
    type: "munchies",
    pricing: "$$",
    cuisine: "Korean Fusion",
    neighborhood: "Tenderloin",
    hours: "Daily 4pm–1am",
    recs: "Soju cocktails, Korean tapas, corn cheese, fried chicken"
  },
  {
    id: "munchies-13",
    name: "Golden Boy Pizza",
    type: "munchies",
    pricing: "$",
    cuisine: "Italian/Pizza",
    neighborhood: "North Beach",
    hours: "Daily 11:30am–2am",
    recs: "Clam & garlic slice, pepperoni, combo",
    openPast2am: false
  },
  {
    id: "munchies-14",
    name: "City Wok",
    type: "munchies",
    pricing: "$",
    cuisine: "Chinese",
    neighborhood: "Tenderloin",
    hours: "Daily 11am–3am",
    recs: "Orange chicken, fried rice, chow mein",
    openPast2am: true
  },
  {
    id: "munchies-15",
    name: "Taqueria Cancun",
    type: "munchies",
    pricing: "$",
    cuisine: "Mexican",
    neighborhood: "Mission",
    hours: "Daily 9am–2am",
    recs: "Carne asada burrito, nachos, quesadilla suiza",
    openPast2am: false
  },
  {
    id: "munchies-16",
    name: "San Tung",
    type: "munchies",
    pricing: "$$",
    cuisine: "Chinese",
    neighborhood: "Inner Sunset",
    hours: "Daily 11am–9:30pm",
    recs: "Dry fried chicken wings, hand-pulled noodles",
    openPast2am: false,
    goodToKnow: "Worth the wait for wings"
  },
  {
    id: "munchies-17",
    name: "Midnight Ramen",
    type: "munchies",
    pricing: "$$",
    cuisine: "Japanese",
    neighborhood: "SoMa",
    hours: "Daily 5pm–3am",
    recs: "Tonkotsu ramen, spicy miso, pork belly buns",
    openPast2am: true
  },
  {
    id: "munchies-18",
    name: "Slice House",
    type: "munchies",
    pricing: "$",
    cuisine: "Italian/Pizza",
    neighborhood: "Haight",
    hours: "Daily 11am–3am",
    recs: "NY style slice, buffalo chicken pizza",
    openPast2am: true
  },
  {
    id: "munchies-19",
    name: "Wing Wings",
    type: "munchies",
    pricing: "$",
    cuisine: "American",
    neighborhood: "Mission",
    hours: "Daily 11am–2am",
    recs: "Lemon pepper wings, garlic parmesan, ranch fries",
    openPast2am: false
  },
  {
    id: "munchies-20",
    name: "Señor Sisig",
    type: "munchies",
    pricing: "$",
    cuisine: "Filipino Fusion",
    neighborhood: "SoMa",
    hours: "Daily 11am–2am",
    recs: "Sisig burrito, california burrito, loaded nachos",
    openPast2am: false,
    goodToKnow: "Late night food truck icon turned restaurant"
  }
];

// Combined venues
export const allVenues: Venue[] = [...bars, ...clubs, ...munchies];

// Get unique neighborhoods
export const neighborhoods = [...new Set(allVenues.map(v => v.neighborhood))].sort();

// Get venues by type
export const getVenuesByType = (type: VenueType): Venue[] => {
  return allVenues.filter(v => v.type === type);
};

// Search venues
export const searchVenues = (query: string, venues: Venue[] = allVenues): Venue[] => {
  const lowerQuery = query.toLowerCase();
  return venues.filter(venue => {
    return (
      venue.name.toLowerCase().includes(lowerQuery) ||
      venue.neighborhood.toLowerCase().includes(lowerQuery) ||
      venue.description?.toLowerCase().includes(lowerQuery) ||
      venue.whereToGoIf?.toLowerCase().includes(lowerQuery) ||
      venue.cuisine?.toLowerCase().includes(lowerQuery) ||
      venue.genre?.toLowerCase().includes(lowerQuery) ||
      venue.tags?.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      venue.recs?.toLowerCase().includes(lowerQuery)
    );
  });
};

// Filter venues
export interface VenueFilters {
  types?: VenueType[];
  neighborhoods?: string[];
  openPast2am?: boolean;
  pricing?: string[];
}

export const filterVenues = (venues: Venue[], filters: VenueFilters): Venue[] => {
  return venues.filter(venue => {
    if (filters.types && filters.types.length > 0) {
      if (!filters.types.includes(venue.type)) return false;
    }
    if (filters.neighborhoods && filters.neighborhoods.length > 0) {
      if (!filters.neighborhoods.includes(venue.neighborhood)) return false;
    }
    if (filters.openPast2am !== undefined && filters.openPast2am) {
      if (!venue.openPast2am) return false;
    }
    if (filters.pricing && filters.pricing.length > 0) {
      if (!filters.pricing.includes(venue.pricing)) return false;
    }
    return true;
  });
};
