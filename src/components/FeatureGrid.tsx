"use client";

import React from "react";
import { motion } from "framer-motion";

export interface FeatureGridItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
  iconBg?: string;
}

export interface FeatureGridProps {
  headline?: string;
  description?: string;
  features: FeatureGridItem[];
  columns?: 2 | 3 | 4;
}

const columnClassMap: Record<2 | 3 | 4, string> = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const FeatureGrid: React.FC<FeatureGridProps> = ({
  headline,
  description,
  features,
  columns = 3,
}) => {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-background"
      aria-labelledby={headline ? "feature-grid-heading" : undefined}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {(headline || description) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14 md:mb-20"
          >
            {headline && (
              <h2
                id="feature-grid-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground"
              >
                {headline}
              </h2>
            )}
            {description && (
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
                {description}
              </p>
            )}
          </motion.div>
        )}

        <div
          className={`grid ${columnClassMap[columns]} gap-x-10 gap-y-12 lg:gap-y-14`}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.06,
              }}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                  feature.iconBg || "bg-blue/10"
                }`}
              >
                <div className={`w-6 h-6 ${feature.iconColor || "text-blue"}`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-[15px] text-foreground/55 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
