export type Diet = "V" | "VG" | "GF" | "DF";

export type MenuItem = {
  name: string;
  tag: string;
  price: string;
  note: string;
  diet?: Diet[];
};

export type MenuCategory = {
  slug: string;
  title: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    slug: "coffee",
    title: "Coffee & Drinks",
    items: [
      {
        name: "Sea Salt Latte",
        tag: "Signature",
        price: "₱185",
        note: "Balanced espresso, sea-salt cream, muscovado finish.",
        diet: ["V"],
      },
      {
        name: "Calamansi Cold Brew",
        tag: "Local favorite",
        price: "₱165",
        note: "Bright citrus, slow-steeped coffee, clean afternoon lift.",
        diet: ["VG", "DF"],
      },
      {
        name: "Ube Horchata",
        tag: "New",
        price: "₱175",
        note: "Toasted rice milk, ube, soft cinnamon.",
        diet: ["VG", "DF"],
      },
      {
        name: "Pampanga Pour Over",
        tag: "Specialty",
        price: "₱195",
        note: "Rotating single origin from local farms.",
        diet: ["VG", "DF"],
      },
    ],
  },
  {
    slug: "brunch",
    title: "All-Day Brunch",
    items: [
      {
        name: "Ube Toast Stack",
        tag: "Brunch",
        price: "₱240",
        note: "Thick toast, whipped ube, toasted coconut, house butter.",
        diet: ["V"],
      },
      {
        name: "Longganisa Hash",
        tag: "Filling",
        price: "₱285",
        note: "Pampanga longganisa, crispy potatoes, soft egg, herbs.",
        diet: ["GF"],
      },
      {
        name: "Garden Grain Bowl",
        tag: "Light",
        price: "₱255",
        note: "Mixed grains, roasted squash, greens, calamansi dressing.",
        diet: ["VG", "DF", "GF"],
      },
    ],
  },
  {
    slug: "pastries",
    title: "Pastries",
    items: [
      {
        name: "Brown Butter Bibingka",
        tag: "Bakery",
        price: "₱120",
        note: "Soft rice cake, salted egg, niyog cream.",
        diet: ["V", "GF"],
      },
      {
        name: "Cinnamon Sea Salt Cookie",
        tag: "Bakery",
        price: "₱85",
        note: "Crisp edges, chewy center, flaky salt.",
        diet: ["V"],
      },
      {
        name: "Buko Pandan Loaf",
        tag: "Bakery",
        price: "₱110",
        note: "Pandan crumb, candied buko, light glaze.",
        diet: ["V"],
      },
    ],
  },
];

export const DIET_LABELS: Record<Diet, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten-free",
  DF: "Dairy-free",
};
