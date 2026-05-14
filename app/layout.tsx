import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "./_components/SiteHeader";
import { SiteFooter } from "./_components/SiteFooter";
import { AnnouncementBar } from "./_components/AnnouncementBar";
import { JsonLd } from "./_components/JsonLd";
import { BUSINESS, HOURS } from "./_lib/business";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `${BUSINESS.name} | PixelPilot Business Website Demo`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  openGraph: {
    title: `${BUSINESS.name} | PixelPilot Business Website Demo`,
    description: BUSINESS.description,
    type: "website",
    locale: "en_PH",
    siteName: BUSINESS.name,
  },
  twitter: { card: "summary_large_image", title: BUSINESS.name, description: BUSINESS.description },
};

const dayMap: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: BUSINESS.url,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: BUSINESS.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postal,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  openingHoursSpecification: HOURS.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: dayMap[h.day],
    opens: h.open,
    closes: h.close,
  })),
  sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <JsonLd data={localBusinessSchema} />
      </body>
    </html>
  );
}
