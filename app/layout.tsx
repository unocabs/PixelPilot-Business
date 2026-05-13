import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harbor Lane Cafe | PixelPilot Business Website Demo",
  description:
    "A premium cafe business website demo by PixelPilot, showing what a polished local business site can include for Philippine SMEs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
