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
    <form id={id} onSubmit={handleSubmit} className="form-grid">
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
      <div className="field">
        <label htmlFor={`${id}-locale`} className="label">
          Where is Amardent growing next?
        </label>
        <input
          type="text"
          className="input"
          id={`${id}-locale`}
          placeholder="City, State, Country"
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>
      <button type="submit" className="d-btn" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Submit"}
      </button>
      {response && (
        <div className={`alert ${response.success ? "alert-ok" : "alert-err"}`}>
          {response.message}
        </div>
      )}
    </form>
  );
}
