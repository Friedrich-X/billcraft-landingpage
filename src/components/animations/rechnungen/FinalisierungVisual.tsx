"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Phase =
  | "draft"
  | "locking"
  | "locked"
  | "checkmark"
  | "pause"
  | "reset";

export default function FinalisierungVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [phase, setPhase] = useState<Phase>("draft");

  useEffect(() => {
    if (!isInView) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, ms));
    };

    if (phase === "draft") schedule(() => setPhase("locking"), 1800);
    if (phase === "locking") schedule(() => setPhase("locked"), 1000);
    if (phase === "locked") schedule(() => setPhase("checkmark"), 800);
    if (phase === "checkmark") schedule(() => setPhase("pause"), 4000);
    if (phase === "pause") schedule(() => setPhase("reset"), 500);
    if (phase === "reset") schedule(() => setPhase("draft"), 300);

    return () => timers.forEach(clearTimeout);
  }, [phase, isInView]);

  const isLocked = phase === "locked" || phase === "checkmark" || phase === "pause";

  return (
    <div
      ref={ref}
      className="rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex items-center justify-center"
    >
      <div className="relative w-full max-w-[280px]">
        {/* Invoice Card */}
        <motion.div
          className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden"
          animate={{
            borderColor: isLocked ? "var(--blue)" : "var(--gray)",
          }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {/* Header */}
          <div className="px-4 pt-4 pb-3 border-b border-gray/60">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-semibold text-foreground tracking-wide uppercase">
                Rechnung #2025-047
              </div>
              <AnimatePresence mode="wait">
                {!isLocked ? (
                  <motion.span
                    key="draft"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange/15 text-orange"
                  >
                    Entwurf
                  </motion.span>
                ) : (
                  <motion.span
                    key="final"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue/15 text-blue"
                  >
                    Finalisiert
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Invoice Lines */}
          <div className="px-4 py-3 space-y-2.5">
            {[
              { label: "Webdesign Paket", amount: "2.400,00" },
              { label: "SEO Optimierung", amount: "800,00" },
              { label: "Hosting 12 Monate", amount: "240,00" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-between"
                animate={{
                  opacity: isLocked ? 0.55 : 1,
                }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <span className="text-[11px] text-foreground/70">{item.label}</span>
                <span className="text-[11px] font-medium text-foreground">{item.amount} &euro;</span>
              </motion.div>
            ))}

            <div className="border-t border-gray/60 pt-2 mt-2 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-foreground">Gesamt</span>
              <span className="text-[12px] font-bold text-foreground">3.440,00 &euro;</span>
            </div>
          </div>

          {/* Footer with lock indicator */}
          <motion.div
            className="px-4 py-2.5 border-t"
            animate={{
              backgroundColor: isLocked ? "rgba(92, 108, 254, 0.06)" : "transparent",
              borderColor: isLocked ? "rgba(92, 108, 254, 0.15)" : "var(--gray)",
            }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex items-center justify-center gap-1.5">
              <AnimatePresence mode="wait">
                {phase === "locking" && (
                  <motion.div
                    key="spinner"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ rotate: { duration: 0.8, ease: "linear" }, duration: 0.2 }}
                    className="w-3.5 h-3.5 border-2 border-blue/30 border-t-blue rounded-full"
                  />
                )}
                {isLocked && (
                  <motion.svg
                    key="lock"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--blue)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </motion.svg>
                )}
              </AnimatePresence>
              <motion.span
                className="text-[10px] font-medium"
                animate={{
                  color: isLocked ? "var(--blue)" : "var(--foreground)",
                  opacity: isLocked || phase === "locking" ? 1 : 0.4,
                }}
                transition={{ duration: 0.3 }}
              >
                {phase === "locking"
                  ? "Wird finalisiert..."
                  : isLocked
                    ? "Rechtssicher gesperrt"
                    : "Bearbeitung möglich"}
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Success checkmark overlay */}
        <AnimatePresence>
          {(phase === "checkmark" || phase === "pause") && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="absolute -top-3 -right-3 w-8 h-8 bg-blue rounded-full flex items-center justify-center shadow-md"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
