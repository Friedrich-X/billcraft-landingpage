"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

const formTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const AISection: React.FC = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-foreground">
      {/* Form 1 – von links reinkommend */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={formTransition}
        className="hidden md:block absolute top-0 -right-8 z-0 md:w-50 lg:w-75 xl:w-100 aspect-square mask-fade-right-edge"
      >
        <Image
          src="/images/ai-background1.png"
          alt=""
          fill
          className="object-contain object-top-right"
          aria-hidden
        />
      </motion.div>

      {/* Form 2 – von rechts reinkommend */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={formTransition}
        className="hidden md:block absolute -bottom-8 -left-8 z-0 md:w-50 lg:w-75 xl:w-100 aspect-square mask-fade-left-edge"
      >
        <Image
          src="/images/ai-background2.png"
          alt=""
          fill
          className="object-contain object-bottom-left"
          aria-hidden
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Durch unsere{" "}
            <span className="text-blue">KI</span>{" "}
            Zeit ersparen
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Intelligente Automatisierung für deine Buchhaltung – weniger Tipparbeit, mehr Fokus auf dein Business.
          </p>
          
          <Button href="/ki" variant="secondary" size="lg">
            Entdecken Sie mehr!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AISection;
