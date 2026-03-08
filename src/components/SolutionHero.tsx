"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./Button";

export interface SolutionHeroProps {
  title: string;
  titleHighlight?: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  headingId?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const SolutionHero: React.FC<SolutionHeroProps> = ({
  title,
  titleHighlight,
  description,
  ctaText,
  ctaHref = "#signup",
  headingId = "solution-hero-heading",
  imageSrc = "/images/test.png",
  imageAlt = "BillCraft Dashboard",
}) => {
  const renderTitle = () => {
    if (!titleHighlight || !title.includes(titleHighlight)) {
      return title;
    }
    const [before, after] = title.split(titleHighlight);
    return (
      <>
        {before}
        <span className="text-blue">{titleHighlight}</span>
        {after}
      </>
    );
  };

  return (
    <section
      className="relative pt-32 pb-20 px-4 overflow-hidden"
      aria-labelledby={headingId}
    >
      {/* Full-width gradient behind the screenshot area */}
      <div
        className="absolute inset-0 top-[40%] z-0 pointer-events-none rounded-b-[3rem]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(92,108,254,0.12) 35%, rgba(255,80,167,0.10) 65%, rgba(92,108,254,0.06) 100%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 container mx-auto">
        {/* Centered text block */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            id={headingId}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {renderTitle()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <Button href={ctaHref} variant="primary" size="lg">
              {ctaText}
            </Button>
            <p className="text-base text-foreground/80">
              Haben Sie bereits ein Konto?{" "}
              <Link
                href="#login"
                className="text-base text-foreground underline underline-offset-2 hover:text-blue hover:no-underline transition-all"
              >
                <strong>Jetzt einloggen</strong>
              </Link>
            </p>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.35 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-foreground/50"
          >
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Grundfunktionen kostenlos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Keine Kreditkarte nötig</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>In 2 Minuten startklar</span>
            </div>
          </motion.div>
        </div>

        {/* Large dashboard screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="relative mt-20 max-w-7xl mx-auto px-2"
        >
          <div className="relative rounded-t-2xl rounded-b-3xl overflow-hidden shadow-2xl border border-gray/60 max-w-6xl mx-auto">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1580}
              height={920}
              className="w-full h-auto max-h-[75vh] object-contain object-top"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 2400px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionHero;
