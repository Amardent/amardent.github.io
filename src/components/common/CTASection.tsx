"use client";

import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function CTASection() {
  const { showModal } = useModal();

  return (
    <section className="cta-seg rounded-top pb-3">
      <div className="container">
        <div className="text-center mb-5 col-md-6 offset-md-3">
          <h1>Ready to take your oral health into your own hands?</h1>
          <Link
            href="https://buy.stripe.com/5kA7vvbjNcQj26A145"
            className="btn cta-button btn-lg col-12 mb-2 btn-primary"
            target="_blank"
          >
            <p className="h2">Get Scout Now</p>
          </Link>
          <div className="text-light">
            Shipments for preorders will begin in Summer of 2025.
          </div>
          <div className="text-light">
            <small>
              <small>
                <small>
                  By purchasing Scout, you agree to the{" "}
                  <Link
                    href="/legal/terms"
                    className="text-light text-decoration-none"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/legal/privacy"
                    className="text-light text-decoration-none"
                  >
                    Privacy Policy
                  </Link>
                </small>
              </small>
            </small>
          </div>
        </div>
        <div className="text-center col-md-6 offset-md-3">
          <h1>Not quite ready yet? No worries.</h1>
          <button className="btn cta-button btn-primary" onClick={showModal}>
            Stay in the loop
          </button>
          <p>
            <small>We care about your data</small>
            <br />
            <Link
              href="/legal/privacy"
              className="text-light text-decoration-none"
            >
              <small>See our privacy policy</small>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
