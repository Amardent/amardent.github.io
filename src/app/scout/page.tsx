"use client";

import Image from "next/image";
import Link from "next/link";

export default function Scout() {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid segment-small row mb-3 mt-5 pt-2">
        <div className="order-md-last col-md-4 col-10 offset-1 offset-md-0 d-flex align-items-center d-inline pt-md-3">
          <Image
            src="/assets/images/Device and app.png"
            alt="Scout Device and App"
            width={600}
            height={400}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-10 offset-1 text-center h-auto d-md-flex justify-content-center align-items-center d-inline offset-md-1">
          <div>
            <p className="display-3">See your teeth in a new light</p>
            <div className="text-body-secondary text-md-center lead">
              Scout takes the mystery out of dental health.
              <br />
              Track your teeth from the comfort of your home.
            </div>
            <div>
              <Link
                className="mt-3 text-center h4 btn btn-primary btn-lg mt-3 rounded-pill"
                href="https://buy.stripe.com/5kA7vvbjNcQj26A145"
                target="_blank"
              >
                Pre-order yours today for $50
              </Link>
              <div className="small">
                Shipments for orders placed before June 1st will begin in Summer
                of 2025.
              </div>
              <div className="text-body-secondary">
                <small>
                  <small>
                    <small>
                      By purchasing Scout, you agree to the{" "}
                      <Link href="/legal/terms" className="text-body-secondary">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/legal/privacy"
                        className="text-body-secondary"
                      >
                        Privacy Policy
                      </Link>
                    </small>
                  </small>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container-fluid text-center how-to pb-2 mb-5 rounded-top rounded-bottom mt-2">
        <div className="container">
          <div className="display-3">30 Seconds, Once a Week</div>
          <div className="h4 text-body-secondary">Is all Scout needs</div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <Image
                  src="https://assets-global.website-files.com/65541d6617fb12568eb71dd9/65694359f25e72003311dadd_connection_image.jpeg"
                  alt="Attach Scout to your Phone"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body rounded">
                  <h5 className="card-title">1. Attach Scout to your Phone</h5>
                  <p className="card-text">
                    Wrap the elastic band around your phone, plug in the cable,
                    and you&apos;re ready to go.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <Image
                  src="https://assets-global.website-files.com/65541d6617fb12568eb71dd9/656dd95b64af6d3f9cd54de3_design%203.0.png"
                  alt="Scan your mouth"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body rounded">
                  <h5 className="card-title">2. Scan your mouth</h5>
                  <p className="card-text">
                    Bite down on your scout and follow the prompts in the app.
                    Scout will do all the heavy lifting of measuring your
                    biometrics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 rounded">
                <Image
                  src="https://assets-global.website-files.com/65541d6617fb12568eb71dd9/656a9308013607f025585189_Screenshot%202023-12-01%20at%202.17.55%E2%80%AFPM.png"
                  alt="Get your results"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <div className="card-body rounded">
                  <h5 className="card-title">3. Get your results</h5>
                  <p className="card-text">
                    The app will give you personalized insights on specific
                    actions that will help you improve and maintain your health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container text-center">
        <div className="h3">Have Questions? We have answers.</div>
        <div
          className="accordion accordion-flush text-start"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseShipping"
                aria-expanded="false"
                aria-controls="flush-collapseShipping"
              >
                When will Scout start shipping?
              </button>
            </h2>
            <div
              id="flush-collapseShipping"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Scout will be shipping starting in Summer of 2025. It is
                currently undergoing rigorous testing and validation to make
                sure that your Scout is giving you the best information
                possible.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Is Scout a medical device?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                No, Scout is a wellness device. Like a fitness tracker, Scout is
                intended to help you stay healthy, not diagnose or aid in the
                diagnosis of any illness or be used in a clinical setting.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Will Scout require a subscription?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                The base tier of Scout will not require a subscription. Just
                download our app, plug in the device, and you&apos;re ready to
                go!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Can Scout be used by more than one person?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Scout is recommended for one person at a time. Like a
                toothbrush, our device goes in your mouth, so unless you&apos;re
                able to clean it thoroughly, we&apos;d recommend you keep it to
                yourself.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Is Scout one size fits all?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                While Scout is meant to fit as many adults as possible, some
                mouths may not work as well with it as we&apos;d like. If you
                find your device isn&apos;t fitting properly, reach out to
                info@amardent.com and we&apos;ll find a solution!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                What happens to my scan data?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Those scans are yours and yours alone. We&apos;ll never sell
                them, share them, or train on them.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                Can I share my scans with my dentist?
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                While Scout isn&apos;t a medical device, it sometimes feels
                right to share scans or scores with a dentist. We&apos;re
                actively working to make it part of the app! In the meantime, if
                this is something you&apos;d like to do, reach out to
                info@amardent.com and let us know.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
