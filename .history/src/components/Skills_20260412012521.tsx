"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const skillCategories = [
  {
    title: "Languages",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "React Native",
      "Tailwind CSS",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "AWS DynamoDB",
      "AWS IoT Core",
      "GCP",
      "Vercel",
      "Cloudflare",
    ],
  },
  {
    title: "Databases",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "Firebase"],
  },
  {
    title: "Tools & Platforms",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: ["Git", "GitHub", "Docker", "Nginx", "Postman"],
  },
  {
    title: "Concepts & Architecture",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    skills: [
      "System Design",
      "REST APIs",
      "WebSockets",
      "MQTT",
      "Cloud Architecture",
      "Event-Driven Design",
    ],
  },
];

export default function Skills({ showDivider }: { showDivider?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper id="skills" showDivider={showDivider}>
      <SectionHeader
        label="Skills"
        title="Tech Stack"
        subtitle="The tools and technologies I have worked with have experience in."
      />

      <div
        ref={ref}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
      >
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass-card p-6 h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10 text-accent-light">
                {cat.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {cat.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
