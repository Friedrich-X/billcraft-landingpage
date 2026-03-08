"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

type Phase = "idle" | "counting" | "complete" | "pause";

interface MetricCard {
  label: string;
  target: number;
  suffix: string;
  trend: string;
  trendUp: boolean;
  color: {
    bg: string;
    text: string;
    iconBg: string;
    trendText: string;
  };
}

const METRICS: MetricCard[] = [
  {
    label: "Umsatz",
    target: 24800,
    suffix: " \u20AC",
    trend: "\u2191 12%",
    trendUp: true,
    color: {
      bg: "bg-green-50",
      text: "text-green-700",
      iconBg: "bg-green-100",
      trendText: "text-green-600",
    },
  },
  {
    label: "Ausgaben",
    target: 8400,
    suffix: " \u20AC",
    trend: "\u2193 5%",
    trendUp: false,
    color: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      iconBg: "bg-orange-100",
      trendText: "text-orange-600",
    },
  },
  {
    label: "Gewinn",
    target: 16400,
    suffix: " \u20AC",
    trend: "\u2191 18%",
    trendUp: true,
    color: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      iconBg: "bg-blue-100",
      trendText: "text-blue-600",
    },
  },
];

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DELAY_IDLE = 800;
const DELAY_COUNTING = 2000;
const DELAY_PAUSE = 5000;

function formatNumber(n: number): string {
  return n.toLocaleString("de-DE");
}

const AnimatedCounter: React.FC<{
  target: number;
  suffix: string;
  isActive: boolean;
  className?: string;
}> = ({ target, suffix, isActive, className = "" }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setValue(0);
      return;
    }

    const duration = 1600;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (step >= steps) {
        clearInterval(interval);
        setValue(target);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isActive, target]);

  return (
    <span className={`tabular-nums ${className}`}>
      {formatNumber(value)}
      {suffix}
    </span>
  );
};

const DashboardWidgetsVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (!isInView) {
      setPhase("idle");
      return;
    }

    if (phase === "idle") {
      const t = setTimeout(() => setPhase("counting"), DELAY_IDLE);
      return () => clearTimeout(t);
    }

    if (phase === "counting") {
      const t = setTimeout(() => setPhase("complete"), DELAY_COUNTING);
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

  const isCounting =
    phase === "counting" || phase === "complete" || phase === "pause";

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-purple-600" />
          <span className="text-base font-semibold text-foreground">
            Finanz\u00FCbersicht
          </span>
          <span className="ml-auto text-[11px] text-foreground/40">
            M\u00E4rz 2026
          </span>
        </div>

        {/* Metric cards */}
        <div className="flex-1 p-4 flex flex-col gap-3 justify-center">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 12 }}
              animate={
                isCounting ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 12 }
              }
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: SIGNATURE_EASE,
              }}
              className={`rounded-xl border border-gray/50 px-4 py-3 flex items-center gap-3 ${metric.color.bg}`}
            >
              {/* Icon */}
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${metric.color.iconBg}`}
              >
                {metric.trendUp ? (
                  <TrendingUp className={`w-4.5 h-4.5 ${metric.color.text}`} />
                ) : (
                  <TrendingDown
                    className={`w-4.5 h-4.5 ${metric.color.text}`}
                  />
                )}
              </div>

              {/* Label and value */}
              <div className="flex-1 min-w-0">
                <span className="text-xs text-foreground/50 block">
                  {metric.label}
                </span>
                <AnimatedCounter
                  target={metric.target}
                  suffix={metric.suffix}
                  isActive={isCounting}
                  className={`text-lg font-bold ${metric.color.text}`}
                />
              </div>

              {/* Trend badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  phase === "complete" || phase === "pause"
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.35,
                  delay: i * 0.1,
                  ease: SIGNATURE_EASE,
                }}
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${metric.color.iconBg} ${metric.color.trendText}`}
              >
                {metric.trend}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-gray/50 bg-gray/20 flex items-center justify-between">
          <span className="text-[11px] text-foreground/40">
            Letzte Aktualisierung: gerade eben
          </span>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgetsVisual;
