"use client";

import { useState } from "react";
import { handleTeledentistrySubmission } from "@/utils/formHandling";

interface TeledentistryFormProps {
  id: string;
}

export default function TeledentistryForm({ id }: TeledentistryFormProps) {
  const [email, setEmail] = useState("");
  const [locale, setLocale] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse(null);

    try {
      const result = await handleTeledentistrySubmission({ email, locale });
      setResponse(result);

      if (result.success) {
        // Clear form on success
        setEmail("");
        setLocale("");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResponse({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id={id} onSubmit={handleSubmit}>
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
          <label htmlFor={`${id}-locale`} className="form-label mt-2">
            Where is Amardent growing next?
          </label>
          <input
            type="text"
            className="form-control"
            id={`${id}-locale`}
            placeholder="City, State, Country"
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
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
            {isSubmitting ? "Submitting..." : "Submit"}
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
  );
}
