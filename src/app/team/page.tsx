"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Eric Frank",
    role: "Founder, CEO",
    bio: "Formerly an engineer at Verily (Google Life Sciences), Eric has a passion for developing accessible ways to monitor your own health. Eric is a UPenn grad with a degree in CS, along with minors in Engineering Entrepreneurship and Classics.",
    image: "/assets/images/eric-frank.jpg",
  },
];

export default function Team() {
  const ref = useReveal();

  return (
    <section className="page page-narrow" ref={ref}>
      <div className="page-head reveal">
        <span className="d-eyebrow center">Our Team</span>
        <h1 className="d-h1">Meet our founder</h1>
        <p className="d-sub">
          I&apos;m building Amardent to improve everyone&apos;s dental health,
          including yours.
        </p>
      </div>

      <div className="team-grid reveal">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <Image
              src={member.image}
              alt={member.name}
              width={420}
              height={420}
            />
            <h3>{member.name}</h3>
            <div className="role">{member.role}</div>
            <p className="bio">{member.bio}</p>
          </div>
        ))}
      </div>

      <p className="d-sub reveal" style={{ marginTop: "48px" }}>
        If you&apos;re interested in joining the team or learning more about
        Amardent, reach out to{" "}
        <a
          href="mailto:info@amardent.com"
          style={{ color: "var(--accent-deep)" }}
        >
          info@amardent.com
        </a>
      </p>
    </section>
  );
}
