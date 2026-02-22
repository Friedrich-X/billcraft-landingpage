"use client";

import React from "react";
import Image from "next/image";
import Button from "../Button";
import InvoiceExampleCard from "./InvoiceExampleCard";
import { motion } from "framer-motion";

export interface InvoiceHeroProps {
  /** Überschrift der Hero-Section */
  title: string;
  /** Einleitungstext */
  description: string;
  /** Optional: CTA-Button-Text */
  ctaText?: string;
  /** Optional: CTA-Button-Link */
  ctaHref?: string;
  /** Optional: Bild rechts statt Beispiel-Rechnung (Pfad z. B. /images/invoice-mockup.png) */
  imageSrc?: string;
  /** Optional: Alt-Text für das Bild */
  imageAlt?: string;
}

const InvoiceHero: React.FC<InvoiceHeroProps> = ({
  title,
  description,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt = "Beispiel einer Rechnung in BillCraft",
}) => {
  return (
    <section
      className="relative w-full pt-32 pb-16 md:pb-24 overflow-hidden bg-background"
      aria-labelledby="invoice-hero-heading"
    >
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
              id="invoice-hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight"
            >
              {title}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-xl">
              {description}
            </p>
            {ctaText && ctaHref && (
              <Button href={ctaHref} variant="primary" size="lg" className="w-full md:w-auto">
                {ctaText}
              </Button>
            )}
          </motion.div>

          {/* Rechts: Bild oder Beispiel-Rechnung */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            {imageSrc ? (
              <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden border border-gray bg-white shadow-lg">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <InvoiceExampleCard />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceHero;
