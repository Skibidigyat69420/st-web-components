"use client";

import { motion } from "framer-motion";

// Global page transition settings
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0, scale: 0.98, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ 
        type: "spring", 
        stiffness: 80, 
        damping: 15, 
        mass: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
