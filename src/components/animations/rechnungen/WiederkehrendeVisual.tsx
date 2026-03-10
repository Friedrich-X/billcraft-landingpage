"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const INVOICES = [
  { month: "Jan", nr: "#2025-012", amount: "1.200,00", delay: 0 },
  { month: "Feb", nr: "#2025-024", amount: "1.200,00", delay: 0.6 },
  { month: "Mär", nr: "#2025-036", amount: "1.200,00", delay: 1.2 },
  { month: "Apr", nr: "#2025-048", amount: "1.200,00", delay: 1.8 },
];

type Phase = "idle" | "generating" | "complete" | "pause" | "reset";

export default function WiederkehrendeVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [phase, setPhase] = useState<Phase>("idle");
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, ms));
    };

    if (phase === "idle") {
      schedule(() => {
        setPhase("generating");
        setVisibleCount(1);
      }, 1200);
    }

    if (phase === "generating") {
      INVOICES.forEach((_, i) => {
        if (i > 0) {
          schedule(() => setVisibleCount(i + 1), i * 700);
        }
      });
      schedule(() => setPhase("complete"), INVOICES.length * 700);
    }

    if (phase === "complete") schedule(() => setPhase("pause"), 4000);
    if (phase === "pause") schedule(() => setPhase("reset"), 300);
    if (phase === "reset") {
      setVisibleCount(0);
      schedule(() => setPhase("idle"), 400);
    }

    return () => timers.forEach(clearTimeout);
  }, [phase, isInView]);

  return (
    <div
      ref={ref}
      className="rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex items-center justify-center"
    >
      <div className="w-full max-w-[300px]">
        {/* Interval header */}
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple/10">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 2l4 4-4 4" />
              <path d="M3 11v-1a4 4 0 014-4h14" />
              <path d="M7 22l-4-4 4-4" />
              <path d="M21 13v1a4 4 0 01-4 4H3" />
            </svg>
            <span className="text-[10px] font-semibold text-purple">Monatlich</span>
          </div>
          <span className="text-[10px] text-foreground/40">Wartungsvertrag Premium</span>
        </motion.div>

        {/* Timeline — fixed height container to prevent layout shift */}
        <div className="relative h-[250px]">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gray" />

          <div className="absolute inset-0 flex flex-col gap-2.5">
            {INVOICES.map((inv, i) => (
              <div key={i} className="h-[44px] relative">
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{
                    opacity: i < visibleCount ? 1 : 0,
                    x: i < visibleCount ? 0 : -12,
                  }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="absolute inset-0 flex items-center gap-3"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="relative z-10 w-[9px] h-[9px] rounded-full shrink-0"
                    style={{ marginLeft: "14px" }}
                    animate={{
                      scale: i < visibleCount ? 1 : 0,
                      backgroundColor:
                        i === visibleCount - 1 && phase === "generating"
                          ? "var(--purple)"
                          : "var(--blue)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  />

                  {/* Invoice card */}
                  <div className="flex-1 flex items-center justify-between rounded-lg bg-white border border-gray shadow-sm px-3 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-bold text-foreground/40 w-6">
                        {inv.month}
                      </span>
                      <div>
                        <div className="text-[11px] font-medium text-foreground">
                          {inv.nr}
                        </div>
                        <div className="text-[9px] text-foreground/40">
                          Auto-generiert
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] font-semibold text-foreground">
                        {inv.amount} &euro;
                      </div>
                      <motion.div
                        animate={{ opacity: i < visibleCount ? 1 : 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-[9px] font-medium text-green"
                      >
                        Versendet
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}

            {/* Next upcoming invoice (dimmed) — always takes space */}
            <div className="h-[44px] relative">
              <motion.div
                animate={{
                  opacity: phase === "complete" || phase === "pause" ? 0.45 : 0,
                  x: phase === "complete" || phase === "pause" ? 0 : -12,
                }}
                transition={{ duration: 0.45, ease: EASE, delay: 0.3 }}
                className="absolute inset-0 flex items-center gap-3"
              >
                <div
                  className="relative z-10 w-[9px] h-[9px] rounded-full bg-foreground/20 shrink-0"
                  style={{ marginLeft: "14px" }}
                />
                <div className="flex-1 flex items-center justify-between rounded-lg border border-dashed border-foreground/15 px-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold text-foreground/30 w-6">Mai</span>
                    <div>
                      <div className="text-[11px] font-medium text-foreground/50">Nächste Rechnung</div>
                      <div className="text-[9px] text-foreground/30">In 28 Tagen</div>
                    </div>
                  </div>
                  <div className="text-[11px] font-semibold text-foreground/40">1.200,00 &euro;</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
