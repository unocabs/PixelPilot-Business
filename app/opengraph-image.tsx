import { ImageResponse } from "next/og";
import { BUSINESS } from "./_lib/business";

export const runtime = "edge";
export const alt = `${BUSINESS.name} — PixelPilot Business Demo`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0e7c7b 0%, #c99a2e 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, fontWeight: 800 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: "#0b0d12",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              fontSize: 32,
            }}
          >
            P
          </div>
          <span>{BUSINESS.shortName}</span>
        </div>
        <div>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.02, maxWidth: 950 }}>
            {BUSINESS.tagline}
          </div>
          <div style={{ marginTop: 28, fontSize: 28, opacity: 0.92 }}>
            PixelPilot business website demo · from ₱18,000
          </div>
        </div>
      </div>
    ),
    size,
  );
}
