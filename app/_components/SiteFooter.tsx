import Link from "next/link";
import { BUSINESS, HOURS } from "../_lib/business";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <span className="brand">
            <span className="brandMark">P</span>
            <span>{BUSINESS.shortName}</span>
          </span>
          <p>{BUSINESS.tagline}</p>
          <p className="footer-fineprint">A PixelPilot business website demo.</p>
        </div>

        <div>
          <strong>Visit</strong>
          <p>
            {BUSINESS.address.street}
            <br />
            {BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postal}
          </p>
          <p>
            <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}>{BUSINESS.phone}</a>
            <br />
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
          </p>
        </div>

        <div>
          <strong>Hours</strong>
          <ul className="footer-hours">
            {HOURS.map((h) => (
              <li key={h.day}>
                <span>{h.day}</span>
                <span>
                  {h.open}-{h.close}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <strong>Explore</strong>
          <ul className="footer-links">
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/story">Story</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/visit">Visit</Link>
            </li>
            <li>
              <Link href="/book">Book</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-base">
        <span>© {new Date().getFullYear()} PixelPilot demo</span>
        <span>
          Want this for your business?{" "}
          <a href={`mailto:${BUSINESS.email}?subject=Business%20Website%20Demo`}>
            Ask PixelPilot
          </a>
        </span>
      </div>
    </footer>
  );
}
