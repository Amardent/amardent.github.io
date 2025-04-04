"use client";

import Image from "next/image";

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
        <div>
          <p className="h2 text-center">
            Medicines already exist that can reverse cavities,
            <em>but only if caught early</em>.
          </p>
        </div>
        <div>
          <p className="pt-2 h5">
            Amardent is building the first teledentistry platform to catch these
            early cavities and help reverse them, all from your home.
          </p>
        </div>
        <div>
          <p className="pt-2 h5">
            Want to bring a less painful dental experience to your home? Fill
            out the form below to let us know where to grow next!
          </p>
        </div>
        <form id="teledentForm">
          <div className="mb-1 mt-2">
            <div className="col-md-6 mb-3">
              <label htmlFor="teledentEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="teledentEmail"
                placeholder="name@example.com"
                name="email"
              />
              <label htmlFor="teledentLocal" className="form-label mt-2">
                Where is Amardent growing next?
              </label>
              <input
                type="text"
                className="form-control"
                id="teledentLocal"
                placeholder="City, State, Country"
                name="locale"
              />
            </div>
            <div className="col-md-6">
              <button
                type="submit"
                className="btn btn-primary mb-3"
                id="teledentSubmit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
