"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const experiences = [
  {
    title: "Analyst - Intern",
    company: "Bain Capability Network (Bain & Company)",
    period: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Performed custom analysis on large-scale transaction datasets to uncover customer behavior, retention, and cross-shopping patterns",
      "Managed data pipelines in Snowflake for retrieval, validation, and preparation of analytics-ready datasets",
      "Delivered data-driven insights to support case decisions and stakeholder recommendations",
    ],
    tech: ["Snowflake", "SQL", "Analytics", "Data Pipelines"],
  },
  {
    title: "Full Stack Developer",
    company: "KLYK",
    period: "May 2025 – August 2025",
    current: false,
    bullets: [
      "Developed a scalable creator dashboard in Next.js with AI search, real-time filters, and multi-step campaign workflows for 200+ profiles",
      "Integrated AWS S3 + CloudFront for secure, adaptive video delivery, reducing bandwidth by 90%",
      "Built REST APIs with Node.js + Express and deployed via EC2 with Nginx",
      "Created an internal dashboard for campaign and creator management with Slack-based alerts",
    ],
    tech: [
      "Next.js",
      "Node.js",
      "AWS",
      "PostgreSQL",
      "S3",
      "CloudFront",
      "Nginx",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "StyleMind",
    period: "Apr 2025 – July 2025",
    current: false,
    bullets: [
      "Developed an API analytics dashboard using Next.js + TypeScript with real-time Recharts visualizations",
      "Built secure authentication with JWT, Google OAuth, and protected routes for session handling",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Recharts"],
  },
  {
    title: "SDE Intern",
    company: "ChipIOT",
    period: "May 2024 – July 2024",
    current: false,
    bullets: [
      "Implemented an end-to-end IoT pipeline using ESP32 and AWS for secure sensor data transmission and cloud storage",
      "Configured MQTT communication via AWS IoT Core with TLS-based authentication for real-time device-cloud interaction",
      "Built AWS Lambda functions to process data and store results in DynamoDB",
      "Created AWS IoT Core Rules to route messages for automated event-driven processing",
    ],
    tech: ["AWS IoT Core", "Lambda", "DynamoDB", "MQTT", "ESP32"],
  },
];

export default function Experience({ showDivider }: { showDivider?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper id="experience" showDivider={showDivider}>
      <SectionHeader
        label="Experience"
        title="Where I've Built"
        subtitle="Hands-on experience across analytics, full-stack development, and cloud."
      />

      <div ref={ref} className="relative">
        {/* Timeline line */}
        <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/10 to-transparent" />

        <div className="space-y-10 md:space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-0 lg:pl-16"
            >
              {/* Timeline dot */}
              <div
                className={`hidden lg:block absolute left-4 top-1.5 w-4 h-4 rounded-full border-2 ${
                  exp.current
                    ? "border-accent bg-accent shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                    : "border-accent/40 bg-background"
                }`}
              />

              <div className="glass-card p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-accent-light font-medium text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Current
                      </span>
                    )}
                    <span className="text-xs text-muted font-mono">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-sm text-muted leading-relaxed"
                    >
                      <svg
                        className="mt-1 shrink-0 text-accent/60"
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="skill-badge !text-xs !py-1 !px-2.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
