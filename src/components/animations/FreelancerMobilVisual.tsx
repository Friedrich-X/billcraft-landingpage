"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Camera, Check, Receipt } from "lucide-react";

type Phase = "idle" | "scanning" | "recognized" | "saved" | "pause";

const DELAYS: Record<Phase, number> = {
  idle: 1200,
  scanning: 1500,
  recognized: 1800,
  saved: 5000,
  pause: 600,
};

const FreelancerMobilVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (!isInView) return;

    const next: Record<Phase, Phase> = {
      idle: "scanning",
      scanning: "recognized",
      recognized: "saved",
      saved: "pause",
      pause: "idle",
    };

    const t = setTimeout(() => setPhase(next[phase]), DELAYS[phase]);
    return () => clearTimeout(t);
  }, [phase, isInView]);

  const isScanning = phase === "scanning";
  const isRecognized = phase === "recognized" || phase === "saved";
  const isSaved = phase === "saved";

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[360px] md:h-[380px] flex items-center justify-center mx-auto"
    >
      {/* Phone frame */}
      <div className="relative w-[220px] md:w-[240px] h-[340px] md:h-[360px]">
        <div
          className="rounded-[28px] bg-white border-2 border-gray shadow-xl overflow-hidden flex flex-col h-full"
          aria-hidden
        >
          {/* Phone status bar */}
          <div className="h-8 bg-gray/30 flex items-center justify-center">
            <div className="w-16 h-1.5 rounded-full bg-foreground/20" />
          </div>

          {/* App header */}
          <div className="px-3 py-2 border-b border-gray/50 flex items-center gap-2">
            <Receipt className="w-4 h-4 text-blue" strokeWidth={2} />
            <span className="text-xs font-semibold text-foreground">
              BillCraft
            </span>
          </div>

          {/* Content area */}
          <div className="flex-1 p-3 flex flex-col items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {phase === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center">
                    <Camera className="w-7 h-7 text-blue" strokeWidth={1.8} />
                  </div>
                  <p className="text-xs text-foreground/60 leading-snug">
                    Beleg fotografieren
                    <br />
                    oder hochladen
                  </p>
                </motion.div>
              )}

              {isScanning && (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col items-center gap-3"
                >
                  {/* Fake receipt preview */}
                  <div className="w-full rounded-lg bg-gray/40 border border-gray/60 p-3 relative overflow-hidden">
                    <div className="space-y-1.5">
                      <div className="h-2 bg-foreground/15 rounded w-3/4" />
                      <div className="h-2 bg-foreground/15 rounded w-1/2" />
                      <div className="h-2 bg-foreground/15 rounded w-2/3" />
                      <div className="h-2 bg-foreground/15 rounded w-1/3 mt-3" />
                      <div className="h-3 bg-foreground/20 rounded w-1/2 mt-1" />
                    </div>
                    {/* Scan line */}
                    <motion.div
                      className="absolute left-0 right-0 h-0.5 bg-blue/60"
                      initial={{ top: 0 }}
                      animate={{ top: "100%" }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                  <span className="text-xs text-blue font-medium">
                    Wird gescannt...
                  </span>
                </motion.div>
              )}

              {isRecognized && (
                <motion.div
                  key="recognized"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full space-y-2"
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <Check
                      className="w-4 h-4 text-green-600"
                      strokeWidth={2.5}
                    />
                    <span className="text-xs font-semibold text-green-700">
                      Erkannt
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-foreground/50">Lieferant</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground font-medium"
                      >
                        MediaMarkt Wien
                      </motion.span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/50">Betrag</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="text-foreground font-medium"
                      >
                        149,90 \u20AC
                      </motion.span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/50">Kategorie</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-foreground font-medium"
                      >
                        Betriebsausgabe
                      </motion.span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/50">Datum</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.65 }}
                        className="text-foreground font-medium"
                      >
                        08.03.2026
                      </motion.span>
                    </div>
                  </div>

                  {/* Save button */}
                  <AnimatePresence>
                    {isSaved && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="mt-3 flex justify-center"
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/15 text-green-700 text-xs font-semibold">
                          <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                          Gespeichert
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom nav bar */}
          <div className="h-10 border-t border-gray/50 bg-gray/20 flex items-center justify-around px-4">
            <div className="w-5 h-0.5 bg-foreground/20 rounded" />
            <div className="w-5 h-0.5 bg-blue rounded" />
            <div className="w-5 h-0.5 bg-foreground/20 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerMobilVisual;
