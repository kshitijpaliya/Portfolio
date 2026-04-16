"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const projects = [
  {
    title: "PaperClip",
    tagline: "Real-time collaborative sharing, reimagined.",
    description:
      "Real-time collaborative application for instant text and file sharing via shareable links. Built with production-grade security and scalability in mind.",
    features: [
      "WebSocket-based real-time sync via Pusher — instant updates across devices",
      "Secure file uploads with Cloudflare R2 presigned URLs",
      "AES-256 encryption for data at rest, CAPTCHA + rate limiting for abuse prevention",
      "PostgreSQL with optimized queries for sub-100ms response times",
    ],
    tech: ["Next.js", "Pusher", "Cloudflare R2", "PostgreSQL", "AES-256"],
    emphasis: "System Design · Scalability · Security",
    color: "from-indigo-500 to-violet-600",
    featured: true,
    links: {
      github: "https://github.com/kshitijpaliya/PaperClip",
      live: "https://paper-clip-project.vercel.app/",
    },
    image: "/paperclip.png",
  },
  {
    title: "HemoCare",
    tagline: "Hemodialysis scheduling that saves lives.",
    description:
      "Comprehensive healthcare system for hemodialysis scheduling and hospital resource management. Winner of App-A-Thon 2024.",
    features: [
      "Real-time machine tracking dashboard for hospital staff",
      "In-app chat and notification system using WebSockets",
      "Intelligent scheduling algorithm for optimal resource utilization",
    ],
    tech: ["React Native", "Node.js", "MongoDB", "WebSockets"],
    emphasis: "Healthcare · Real-Time · Impact",
    color: "from-emerald-500 to-teal-600",
    featured: false,
    links: {
      github: "https://github.com/kshitijpaliya/HemoCare",
      live: "#",
    },
  },
  {
    title: "Travelify",
    tagline: "AI-powered travel planning.",
    description:
      "Intelligent travel planner that generates personalized day-wise itineraries with hotel recommendations and place suggestions using Gemini AI.",
    features: [
      "AI-generated day-wise itineraries with Gemini API",
      "Google Places integration for real-time hotel and attraction data",
      "Firebase backend for user authentication and trip storage",
    ],
    tech: ["React", "Firebase", "Gemini API", "Google Places API"],
    emphasis: "AI Integration · UX Design",
    color: "from-amber-500 to-orange-600",
    featured: false,
    links: {
      github: "https://github.com/kshitijpaliya/travelify",
      live: "https://travelify-travel.vercel.app/",
    },
    image: "/travelify.png",
  },
  {
    title: "Creator Dashboard Platform",
    tagline: "AI-powered brand-creator collaboration.",
    description:
      "Enterprise dashboard for managing creator profiles, campaigns, and analytics with AI-powered search and video streaming infrastructure.",
    features: [
      "AI-based search and real-time filtering across 200+ creator profiles",
      "Campaign workflow management with status tracking",
      "Video streaming infrastructure for content review",
    ],
    tech: ["Next.js", "Node.js", "AWS", "PostgreSQL", "AI Search"],
    emphasis: "Enterprise Scale · AI Integration",
    color: "from-blue-500 to-cyan-600",
    featured: true,
    links: {
      github: "#",
      live: "https://klyk.thejunecollective.com/",
    },
    image: "/klyk.png",
  },
  {
    title: "Crop Recommendation System",
    tagline: "ML-powered agricultural intelligence.",
    description:
      "Machine learning pipeline achieving 95%+ accuracy in crop recommendations using ensemble methods and comprehensive data preprocessing.",
    features: [
      "XGBoost ensemble model with 95%+ prediction accuracy",
      "Complete data preprocessing and feature engineering pipeline",
      "Evaluation suite: ROC curves, confusion matrices, cross-validation",
    ],
    tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Matplotlib"],
    emphasis: "Machine Learning · Data Science",
    color: "from-green-500 to-lime-600",
    featured: false,
    links: {
      github:
        "https://github.com/kshitijpaliya/Crop-Recommendation-Based-On-Soil-Weather-Contents",
      live: "#",
    },
  },
];

export default function Projects({ showDivider }: { showDivider?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper id="projects" showDivider={showDivider}>
      <SectionHeader
        label="Projects"
        title="What I've Built"
        subtitle="Production systems with real users, designed for scale and reliability."
      />

      <div ref={ref}>
        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6 items-stretch">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group h-full flex flex-col gap-3"
              >
                {project.links.live !== "#" && project.image && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-2xl border border-white/10 glass-card"
                    aria-label={`${project.title} live preview`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-48 md:h-56 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="px-3 py-2 text-[11px] text-accent-light bg-black/20">
                      Open live preview
                    </div>
                  </a>
                )}

                <div className="glass-card overflow-hidden h-full">
                  {/* Gradient header */}
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                  <div className="p-6 md:p-8 h-full flex flex-col">
                    {/* Title Row */}
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                            Featured
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent-light transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        {project.links.live !== "#" && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-all"
                            aria-label={`${project.title} Live`}
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M14 3h7v7" />
                              <path d="M10 14L21 3" />
                              <path d="M21 14v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6" />
                            </svg>
                          </a>
                        )}
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-all"
                          aria-label={`${project.title} GitHub`}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <p className="text-sm text-accent-light/80 font-medium mb-3">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-muted leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {project.features.map((f, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-xs text-muted leading-relaxed"
                        >
                          <svg
                            className="mt-0.5 shrink-0 text-accent/50"
                            width="12"
                            height="12"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.25 4.75L6 12 2.75 8.75"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Emphasis */}
                    <p className="text-xs font-mono text-accent/70 mb-4 mt-auto">
                      {project.emphasis}
                    </p>

                    <div className="mb-4 flex items-center gap-3 text-xs">
                      {project.links.live !== "#" && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-light hover:text-accent transition-colors"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.links.github !== "#" && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-foreground transition-colors"
                        >
                          GitHub
                        </a>
                      )}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="skill-badge !text-xs !py-0.5 !px-2"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-card p-6 group"
              >
                {project.links.live !== "#" && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:block absolute right-3 top-3 w-40 overflow-hidden rounded-lg border border-white/15 bg-black/40 opacity-0 rotate-2 translate-y-2 scale-95 group-hover:opacity-100 group-hover:rotate-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 z-20"
                    aria-label={`${project.title} hover preview`}
                  >
                    <img
                      src={`https://image.thum.io/get/width/700/noanimate/${project.links.live}`}
                      alt={`${project.title} preview`}
                      className="h-24 w-full object-cover"
                      loading="lazy"
                    />
                  </a>
                )}

                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-8 h-1 rounded-full bg-gradient-to-r ${project.color}`}
                  />
                  <div className="flex items-center gap-1.5">
                    {project.links.live !== "#" && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-all"
                        aria-label={`${project.title} Live`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 3h7v7" />
                          <path d="M10 14L21 3" />
                          <path d="M21 14v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6" />
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-all"
                      aria-label={`${project.title} GitHub`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-accent-light/70 font-medium mb-2">
                  {project.tagline}
                </p>
                <p className="text-xs text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="skill-badge !text-[10px] !py-0.5 !px-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-[10px] font-mono text-accent/50">
                  {project.emphasis}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
