"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "KLYK / Buzz",
    period: "May 2025 – Present",
    current: true,
    bullets: [
      "Built scalable creator dashboard handling 200+ profiles with real-time filters and AI-based search",
      "Implemented campaign workflows and video streaming infrastructure for brand-creator collaboration",
      "Integrated AWS S3 + CloudFront CDN, reducing bandwidth costs by 90%",
      "Designed and built REST APIs using Node.js + Express with structured error handling",
      "Deployed on AWS EC2 with Nginx reverse proxy + HTTPS — achieved 99.9% uptime",
      "Built internal dashboards and Slack automation for operational workflows",
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
    period: "2025",
    current: false,
    bullets: [
      "Built Next.js + TypeScript dashboard with interactive data visualizations using Recharts",
      "Implemented JWT + Google OAuth authentication with secure session management",
      "Designed modern, responsive UI using Tailwind CSS + Radix UI component library",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Recharts"],
  },
  {
    title: "SDE Intern",
    company: "ChipIOT",
    period: "2024",
    current: false,
    bullets: [
      "Built end-to-end IoT data pipeline using ESP32 sensors + MQTT + AWS IoT Core",
      "Designed event-driven architecture with AWS Lambda + DynamoDB for real-time data processing",
      "Implemented sensor data routing and processing for real-time monitoring dashboards",
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
        subtitle="Production systems, startup velocity, and engineering depth."
      />

      <div ref={ref} className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/10 to-transparent" />

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
              className="relative pl-14 md:pl-16"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-3 md:left-4 top-1.5 w-4 h-4 rounded-full border-2 ${
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
