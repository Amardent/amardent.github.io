"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasReachedUserExperience, setHasReachedUserExperience] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && !hasReachedUserExperience) {
        const videoElement = videoRef.current;
        const rect = videoElement.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isInView) {
          setHasReachedUserExperience(true);
          videoElement.play();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasReachedUserExperience]);

  return (
    <div className="w-100">
      {/* Hero Section */}
      <section className="segment d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 mb-4">
                An end to six months of worry between dentist appointments
              </h1>
              <p className="h5 text-body-secondary mb-4">
                Scout monitors your oral health so you can have confidence in
                each and every smile
              </p>
              <Link
                href="/scout"
                className="btn cta-button col-md-12 btn-lg rounded-pill mt-2 btn-primary border border-0"
              >
                See how Scout can work for you
              </Link>
            </div>
            <div className="col-md-6">
              <Image
                src="/assets/images/angled_granite.png"
                alt="Scout Device"
                width={600}
                height={400}
                className="img-fluid"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="second-seg rounded-top rounded-bottom">
        <div className="container pb-3">
          <div className="row pt-5">
            <div className="col-lg-5 offset-lg-1 order-last mb-5">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="prod-video"
              >
                <source
                  src="/assets/images/scout_labels.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="col-lg-4 offset-lg-1 order-first d-flex align-items-center justify-content-center">
              <div>
                <div className="h1">
                  The most advanced way to measure your oral wellness
                </div>
                <div className="mt-3 mb-5">
                  No radiation, no pain, and no waiting. The safest and most
                  advanced imaging on the market.
                </div>
                <div>
                  Get information about your gum health, tooth mineralization,
                  and more, all from the comfort of your own home
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="offers-seg rounded-top pb-3 mb-3">
        <div className="container pt-5 mb-5">
          <div className="row mb-5">
            <div className="col-md-4 offset-md-1 order-md-last text-center text-md-end">
              <Image
                src="/assets/images/tooth.png"
                alt="Microbes and Minerals"
                width={400}
                height={300}
                className="disp-img"
              />
            </div>
            <div className="col-md-3 offset-md-3 col-md-push-6 order-md-first d-flex align-items-center">
              <div>
                <div className="text-center fs-3">
                  Microbes, Minerals, and More
                </div>
                <div className="text-center text-md-left">
                  Scout images and tracks the biometrics that drive your oral
                  health
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 offset-md-1 order-md-last text-center text-md-end">
              <Image
                src="https://uploads-ssl.webflow.com/65541d6617fb12568eb71dd9/656a9308013607f025585189_Screenshot%202023-12-01%20at%202.17.55%E2%80%AFPM.png"
                alt="Fast Feedback"
                width={400}
                height={300}
                className="disp-img"
              />
            </div>
            <div className="col-md-3 offset-md-1 col-md-push-6 order-md-first d-flex align-items-center">
              <div>
                <div className="text-center fs-3">
                  Fast, Meaningful Feedback
                </div>
                <div className="text-center text-md-left">
                  Scout&apos;s companion app gives you an instant oral wellness
                  score, as well as personalized ways to improve it.
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 offset-md-1 order-md-last text-center text-md-end">
              <Image
                src="https://uploads-ssl.webflow.com/65541d6617fb12568eb71dd9/65694359f25e72003311dadd_connection_image.jpeg"
                alt="Easy to Use"
                width={400}
                height={300}
                className="disp-img"
              />
            </div>
            <div className="col-md-3 offset-md-3 col-md-push-6 order-md-first d-flex align-items-center">
              <div>
                <div className="text-center fs-3">
                  In an easy to use package
                </div>
                <div className="text-center text-md-left">
                  Just wrap the strap around your phone, plug in the USB cable,
                  and Scout will do the rest for you.
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 offset-md-1 order-md-last center-block text-center text-md-end">
              <Image
                src="https://uploads-ssl.webflow.com/65541d6617fb12568eb71dd9/656dd8441bab66563b49bae3_design%203.0%20(1).png"
                alt="Easy Design"
                width={400}
                height={300}
                className="disp-img mx-auto center-block"
              />
            </div>
            <div className="col-md-3 offset-md-2 col-md-push-6 order-md-first d-flex align-items-center">
              <div>
                <div className="text-center fs-3">Smile, Start, and Scan</div>
                <div className="text-md-start text-center">
                  An easy, intuitive design meant for everyone, children and
                  adults alike
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
