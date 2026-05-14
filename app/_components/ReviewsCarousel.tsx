"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export type Review = { quote: string; author: string; role: string; stars: number };

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % reviews.length), 5500);
    return () => window.clearInterval(id);
  }, [paused, reviews.length]);

  return (
    <div
      className="reviews-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="reviews-stage" ref={trackRef}>
        <motion.div
          className="reviews-track"
          animate={{ x: `${-index * 100}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {reviews.map((r, i) => (
            <article key={i} className="review-slide">
              <div className="review-stars" aria-label={`${r.stars} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className={clsx(s < r.stars && "is-on")}>
                    ★
                  </span>
                ))}
              </div>
              <blockquote>{r.quote}</blockquote>
              <footer>
                <strong>{r.author}</strong>
                <span>{r.role}</span>
              </footer>
            </article>
          ))}
        </motion.div>
      </div>

      <div className="reviews-dots" role="tablist" aria-label="Reviews">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show review ${i + 1}`}
            className={clsx("reviews-dot", i === index && "is-active")}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
