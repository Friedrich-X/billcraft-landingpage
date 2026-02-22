"use client";

import React from "react";
import Button from "./Button";

export type IntermediateSectionVariant = "dark" | "gradient";

export interface IntermediateSectionProps {
  headline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  /** "dark" = dunkler Hintergrund (wie AISection), "gradient" = Blau → Weiß → Pink */
  variant?: IntermediateSectionVariant;
  /** Optional: highlight a part of the headline (e.g. "KI") */
  headlineHighlight?: string;
}

const IntermediateSection: React.FC<IntermediateSectionProps> = ({
  headline,
  description,
  ctaText,
  ctaHref,
  variant = "dark",
  headlineHighlight,
}) => {
  const renderHeadline = () => {
    if (!headlineHighlight || !headline.includes(headlineHighlight)) {
      return headline;
    }
    const [before, after] = headline.split(headlineHighlight);
    return (
      <>
        {before}
        <span className="text-blue">{headlineHighlight}</span>
        {after}
      </>
    );
  };

  const isGradient = variant === "gradient";

  return (
    <section
      className={`relative w-full py-24 overflow-hidden ${
        isGradient
          ? "bg-linear-to-br from-blue/25 via-white to-pink/25"
          : "bg-foreground"
      }`}
      aria-labelledby="intermediate-section-heading"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="intermediate-section-heading"
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              isGradient ? "text-foreground" : "text-white"
            }`}
          >
            {renderHeadline()}
          </h2>

          <p
            className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${
              isGradient ? "text-foreground/80" : "text-white/70"
            }`}
          >
            {description}
          </p>

          <Button
            href={ctaHref}
            variant={isGradient ? "primary" : "secondary"}
            size="lg"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntermediateSection;
