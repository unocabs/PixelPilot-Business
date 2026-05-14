"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

export type GalleryTile = {
  label: string;
  caption: string;
  art: 1 | 2 | 3 | 4 | 5 | 6;
};

export function LightboxGallery({ tiles, columns = 3 }: { tiles: GalleryTile[]; columns?: 2 | 3 | 4 }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % tiles.length)),
    [tiles.length],
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + tiles.length) % tiles.length)),
    [tiles.length],
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div className={clsx("lightbox-grid", `lightbox-cols-${columns}`)}>
        {tiles.map((tile, i) => (
          <button
            key={tile.label + i}
            type="button"
            className={clsx("lightbox-tile", `art${tile.art}`)}
            onClick={() => setActive(i)}
            aria-label={`Open ${tile.label}`}
          >
            <span>{tile.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className={clsx("lightbox-stage", `art${tiles[active].art}`)}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-caption">
                <span>{tiles[active].label}</span>
                <strong>{tiles[active].caption}</strong>
              </div>
            </motion.div>
            <button
              type="button"
              className="lightbox-btn lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              className="lightbox-btn lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              ›
            </button>
            <button
              type="button"
              className="lightbox-close"
              onClick={close}
              aria-label="Close gallery"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
