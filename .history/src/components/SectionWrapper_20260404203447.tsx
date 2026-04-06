"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  showDivider?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  showDivider = false,
}: SectionWrapperProps) {
  return (
    <>
      {showDivider && (
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      )}

      <section id={id} className={`py-20 md:py-28 ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12"
        >
          {children}
        </motion.div>
      </section>
    </>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5">
        {label}
      </span>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
