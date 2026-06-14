"use client";

import Image from "next/image";
import TeledentistryForm from "@/components/teledentistry/TeledentistryForm";
import { useReveal } from "@/hooks/useReveal";

export default function Teledentistry() {
  const ref = useReveal();

  return (
    <section className="page page-narrow" ref={ref}>
      <div className="page-head reveal">
        <span className="d-eyebrow center">Teledentistry</span>
        <h1 className="d-h1">
          The next revolution in dentistry should be in your home
        </h1>
      </div>

      <div className="reveal" style={{ maxWidth: 560, margin: "0 auto 40px" }}>
        <Image
          src="/assets/images/teledentistry-hero.svg"
          alt="Dental Revolution"
          width={600}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="reveal">
        <p className="prose-note">
          Medicines already exist that can reverse cavities,{" "}
          <em>but only if caught early</em>.
        </p>
        <p className="prose-note">
          Amardent is building the first teledentistry platform to catch these
          early cavities and help reverse them, all from your home.
        </p>
        <p className="prose-note">
          Want to bring a less painful dental experience to your home? Fill out
          the form below to let us know where to grow next!
        </p>
      </div>

      <div className="card-soft reveal" style={{ marginTop: 24 }}>
        <TeledentistryForm id="teledentForm" />
      </div>
    </section>
  );
}
