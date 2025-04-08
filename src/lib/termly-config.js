/**
 * Termly configurations
 *
 * This file can be used to set up global configurations for Termly,
 * such as event listeners or callbacks for consent changes.
 */

// If needed, you can set up event listeners for Termly consent changes
if (typeof window !== "undefined") {
  window.addEventListener("termlyConsent", function (event) {
    // Example: Log consent changes to console
    console.log("Termly consent updated:", event.detail);

    // Example: You could reload certain scripts based on consent
    // if (event.detail.some_category) {
    //   // Load scripts for that category
    // }
  });
}
