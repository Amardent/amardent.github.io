"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
  // Function to close the navbar collapse when a link is clicked
  const closeNavbar = () => {
    // Get the navbar collapse element
    const navbarCollapse = document.getElementById("navbarSupportedContent");

    // Check if the navbar is expanded (open)
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      // Get the toggle button
      const toggleButton = document.querySelector(
        ".navbar-toggler"
      ) as HTMLButtonElement;

      // If the toggle button exists, click it to close the navbar
      if (toggleButton) {
        toggleButton.click();
      }
    }
  };

  // Add event listeners to all nav links and the logo
  useEffect(() => {
    // Get all nav links
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Get the logo link
    const logoLink = document.querySelector(".navbar-brand");

    // Get the pre-order button
    const preOrderButton = document.querySelector(".btn-primary");

    // Add click event listener to each nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeNavbar();
      });
    });

    // Add click event listener to the logo link
    if (logoLink) {
      logoLink.addEventListener("click", () => {
        closeNavbar();
      });
    }

    // Add click event listener to the pre-order button
    if (preOrderButton) {
      preOrderButton.addEventListener("click", () => {
        closeNavbar();
      });
    }

    // Clean up event listeners when component unmounts
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", closeNavbar);
      });

      if (logoLink) {
        logoLink.removeEventListener("click", closeNavbar);
      }

      if (preOrderButton) {
        preOrderButton.removeEventListener("click", closeNavbar);
      }
    };
  }, []);

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
                onClick={closeNavbar}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/teledentistry"
                onClick={closeNavbar}
              >
                Teledentistry
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/team" onClick={closeNavbar}>
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/scout" onClick={closeNavbar}>
                Scout
              </Link>
            </li>
          </ul>
          <Link
            className="btn btn-primary ml-auto mb-2 mb-lg-0"
            href="https://buy.stripe.com/5kA7vvbjNcQj26A145"
            target="_blank"
            onClick={closeNavbar}
          >
            Pre-Order Scout Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
