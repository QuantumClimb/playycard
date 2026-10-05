import { HeadId, PoseId, SymbolId, BackgroundId } from "../types/card";

export const HEADS: { id: HeadId; name: string; tagline: string; color: string }[] = [
  { id: "blue", name: "Bluey", tagline: "Curious Explorer", color: "#06B6D4" },
  { id: "dreamyy", name: "Dreamyy", tagline: "Gentle Dreamer", color: "#EC4899" },
  { id: "sparkyy", name: "Sparkyy", tagline: "Enthusiastic Hero", color: "#FACC15" },
];

export const POSES: { id: PoseId; name: string; tagline: string }[] = [
  { id: "hero", name: "Hero Stance", tagline: "Hands on hips, ready for action!" },
  { id: "wave", name: "Friendly Wave", tagline: "Greeting new allies!" },
  { id: "jump", name: "Joyful Jump", tagline: "Leaping into victory!" },
  { id: "sitting", name: "Cozy Seat", tagline: "Relaxing after battle." },
];

export const SYMBOLS: { id: SymbolId; name: string; icon: string; color: string }[] = [
  { id: "star", name: "Cosmic Star", icon: "★", color: "#FACC15" },
  { id: "lightning", name: "Volt Spark", icon: "⚡", color: "#EAB308" },
  { id: "flame", name: "Blaze Fire", icon: "🔥", color: "#EF4444" },
  { id: "heart", name: "Love Heart", icon: "♥", color: "#EC4899" },
  { id: "cloud", name: "Sky Cloud", icon: "☁", color: "#38BDF8" },
  { id: "moon", name: "Astral Moon", icon: "🌙", color: "#A855F7" },
  { id: "paw", name: "Wild Paw", icon: "🐾", color: "#F97316" },
  { id: "gear", name: "Tech Gear", icon: "⚙", color: "#64748B" },
  { id: "crown", name: "Royal Crown", icon: "👑", color: "#EAB308" },
];

export const BACKGROUNDS: { id: BackgroundId; name: string; themeColor: string }[] = [
  { id: "happy-hills", name: "Happy Hills", themeColor: "#10B981" },
  { id: "space-world", name: "Space Cosmos", themeColor: "#6366F1" },
  { id: "magic-castle", name: "Magic Castle", themeColor: "#EC4899" },
  { id: "jungle-world", name: "Jungle Safari", themeColor: "#059669" },
  { id: "cloud-kingdom", name: "Cloud Kingdom", themeColor: "#0ea5e9" },
  { id: "city-adventure", name: "City Skyline", themeColor: "#8b5cf6" },
];

export const CHARACTER_COLORS = [
  "#06B6D4", "#EC4899", "#FACC15", "#10B981", "#8B5CF6", "#F97316", "#3B82F6", "#EF4444"
];
