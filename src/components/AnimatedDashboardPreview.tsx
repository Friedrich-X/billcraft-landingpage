"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedDashboardPreview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mt-20 max-w-7xl mx-auto px-2"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray max-w-6xl mx-auto">
        <Image
          src="/images/hero-billcraft-mockup-macbook.webp"
          alt="BillCraft Dashboard Preview"
          width={2150}
          height={1285}
          className="w-full h-auto max-h-[75vh] object-contain object-top"
          priority
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 2304px"
        />
      </div>
    </motion.div>
  );
};

export default AnimatedDashboardPreview;
