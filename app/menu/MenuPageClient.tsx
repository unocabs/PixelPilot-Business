"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { DIET_LABELS, MENU, type Diet } from "../_lib/menu";
import { MenuCard } from "../_components/MenuCard";
import { Reveal } from "../_components/Reveal";

const DIETS: Diet[] = ["V", "VG", "GF", "DF"];

export function MenuPageClient() {
  const [filter, setFilter] = useState<Diet | "ALL">("ALL");

  const filtered = useMemo(() => {
    if (filter === "ALL") return MENU;
    return MENU.map((cat) => ({
      ...cat,
      items: cat.items.filter((i) => i.diet?.includes(filter)),
    })).filter((cat) => cat.items.length > 0);
  }, [filter]);

  return (
    <>
      <div className="diet-chips" role="tablist" aria-label="Filter by dietary tag">
        <button
          type="button"
          role="tab"
          aria-selected={filter === "ALL"}
          className={clsx("diet-chip", filter === "ALL" && "is-active")}
          onClick={() => setFilter("ALL")}
        >
          All
        </button>
        {DIETS.map((d) => (
          <button
            key={d}
            type="button"
            role="tab"
            aria-selected={filter === d}
            className={clsx("diet-chip", filter === d && "is-active")}
            onClick={() => setFilter(d)}
          >
            {d} · {DIET_LABELS[d]}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="empty-state">No items match that filter. Try a different one.</p>
      )}

      {filtered.map((cat) => (
        <section key={cat.slug} className="menu-cat" id={cat.slug}>
          <Reveal>
            <h2>{cat.title}</h2>
          </Reveal>
          <div className="menuGrid menuGrid-3">
            {cat.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.05}>
                <MenuCard item={item} />
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
