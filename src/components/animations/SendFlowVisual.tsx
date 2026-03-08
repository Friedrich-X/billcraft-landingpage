"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Mail, Send, CheckCircle2, CreditCard } from "lucide-react";

/**
 * Versand-Flow Animation: Email compose -> Send -> Delivered -> Paid
 * Shows the complete lifecycle of sending an invoice via email.
 */

type Phase = "compose" | "sending" | "delivered" | "paid" | "pause";

const DELAY_COMPOSE = 1800;
const DELAY_SENDING = 1600;
const DELAY_DELIVERED = 2000;
const DELAY_PAID = 6000;

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    id: "compose",
    label: "Erstellt",
    icon: Mail,
    color: "text-blue",
    bg: "bg-blue/10",
    ring: "ring-blue/30",
  },
  {
    id: "sending",
    label: "Versendet",
    icon: Send,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    ring: "ring-orange-500/30",
  },
  {
    id: "delivered",
    label: "Zugestellt",
    icon: CheckCircle2,
    color: "text-purple",
    bg: "bg-purple/10",
    ring: "ring-purple/30",
  },
  {
    id: "paid",
    label: "Bezahlt",
    icon: CreditCard,
    color: "text-green-600",
    bg: "bg-green-500/10",
    ring: "ring-green-500/30",
  },
];

const SendFlowVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("compose");

  useEffect(() => {
    if (!isInView) return;

    if (phase === "compose") {
      const t = setTimeout(() => setPhase("sending"), DELAY_COMPOSE);
      return () => clearTimeout(t);
    }
    if (phase === "sending") {
      const t = setTimeout(() => setPhase("delivered"), DELAY_SENDING);
      return () => clearTimeout(t);
    }
    if (phase === "delivered") {
      const t = setTimeout(() => setPhase("paid"), DELAY_DELIVERED);
      return () => clearTimeout(t);
    }
    if (phase === "paid") {
      const t = setTimeout(() => setPhase("compose"), DELAY_PAID);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, isInView]);

  const phaseIndex = STEPS.findIndex((s) => s.id === phase);

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
              Rechnungsversand
            </span>
            <span className="text-sm text-foreground/50">RE-2025-017</span>
          </div>

          <div className="p-4 flex-1 min-h-0 flex flex-col">
            {/* Email preview card */}
            <motion.div
              className="rounded-lg border border-gray/60 bg-gray/20 p-3 mb-4"
              animate={{
                borderColor:
                  phase === "compose"
                    ? "rgba(92, 108, 254, 0.3)"
                    : "rgba(0,0,0,0.06)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-blue shrink-0" />
                <span className="text-xs text-foreground/60">An:</span>
                <span className="text-xs text-foreground">
                  office@mueller-gmbh.at
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-foreground/60 ml-6">
                  Betreff:
                </span>
                <span className="text-xs text-foreground">
                  Rechnung RE-2025-017
                </span>
              </div>
              <div className="ml-6 text-xs text-foreground/50 border-t border-gray/40 pt-2">
                Sehr geehrte Damen und Herren, anbei erhalten Sie...
              </div>
            </motion.div>

            {/* Progress steps */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-2.5">
                {STEPS.map((step, i) => {
                  const isActive = i <= phaseIndex;
                  const isCurrent = i === phaseIndex;
                  const StepIcon = step.icon;

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0.4, x: -8 }}
                      animate={{
                        opacity: isActive ? 1 : 0.35,
                        x: isActive ? 0 : -8,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: SIGNATURE_EASE,
                        delay: isCurrent ? 0.1 : 0,
                      }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        animate={{
                          scale: isCurrent ? [1, 1.15, 1] : 1,
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: isCurrent ? Infinity : 0,
                          repeatDelay: 1,
                        }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          isActive ? step.bg : "bg-gray/40"
                        } ${isCurrent ? `ring-2 ${step.ring}` : ""}`}
                      >
                        <StepIcon
                          className={`w-4 h-4 ${isActive ? step.color : "text-foreground/30"}`}
                          strokeWidth={2}
                        />
                      </motion.div>

                      <div className="flex-1 flex items-center gap-2">
                        <span
                          className={`text-sm font-medium ${
                            isActive ? "text-foreground" : "text-foreground/40"
                          }`}
                        >
                          {step.label}
                        </span>

                        {/* Connector line */}
                        {i < STEPS.length - 1 && (
                          <div className="flex-1 h-px bg-gray/50 relative overflow-hidden">
                            <motion.div
                              className="absolute inset-y-0 left-0 bg-blue/40"
                              initial={{ width: "0%" }}
                              animate={{
                                width: isActive ? "100%" : "0%",
                              }}
                              transition={{
                                duration: 0.5,
                                ease: SIGNATURE_EASE,
                              }}
                            />
                          </div>
                        )}

                        {/* Timestamp */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                              className="text-[11px] text-foreground/40 shrink-0 tabular-nums"
                            >
                              {i === 0
                                ? "09:14"
                                : i === 1
                                  ? "09:14"
                                  : i === 2
                                    ? "09:15"
                                    : "14:32"}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="px-4 py-2.5 border-t border-gray/50 bg-gray/20 flex items-center justify-between">
            <span className="text-xs text-foreground/50">
              Betrag: 1.240,00 EUR
            </span>
            <AnimatePresence mode="wait">
              {phase === "paid" ? (
                <motion.span
                  key="paid"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-xs font-semibold text-green-600"
                >
                  Zahlung eingegangen
                </motion.span>
              ) : (
                <motion.span
                  key="pending"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-xs text-foreground/40"
                >
                  Ausstehend
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendFlowVisual;
