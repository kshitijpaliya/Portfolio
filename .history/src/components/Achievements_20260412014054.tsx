"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const leadership = [
  {
    title: "Core & Organizing Committee Member - Operations & HRD",
    org: "TechTatva & Revels, MIT Manipal",
    period: "Manipal, Karnataka, India",
    bullets: [
      "Led and managed a team of 30+ members, coordinating scheduling and execution for 100+ large-scale fest events",
      "Automated recruitment workflows using SQL and Excel, removing manual effort ",
      "Served as Point of Contact (POC) across stakeholders to ensure alignment and timely execution",
    ],
    icon: "🎯",
  },
  {
    title: "Startup Development & Guidance Executive",
    org: "E-Cell, MIT Manipal",
    period: "Nov 2022 – Sept 2024",
    bullets: [
      "Orchestrated the Manipal Entrepreneurship Summit 2024 and Innovation Mela, attracting 15,000+ attendees and 120+ startups, research, and student projects",
      "Worked on MIT SkillHub, a platform connecting students with freelance and internship opportunities",
      "Designed an ideation pipeline to streamline early-stage startup discovery and engagement with the incubation center",
    ],
    icon: "🚀",
  },
];

const achievements = [
  {
    title: "App-A-Thon 2024 — 1st Place",
    subtitle:
      "Developed HemoCare to optimize hemodialysis scheduling and improve hospital resource management",
    icon: "🏆",
  },
  {
    title: "Top 30 — M# Hackathon",
    subtitle: "Ranked among Top 30 finalists out of 350+ teams at MIT Manipal",
    icon: "🥇",
  },
  {
    title: "2nd Runner-Up — Monopoly",
    subtitle: "Business Simulation Competition",
    icon: "🥈",
  },
  {
    title: "Top 6 — Enduraverse Hackathon",
    subtitle:
      "Built a real-time telematics dashboard with cloud integration, predictive alerts, and interactive visualizations",
    icon: "🏅",
  },
];

export default function Achievements({
  showDivider,
}: {
  showDivider?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper id="achievements" showDivider={showDivider}>
      <SectionHeader
        label="Leadership & Achievements"
        title="Beyond Code"
        subtitle="Leading teams, winning competitions, and building communities."
      />

      <div
        ref={ref}
        className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start"
      >
        {/* Leadership */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-1 rounded-full bg-gradient-to-r from-accent to-violet-500" />
            Leadership
          </h3>
          <div className="space-y-6">
            {leadership.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-xs text-accent-light font-medium mt-0.5 mb-3">
                      {item.org}
                    </p>
                    {"period" in item && item.period && (
                      <p className="text-[11px] text-muted mb-3">
                        {item.period}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {item.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-xs text-muted leading-relaxed"
                        >
                          <svg
                            className="mt-0.5 shrink-0 text-accent/50"
                            width="10"
                            height="10"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <circle cx="8" cy="8" r="3" fill="currentColor" />
                          </svg>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
            Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-card p-5 text-center group h-full"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-accent-light transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-muted">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
