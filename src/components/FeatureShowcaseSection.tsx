"use client";

import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

export type FeatureShowcaseImagePosition = "left" | "right";

export interface FeatureShowcaseSectionProps {
  tag: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imagePosition: FeatureShowcaseImagePosition;
  tagClassName?: string;
  children: React.ReactNode;
}

const FeatureShowcaseSection: React.FC<FeatureShowcaseSectionProps> = ({
  tag,
  headline,
  description,
  ctaText,
  ctaHref,
  imagePosition,
  tagClassName = "bg-blue/10 text-blue",
  children,
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden bg-background"
      aria-labelledby={`showcase-heading-${tag.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Karte mit grauem Hintergrund – höher, übersichtlicher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-2xl md:rounded-3xl bg-gray border border-gray/80 shadow-lg overflow-hidden min-h-[420px] md:min-h-[480px]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-6 py-10 pb-14 md:py-12 md:px-12 lg:p-16 min-h-[420px] md:min-h-[480px]">
            {/* Mobile: Text zuerst (order-1), dann Visual (order-2). Desktop: Reihenfolge per imagePosition */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`order-2 mb-8 lg:mb-0 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
            >
              {children}
            </motion.div>

            {/* Text + CTA – mobile: oben; desktop: links/rechts je nach imagePosition */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className={`order-1 flex flex-col items-start text-left mb-10 lg:mb-0 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-base font-semibold tracking-wider mb-4 ${tagClassName}`}
              >
                {tag}
              </span>
              <h2
                id={`showcase-heading-${tag.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight"
              >
                {headline}
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8 max-w-xl">
                {description}
              </p>
              <Button href={ctaHref} variant="primary" size="lg" className="w-full md:w-auto">
                {ctaText}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureShowcaseSection;
