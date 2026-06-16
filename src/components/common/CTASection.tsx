"use client";

import Link from "next/link";
import { useModal } from "@/context/ModalContext";

const PREORDER_URL = "https://buy.stripe.com/5kA7vvbjNcQj26A145";

export default function CTASection() {
  const { showModal } = useModal();

  return (
    <section className="d-cta" id="cta">
      <div className="d-cta-inner">
        <h2 className="d-h2">
          Ready to take your oral health
          <br />
          into your own hands?
        </h2>
        <a
          href={PREORDER_URL}
          className="d-btn d-btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pre-order Scout — $50
        </a>
        <p className="d-cta-fine">
          Shipments for preorders will begin in Summer of 2025. By purchasing
          Scout, you agree to the{" "}
          <Link href="/legal/terms">Terms of Service</Link> and{" "}
          <Link href="/legal/privacy">Privacy Policy</Link>.
        </p>
        <div className="d-cta-soft">
          <span>Not quite ready yet? No worries.</span>
          <button className="d-link-arrow" onClick={showModal}>
            Stay in the loop <span>→</span>
          </button>
          <p className="priv">
            We care about your data —{" "}
            <Link href="/legal/privacy">see our privacy policy</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
