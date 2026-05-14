"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { BUSINESS } from "../_lib/business";
import { OpenClosedBadge } from "./OpenClosedBadge";

const NAV = [
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit", label: "Visit" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={clsx("nav", scrolled && "nav-scrolled")}>
        <Link className="brand" href="/" aria-label={`${BUSINESS.name} home`}>
          <span className="brandMark">P</span>
          <span>{BUSINESS.shortName}</span>
        </Link>

        <nav aria-label="Primary navigation" className="nav-desktop">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(pathname === item.href && "nav-link-active")}
            >
              {item.label}
            </Link>
          ))}
          <OpenClosedBadge compact />
          <Link className="navCta" href="/book">
            Book a table
          </Link>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {open && (
        <div className="drawer-backdrop" onClick={() => setOpen(false)} aria-hidden />
      )}
      <aside className={clsx("drawer", open && "drawer-open")} aria-hidden={!open}>
        <div className="drawer-head">
          <span className="brand">
            <span className="brandMark">P</span>
            <span>{BUSINESS.shortName}</span>
          </span>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
            ×
          </button>
        </div>
        <OpenClosedBadge />
        <nav aria-label="Mobile navigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(pathname === item.href && "nav-link-active")}
            >
              {item.label}
            </Link>
          ))}
          <Link className="navCta" href="/book">
            Book a table
          </Link>
        </nav>
      </aside>
    </>
  );
}
