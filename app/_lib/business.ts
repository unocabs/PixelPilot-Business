export const BUSINESS = {
  name: "Harbor Lane Cafe",
  legalName: "Harbor Lane Cafe (a PixelPilot demo concept)",
  shortName: "Harbor Lane",
  tagline: "A neighborhood cafe, presented like a destination.",
  description:
    "Harbor Lane is a fictional cafe used by PixelPilot to demo what a ₱18k+ business website can deliver: real pages, working forms, live hours, embedded map, and SEO that helps locals find you.",
  url: "https://harborlane.example.ph",
  email: "hello@pixelpilot.ph",
  phone: "+63 917 555 0119",
  address: {
    street: "12 Lazatin Boulevard",
    city: "San Fernando",
    region: "Pampanga",
    postal: "2000",
    country: "PH",
  },
  geo: { lat: 15.0349, lng: 120.6839 },
  priceRange: "₱₱",
  social: {
    instagram: "https://instagram.com/pixelpilot.ph",
    facebook: "https://facebook.com/pixelpilot.ph",
  },
} as const;

export type DayKey = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export const HOURS: { day: DayKey; open: string; close: string }[] = [
  { day: "Mon", open: "08:00", close: "21:00" },
  { day: "Tue", open: "08:00", close: "21:00" },
  { day: "Wed", open: "08:00", close: "21:00" },
  { day: "Thu", open: "08:00", close: "21:00" },
  { day: "Fri", open: "08:00", close: "22:00" },
  { day: "Sat", open: "09:00", close: "22:00" },
  { day: "Sun", open: "09:00", close: "20:00" },
];

const DAY_ORDER: DayKey[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function todayKey(now = new Date()): DayKey {
  return DAY_ORDER[now.getDay()];
}

export function isOpenNow(now = new Date()): { open: boolean; nextChange: string } {
  const key = todayKey(now);
  const row = HOURS.find((h) => h.day === key);
  if (!row) return { open: false, nextChange: "" };
  const [oH, oM] = row.open.split(":").map(Number);
  const [cH, cM] = row.close.split(":").map(Number);
  const mins = now.getHours() * 60 + now.getMinutes();
  const openMins = oH * 60 + oM;
  const closeMins = cH * 60 + cM;
  const open = mins >= openMins && mins < closeMins;
  return { open, nextChange: open ? row.close : row.open };
}
