"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { isOpenNow } from "../_lib/business";

export function OpenClosedBadge({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<{ open: boolean; nextChange: string } | null>(null);

  useEffect(() => {
    const tick = () => setState(isOpenNow(new Date()));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!state) {
    return <span className={clsx("badge-status", "badge-loading", compact && "badge-compact")} aria-hidden />;
  }

  return (
    <span
      className={clsx(
        "badge-status",
        state.open ? "badge-open" : "badge-closed",
        compact && "badge-compact",
      )}
      role="status"
      aria-live="polite"
    >
      <span className="badge-dot" />
      {state.open ? `Open now · until ${state.nextChange}` : `Closed · opens ${state.nextChange}`}
    </span>
  );
}
