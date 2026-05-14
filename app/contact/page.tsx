import type { Metadata } from "next";
import { ContactForm } from "../_components/ContactForm";
import { MapEmbed } from "../_components/MapEmbed";
import { BUSINESS } from "../_lib/business";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${BUSINESS.name} for events, press, or general questions.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="page-head">
          <p className="eyebrow">Contact</p>
          <h1>Get in touch.</h1>
          <p className="lede">
            For private events, catering, or press, drop a note. For bookings,{" "}
            <a href="/book">use the reservation form</a> instead.
          </p>
        </div>
      </section>

      <section className="section contact-grid">
        <ContactForm />
        <aside>
          <p className="eyebrow">Direct lines</p>
          <ul className="contact-lines">
            <li>
              <span>Phone</span>
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}>{BUSINESS.phone}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </li>
            <li>
              <span>Instagram</span>
              <a href={BUSINESS.social.instagram} target="_blank" rel="noreferrer">
                @pixelpilot.ph
              </a>
            </li>
          </ul>
          <div className="contact-map">
            <MapEmbed height={260} />
          </div>
        </aside>
      </section>
    </>
  );
}
