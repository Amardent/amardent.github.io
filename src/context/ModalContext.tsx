"use client";

import { createContext, useContext, useState, useEffect } from "react";
import EmailModal from "@/components/common/EmailModal";
import { hasCookie, setCookie } from "@/utils/cookieUtils";

interface ModalContextType {
  showModal: () => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalId = "emailSubscribeModal";
  const COOKIE_NAME = "email_modal_shown";

  // Auto-open on first visit (when the cookie hasn't been set yet).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hasCookie(COOKIE_NAME)) {
      setIsOpen(true);
    }
  }, []);

  const showModal = () => setIsOpen(true);

  const hideModal = () => {
    setIsOpen(false);
    // Remember the modal was seen for 30 days.
    setCookie(COOKIE_NAME, "true", 30);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
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
