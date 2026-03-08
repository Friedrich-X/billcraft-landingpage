"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3 } from "lucide-react";

type Phase = "idle" | "bars" | "line" | "complete" | "pause";

interface MonthData {
  label: string;
  value: number;
  height: number; // percentage 0-100
}

const MONTHS: MonthData[] = [
  { label: "Jan", value: 3200, height: 35 },
  { label: "Feb", value: 4100, height: 45 },
  { label: "M\u00E4r", value: 3800, height: 42 },
  { label: "Apr", value: 5600, height: 62 },
  { label: "Mai", value: 6900, height: 76 },
  { label: "Jun", value: 8200, height: 90 },
];

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DELAY_IDLE = 800;
const DELAY_BARS = 2200;
const DELAY_LINE = 1200;
const DELAY_PAUSE = 5000;

const ChartAnimationVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (!isInView) {
      setPhase("idle");
      return;
    }

    if (phase === "idle") {
      const t = setTimeout(() => setPhase("bars"), DELAY_IDLE);
      return () => clearTimeout(t);
    }

    if (phase === "bars") {
      const t = setTimeout(() => setPhase("line"), DELAY_BARS);
      return () => clearTimeout(t);
    }

    if (phase === "line") {
      const t = setTimeout(() => setPhase("complete"), DELAY_LINE);
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

  const showBars =
    phase === "bars" ||
    phase === "line" ||
    phase === "complete" ||
    phase === "pause";
  const showLine =
    phase === "line" || phase === "complete" || phase === "pause";

  // Calculate SVG line points for trend overlay
  const chartWidth = 100; // percentage-based
  const barSpacing = chartWidth / MONTHS.length;
  const linePoints = MONTHS.map((m, i) => ({
    x: barSpacing * i + barSpacing / 2,
    y: 100 - m.height,
  }));
  const svgPath = linePoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

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
            Umsatzentwicklung
          </span>
          <span className="ml-auto text-[11px] text-foreground/40">
            Halbjahr 2026
          </span>
        </div>

        {/* Y-axis labels + Chart area */}
        <div className="flex-1 px-4 pt-4 pb-2 flex gap-2">
          {/* Y-axis */}
          <div className="flex flex-col justify-between text-[10px] text-foreground/40 py-1 w-10 shrink-0">
            <span>10.000</span>
            <span>7.500</span>
            <span>5.000</span>
            <span>2.500</span>
            <span>0</span>
          </div>

          {/* Chart */}
          <div className="flex-1 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full h-px bg-gray/30" />
              ))}
            </div>

            {/* Bars */}
            <div className="absolute inset-0 flex items-end gap-1.5 px-1">
              {MONTHS.map((month, i) => (
                <div
                  key={month.label}
                  className="flex-1 flex flex-col items-center justify-end h-full"
                >
                  {/* Value label */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={showBars ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.12 + 0.3,
                      ease: SIGNATURE_EASE,
                    }}
                    className="text-[9px] font-medium text-foreground/50 mb-1 tabular-nums"
                  >
                    {(month.value / 1000).toFixed(1)}k
                  </motion.span>

                  {/* Bar */}
                  <motion.div
                    initial={{ height: "0%" }}
                    animate={
                      showBars
                        ? { height: `${month.height}%` }
                        : { height: "0%" }
                    }
                    transition={{
                      duration: 0.6,
                      delay: i * 0.12,
                      ease: SIGNATURE_EASE,
                    }}
                    className="w-full rounded-t-md bg-purple-400/80 relative overflow-hidden"
                  >
                    {/* Gradient shine */}
                    <div className="absolute inset-0" />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Trend line overlay */}
            {showLine && (
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  d={svgPath}
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 1, ease: SIGNATURE_EASE },
                    opacity: { duration: 0.3 },
                  }}
                />
                {linePoints.map((p, i) => (
                  <motion.circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r="1.5"
                    fill="white"
                    stroke="#7c3aed"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.12 + 0.3,
                      ease: SIGNATURE_EASE,
                    }}
                  />
                ))}
              </svg>
            )}
          </div>
        </div>

        {/* X-axis labels */}
        <div className="px-4 pb-2 flex gap-2">
          <div className="w-10 shrink-0" />
          <div className="flex-1 flex gap-1.5 px-1">
            {MONTHS.map((month) => (
              <div
                key={month.label}
                className="flex-1 text-center text-[11px] text-foreground/50 font-medium"
              >
                {month.label}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-gray/50 bg-gray/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-purple-400/80" />
              <span className="text-[10px] text-foreground/50">Umsatz</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-0.5 rounded-full bg-purple-600" />
              <span className="text-[10px] text-foreground/50">Trend</span>
            </div>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={showLine ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[10px] font-semibold text-green-600"
          >
            +156% Wachstum
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default ChartAnimationVisual;
