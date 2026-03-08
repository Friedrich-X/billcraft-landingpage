"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, MousePointer2 } from "lucide-react";

type Phase =
  | "empty"
  | "select_customer"
  | "add_position"
  | "add_total"
  | "cursor_enter"
  | "click_send"
  | "done"
  | "pause";

const DELAYS: Record<Phase, number> = {
  empty: 1000,
  select_customer: 600,
  add_position: 600,
  add_total: 800,
  cursor_enter: 900,
  click_send: 800,
  done: 6000,
  pause: 500,
};

const PHASE_ORDER: Phase[] = [
  "empty",
  "select_customer",
  "add_position",
  "add_total",
  "cursor_enter",
  "click_send",
  "done",
  "pause",
];

const FreelancerRechnungVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("empty");

  useEffect(() => {
    if (!isInView) return;

    const nextPhase =
      phase === "pause"
        ? "empty"
        : PHASE_ORDER[PHASE_ORDER.indexOf(phase) + 1] || "empty";

    const t = setTimeout(() => setPhase(nextPhase), DELAYS[phase]);
    return () => clearTimeout(t);
  }, [phase, isInView]);

  const phaseIndex = PHASE_ORDER.indexOf(phase);
  const showCustomer = phaseIndex >= 1 && phaseIndex < PHASE_ORDER.length - 1;
  const showPosition = phaseIndex >= 2 && phaseIndex < PHASE_ORDER.length - 1;
  const showTotal = phaseIndex >= 3 && phaseIndex < PHASE_ORDER.length - 1;
  const showCursor = phase === "cursor_enter" || phase === "click_send";
  const isDone = phase === "done";

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[360px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="relative w-full h-[340px] md:h-[360px] mx-auto">
        <div
          className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full"
          aria-hidden
        >
          {/* Header */}
          <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex justify-between items-center">
            <span className="text-base font-semibold text-foreground">
              Neue Rechnung
            </span>
            <span className="text-sm text-foreground/50">Schnellmodus</span>
          </div>

          {/* Form content */}
          <div className="p-4 space-y-3 text-sm flex-1 min-h-0 overflow-hidden">
            {/* Customer field */}
            <div>
              <span className="text-xs text-foreground/50 uppercase">
                Kunde
              </span>
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{
                  opacity: showCustomer ? 1 : 0.3,
                  y: showCustomer ? 0 : 4,
                }}
                transition={{ duration: 0.3 }}
                className="mt-1 rounded-lg border border-gray/80 px-3 py-2 bg-gray/20"
              >
                <span className="text-foreground font-medium">
                  {showCustomer ? "Studio Weber GmbH" : "Kunde waehlen..."}
                </span>
              </motion.div>
            </div>

            {/* Position */}
            <div>
              <span className="text-xs text-foreground/50 uppercase">
                Position
              </span>
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{
                  opacity: showPosition ? 1 : 0.3,
                  x: showPosition ? 0 : -6,
                }}
                transition={{ duration: 0.3 }}
                className="mt-1 rounded-lg border border-gray/80 px-3 py-2 bg-gray/20 flex justify-between"
              >
                <span className="text-foreground">
                  {showPosition ? "Webdesign · 8 Std." : "—"}
                </span>
                <span className="text-foreground font-medium">
                  {showPosition ? "960,00 \u20AC" : ""}
                </span>
              </motion.div>
            </div>

            {/* Total */}
            <AnimatePresence>
              {showTotal && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray/50 pt-3 mt-2"
                >
                  <div className="flex justify-between text-foreground/60 text-xs mb-1">
                    <span>Netto</span>
                    <span>960,00 \u20AC</span>
                  </div>
                  <div className="flex justify-between text-foreground/60 text-xs mb-1">
                    <span>USt 20%</span>
                    <span>192,00 \u20AC</span>
                  </div>
                  <div className="flex justify-between font-semibold text-foreground text-sm pt-1 border-t border-gray/50">
                    <span>Gesamt</span>
                    <span>1.152,00 \u20AC</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Send button area */}
          <div className="px-4 pb-3 pt-1 shrink-0 flex justify-end min-h-[44px]">
            <AnimatePresence>
              {showTotal && !isDone && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-base font-semibold shadow-md transition-colors ${
                      phase === "click_send"
                        ? "bg-blue text-white scale-95"
                        : "bg-foreground/90 text-white"
                    }`}
                  >
                    Rechnung senden
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Status bar */}
          <div className="relative h-11 shrink-0 border-t border-gray/50 overflow-hidden">
            <AnimatePresence mode="wait">
              {isDone ? (
                <motion.div
                  key="sent"
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-11 bg-green-500/15 px-4 flex items-center justify-center gap-2 absolute inset-x-0"
                >
                  <Check
                    className="w-5 h-5 text-green-600 shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-base font-semibold text-green-700">
                    Versendet
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="timer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-11 bg-gray/30 px-4 flex items-center justify-center gap-2 absolute inset-x-0"
                >
                  <span className="text-sm text-foreground/50">
                    {phaseIndex >= 1
                      ? `${Math.min(phaseIndex * 1, 4)} von 4 Schritten`
                      : "Bereit"}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Cursor */}
        <AnimatePresence>
          {showCursor && (
            <motion.div
              initial={{ x: 32, y: 32, opacity: 0 }}
              animate={{
                x: -80,
                y: -52,
                opacity: 1,
                scale: phase === "click_send" ? 0.85 : 1,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                x: { duration: 0.7, ease: "easeOut" },
                y: { duration: 0.7, ease: "easeOut" },
                scale: { duration: 0.12 },
              }}
              className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none z-10"
              aria-hidden
            >
              <MousePointer2
                className="w-6 h-6 fill-white stroke-foreground drop-shadow-md"
                strokeWidth={2.5}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FreelancerRechnungVisual;
