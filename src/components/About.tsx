"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const highlights = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Full-Stack + Cloud",
    desc: "End-to-end development from React frontends to Node.js APIs, deployed on AWS with scalable architectures.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Real-Time Systems",
    desc: "WebSockets, MQTT, Pusher — building systems where milliseconds matter and data flows in real-time.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "AI Integrations",
    desc: "Integrating LLMs, ML models, and intelligent search into production applications.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    title: "Product Thinking",
    desc: "Building with users in mind — from system design to UX, focused on real-world impact and scalability.",
  },
];

export default function About({ showDivider }: { showDivider?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="about" showDivider={showDivider}>
      <SectionHeader
        label="About"
        title="Engineering with Impact"
        subtitle="Building systems that scale, perform, and solve real problems."
      />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Story */}
        <div className="space-y-6">
          <p className="text-muted leading-relaxed">
            I build systems that solve real-world problems — from healthcare
            platforms to real-time collaboration tools and scalable cloud
            dashboards. I focus on performance, scalability, and clean
            architecture.
          </p>
          <p className="text-muted leading-relaxed">
            Currently in my final year of BTech in IT at MIT Manipal, I&apos;ve
            spent the last few years going beyond coursework — shipping
            production systems, leading engineering teams, and building products
            used by real users.
          </p>
          <p className="text-muted leading-relaxed">
            My work spans the full stack: from crafting responsive React
            interfaces to designing event-driven cloud architectures on AWS.
            I&apos;m particularly drawn to real-time systems and AI-powered
            features that push product boundaries.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {[
              { value: "5+", label: "Projects Shipped" },
              { value: "3+", label: "Internships" },
              { value: "99.9%", label: "Uptime Achieved" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl glass-card"
              >
                <div className="text-2xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card p-5 group"
            >
              <div className="mb-3 text-accent-light group-hover:text-accent transition-colors">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
