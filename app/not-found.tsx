import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section page-head">
      <p className="eyebrow">404</p>
      <h1>That page doesn&apos;t exist.</h1>
      <p className="lede">Try one of these instead.</p>
      <div className="actions">
        <Link className="button primary" href="/">
          Home
        </Link>
        <Link className="button secondary" href="/menu">
          Menu
        </Link>
        <Link className="button secondary" href="/visit">
          Visit
        </Link>
      </div>
    </section>
  );
}
