"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Eric Frank",
    role: "Co-founder, CEO",
    bio: "Formerly an engineer at Verily (Google Life Sciences), Eric has a passion for developing accessible ways to monitor your own health. Eric is a UPenn grad with a degree in CS, along with minors in Engineering Entrepreneurship and Classics.",
    image:
      "https://uploads-ssl.webflow.com/65541d6617fb12568eb71dd9/655c270c8e006730d2fa4eaa_image1.jpg",
  },
];

export default function Team() {
  return (
    <>
      {/* Hero Section */}
      <section className="segment d-flex align-items-center pt-5 pt-lg-5 pt-md-5">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="display-3">Meet our founder</h1>
            <p className="h5 text-body-secondary">
              I&apos;m building Amardent to improve everyone&apos;s dental
              health, including yours.
            </p>
          </div>
          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-5 col-10 text-center mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="img-fluid rounded mb-3"
                />
                <h3>{member.name}</h3>
                <h5 className="text-body-secondary mb-3">{member.role}</h5>
                <p className="text-start">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="h3 text-body-secondary">
              If you&apos;re interested in joining the team or learning more
              about Amardent, reach out to{" "}
              <a href="mailto:info@amardent.com">info@amardent.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
