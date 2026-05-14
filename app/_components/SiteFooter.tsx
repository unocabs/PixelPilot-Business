import Link from "next/link";
import { BUSINESS, HOURS } from "../_lib/business";

export function SiteFooter() {
  return (
    <>
      <section className="section other-demos" aria-label="All PixelPilot demo sites">
        <div className="other-demos-head">
          <p className="eyebrow">Compare the tiers</p>
          <h2>See all PixelPilot demos.</h2>
          <p>
            This is the business website tier. Tap through to see the simpler one-page tier or the
            ecommerce storefront tier.
          </p>
        </div>
        <div className="other-demos-grid other-demos-grid-3">
          <a
            className="other-demo-card other-demo-simple"
            href="https://pixel-pilot-simple.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="other-demo-meta">
              <span className="other-demo-tier">Simple</span>
              <span className="other-demo-price">From ₱8,000</span>
            </div>
            <h3>One-page agency pitch</h3>
            <p>
              Static HTML/CSS/JS one-pager. Best for founders, freelancers, and small businesses
              that need a clean online presence quickly.
            </p>
            <ul className="other-demo-tags">
              <li>Single page</li>
              <li>Mobile responsive</li>
              <li>Basic SEO</li>
              <li>Mailto contact</li>
            </ul>
            <span className="other-demo-cta">Visit PixelPilot →</span>
          </a>
          <div
            className="other-demo-card other-demo-business other-demo-card--current"
            aria-current="page"
          >
            <div className="other-demo-meta">
              <span className="other-demo-tier">Business</span>
              <span className="other-demo-price">From ₱18,000</span>
            </div>
            <h3>Local business website</h3>
            <p>
              Multi-page Next.js site with live open/closed status, validated booking form,
              embedded Google Maps, lightbox gallery, and LocalBusiness SEO schema.
            </p>
            <ul className="other-demo-tags">
              <li>Multi-page</li>
              <li>Booking form</li>
              <li>Google Maps</li>
              <li>LocalBusiness schema</li>
            </ul>
            <p className="other-demo-note">
              You&apos;re viewing this tier. Tap a sibling card to compare.
            </p>
          </div>
          <a
            className="other-demo-card other-demo-ecommerce"
            href="https://pixel-pilot-ecommerce.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="other-demo-meta">
              <span className="other-demo-tier">Ecommerce</span>
              <span className="other-demo-price">From ₱40,000+</span>
            </div>
            <h3>Working storefront</h3>
            <p>
              Persistent cart, product detail pages with size and color variants, filtering,
              search, wishlist, and a click-through mock checkout flow.
            </p>
            <ul className="other-demo-tags">
              <li>Cart with localStorage</li>
              <li>16 product pages</li>
              <li>Variants & filters</li>
              <li>Mock checkout</li>
            </ul>
            <span className="other-demo-cta">Visit Northline Studio →</span>
          </a>
        </div>
      </section>

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
    </>
  );
}
