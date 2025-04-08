"use client";

import { useState, useEffect } from "react";

// Add type declaration for Termly
declare global {
  interface Window {
    termly?: {
      displayPreferences: () => void;
      // Add other Termly methods as needed
    };
  }
}

export default function CookiePreferences() {
  const [isTermlyLoaded, setIsTermlyLoaded] = useState(false);

  useEffect(() => {
    // Check if Termly is loaded
    const checkTermlyLoaded = () => {
      if (typeof window !== "undefined" && window.termly) {
        setIsTermlyLoaded(true);
      } else {
        // If not loaded yet, check again after a short delay
        setTimeout(checkTermlyLoaded, 500);
      }
    };

    checkTermlyLoaded();
  }, []);

  // Only render the button if Termly is loaded
  if (!isTermlyLoaded) {
    return null;
  }

  return (
    <button
      className="termly-display-preferences link-light text-decoration-none bg-transparent border-0 p-0"
      aria-label="Cookie Preferences"
    >
      Cookie Settings
    </button>
  );
}
