"use client";

import Link from "next/link";
import Image from "next/image";
import CTASection from "../common/CTASection";
import CookiePreferences from "../common/CookiePreferences";

export default function Footer() {
  return (
    <footer className="footer cta-seg">
      <CTASection />
      <div className="container">
        <hr />
      </div>
      <div className="container-fluid row mw-100">
        <div className="col-3 offset-md-1 text-center text-md-start">
          <Link href="/" className="w-100 text-center h-50">
            <Image
              className="footer-logo"
              src="https://assets-global.website-files.com/65541d6617fb12568eb71dd9/655536f254f9d398580b1a7c_Amardent-01.svg"
              alt="Amardent Logo"
              width={200}
              height={50}
            />
          </Link>
        </div>
        <div className="col-md-3 offset-md-1 text-center text-md-start mt-4 mb-4">
          <div>Need support or have a question?</div>
          <div>
            <Link
              href="mailto:info@amardent.com"
              className="text-decoration-none"
            >
              info@amardent.com
            </Link>
          </div>
        </div>
        <div className="col-md-3 offset-md-1 text-center text-md-start mt-3">
          <div>
            <Link
              href="/legal/privacy"
              className="link-light text-decoration-none"
            >
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link
              href="/legal/terms"
              className="link-light text-decoration-none"
            >
              Terms of Service
            </Link>
          </div>
          <div>
            <Link
              href="/legal/disclaimer"
              className="link-light text-decoration-none"
            >
              Disclaimers
            </Link>
          </div>
          <div>
            <Link
              href="/legal/returns"
              className="link-light text-decoration-none"
            >
              Return Policy
            </Link>
          </div>
          <div>
            <Link
              href="/legal/cookies"
              className="link-light text-decoration-none"
            >
              Cookie Policy
            </Link>
          </div>
          <div>
            <CookiePreferences />
          </div>
        </div>
      </div>
    </footer>
  );
}
