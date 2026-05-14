"use client";

import { useState } from "react";
import clsx from "clsx";
import { BUSINESS } from "../_lib/business";

export function MapEmbed({ height = 380 }: { height?: number }) {
  const [loaded, setLoaded] = useState(false);
  const q = encodeURIComponent(
    `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region}`,
  );
  const src = `https://www.google.com/maps?q=${q}&output=embed`;

  return (
    <div className={clsx("map-embed", !loaded && "is-loading")} style={{ height }}>
      {!loaded && (
        <div className="map-skeleton" aria-hidden>
          <span>Loading map…</span>
        </div>
      )}
      <iframe
        title={`Map to ${BUSINESS.name}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
        allowFullScreen
      />
    </div>
  );
}
