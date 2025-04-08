"use client";

import { useState, useEffect, useRef } from "react";
import { handleEmailSubscription } from "@/utils/formHandling";
import { setCookie } from "@/utils/cookieUtils";

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
  isOpen: boolean; // Add isOpen prop to control visibility
}

export default function EmailModal({ id, onClose, isOpen }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const bsModalRef = useRef<Modal | null>(null);
  const COOKIE_NAME = "email_modal_shown";

  // Initialize the modal
  useEffect(() => {
    const modalElement = modalRef.current;

    if (!modalElement) return;

    // Initialize Bootstrap Modal
    const bsModal = window.bootstrap.Modal.getOrCreateInstance(modalElement);
    bsModalRef.current = bsModal;

    // Add event listener for when modal is hidden
    const handleHidden = () => {
      onClose();
    };

    modalElement.addEventListener("hidden.bs.modal", handleHidden);

    // Cleanup function
    return () => {
      modalElement.removeEventListener("hidden.bs.modal", handleHidden);

      if (bsModalRef.current) {
        bsModalRef.current.dispose();
        bsModalRef.current = null;
      }
    };
  }, [id, onClose]);

  // Control modal visibility based on isOpen prop
  useEffect(() => {
    if (!bsModalRef.current) return;

    if (isOpen) {
      bsModalRef.current.show();
    } else {
      bsModalRef.current.hide();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse(null);

    const result = await handleEmailSubscription({ Email: email });
    setResponse(result);
    setIsSubmitting(false);

    if (result.success) {
      setEmail("");
      // Set the cookie to remember that the user has subscribed
      setCookie(COOKIE_NAME, "true", 365);
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  // Always render the modal in the DOM
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
                    className={`btn ${
                      response && response.success
                        ? "btn-success"
                        : "btn-primary"
                    } mb-3`}
                    disabled={isSubmitting || response?.success}
                  >
                    {isSubmitting
                      ? "Subscribing..."
                      : response && response.success
                      ? "Subscribed"
                      : "Submit"}
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
