"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

export default function About({ showDivider }: { showDivider?: boolean }) {
  return (
    <SectionWrapper id="about" showDivider={showDivider}>
      <SectionHeader
        label="About"
        title="Engineering with Impact"
        subtitle="Building systems that scale, perform, and solve real problems."
      />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-3 md:p-4"
        >
          <div className="relative aspect-5/6 overflow-hidden rounded-xl">
            <Image
              src="/image.jpg"
              alt="Portrait photo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="text-muted leading-relaxed">
            I am a full-stack engineer focused on building practical products
            that solve real problems. From analytics dashboards to cloud-backed
            web platforms, I work across frontend, backend, and infrastructure
            to ship reliable systems with strong performance and clean
            architecture.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                value: "5+",
                label: "Projects",
              },
              {
                value: "4",
                label: "Internships",
              },
              {
                value: "Cloud + Full Stack",
                label: "Core Focus",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-4 text-center"
              >
                <p className="text-base md:text-lg font-semibold text-foreground">
                  {item.value}
                </p>
                <p className="text-xs text-muted mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
