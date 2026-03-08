"use client";

import React from "react";
import { motion } from "framer-motion";

export interface StatsSectionProps {
  stats: Array<{
    value: string;
    label: string;
  }>;
  variant?: "light" | "dark";
}

const StatsSection: React.FC<StatsSectionProps> = ({
  stats,
  variant = "light",
}) => {
  const isDark = variant === "dark";

  const columnClassMap: Record<number, string> = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
  };

  const gridCols = columnClassMap[stats.length] || "md:grid-cols-4";

  return (
    <section
      className={`relative w-full py-16 md:py-24 ${
        isDark ? "bg-foreground" : "bg-background"
      }`}
      aria-label="Statistiken"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className={`grid grid-cols-2 gap-8 md:gap-0 ${gridCols}`}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
              }}
              className={`text-center px-4 ${
                index < stats.length - 1
                  ? isDark
                    ? "md:border-r md:border-white/20"
                    : "md:border-r md:border-gray/80"
                  : ""
              }`}
            >
              <p className="text-4xl md:text-5xl font-bold text-blue">
                {stat.value}
              </p>
              <p
                className={`text-base mt-2 ${
                  isDark ? "text-white/60" : "text-foreground/60"
                }`}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
