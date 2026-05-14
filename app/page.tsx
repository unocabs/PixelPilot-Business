import Link from "next/link";
import { MENU } from "./_lib/menu";
import { Reveal } from "./_components/Reveal";
import { MenuCard } from "./_components/MenuCard";
import { OpenClosedBadge } from "./_components/OpenClosedBadge";
import { ReviewsCarousel, type Review } from "./_components/ReviewsCarousel";
import { LightboxGallery, type GalleryTile } from "./_components/LightboxGallery";

const featured = MENU[0].items.slice(0, 3).concat(MENU[1].items.slice(0, 1));

const reviews: Review[] = [
  {
    quote: "The site feels like the cafe before you even walk in.",
    author: "Mara D.",
    role: "Regular guest",
    stars: 5,
  },
  {
    quote: "Clear menu, easy directions, and the mobile version loads fast.",
    author: "Aldrin S.",
    role: "Visiting from Manila",
    stars: 5,
  },
  {
    quote: "Premium without feeling intimidating. Exactly right for a local brand.",
    author: "Erika P.",
    role: "Creative director",
    stars: 4,
  },
];

const galleryPreview: GalleryTile[] = [
  { label: "Morning bar", caption: "First pour at 8AM.", art: 1 },
  { label: "Brunch plates", caption: "Weekend stacks.", art: 2 },
  { label: "Quiet corners", caption: "Made for slow afternoons.", art: 3 },
  { label: "Out front", caption: "Lazatin Blvd, easy parking.", art: 4 },
];

export default function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <Reveal className="heroCopy">
          <p className="eyebrow">Cafe website sample</p>
          <h1>A warm neighborhood cafe, presented like a destination.</h1>
          <p className="lede">
            This PixelPilot business demo shows how a local brand can feel polished and useful:
            real pages, live hours, working forms, embedded maps, and SEO built in.
          </p>
          <div className="actions">
            <Link className="button primary" href="/book">
              Book a table
            </Link>
            <Link className="button secondary" href="/menu">
              See the menu
            </Link>
          </div>
          <div className="hero-status">
            <OpenClosedBadge />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="heroBoard" aria-label="Cafe preview board">
          <div className="featureImage">
            <span>Fresh brew</span>
            <strong>Open daily, 8AM-9PM</strong>
          </div>
          <div className="miniStats">
            <div>
              <strong>4.8</strong>
              <span>Guest rating</span>
            </div>
            <div>
              <strong>12</strong>
              <span>Menu highlights</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section menuSection" id="menu">
        <Reveal>
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Featured menu</p>
              <h2>The things first-time guests order most.</h2>
            </div>
            <div>
              <Link href="/menu" className="button secondary">
                Full menu →
              </Link>
            </div>
          </div>
        </Reveal>
        <div className="menuGrid menuGrid-4">
          {featured.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <MenuCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section split" id="story">
        <Reveal>
          <div>
            <p className="eyebrow">Brand story</p>
            <h2>Designed to make a small business feel established.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="storyPanel">
            <p>
              Harbor Lane is a fictional cafe concept for this demo. The layout gives clients a
              realistic preview of a business site: confident messaging, useful details, local
              personality, and clear next actions.
            </p>
            <div className="storyTiles">
              <span>Mobile-first</span>
              <span>Google-ready</span>
              <span>Live hours</span>
              <span>Validated forms</span>
            </div>
            <Link href="/story" className="story-link">
              Read the full story →
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="gallery-heading">
        <Reveal>
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 id="gallery-heading">A few moments from the cafe.</h2>
            </div>
            <div>
              <Link href="/gallery" className="button secondary">
                Open gallery →
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <LightboxGallery tiles={galleryPreview} columns={4} />
        </Reveal>
      </section>

      <section className="section reviews">
        <Reveal>
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Guest confidence</p>
              <h2>Five-star feedback that builds trust before the first visit.</h2>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <ReviewsCarousel reviews={reviews} />
        </Reveal>
      </section>

      <section className="section visit" id="visit">
        <Reveal>
          <div>
            <p className="eyebrow">Visit us</p>
            <h2>San Fernando, Pampanga</h2>
            <p>Monday-Sunday, with extended Friday/Saturday hours.</p>
            <OpenClosedBadge />
            <div className="actions">
              <Link className="button primary" href="/visit">
                Directions & hours
              </Link>
              <Link className="button secondary" href="/book">
                Book a table
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mapCard">
            <span>Map preview</span>
            <strong>Embedded Google Maps + accessible hours table on /visit.</strong>
            <Link href="/visit">Open Visit page</Link>
          </div>
        </Reveal>
      </section>

      <section className="section package" id="package">
        <Reveal>
          <div>
            <p className="eyebrow">PixelPilot package</p>
            <h2>Business website from ₱18,000.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <ul>
            <li>6+ real pages with metadata and sitemap</li>
            <li>Working booking and contact forms with validation</li>
            <li>Live open/closed status, embedded map, hours table</li>
            <li>LocalBusiness schema markup for Google visibility</li>
            <li>Lightbox gallery and scroll motion polish</li>
          </ul>
        </Reveal>
      </section>
    </>
  );
}
