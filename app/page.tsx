const menuItems = [
  {
    name: "Sea Salt Latte",
    tag: "Signature",
    price: "₱185",
    note: "Balanced espresso, sea-salt cream, muscovado finish.",
  },
  {
    name: "Calamansi Cold Brew",
    tag: "Local favorite",
    price: "₱165",
    note: "Bright citrus, slow-steeped coffee, clean afternoon lift.",
  },
  {
    name: "Ube Toast Stack",
    tag: "Brunch",
    price: "₱240",
    note: "Thick toast, whipped ube, toasted coconut, house butter.",
  },
];

const reviews = [
  "The site feels like the cafe before you even walk in.",
  "Clear menu, easy directions, and the mobile version loads fast.",
  "Premium without feeling intimidating. Exactly right for a local brand.",
];

export default function BusinessDemoPage() {
  return (
    <main>
      <div className="announcement">
        <span>PixelPilot sample concept</span>
        <span>Business websites from ₱18,000</span>
        <span>Built for Philippine cafes, salons, clinics, and service brands</span>
      </div>

      <header className="nav">
        <a className="brand" href="#top" aria-label="Harbor Lane Cafe home">
          <span className="brandMark">P</span>
          <span>Harbor Lane</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#story">Story</a>
          <a href="#visit">Visit</a>
          <a className="navCta" href="mailto:hello@pixelpilot.ph?subject=Business%20Website%20Demo">
            Ask PixelPilot
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Cafe website sample</p>
          <h1>A warm neighborhood cafe, presented like a destination.</h1>
          <p className="lede">
            This PixelPilot demo shows how a local business website can make the menu, hours,
            location, and brand story feel polished without becoming expensive or overbuilt.
          </p>
          <div className="actions">
            <a className="button primary" href="#visit">
              Plan a visit
            </a>
            <a className="button secondary" href="#package">
              View package
            </a>
          </div>
        </div>

        <div className="heroBoard" aria-label="Cafe preview board">
          <div className="featureImage">
            <span>Fresh brew</span>
            <strong>Open daily 8AM-9PM</strong>
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
        </div>
      </section>

      <section className="section menuSection" id="menu">
        <div className="sectionHeader">
          <p className="eyebrow">Featured menu</p>
          <h2>Compact cards for the choices customers ask about first.</h2>
        </div>
        <div className="menuGrid">
          {menuItems.map((item) => (
            <article className="menuCard" key={item.name}>
              <div>
                <span>{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="story">
        <div>
          <p className="eyebrow">Brand story</p>
          <h2>Designed to make a small business feel established.</h2>
        </div>
        <div className="storyPanel">
          <p>
            Harbor Lane is a fictional cafe concept for this demo. The layout gives clients a
            realistic preview of a business site: confident messaging, useful details, local
            personality, and clear next actions.
          </p>
          <div className="storyTiles">
            <span>Mobile-first</span>
            <span>Google-ready</span>
            <span>Fast handoff</span>
          </div>
        </div>
      </section>

      <section className="section gallery" aria-label="Cafe experience highlights">
        <article>
          <span>Quiet mornings</span>
          <h3>Visual blocks can replace heavy photo galleries for starter sites.</h3>
        </article>
        <article>
          <span>Weekend brunch</span>
          <h3>Sections guide visitors toward menu, location, and contact.</h3>
        </article>
        <article>
          <span>Local regulars</span>
          <h3>Trust-building copy helps customers decide faster.</h3>
        </article>
      </section>

      <section className="section reviews">
        <div className="sectionHeader">
          <p className="eyebrow">Guest confidence</p>
          <h2>Simple social proof without pretending to be a full review platform.</h2>
        </div>
        <div className="reviewGrid">
          {reviews.map((review) => (
            <blockquote key={review}>{review}</blockquote>
          ))}
        </div>
      </section>

      <section className="section visit" id="visit">
        <div>
          <p className="eyebrow">Visit us</p>
          <h2>San Fernando, Pampanga</h2>
          <p>Monday-Sunday, 8:00 AM-9:00 PM</p>
        </div>
        <div className="mapCard">
          <span>Map preview</span>
          <strong>Contact, hours, and directions can sit here.</strong>
          <a href="mailto:hello@pixelpilot.ph?subject=Business%20Website%20Demo">Request a similar website</a>
        </div>
      </section>

      <section className="section package" id="package">
        <div>
          <p className="eyebrow">PixelPilot package</p>
          <h2>Business website from ₱18,000.</h2>
        </div>
        <ul>
          <li>4-6 essential pages or sections</li>
          <li>Contact form, map, analytics, and local SEO basics</li>
          <li>Practical launch timeline of around 2-3 weeks</li>
          <li>Built to feel premium without custom systems or dashboards</li>
        </ul>
      </section>
    </main>
  );
}
