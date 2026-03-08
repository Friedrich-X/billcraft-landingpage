"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Sparkles,
  BookOpen,
  Download,
  Check,
  ArrowRight,
} from "lucide-react";

type Phase = "idle" | "step1" | "step2" | "step3" | "step4" | "done";

interface WorkflowStep {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
}

const STEPS: WorkflowStep[] = [
  {
    icon: <FileText className="w-5 h-5" />,
    label: "Beleg",
    sublabel: "Hochgeladen",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    label: "KI-Analyse",
    sublabel: "Kategorisiert",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    label: "Buchung",
    sublabel: "Automatisch",
  },
  {
    icon: <Download className="w-5 h-5" />,
    label: "Export",
    sublabel: "Steuerberater",
  },
];

const DELAY_IDLE = 1200;
const DELAY_PER_STEP = 900;
const DELAY_DONE_PAUSE = 5000;

const PHASE_ORDER: Phase[] = [
  "idle",
  "step1",
  "step2",
  "step3",
  "step4",
  "done",
];

const KiAutomatisierungVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");

  const activeStep = PHASE_ORDER.indexOf(phase) - 1;

  useEffect(() => {
    if (!isInView) return;

    if (phase === "idle") {
      const t = setTimeout(() => setPhase("step1"), DELAY_IDLE);
      return () => clearTimeout(t);
    }

    if (phase === "step1" || phase === "step2" || phase === "step3") {
      const nextPhase = PHASE_ORDER[PHASE_ORDER.indexOf(phase) + 1] as Phase;
      const t = setTimeout(() => setPhase(nextPhase), DELAY_PER_STEP);
      return () => clearTimeout(t);
    }

    if (phase === "step4") {
      const t = setTimeout(() => setPhase("done"), DELAY_PER_STEP);
      return () => clearTimeout(t);
    }

    if (phase === "done") {
      const t = setTimeout(() => setPhase("idle"), DELAY_DONE_PAUSE);
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
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-base font-semibold text-foreground">
            Automatischer Workflow
          </span>
        </div>

        {/* Workflow steps */}
        <div className="flex-1 p-5 flex flex-col justify-center">
          <div className="space-y-3">
            {STEPS.map((step, i) => {
              const isActive = i === activeStep;
              const isCompleted = i < activeStep || phase === "done";
              const isPending = i > activeStep && phase !== "done";

              return (
                <div key={i} className="flex flex-col">
                  <motion.div
                    animate={{
                      opacity: isPending ? 0.4 : 1,
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors duration-300 ${
                      isActive
                        ? "bg-purple-50 border-purple-200 shadow-sm"
                        : isCompleted
                          ? "bg-green-50/50 border-green-200"
                          : "bg-gray/20 border-gray/50"
                    }`}
                  >
                    {/* Step icon */}
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
                      ) : isActive ? (
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatDelay: 0.4,
                          }}
                        >
                          {step.icon}
                        </motion.div>
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

                    {/* Progress indicator */}
                    {isActive && (
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-xs font-medium text-purple-500"
                      >
                        Läuft...
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Arrow between steps */}
                  {i < STEPS.length - 1 && (
                    <div className="flex justify-center py-0.5">
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

          {/* Done message */}
          {phase === "done" && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 border border-green-200 mt-3"
            >
              <Check className="w-4 h-4 text-green-600 shrink-0" />
              <span className="text-xs font-semibold text-green-700">
                Workflow abgeschlossen — 0 manuelle Schritte
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KiAutomatisierungVisual;
