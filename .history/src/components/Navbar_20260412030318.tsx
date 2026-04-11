"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="w-full">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors"
          >
            <span className="gradient-text">KP</span>
            {/* <span className="text-zinc-500 font-light ml-1 text-sm hidden sm:inline">
              / engineer
            </span> */}
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className="ml-3">
              <a
                href="https://drive.google.com/file/d/1F6UVvkEszXkEBOEpnoIXKkP4eGFjG66U/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-all"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="block w-5 h-px bg-white"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden nav-blur border-t border-white/5 overflow-hidden"
          >
            <div className="mx-auto w-full max-w-[72rem] px-6 py-4 sm:px-8 lg:px-12">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="https://drive.google.com/file/d/1F6UVvkEszXkEBOEpnoIXKkP4eGFjG66U/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 text-center justify-center w-full"
                  >
                    <span>Resume</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
