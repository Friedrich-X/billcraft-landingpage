"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

const ease = [0.22, 1, 0.36, 1] as const;

const FreelancerHero: React.FC = () => {
  return (
    <section
      className="pt-32 pb-20 px-4"
      aria-labelledby="freelancer-hero-heading"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            id="freelancer-hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight"
          >
            Weniger Papierkram, mehr{" "}
            <span className="text-blue">Kreativzeit</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Als Freelancer willst du arbeiten, nicht Rechnungen schreiben.
            BillCraft erledigt deine Buchhaltung in Minuten – damit du dich auf
            das konzentrieren kannst, was du liebst.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <Button href="#signup" variant="primary" size="lg">
              Als Freelancer kostenlos starten
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.35 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-foreground/50"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Grundfunktionen kostenlos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Keine Kreditkarte nötig</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>In 2 Minuten startklar</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerHero;
