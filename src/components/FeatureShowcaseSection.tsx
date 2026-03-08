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

const ease = [0.22, 1, 0.36, 1] as const;

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
      className="relative w-full py-16 md:py-24 bg-background"
      aria-labelledby={`showcase-heading-${tag.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease }}
          className="rounded-2xl md:rounded-3xl bg-gray border border-foreground/[0.06] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center p-6 md:p-10 lg:p-14">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease }}
              className={`order-2 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
            >
              {children}
            </motion.div>

            {/* Text + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease, delay: 0.1 }}
              className={`order-1 flex flex-col items-start text-left ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-5 ${tagClassName}`}
              >
                {tag}
              </span>
              <h2
                id={`showcase-heading-${tag.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight"
              >
                {headline}
              </h2>
              <p className="text-base md:text-lg text-foreground/55 leading-relaxed mb-8 max-w-xl">
                {description}
              </p>
              <Button
                href={ctaHref}
                variant="primary"
                size="lg"
                className="w-full md:w-auto"
              >
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
