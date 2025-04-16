"use client";

import { motion } from "framer-motion";

export function TypingAnimation() {
  const words = ["developer", "designer", "creator"];
  return (
    <div className="text-3xl font-bold text-primary">
      I am a{" "}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1,
        }}
      >
        {words[0]}
      </motion.span>
    </div>
  );
}
