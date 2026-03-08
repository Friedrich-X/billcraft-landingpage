"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Loader2, FileDown, Check, ArrowRight } from "lucide-react";

type Phase = "idle" | "step1" | "step2" | "step3" | "complete" | "pause";

interface ExportStep {
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  label: string;
  sublabel: string;
}

const STEPS: ExportStep[] = [
  {
    icon: <Calendar className="w-5 h-5" />,
    label: "Zeitraum w\u00E4hlen",
    sublabel: "J\u00E4nner \u2013 M\u00E4rz 2026",
  },
  {
    icon: <Loader2 className="w-5 h-5" />,
    activeIcon: <Loader2 className="w-5 h-5 animate-spin" />,
    label: "Bericht erstellen",
    sublabel: "Daten werden aufbereitet\u2026",
  },
  {
    icon: <FileDown className="w-5 h-5" />,
    label: "PDF exportiert \u2713",
    sublabel: "Bericht_Q1_2026.pdf",
  },
];

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DELAY_IDLE = 1000;
const DELAY_STEP1 = 1800;
const DELAY_STEP2 = 2200;
const DELAY_STEP3 = 1800;
const DELAY_PAUSE = 5000;

const PHASE_ORDER: Phase[] = [
  "idle",
  "step1",
  "step2",
  "step3",
  "complete",
  "pause",
];

const SteuerExportVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");

  const activeStepIndex = PHASE_ORDER.indexOf(phase) - 1;

  useEffect(() => {
    if (!isInView) {
      setPhase("idle");
      return;
    }

    if (phase === "idle") {
      const t = setTimeout(() => setPhase("step1"), DELAY_IDLE);
      return () => clearTimeout(t);
    }

    if (phase === "step1") {
      const t = setTimeout(() => setPhase("step2"), DELAY_STEP1);
      return () => clearTimeout(t);
    }

    if (phase === "step2") {
      const t = setTimeout(() => setPhase("step3"), DELAY_STEP2);
      return () => clearTimeout(t);
    }

    if (phase === "step3") {
      const t = setTimeout(() => setPhase("complete"), DELAY_STEP3);
      return () => clearTimeout(t);
    }

    if (phase === "complete") {
      const t = setTimeout(() => setPhase("pause"), 200);
      return () => clearTimeout(t);
    }

    if (phase === "pause") {
      const t = setTimeout(() => setPhase("idle"), DELAY_PAUSE);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, isInView]);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex items-center gap-2">
          <FileDown className="w-4 h-4 text-purple-600" />
          <span className="text-base font-semibold text-foreground">
            Steuerberater-Export
          </span>
        </div>

        {/* Steps */}
        <div className="flex-1 p-5 flex flex-col justify-center">
          <div className="space-y-3">
            {STEPS.map((step, i) => {
              const isActive = i === activeStepIndex;
              const isCompleted =
                i < activeStepIndex ||
                phase === "complete" ||
                phase === "pause";
              const isPending =
                i > activeStepIndex &&
                phase !== "complete" &&
                phase !== "pause";

              return (
                <div key={i} className="flex flex-col">
                  <motion.div
                    animate={{
                      opacity: isPending ? 0.4 : 1,
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3, ease: SIGNATURE_EASE }}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl border transition-colors duration-300 ${
                      isActive
                        ? "bg-purple-50 border-purple-200 shadow-sm"
                        : isCompleted
                          ? "bg-green-50/50 border-green-200"
                          : "bg-gray/20 border-gray/50"
                    }`}
                  >
                    {/* Step number / icon */}
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isActive
                          ? "bg-purple-100 text-purple-600"
                          : isCompleted
                            ? "bg-green-100 text-green-600"
                            : "bg-gray/40 text-foreground/40"
                      }`}
                    >
                      {isCompleted ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                        >
                          <Check className="w-5 h-5" />
                        </motion.div>
                      ) : isActive && step.activeIcon ? (
                        step.activeIcon
                      ) : (
                        step.icon
                      )}
                    </div>

                    {/* Step text */}
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-sm font-semibold block ${
                          isActive
                            ? "text-purple-700"
                            : isCompleted
                              ? "text-green-700"
                              : "text-foreground/50"
                        }`}
                      >
                        {step.label}
                      </span>
                      <span
                        className={`text-xs block ${
                          isActive
                            ? "text-purple-500"
                            : isCompleted
                              ? "text-green-500"
                              : "text-foreground/40"
                        }`}
                      >
                        {step.sublabel}
                      </span>
                    </div>

                    {/* Step number badge */}
                    <span
                      className={`text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        isActive
                          ? "bg-purple-200 text-purple-700"
                          : isCompleted
                            ? "bg-green-200 text-green-700"
                            : "bg-gray/40 text-foreground/40"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </motion.div>

                  {/* Arrow between steps */}
                  {i < STEPS.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowRight
                        className={`w-3.5 h-3.5 rotate-90 transition-colors duration-300 ${
                          isCompleted ? "text-green-400" : "text-foreground/20"
                        }`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Success message */}
          {(phase === "complete" || phase === "pause") && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2, ease: SIGNATURE_EASE }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 border border-green-200 mt-4"
            >
              <Check className="w-4 h-4 text-green-600 shrink-0" />
              <span className="text-xs font-semibold text-green-700">
                Export bereit — Bericht_Q1_2026.pdf (2,4 MB)
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SteuerExportVisual;
