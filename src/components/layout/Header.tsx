"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  {
    href: "https://medium.com/amardents-newsletter/newsletters/amardent-updates",
    label: "Blog",
    external: true,
  },
  { href: "/teledentistry", label: "Teledentistry" },
  { href: "/team", label: "Our Team" },
  { href: "/scout", label: "Scout" },
];

const PREORDER_URL = "https://buy.stripe.com/5kA7vvbjNcQj26A145";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="d-nav">
      <div className="d-nav-inner">
        <Link className="d-logo" href="/" onClick={close}>
          <Image
            src="/assets/images/logomark.svg"
            alt=""
            width={293}
            height={374}
            className="d-logo-mark"
            priority
          />
          <span>amardent</span>
        </Link>

        <button
          className="d-nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <nav className={"d-nav-links" + (open ? " open" : "")}>
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} onClick={close}>
                {link.label}
              </Link>
            )
          )}
          <a
            className="d-btn d-btn-sm d-nav-cta"
            href={PREORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Pre-order Scout
          </a>
        </nav>
      </div>
    </header>
  );
}
