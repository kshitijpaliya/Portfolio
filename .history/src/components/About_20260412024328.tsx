"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

export default function About({ showDivider }: { showDivider?: boolean }) {
  return (
    <SectionWrapper id="about" showDivider={showDivider}>
      <SectionHeader label="About" title="Who is Kshitij??" subtitle="" />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <ul className="space-y-3 text-sm md:text-[15px] text-muted/50 leading-relaxed list-disc pl-5 marker:text-muted/60">
            <li>
              Hi there, I am{" "}
              <span className="font-medium text-foreground/75">
                Kshitij Paliya
              </span>
              , currently based in{" "}
              <span className="font-medium text-foreground/75">
                Gurugram, Haryana
              </span>
              .
            </li>
            <li className="text-justify">
              Currently a final year{" "}
              <span className="font-medium text-foreground/75">
                BTech IT student
              </span>{" "}
              at{" "}
              <span className="font-medium text-foreground/75">
                MIT Manipal
              </span>
              .
            </li>
            <li>
              Intern @{" "}
              <span className="font-medium text-foreground/75">
                Bain & Company (BCN)
              </span>
              , where I am getting exposure to
              <span className="font-medium text-foreground/75">
                {" "}
                real-world problem solving
              </span>{" "}
              in a structured environment.
            </li>
            <li className="text-justify">
              My core interest lies in{" "}
              <span className="font-medium text-foreground/75">
                full-stack development
              </span>{" "}
              and <span className="font-medium text-foreground/75">cloud</span>,
              and that is where most of my work has been focused.
            </li>
            <li className="text-justify">
              Over time, I have built and worked on multiple{" "}
              <span className="font-medium text-foreground/75">projects</span>{" "}
              and
              <span className="font-medium text-foreground/75">
                {" "}
                internships
              </span>
              , learning more by doing than anything else.
            </li>
            <li className="text-justify">
              I usually work with technologies like{" "}
              <span className="font-medium text-foreground/75">Next.js</span>,{" "}
              <span className="font-medium text-foreground/75">MERN Stack</span>
              , <span className="font-medium text-foreground/75">AWS</span> and
              other modern web tools depending on the use case.
            </li>
            <li className="text-justify">
              Outside of tech, I enjoy travelling and exploring new places
              whenever I get the chance.{" "}
              <span className="font-medium text-foreground/75">History</span> is
              one another thing that I find fascinating.
            </li>
          </ul>

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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-3 md:p-4"
        >
          <div className="relative aspect-7/8 overflow-hidden rounded-xl">
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
      </div>
    </SectionWrapper>
  );
}
