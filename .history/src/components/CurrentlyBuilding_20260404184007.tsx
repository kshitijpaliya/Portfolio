"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const currentWork = [
  {
    title: "Creator Dashboard Platform",
    description:
      "Building AI-powered search, campaign workflows, and video streaming infrastructure at KLYK/Buzz.",
    status: "In Progress",
    icon: "🔧",
  },
  {
    title: "System Design Deep Dive",
    description:
      "Studying distributed systems, caching strategies, and event-driven architectures for large-scale applications.",
    status: "Ongoing",
    icon: "📐",
  },
  {
    title: "Cloud Architecture Patterns",
    description:
      "Exploring serverless architectures, container orchestration, and infrastructure-as-code on AWS.",
    status: "Learning",
    icon: "☁️",
  },
];

const designPrinciples = [
  {
    title: "Start with the Problem",
    description:
      "Understand requirements deeply before writing code. Every technical decision should trace back to a user need or system constraint.",
  },
  {
    title: "Design for Scale",
    description:
      "Choose architectures that handle today's load and tomorrow's growth — horizontal scaling, caching layers, async processing.",
  },
  {
    title: "Reliability First",
    description:
      "99.9% uptime isn't accidental. It comes from proper error handling, monitoring, graceful degradation, and battle-tested deployment pipelines.",
  },
  {
    title: "Iterate Fast, Ship Often",
    description:
      "Build MVPs, validate assumptions, then refine. Clean abstractions and modular code make iteration sustainable.",
  },
];

export default function CurrentlyBuilding({
  showDivider,
}: {
  showDivider?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper id="currently-building" showDivider={showDivider}>
      <SectionHeader
        label="Currently"
        title="What I'm Building Now"
        subtitle="Active projects and areas of deep focus."
      />

      <div
        ref={ref}
        className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start"
      >
        {/* Current Work */}
        <div>
          <div className="space-y-4">
            {currentWork.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-card p-5 flex gap-4"
              >
                <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className="shrink-0 text-[10px] font-mono text-accent px-2 py-0.5 rounded-full border border-accent/20 bg-accent/5">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* System Design Thinking */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent-light"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h3 className="text-lg font-semibold text-foreground">
              System Design Thinking
            </h3>
          </div>
          <div className="space-y-4">
            {designPrinciples.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent mt-1.5" />
                  {i < designPrinciples.length - 1 && (
                    <div className="w-px flex-1 bg-accent/10 mt-1" />
                  )}
                </div>
                <div className="pb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
