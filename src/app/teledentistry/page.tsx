"use client";

import Image from "next/image";
import TeledentistryForm from "@/components/teledentistry/TeledentistryForm";

export default function Teledentistry() {
  return (
    <>
      {/* Hero Section */}
      <div className="segment container pt-5">
        <div className="col-10 offset-1 mt-3 text-center">
          <div className="display-4">
            The next revolution in dentistry should be in your home
          </div>
          <Image
            className="img col-md-6"
            src="https://uploads-ssl.webflow.com/65541d6617fb12568eb71dd9/65543ce78d33fa9feeab6262_hero_new.svg"
            alt="Dental Revolution"
            width={600}
            height={400}
          />
        </div>
        <div className="col-10 offset-1">
          <p className="h2 text-center">
            Medicines already exist that can reverse cavities,
            <em>but only if caught early</em>.
          </p>
        </div>
        <div className="col-10 offset-1">
          <p className="pt-2 h5">
            Amardent is building the first teledentistry platform to catch these
            early cavities and help reverse them, all from your home.
          </p>
        </div>
        <div className="col-10 offset-1">
          <p className="pt-2 h5">
            Want to bring a less painful dental experience to your home? Fill
            out the form below to let us know where to grow next!
          </p>
        </div>
        <div className="col-10 offset-1">
          <TeledentistryForm id="teledentForm" />
        </div>
      </div>
    </>
  );
}
