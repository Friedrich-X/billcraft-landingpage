"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Mail, CheckCircle2, FileText } from "lucide-react";

type Phase = "idle" | "step1" | "step2" | "step3" | "pause";

interface Step {
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement> & { strokeWidth?: number }>;
  sublabel: string;
}

const STEPS: Step[] = [
  { label: "Fällig", icon: Clock, sublabel: "Rechnung überfällig" },
  {
    label: "Erinnerung gesendet",
    icon: Mail,
    sublabel: "Automatische Mahnung",
  },
  { label: "Bezahlt", icon: CheckCircle2, sublabel: "Zahlung eingegangen" },
];

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STEP_COLORS = [
  {
    bg: "bg-orange-500",
    ring: "ring-orange-500/20",
    text: "text-orange-600",
    light: "bg-orange-500/10",
  },
  {
    bg: "bg-blue",
    ring: "ring-blue/20",
    text: "text-blue",
    light: "bg-blue/10",
  },
  {
    bg: "bg-green-500",
    ring: "ring-green-500/20",
    text: "text-green-600",
    light: "bg-green-500/10",
  },
];

const MahnwesenVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!isInView) return;

    if (phase === "idle") {
      setActiveStep(-1);
      const t = setTimeout(() => setPhase("step1"), 1200);
      return () => clearTimeout(t);
    }

    if (phase === "step1") {
      setActiveStep(0);
      const t = setTimeout(() => setPhase("step2"), 2000);
      return () => clearTimeout(t);
    }

    if (phase === "step2") {
      setActiveStep(1);
      const t = setTimeout(() => setPhase("step3"), 2000);
      return () => clearTimeout(t);
    }

    if (phase === "step3") {
      setActiveStep(2);
      const t = setTimeout(() => setPhase("pause"), 3000);
      return () => clearTimeout(t);
    }

    if (phase === "pause") {
      const t = setTimeout(() => setPhase("idle"), 2000);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, isInView]);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="relative w-full h-[320px] md:h-[360px] mx-auto">
        <div
          className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full"
          aria-hidden
        >
          {/* Header */}
          <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex justify-between items-center">
            <span className="text-base font-semibold text-foreground">
              Mahnwesen
            </span>
            <span className="text-xs text-foreground/50">Automatisch</span>
          </div>

          {/* Invoice context card */}
          <div className="px-4 pt-3 pb-2">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 8 }}
              transition={{ duration: 0.4, ease: SIGNATURE_EASE }}
              className="rounded-lg border border-gray/50 bg-gray/20 px-3 py-2 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center">
                <FileText className="w-4 h-4 text-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-foreground">
                  RE-048 · Steiner GmbH
                </div>
                <div className="text-[11px] text-foreground/50">
                  780 € · Fällig: 12.03.
                </div>
              </div>
              {activeStep >= 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, ease: SIGNATURE_EASE }}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${STEP_COLORS[activeStep].light} ${STEP_COLORS[activeStep].text}`}
                >
                  {STEPS[activeStep].label}
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Timeline stepper */}
          <div className="flex-1 px-6 py-4 flex flex-col justify-center">
            <div className="relative">
              {STEPS.map((step, i) => {
                const isActive = i <= activeStep;
                const isCurrent = i === activeStep;
                const StepIcon = step.icon;
                const colors = STEP_COLORS[i];

                return (
                  <div key={i} className="flex items-start gap-4 relative">
                    {/* Vertical connector */}
                    {i < STEPS.length - 1 && (
                      <div className="absolute left-[17px] top-[36px] w-0.5 h-[calc(100%-8px)]">
                        <motion.div
                          className={`w-full h-full rounded-full ${colors.bg}`}
                          initial={{ scaleY: 0, opacity: 0.3 }}
                          animate={{
                            scaleY: isActive ? 1 : 0,
                            opacity: isActive ? 1 : 0.2,
                          }}
                          style={{ transformOrigin: "top" }}
                          transition={{
                            duration: 0.5,
                            ease: SIGNATURE_EASE,
                            delay: isActive ? 0.2 : 0,
                          }}
                        />
                      </div>
                    )}

                    {/* Circle */}
                    <motion.div
                      className={`relative z-10 w-[35px] h-[35px] rounded-full flex items-center justify-center shrink-0 ${
                        isActive ? colors.bg : "bg-gray/40"
                      } ${isCurrent ? `ring-4 ${colors.ring}` : ""}`}
                      animate={{
                        scale: isCurrent ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.4, ease: SIGNATURE_EASE }}
                    >
                      <StepIcon
                        className={`w-4 h-4 ${isActive ? "text-white" : "text-foreground/30"}`}
                        strokeWidth={2.5}
                      />
                    </motion.div>

                    {/* Text */}
                    <div
                      className={`pb-6 pt-1 ${i === STEPS.length - 1 ? "pb-0" : ""}`}
                    >
                      <motion.div
                        animate={{ opacity: isActive ? 1 : 0.4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className={`text-sm font-semibold ${isActive ? "text-foreground" : "text-foreground/40"}`}
                        >
                          {step.label}
                        </div>
                        <div
                          className={`text-[11px] ${isActive ? "text-foreground/60" : "text-foreground/30"}`}
                        >
                          {step.sublabel}
                        </div>
                      </motion.div>
                      {isCurrent && i < STEPS.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="mt-1"
                        >
                          <span
                            className={`inline-block text-[10px] px-2 py-0.5 rounded-full ${colors.light} ${colors.text} font-medium`}
                          >
                            Wird verarbeitet...
                          </span>
                        </motion.div>
                      )}
                      {isCurrent && i === STEPS.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="mt-1"
                        >
                          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 font-medium">
                            Abgeschlossen
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer status */}
          <div className="px-4 py-2.5 border-t border-gray/50 bg-gray/20 flex items-center justify-between">
            <span className="text-[11px] text-foreground/50">Mahnablauf</span>
            <div className="flex items-center gap-1">
              {STEPS.map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-6 h-1.5 rounded-full ${i <= activeStep ? STEP_COLORS[i].bg : "bg-gray/50"}`}
                  animate={{ opacity: i <= activeStep ? 1 : 0.4 }}
                  transition={{ duration: 0.3, ease: SIGNATURE_EASE }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MahnwesenVisual;
