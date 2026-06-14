"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import Faq from "@/components/common/Faq";

const PREORDER_URL = "https://buy.stripe.com/5kA7vvbjNcQj26A145";

const STEPS = [
  {
    n: "01",
    t: "Attach Scout to your Phone",
    d: "Wrap the elastic band around your phone, plug in the cable, and you're ready to go.",
    img: "/assets/images/step-connect.jpg",
    alt: "Attach Scout to your phone",
  },
  {
    n: "02",
    t: "Scan your mouth",
    d: "Bite down on your scout and follow the prompts in the app. Scout will do all the heavy lifting of measuring your biometrics.",
    img: "/assets/images/step-scan.png",
    alt: "Scan your mouth",
  },
  {
    n: "03",
    t: "Get your results",
    d: "The app will give you personalized insights on specific actions that will help you improve and maintain your health.",
    img: "/assets/images/step-results.png",
    alt: "Get your results",
  },
];

const FAQ_ITEMS: [string, string][] = [
  [
    "When will Scout start shipping?",
    "Scout will be shipping starting in Summer of 2025. It is currently undergoing rigorous testing and validation to make sure that your Scout is giving you the best information possible.",
  ],
  [
    "Is Scout a medical device?",
    "No, Scout is a wellness device. Like a fitness tracker, Scout is intended to help you stay healthy, not diagnose or aid in the diagnosis of any illness or be used in a clinical setting.",
  ],
  [
    "Will Scout require a subscription?",
    "The base tier of Scout will not require a subscription. Just download our app, plug in the device, and you're ready to go!",
  ],
  [
    "Can Scout be used by more than one person?",
    "Scout is recommended for one person at a time. Like a toothbrush, our device goes in your mouth, so unless you're able to clean it thoroughly, we'd recommend you keep it to yourself.",
  ],
  [
    "Is Scout one size fits all?",
    "While Scout is meant to fit as many adults as possible, some mouths may not work as well with it as we'd like. If you find your device isn't fitting properly, reach out to info@amardent.com and we'll find a solution!",
  ],
  [
    "What happens to my scan data?",
    "Those scans are yours and yours alone. We'll never sell them, share them, or train on them.",
  ],
  [
    "Can I share my scans with my dentist?",
    "While Scout isn't a medical device, it sometimes feels right to share scans or scores with a dentist. We're actively working to make it part of the app! In the meantime, if this is something you'd like to do, reach out to info@amardent.com and let us know.",
  ],
];

export default function Scout() {
  const heroR = useReveal();
  const howR = useReveal();
  const faqR = useReveal();

  return (
    <>
      {/* HERO */}
      <section className="page" ref={heroR}>
        <div className="split">
          <div className="reveal">
            <span className="d-eyebrow">Scout</span>
            <h1 className="d-h1">
              See your teeth in a <em>new light.</em>
            </h1>
            <p className="d-lede">
              Scout takes the mystery out of dental health. Track your teeth from
              the comfort of your home.
            </p>
            <div className="d-hero-cta">
              <a
                href={PREORDER_URL}
                className="d-btn d-btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pre-order yours today for $50
              </a>
            </div>
            <p className="fine">
              Shipments for orders placed before June 1st will begin in Summer of
              2025.
              <br />
              By purchasing Scout, you agree to the{" "}
              <Link href="/legal/terms">Terms of Service</Link> and{" "}
              <Link href="/legal/privacy">Privacy Policy</Link>.
            </p>
          </div>
          <div className="d-hero-art reveal">
            <div className="d-hero-glow" />
            <Image
              src="/assets/images/device-app.png"
              alt="Scout Device and App"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="d-how" ref={howR}>
        <div className="d-wrap">
          <div className="d-section-head reveal">
            <span className="d-eyebrow center">How it works</span>
            <h2 className="d-h2">30 seconds, once a week</h2>
            <p className="d-sub">Is all Scout needs.</p>
          </div>
          <div className="d-steps">
            {STEPS.map((step, i) => (
              <div
                className="d-step reveal"
                style={{ transitionDelay: `${i * 90}ms` }}
                key={step.n}
              >
                <div className="d-step-media">
                  <Image
                    src={step.img}
                    alt={step.alt}
                    width={400}
                    height={300}
                  />
                </div>
                <div className="d-step-n">{step.n}</div>
                <h3 className="d-step-t">{step.t}</h3>
                <p className="d-step-d">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="d-faq" ref={faqR}>
        <div className="d-faq-wrap reveal">
          <div className="d-faq-head">
            <span className="d-eyebrow">Questions?</span>
            <h2 className="d-h2 left">We have answers.</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>
    </>
  );
}
