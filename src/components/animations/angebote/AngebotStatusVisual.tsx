"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Send, Eye, CheckCircle, Clock } from "lucide-react";

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    icon: Send,
    label: "Versendet",
    time: "Gerade eben",
    color: "text-blue",
    bg: "bg-blue",
  },
  {
    icon: Eye,
    label: "Geöffnet",
    time: "Vor 2 Std.",
    color: "text-purple",
    bg: "bg-purple",
  },
  {
    icon: Clock,
    label: "In Prüfung",
    time: "Vor 1 Tag",
    color: "text-orange",
    bg: "bg-orange",
  },
  {
    icon: CheckCircle,
    label: "Akzeptiert",
    time: "Vor 3 Tagen",
    color: "text-green",
    bg: "bg-green",
  },
];

const AngebotStatusVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!isInView) {
      setActiveStep(-1);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    STEPS.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveStep(i), 600 + i * 700));
    });

    timers.push(setTimeout(() => setActiveStep(-1), 5500));

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex items-center gap-2">
          <Send className="w-4 h-4 text-blue" />
          <span className="text-base font-semibold text-foreground">
            Angebotsstatus
          </span>
        </div>

        {/* Angebot info */}
        <div className="px-4 pt-3 pb-2 border-b border-gray/30">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9px] text-foreground/40 uppercase tracking-wider">
                Angebot
              </span>
              <p className="text-xs font-medium text-foreground">
                AG-2026-0015
              </p>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-foreground/40 uppercase tracking-wider">
                Betrag
              </span>
              <p className="text-xs font-bold text-foreground tabular-nums">
                3.950 €
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex-1 px-4 py-3 h-[200px] relative">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isActive = i <= activeStep;
            const isCurrent = i === activeStep;

            return (
              <div
                key={i}
                className="absolute left-4 right-4 flex items-center gap-3"
                style={{ top: `${12 + i * 44}px` }}
              >
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute left-[13px] top-[28px] w-0.5 h-[20px]"
                    style={{
                      backgroundColor: isActive
                        ? "var(--foreground)"
                        : "var(--gray)",
                      opacity: isActive ? 0.15 : 1,
                    }}
                  />
                )}

                {/* Icon */}
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      key={`active-${i}`}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.35,
                        ease: SIGNATURE_EASE,
                      }}
                      className={`w-7 h-7 rounded-full ${step.bg}/15 flex items-center justify-center shrink-0 ${isCurrent ? "ring-2 ring-offset-1 ring-current" : ""} ${step.color}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </motion.div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-gray flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-foreground/15" />
                    </div>
                  )}
                </AnimatePresence>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  animate={
                    isActive ? { opacity: 1 } : { opacity: 0.3 }
                  }
                  transition={{ duration: 0.3, ease: SIGNATURE_EASE }}
                  className="flex-1 flex items-center justify-between"
                >
                  <span
                    className={`text-xs font-medium ${isCurrent ? step.color : "text-foreground"}`}
                  >
                    {step.label}
                  </span>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[10px] text-foreground/35"
                    >
                      {step.time}
                    </motion.span>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AngebotStatusVisual;
