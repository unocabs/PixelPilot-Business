import type { Metadata } from "next";
import { Reveal } from "../_components/Reveal";

export const metadata: Metadata = {
  title: "Our Story",
  description: "How Harbor Lane Cafe started, what we serve, and the values behind the room.",
};

const VALUES = [
  {
    title: "Local first",
    body: "Beans roasted in Pampanga, produce from nearby growers, dairy from regional creameries.",
  },
  {
    title: "Make it easy",
    body: "Clear menu, quick service, no-fuss space. Premium without theatrics.",
  },
  {
    title: "Built to last",
    body: "Honest pricing, fair staff hours, and a slow-and-steady plan for the next decade.",
  },
];

export default function StoryPage() {
  return (
    <>
      <section className="section">
        <div className="page-head">
          <p className="eyebrow">Our story</p>
          <h1>Harbor Lane is a small idea, built with care.</h1>
          <p className="lede">
            Harbor Lane is a fictional cafe used by PixelPilot to demonstrate what a Filipino SMB
            site can look like when it gets the same attention bigger brands get. The story below
            is sample copy you can adapt for a real cafe, clinic, salon, or service brand.
          </p>
        </div>
      </section>

      <section className="section split">
        <Reveal>
          <div>
            <p className="eyebrow">Where it started</p>
            <h2>A side-street with a slow morning.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="storyPanel">
            <p>
              Harbor Lane opened in 2022 on a side street in San Fernando, Pampanga. The original
              idea was simple: a quiet bar, a short menu, beans from local farms, and seating that
              feels like a friend&apos;s living room.
            </p>
            <p>
              We grew the menu by listening to regulars. The Sea Salt Latte was a Tuesday
              experiment. The Ube Toast Stack came from a brunch we threw for a friend. The
              Calamansi Cold Brew was a hot-day rescue. Every popular item has a small story.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">What we believe</p>
              <h2>Three things we don&apos;t compromise on.</h2>
            </div>
          </div>
        </Reveal>
        <div className="value-grid">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <article className="value-card">
                <strong>{v.title}</strong>
                <p>{v.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section split">
        <Reveal>
          <div>
            <p className="eyebrow">The team</p>
            <h2>Small, steady, and around for the long haul.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="team-grid">
            {[
              { name: "Mara", role: "Owner & barista" },
              { name: "Aldrin", role: "Kitchen lead" },
              { name: "Joy", role: "Pastry" },
              { name: "RJ", role: "Floor" },
            ].map((m) => (
              <div key={m.name} className="team-card">
                <span className="team-avatar" aria-hidden>
                  {m.name[0]}
                </span>
                <strong>{m.name}</strong>
                <span>{m.role}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
