"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Phase = "idle" | "bars" | "total" | "done";

interface RevenueEntry {
  company: string;
  amount: number;
  color: string;
  barColor: string;
}

const ENTRIES: RevenueEntry[] = [
  {
    company: "Müller GmbH",
    amount: 12400,
    color: "text-pink",
    barColor: "bg-pink",
  },
  {
    company: "Weber KG",
    amount: 8900,
    color: "text-blue",
    barColor: "bg-blue",
  },
  {
    company: "Bauer AG",
    amount: 6200,
    color: "text-purple-500",
    barColor: "bg-purple-500",
  },
  {
    company: "Schmidt e.U.",
    amount: 4100,
    color: "text-orange-500",
    barColor: "bg-orange-500",
  },
];

const MAX_AMOUNT = 12400;
const TOTAL = ENTRIES.reduce((sum, e) => sum + e.amount, 0);

const DELAY_IDLE = 800;
const DELAY_PER_BAR = 350;
const DELAY_TOTAL = 1500;
const DELAY_DONE = 5000;

const formatCurrency = (val: number) => val.toLocaleString("de-DE") + " €";

const KundenUmsatzVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");
  const [visibleBars, setVisibleBars] = useState(0);
  const [animatedTotal, setAnimatedTotal] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setPhase("idle");
      setVisibleBars(0);
      setAnimatedTotal(0);
      return;
    }

    if (phase === "idle") {
      setVisibleBars(0);
      setAnimatedTotal(0);
      const t = setTimeout(() => setPhase("bars"), DELAY_IDLE);
      return () => clearTimeout(t);
    }

    if (phase === "bars") {
      if (visibleBars < ENTRIES.length) {
        const t = setTimeout(() => setVisibleBars((n) => n + 1), DELAY_PER_BAR);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("total"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "total") {
      const duration = DELAY_TOTAL;
      const steps = 25;
      const interval = duration / steps;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3);
        setAnimatedTotal(Math.round(TOTAL * eased));
        if (step >= steps) {
          clearInterval(timer);
          setPhase("done");
        }
      }, interval);
      return () => clearInterval(timer);
    }

    if (phase === "done") {
      const t = setTimeout(() => {
        setPhase("idle");
      }, DELAY_DONE);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, visibleBars, isInView]);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-pink" />
          <span className="text-base font-semibold text-foreground">
            Umsatz pro Kunde
          </span>
        </div>

        {/* Total counter */}
        <div className="px-4 py-3 border-b border-gray/30 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <span className="text-xs text-foreground/60">Gesamt:</span>
          <motion.span
            className="text-sm font-bold text-foreground tabular-nums"
            key={phase === "total" || phase === "done" ? "counting" : "zero"}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: SIGNATURE_EASE }}
          >
            {formatCurrency(animatedTotal)}
          </motion.span>
        </div>

        {/* Bar chart */}
        <div className="flex-1 px-4 py-3 space-y-3 flex flex-col justify-center">
          {ENTRIES.map((entry, i) => {
            const visible = i < visibleBars;
            const barWidth = (entry.amount / MAX_AMOUNT) * 100;

            return (
              <motion.div
                key={entry.company}
                initial={{ opacity: 0, x: -12 }}
                animate={
                  visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }
                }
                transition={{
                  duration: 0.35,
                  ease: SIGNATURE_EASE,
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-medium text-foreground">
                    {entry.company}
                  </span>
                  <span
                    className={`text-[11px] font-semibold tabular-nums ${entry.color}`}
                  >
                    {formatCurrency(entry.amount)}
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-gray/60 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${entry.barColor}`}
                    style={{ width: `${barWidth}%`, transformOrigin: "left" }}
                    initial={{ scaleX: 0 }}
                    animate={visible ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: SIGNATURE_EASE,
                      delay: 0.1,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KundenUmsatzVisual;
