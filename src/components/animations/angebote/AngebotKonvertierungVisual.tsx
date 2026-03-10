"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FileText, ArrowRight, Check } from "lucide-react";

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Phase = "idle" | "angebot" | "arrow" | "converting" | "rechnung" | "done" | "pause";

const AngebotKonvertierungVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (!isInView) {
      setPhase("idle");
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setPhase("angebot"), 400));
    timers.push(setTimeout(() => setPhase("arrow"), 1200));
    timers.push(setTimeout(() => setPhase("converting"), 1800));
    timers.push(setTimeout(() => setPhase("rechnung"), 2600));
    timers.push(setTimeout(() => setPhase("done"), 3200));
    timers.push(setTimeout(() => setPhase("idle"), 6500));

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  const showAngebot = phase !== "idle";
  const showArrow = ["arrow", "converting", "rechnung", "done"].includes(phase);
  const showRechnung = ["rechnung", "done"].includes(phase);
  const isConverting = phase === "converting";
  const isDone = phase === "done";

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="flex items-center justify-center gap-3 h-full">
        {/* Angebot Card */}
        <AnimatePresence>
          {showAngebot && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{
                opacity: isDone ? 0.5 : 1,
                scale: isDone ? 0.95 : 1,
                x: 0,
              }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ duration: 0.5, ease: SIGNATURE_EASE }}
              className="w-[140px] rounded-xl bg-white border border-gray shadow-lg overflow-hidden shrink-0"
            >
              <div className="px-3 py-2 border-b border-gray/50 bg-gray/30 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue" />
                <span className="text-[11px] font-semibold text-foreground">
                  Angebot
                </span>
              </div>
              <div className="p-3 space-y-2">
                <div>
                  <span className="text-[8px] text-foreground/35 uppercase tracking-wider">
                    Kunde
                  </span>
                  <p className="text-[10px] font-medium text-foreground">
                    Weber Digital
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 bg-foreground/8 rounded-full w-full" />
                  <div className="h-1.5 bg-foreground/8 rounded-full w-3/4" />
                  <div className="h-1.5 bg-foreground/8 rounded-full w-5/6" />
                </div>
                <div className="pt-1 border-t border-gray/30 flex items-center justify-between">
                  <span className="text-[8px] text-foreground/35">
                    Gesamt
                  </span>
                  <span className="text-[10px] font-bold text-foreground tabular-nums">
                    3.950 €
                  </span>
                </div>
              </div>
              <div className="px-3 py-1.5 bg-blue/5 border-t border-gray/30">
                <span className="text-[9px] font-semibold text-blue">
                  ✓ Akzeptiert
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Arrow */}
        <AnimatePresence>
          {showArrow && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: SIGNATURE_EASE }}
              className="flex flex-col items-center gap-1.5 shrink-0"
            >
              {isConverting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-8 h-8 rounded-full border-2 border-blue/20 border-t-blue"
                />
              ) : (
                <motion.div
                  className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center"
                  animate={
                    isDone
                      ? { backgroundColor: "rgba(0, 219, 55, 0.1)" }
                      : {}
                  }
                >
                  {isDone ? (
                    <Check className="w-4 h-4 text-green" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-blue" />
                  )}
                </motion.div>
              )}
              <span className="text-[9px] text-foreground/40 font-medium whitespace-nowrap">
                {isConverting
                  ? "Konvertiere…"
                  : isDone
                    ? "Übernommen"
                    : "1 Klick"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rechnung Card */}
        <AnimatePresence>
          {showRechnung && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              transition={{ duration: 0.5, ease: SIGNATURE_EASE }}
              className="w-[140px] rounded-xl bg-white border border-gray shadow-lg overflow-hidden shrink-0"
            >
              <div className="px-3 py-2 border-b border-gray/50 bg-gray/30 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-pink" />
                <span className="text-[11px] font-semibold text-foreground">
                  Rechnung
                </span>
              </div>
              <div className="p-3 space-y-2">
                <div>
                  <span className="text-[8px] text-foreground/35 uppercase tracking-wider">
                    Kunde
                  </span>
                  <p className="text-[10px] font-medium text-foreground">
                    Weber Digital
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 bg-foreground/8 rounded-full w-full" />
                  <div className="h-1.5 bg-foreground/8 rounded-full w-3/4" />
                  <div className="h-1.5 bg-foreground/8 rounded-full w-5/6" />
                </div>
                <div className="pt-1 border-t border-gray/30 flex items-center justify-between">
                  <span className="text-[8px] text-foreground/35">
                    Gesamt
                  </span>
                  <span className="text-[10px] font-bold text-foreground tabular-nums">
                    3.950 €
                  </span>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isDone ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="px-3 py-1.5 bg-pink/5 border-t border-gray/30"
              >
                <span className="text-[9px] font-semibold text-pink">
                  RE-2026-0042
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AngebotKonvertierungVisual;
