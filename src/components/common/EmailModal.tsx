"use client";

import { useState, useEffect, useRef } from "react";
import { handleEmailSubscription } from "@/utils/formHandling";

declare global {
  interface Window {
    bootstrap: {
      Modal: {
        // Define minimal interface for Bootstrap Modal
        new (element: Element | null, options?: Record<string, unknown>): Modal;
        getOrCreateInstance(
          element: Element | null,
          options?: Record<string, unknown>
        ): Modal;
        // Add other methods if needed
      };
    };
  }
}

// Minimal interface for the Bootstrap Modal instance
interface Modal {
  show(): void;
  hide(): void;
  dispose(): void;
  // Add other methods if needed
}

interface EmailModalProps {
  id: string; // Add id prop for targeting
  onClose: () => void;
}

export default function EmailModal({ id, onClose }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    // Modal should only mount when isOpen is true, but check bootstrap just in case
    if (!modalElement || typeof window.bootstrap === "undefined") return;

    // Get or initialize Bootstrap Modal instance
    const bsModal = window.bootstrap.Modal.getOrCreateInstance(modalElement);

    // Ensure the element is mounted in the DOM before showing
    if (document.contains(modalElement)) {
      bsModal.show();
    }

    // Event listener for when modal is fully hidden by Bootstrap
    const handleHidden = () => {
      onClose(); // Directly call onClose when Bootstrap hides it
    };

    modalElement.addEventListener("hidden.bs.modal", handleHidden);

    // Cleanup function
    return () => {
      // First remove the event listener
      modalElement.removeEventListener("hidden.bs.modal", handleHidden);
      // Important: Dispose the modal instance when the component unmounts
      // to prevent memory leaks and issues if it re-mounts later.
      bsModal.dispose();
    };
    // Only depend on id and onClose. isOpen is implicitly true when mounting.
  }, [id, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse(null);

    const result = await handleEmailSubscription({ Email: email });
    setResponse(result);

    if (result.success) {
      setEmail("");
      // Don't call onClose here directly after timeout.
      // Let the user close it via dismiss button/backdrop/esc,
      // or potentially trigger hide programmatically if needed.
      // The 'hidden.bs.modal' listener will call onClose.
      // For now, we just show success message.
      // setTimeout(() => {
      //   onClose();
      // }, 1500);
    }
  };

  // Component is only rendered when isOpen is true
  return (
    <div
      className="modal fade"
      id={id} // Use the id prop
      ref={modalRef}
      tabIndex={-1}
      aria-labelledby={`${id}-label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`${id}-label`}>
              Keep up with Amardent
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal" // Use Bootstrap's dismiss attribute
              aria-label="Close"
              disabled={isSubmitting} // Keep disabled state binding
            />
          </div>
          <div className="modal-body">
            Add your email to get updates and information from Amardent.
            <form onSubmit={handleSubmit}>
              <div className="mb-1 mt-2">
                <div className="col-md-6 mb-3">
                  <label htmlFor={`${id}-email`} className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id={`${id}-email`}
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="col-md-6">
                  <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Subscribing..." : "Submit"}
                  </button>
                </div>
              </div>
              {response && (
                <div
                  className={`alert ${
                    response.success ? "alert-success" : "alert-danger"
                  }`}
                >
                  {response.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
