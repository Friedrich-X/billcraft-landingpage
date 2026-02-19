"use client";

import React from "react";
import Button from "./Button";

export interface IntermediateSectionProps {
  headline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  /** Optional: highlight a part of the headline (e.g. "KI" in "Durch unsere KI Zeit ersparen") */
  headlineHighlight?: string;
}

const IntermediateSection: React.FC<IntermediateSectionProps> = ({
  headline,
  description,
  ctaText,
  ctaHref,
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

  return (
    <section
      className="relative w-full py-24 overflow-hidden bg-foreground"
      aria-labelledby="intermediate-section-heading"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="intermediate-section-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {renderHeadline()}
          </h2>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <Button href={ctaHref} variant="secondary" size="lg">
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntermediateSection;
