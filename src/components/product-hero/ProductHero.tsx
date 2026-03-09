"use client";

import React from "react";
import Image from "next/image";
import Button from "../Button";
import { motion } from "framer-motion";

export interface ProductHeroProps {
  /** Überschrift der Hero-Section */
  title: string;
  /** Einleitungstext */
  description: string;
  /** Optional: CTA-Button-Text */
  ctaText?: string;
  /** Optional: CTA-Button-Link */
  ctaHref?: string;
  /** Optional: Bild rechts (Pfad z. B. /images/invoice-mockup.png) – wird ignoriert wenn children gesetzt */
  imageSrc?: string;
  /** Optional: Alt-Text für das Bild */
  imageAlt?: string;
  /** Optional: Inhalt rechts (Bild, Karte, Beispiel) – überschreibt imageSrc wenn gesetzt */
  children?: React.ReactNode;
  /** Optional: Zusätzliche Klasse für die Section */
  className?: string;
  /** Optional: ID für die Überschrift (Accessibility) */
  headingId?: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  title,
  description,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt = "Produktbeispiel",
  children,
  className = "",
  headingId = "product-hero-heading",
}) => {
  const hasImage = Boolean(imageSrc);
  const hasCustomContent = Boolean(children);
  const showImage = hasImage && !hasCustomContent;

  return (
    <section
      className={`relative w-full pt-32 pb-16 md:pb-24 overflow-hidden bg-background ${className}`}
      aria-labelledby={headingId}
    >
      {/* Gleicher Container wie Header, Preise, FeatureShowcase: max-w-7xl + Padding */}
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Links: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <h1
              id={headingId}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight"
            >
              {title}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-xl">
              {description}
            </p>
            {ctaText && ctaHref && (
              <Button
                href={ctaHref}
                variant="primary"
                size="lg"
                className="w-full md:w-auto"
              >
                {ctaText}
              </Button>
            )}
          </motion.div>

          {/* Rechts: Bild oder children (Beispiel/Karte) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            {hasCustomContent ? (
              children
            ) : showImage && imageSrc ? (
              <div className="relative w-full max-w-md aspect-4/3 rounded-xl overflow-hidden border border-gray bg-white shadow-lg">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
