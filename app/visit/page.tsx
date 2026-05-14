import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "../_components/Reveal";
import { MapEmbed } from "../_components/MapEmbed";
import { HoursTable } from "../_components/HoursTable";
import { OpenClosedBadge } from "../_components/OpenClosedBadge";
import { BUSINESS } from "../_lib/business";

export const metadata: Metadata = {
  title: "Visit",
  description: `Address, hours, directions, and parking notes for ${BUSINESS.name}.`,
};

export default function VisitPage() {
  return (
    <>
      <section className="section">
        <div className="page-head">
          <p className="eyebrow">Visit us</p>
          <h1>Find us in San Fernando, Pampanga.</h1>
          <OpenClosedBadge />
        </div>
      </section>

      <section className="section">
        <Reveal>
          <MapEmbed />
        </Reveal>
      </section>

      <section className="section visit-grid">
        <Reveal>
          <div>
            <p className="eyebrow">Address</p>
            <h2>{BUSINESS.address.street}</h2>
            <p>
              {BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postal}
            </p>
            <p>
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}>{BUSINESS.phone}</a>
              <br />
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </p>
            <div className="actions">
              <Link className="button primary" href="/book">
                Book a table
              </Link>
              <a
                className="button secondary"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  `${BUSINESS.address.street}, ${BUSINESS.address.city}`,
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <p className="eyebrow">Hours</p>
            <h2>Open most days.</h2>
            <HoursTable />
            <p className="muted-note">Holiday hours posted on our Instagram a week ahead.</p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Getting here</p>
              <h2>Parking, transit, and the small details.</h2>
            </div>
          </div>
        </Reveal>
        <div className="info-grid">
          <Reveal>
            <article className="info-card">
              <strong>Parking</strong>
              <p>Street parking on Lazatin Blvd and the lot behind the building (₱30/hour).</p>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="info-card">
              <strong>Jeepney</strong>
              <p>Any San Jose-bound jeep from the city plaza drops you a block away.</p>
            </article>
          </Reveal>
          <Reveal delay={0.12}>
            <article className="info-card">
              <strong>Grab / Maxim</strong>
              <p>Set the pin to &quot;Harbor Lane — Lazatin&quot; for accurate drop-off.</p>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
