"use client";

import { useState } from "react";

interface FaqItemProps {
  q: string;
  a: React.ReactNode;
  open: boolean;
  onClick: () => void;
}

function FaqItem({ q, a, open, onClick }: FaqItemProps) {
  return (
    <div className="d-faq-item">
      <button className="d-faq-q" aria-expanded={open} onClick={onClick}>
        <span>{q}</span>
        <span className={"d-faq-icon" + (open ? " open" : "")} aria-hidden="true" />
      </button>
      <div className="d-faq-a" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
        <div style={{ overflow: "hidden" }}>
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

interface FaqProps {
  items: [string, React.ReactNode][];
  /** Index of the item open by default, or -1 for all closed. */
  defaultOpen?: number;
}

export default function Faq({ items, defaultOpen = -1 }: FaqProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="d-faq-list">
      {items.map(([q, a], i) => (
        <FaqItem
          key={i}
          q={q}
          a={a}
          open={open === i}
          onClick={() => setOpen(open === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
