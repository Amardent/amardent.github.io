"use client";

import Script from "next/script";

export default function TermlyCMP() {
  return (
    <div id="termly-cmp-container">
      <Script
        id="termly-cmp"
        src="https://app.termly.io/embed.min.js"
        data-website-uuid="a6babb25-0a20-49de-89a8-f6bbfd21ec87"
        strategy="beforeInteractive"
      />
    </div>
  );
}
