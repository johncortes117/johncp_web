"use client";

import { motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.button
      className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600/80 text-white backdrop-blur-sm border border-blue-500/50 shadow-lg z-50 hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
        y: scrollYProgress.get() > 0.1 ? 0 : 20,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}
