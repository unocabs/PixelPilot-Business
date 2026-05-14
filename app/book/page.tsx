import type { Metadata } from "next";
import { BookingForm } from "../_components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Table",
  description: "Reserve a table at Harbor Lane Cafe. Validated form with confirmation state.",
};

export default function BookPage() {
  return (
    <section className="section book-layout">
      <div>
        <p className="eyebrow">Reserve</p>
        <h1>Book a table.</h1>
        <p className="lede">
          Tell us when and how many — we&apos;ll get back within the day. (Demo: nothing is sent.)
        </p>
        <BookingForm />
      </div>
      <aside className="book-aside">
        <p className="eyebrow">What to expect</p>
        <ul>
          <li>
            <strong>Confirmation</strong>
            <span>A reply within 24 hours.</span>
          </li>
          <li>
            <strong>Hold time</strong>
            <span>Tables held for 15 minutes past booking time.</span>
          </li>
          <li>
            <strong>Walk-ins</strong>
            <span>Always welcome. Reservations help on weekends.</span>
          </li>
          <li>
            <strong>Big groups</strong>
            <span>For 10+ guests, message us first.</span>
          </li>
        </ul>
      </aside>
    </section>
  );
}
