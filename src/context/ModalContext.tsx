"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import EmailModal from "@/components/common/EmailModal";
import { hasCookie, setCookie } from "@/utils/cookieUtils";

interface ModalContextType {
  showModal: () => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBootstrapLoaded, setIsBootstrapLoaded] = useState(false);
  const modalId = "emailSubscribeModal"; // Define a unique ID
  const COOKIE_NAME = "email_modal_shown";
  const bootstrapCheckInterval = useRef<NodeJS.Timeout | null>(null);
  const shouldShowModal = useRef(false);

  // Check if Bootstrap is loaded
  useEffect(() => {
    const checkBootstrap = () => {
      if (typeof window !== "undefined" && window.bootstrap) {
        setIsBootstrapLoaded(true);
        if (bootstrapCheckInterval.current) {
          clearInterval(bootstrapCheckInterval.current);
        }

        // If we should show the modal and Bootstrap is now loaded, show it
        if (shouldShowModal.current) {
          setIsOpen(true);
        }
      }
    };

    // Check immediately
    checkBootstrap();

    // If not loaded, check every 100ms
    if (!isBootstrapLoaded) {
      bootstrapCheckInterval.current = setInterval(checkBootstrap, 100);
    }

    return () => {
      if (bootstrapCheckInterval.current) {
        clearInterval(bootstrapCheckInterval.current);
      }
    };
  }, [isBootstrapLoaded]);

  // Check if the modal has been shown before
  useEffect(() => {
    console.log("ModalProvider useEffect running");
    // Only run on client-side
    if (typeof window === "undefined") {
      console.log("Window is undefined, skipping cookie check");
      return;
    }

    console.log("Checking for cookie:", COOKIE_NAME);
    const cookieExists = hasCookie(COOKIE_NAME);
    console.log("Cookie exists:", cookieExists);

    // Check if the cookie exists
    if (!cookieExists) {
      console.log("Cookie not found, should show modal");
      // Mark that we should show the modal
      shouldShowModal.current = true;

      // If Bootstrap is already loaded, show the modal immediately
      if (isBootstrapLoaded) {
        console.log("Bootstrap already loaded, showing modal immediately");
        setIsOpen(true);
      } else {
        console.log("Bootstrap not loaded yet, will show modal when it loads");
      }
    } else {
      console.log("Cookie found, not showing modal");
    }
  }, [isBootstrapLoaded]);

  // Simplified show/hide just manage state. Bootstrap handles body classes.
  const showModal = () => {
    console.log("showModal called");
    shouldShowModal.current = true;

    if (isBootstrapLoaded) {
      console.log("Bootstrap loaded, showing modal immediately");
      setIsOpen(true);
    } else {
      console.log("Bootstrap not loaded yet, will show modal when it loads");
    }
  };

  const hideModal = () => {
    console.log("hideModal called");
    setIsOpen(false);
    shouldShowModal.current = false;
    // Set a cookie to remember that the user has seen the modal
    // This cookie will expire in 30 days
    setCookie(COOKIE_NAME, "true", 30);
    console.log("Cookie set:", COOKIE_NAME);
  };

  console.log(
    "ModalProvider rendering, isOpen:",
    isOpen,
    "isBootstrapLoaded:",
    isBootstrapLoaded,
    "shouldShowModal:",
    shouldShowModal.current
  );

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {/* Always render the EmailModal in the DOM */}
      <EmailModal id={modalId} onClose={hideModal} isOpen={isOpen} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
