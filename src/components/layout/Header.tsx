"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav
      className="navbar fixed-top py-0 navbar-expand-lg rounded-bottom text-center"
      data-bs-theme="dark"
    >
      <div className="container px-5">
        <Link className="navbar-brand" href="/">
          <Image
            src="https://assets-global.website-files.com/65541d6617fb12568eb71dd9/655536f254f9d398580b1a7c_Amardent-01.svg"
            alt="Amardent Logo"
            width={200}
            height={40}
            className="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "#ffffff" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse text-center justify-content-center align-items-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto align-items-center">
            <li className="nav-item">
              <Link
                className="nav-link"
                href="https://medium.com/amardents-newsletter/newsletters/amardent-updates"
                target="_blank"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/teledentistry">
                Teledentistry
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/team">
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/scout">
                Scout
              </Link>
            </li>
          </ul>
          <Link
            className="btn btn-primary ml-auto mb-2 mb-lg-0"
            href="https://buy.stripe.com/5kA7vvbjNcQj26A145"
            target="_blank"
          >
            Pre-Order Scout Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
