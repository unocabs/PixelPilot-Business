import type { Metadata } from "next";
import { LightboxGallery, type GalleryTile } from "../_components/LightboxGallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A lightbox gallery of cafe moments — keyboard, mobile, and accessibility ready.",
};

const TILES: GalleryTile[] = [
  { label: "First pour", caption: "Opening the day at 8AM.", art: 1 },
  { label: "Sea salt latte", caption: "The signature drink.", art: 2 },
  { label: "Brunch plates", caption: "Weekend stacks served warm.", art: 3 },
  { label: "Cinnamon cookies", caption: "Fresh from the bakery rack.", art: 4 },
  { label: "Front window", caption: "Quiet morning corner.", art: 5 },
  { label: "Long table", caption: "Built for small groups.", art: 6 },
  { label: "Roast bar", caption: "Pour-overs to order.", art: 1 },
  { label: "Side garden", caption: "A few seats out back.", art: 2 },
  { label: "Beans", caption: "From Pampanga farms.", art: 3 },
  { label: "Sunset terrace", caption: "Gold hour glow.", art: 4 },
  { label: "Counter", caption: "Custom muscovado finish.", art: 5 },
  { label: "Loaf", caption: "Buko pandan, glazed.", art: 6 },
];

export default function GalleryPage() {
  return (
    <section className="section">
      <div className="page-head">
        <p className="eyebrow">Gallery</p>
        <h1>Moments from Harbor Lane.</h1>
        <p className="lede">
          Click any tile to open a lightbox. Arrow keys cycle. Escape closes. This level of polish
          is what separates a ₱8k one-pager from an ₱18k business site.
        </p>
      </div>
      <LightboxGallery tiles={TILES} columns={4} />
    </section>
  );
}
