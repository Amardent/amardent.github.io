"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import PhonePanel from "@/components/common/PhonePanel";
import Faq from "@/components/common/Faq";

const PREORDER_URL = "https://buy.stripe.com/5kA7vvbjNcQj26A145";

const STEPS = [
  {
    n: "01",
    t: "Open the app",
    d: "Connect your Scout and the app walks you through everything. You're ready to scan in seconds.",
    img: "/assets/images/step-connect.jpg",
    alt: "Setting up Scout in the app",
  },
  {
    n: "02",
    t: "Smile, start, and scan",
    d: "Bite down gently and follow along in the app. Scout captures everything — no aiming, no fuss.",
    img: "/assets/images/step-scan.png",
    alt: "Scanning your mouth with Scout",
  },
  {
    n: "03",
    t: "Get your OraScore",
    d: "In moments, see a clear picture of your oral wellness, plus simple, personal steps to keep it up.",
    img: "/assets/images/step-results.png",
    alt: "Your results in the app",
  },
];

const FAQ_ITEMS: [string, string][] = [
  [
    "Is Scout a medical device?",
    "No — Scout is a wellness device. Like a fitness tracker for your mouth, it's built to help you stay informed and build better habits, not to diagnose, treat, or replace a visit to your dentist.",
  ],
  [
    "Is Scout FDA approved?",
    "No. Scout is a consumer wellness device and is not FDA approved or cleared. It's made for everyday awareness of your smile — not to diagnose, treat, or prevent any condition.",
  ],
  [
    "Will Scout require a subscription?",
    "The base tier of Scout never requires a subscription. Download the app, plug in your device, and you're ready to go.",
  ],
  [
    "How often do I need to use it?",
    "Just 30 seconds, about once a week. Scout is designed to fit into your routine, not take it over.",
  ],
  [
    "What happens to my scan data?",
    "Your scans are yours and yours alone — we will never sell or share them.",
  ],
  [
    "Can I share my results with my dentist?",
    "Many people like to. We're actively building sharing into the app — in the meantime, reach out and we'll help you export your scores.",
  ],
];

export default function Home() {
  const heroR = useReveal();
  const stepsR = useReveal();
  const appR = useReveal();
  const isR = useReveal();
  const faqR = useReveal();

  return (
    <>
      {/* HERO */}
      <section className="d-hero" id="top" ref={heroR}>
        <div className="d-hero-grid">
          <div className="d-hero-copy reveal">
            <span className="d-eyebrow">Meet Scout</span>
            <h1 className="d-h1">
              Know your smile is cared for,
              <br />
              <em>between every visit.</em>
            </h1>
            <p className="d-lede">
              Scout keeps an eye on your oral wellness from home — so the six
              months between dentist appointments never feel like a guessing
              game again.
            </p>
            <div className="d-hero-cta">
              <a
                href={PREORDER_URL}
                className="d-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pre-order Scout — $50
              </a>
              <Link href="/scout" className="d-link-arrow">
                See how it works <span>→</span>
              </Link>
            </div>
            <div className="d-hero-rea">
              <span>No radiation</span>
              <i />
              <span>No pain</span>
              <i />
              <span>30 seconds a week</span>
            </div>
          </div>
          <div className="d-hero-art reveal">
            <div className="d-hero-glow" />
            <Image
              src="/assets/images/device-app.png"
              alt="The Scout device alongside the OraScore app"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="d-how" id="how" ref={stepsR}>
        <div className="d-wrap">
          <div className="d-section-head reveal">
            <span className="d-eyebrow center">How it works</span>
            <h2 className="d-h2">
              Thirty seconds.
              <br />
              Once a week.
            </h2>
            <p className="d-sub">That&apos;s all Scout asks of you.</p>
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

      {/* APP / ORASCORE */}
      <section className="d-app" id="app" ref={appR}>
        <div className="d-app-grid">
          <div className="d-app-copy reveal">
            <span className="d-eyebrow">The OraScore</span>
            <h2 className="d-h2 left">
              The most advanced way to measure your oral wellness.
            </h2>
            <p className="d-sub left">
              Safe fluorescence imaging reveals what a mirror can&apos;t — your
              gums, tooth mineralization, plaque and more. No radiation. No pain.
              No waiting.
            </p>
            <ul className="d-checks">
              <li>One clear OraScore, updated every scan</li>
              <li>Personalized, plain-language guidance</li>
              <li>A streak to keep the habit easy</li>
            </ul>
            <div className="d-scan-note">
              <div className="d-scan-img">
                <Image
                  src="/assets/images/tooth-scan.png"
                  alt="A tooth seen through Scout's fluorescence imaging"
                  width={84}
                  height={84}
                />
              </div>
              <p>
                What Scout sees — fluorescence imaging makes early changes
                visible long before they&apos;re a problem.
              </p>
            </div>
          </div>
          <div className="d-app-art reveal">
            <PhonePanel />
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="d-is" ref={isR}>
        <div className="d-wrap d-is-grid reveal">
          <div className="d-is-card">
            <h4>A wellness companion</h4>
            <p>
              Scout is a wellness device — like a fitness tracker for your mouth.
              It helps you stay informed and build better habits.
            </p>
          </div>
          <div className="d-is-card">
            <h4>Not a medical device</h4>
            <p>
              Scout doesn&apos;t diagnose, isn&apos;t a medical device, and is
              not FDA approved. It&apos;s the in-between awareness that keeps you
              confident until your next visit.
            </p>
          </div>
          <div className="d-is-card">
            <h4>Yours, and only yours</h4>
            <p>
              Your scans are yours — we never sell or share them, and the base
              Scout needs no subscription.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="d-faq" id="faq" ref={faqR}>
        <div className="d-faq-wrap reveal">
          <div className="d-faq-head">
            <span className="d-eyebrow">Questions?</span>
            <h2 className="d-h2 left">We have answers.</h2>
          </div>
          <Faq items={FAQ_ITEMS} defaultOpen={0} />
        </div>
      </section>
    </>
  );
}
