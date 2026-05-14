import type { Metadata } from "next";
import { MenuPageClient } from "./MenuPageClient";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Full menu for the Harbor Lane Cafe demo: coffee, brunch, and pastries with dietary filters.",
};

export default function MenuPage() {
  return (
    <section className="section">
      <div className="page-head">
        <p className="eyebrow">Full menu</p>
        <h1>Coffee, brunch, and pastries.</h1>
        <p className="lede">
          Tap a chip to filter by dietary tag. This demonstrates client-side interactivity that a
          static one-page site can&apos;t cleanly handle.
        </p>
      </div>
      <MenuPageClient />
    </section>
  );
}
