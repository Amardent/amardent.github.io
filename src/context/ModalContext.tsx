"use client";

import { createContext, useContext, useState } from "react";
import EmailModal from "@/components/common/EmailModal";

interface ModalContextType {
  showModal: () => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalId = "emailSubscribeModal"; // Define a unique ID

  // Removed useEffect for initial showing - could be re-added if needed,
  // but will rely on Bootstrap JS being loaded.

  // Simplified show/hide just manage state. Bootstrap handles body classes.
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {/* Conditionally render the EmailModal based on isOpen state */}
      {isOpen && <EmailModal id={modalId} onClose={hideModal} />}
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
