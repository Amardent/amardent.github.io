"use client";

import Link from "next/link";
import Image from "next/image";
import CTASection from "../common/CTASection";
import CookiePreferences from "../common/CookiePreferences";

export default function Footer() {
  return (
    <footer>
      <CTASection />
      <div className="d-foot">
        <Link href="/" className="d-logo small">
          <Image
            src="/assets/images/logomark.svg"
            alt=""
            width={20}
            height={26}
            className="d-logo-mark"
          />
          <span>amardent</span>
        </Link>
        <div className="d-foot-mail">
          <div>Need support or have a question?</div>
          <Link href="mailto:info@amardent.com">info@amardent.com</Link>
        </div>
        <nav className="d-foot-links">
          <Link href="/legal/privacy">Privacy Policy</Link>
          <Link href="/legal/terms">Terms of Service</Link>
          <Link href="/legal/disclaimer">Disclaimers</Link>
          <Link href="/legal/returns">Return Policy</Link>
          <Link href="/legal/cookies">Cookie Policy</Link>
          <CookiePreferences />
        </nav>
        <div className="d-foot-copy">© 2026 Amardent</div>
      </div>
    </footer>
  );
}
