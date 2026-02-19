"use client";

import React from "react";
import { motion } from "framer-motion";

export interface PlaceholderVisualProps {
  /** Optional icon name for display */
  label?: string;
}

const PlaceholderVisual: React.FC<PlaceholderVisualProps> = ({ label = "Feature" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-full max-w-md mx-auto aspect-4/3 rounded-xl bg-gray border border-gray/80 flex items-center justify-center"
      aria-hidden
    >
      <span className="text-foreground/40 text-lg font-medium">{label}</span>
    </motion.div>
  );
};

export default PlaceholderVisual;
