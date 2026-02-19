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
      className="mt-20 max-w-7xl mx-auto"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray">
        <Image
          src="/images/dashboardtest.png"
          alt="BillCraft Dashboard Preview"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
    </motion.div>
  );
};

export default AnimatedDashboardPreview;
