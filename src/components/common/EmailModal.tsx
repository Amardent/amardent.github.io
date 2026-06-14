"use client";

import { useState, useEffect } from "react";
import { handleEmailSubscription } from "@/utils/formHandling";
import { setCookie } from "@/utils/cookieUtils";

interface EmailModalProps {
  id: string;
  onClose: () => void;
  isOpen: boolean;
}

export default function EmailModal({ id, onClose, isOpen }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const COOKIE_NAME = "email_modal_shown";

  // Close on Escape; lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isSubmitting) onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, isSubmitting, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse(null);

    const result = await handleEmailSubscription({ Email: email });
    setResponse(result);
    setIsSubmitting(false);

    if (result.success) {
      setEmail("");
      // Remember the user subscribed.
      setCookie(COOKIE_NAME, "true", 365);
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={() => {
        if (!isSubmitting) onClose();
      }}
    >
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-label`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h2 className="modal-title" id={`${id}-label`}>
            Keep up with Amardent
          </h2>
          <button
            type="button"
            className="modal-close"
            aria-label="Close"
            onClick={onClose}
            disabled={isSubmitting}
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          Add your email to get updates and information from Amardent.
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="field">
              <label htmlFor={`${id}-email`} className="label">
                Email address
              </label>
              <input
                type="email"
                className="input"
                id={`${id}-email`}
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              className="d-btn"
              disabled={isSubmitting || response?.success}
            >
              {isSubmitting
                ? "Subscribing…"
                : response && response.success
                ? "Subscribed"
                : "Submit"}
            </button>
            {response && (
              <div
                className={`alert ${
                  response.success ? "alert-ok" : "alert-err"
                }`}
              >
                {response.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
