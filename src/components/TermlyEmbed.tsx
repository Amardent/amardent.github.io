"use client";

import { useEffect } from "react";

interface TermlyEmbedProps {
  dataId: string;
}

export default function TermlyEmbed({ dataId }: TermlyEmbedProps) {
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById("termly-jssdk")) return;

    // Create and append script
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.id = "termly-jssdk";
    document.body.appendChild(script);

    // Create and append the embed div
    const embedDiv = document.createElement("div");
    embedDiv.setAttribute("name", "termly-embed");
    embedDiv.setAttribute("data-id", dataId);
    embedDiv.className = "col-10";
    document.getElementById("termly-container")?.appendChild(embedDiv);

    return () => {
      // Cleanup
      const scriptElement = document.getElementById("termly-jssdk");
      if (scriptElement) {
        scriptElement.remove();
      }
      const embedElement = document.querySelector(`[data-id="${dataId}"]`);
      if (embedElement) {
        embedElement.remove();
      }
    };
  }, [dataId]);

  return <div id="termly-container" className="col-10" />;
}
