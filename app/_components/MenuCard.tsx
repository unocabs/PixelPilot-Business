import clsx from "clsx";
import type { MenuItem } from "../_lib/menu";

export function MenuCard({ item, featured }: { item: MenuItem; featured?: boolean }) {
  return (
    <article className={clsx("menuCard", featured && "menuCard-featured")}>
      <div>
        <span>{item.tag}</span>
        <h3>{item.name}</h3>
        <p>{item.note}</p>
        {item.diet && item.diet.length > 0 && (
          <div className="menuCard-diet" aria-label="Dietary tags">
            {item.diet.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        )}
      </div>
      <strong>{item.price}</strong>
    </article>
  );
}
