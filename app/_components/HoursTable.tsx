"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { HOURS, todayKey, type DayKey } from "../_lib/business";

export function HoursTable() {
  const [today, setToday] = useState<DayKey | null>(null);

  useEffect(() => {
    setToday(todayKey(new Date()));
  }, []);

  return (
    <table className="hours-table">
      <caption className="sr-only">Opening hours</caption>
      <tbody>
        {HOURS.map((row) => (
          <tr key={row.day} className={clsx(today === row.day && "hours-row-today")}>
            <th scope="row">{row.day}</th>
            <td>
              {row.open} — {row.close}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
