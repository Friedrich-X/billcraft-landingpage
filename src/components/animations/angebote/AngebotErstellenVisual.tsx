"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FileText, Plus, Check } from "lucide-react";

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const POSITIONS = [
  { name: "Webdesign Redesign", qty: 1, price: 2400 },
  { name: "SEO-Optimierung", qty: 1, price: 800 },
  { name: "Content-Erstellung", qty: 5, price: 150 },
];

type Phase = "empty" | "adding" | "complete" | "pause";

const AngebotErstellenVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("empty");
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setPhase("empty");
      setVisibleItems(0);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Start adding items
    timers.push(setTimeout(() => setPhase("adding"), 400));
    timers.push(setTimeout(() => setVisibleItems(1), 700));
    timers.push(setTimeout(() => setVisibleItems(2), 1200));
    timers.push(setTimeout(() => setVisibleItems(3), 1700));
    timers.push(setTimeout(() => setPhase("complete"), 2200));
    // Reset
    timers.push(
      setTimeout(() => {
        setPhase("empty");
        setVisibleItems(0);
      }, 5500),
    );

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  const total = POSITIONS.slice(0, visibleItems).reduce(
    (s, p) => s + p.qty * p.price,
    0,
  );

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue" />
          <span className="text-base font-semibold text-foreground">
            Neues Angebot
          </span>
          <AnimatePresence>
            {phase === "complete" && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-green bg-green/10 px-2 py-0.5 rounded-full"
              >
                <Check className="w-3 h-3" />
                Fertig
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Customer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            phase !== "empty" ? { opacity: 1 } : { opacity: 0 }
          }
          transition={{ duration: 0.3, ease: SIGNATURE_EASE }}
          className="px-4 pt-3 pb-2 border-b border-gray/30"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9px] text-foreground/40 uppercase tracking-wider">
                Kunde
              </span>
              <p className="text-xs font-medium text-foreground">
                Weber Digital GmbH
              </p>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-foreground/40 uppercase tracking-wider">
                Gültig bis
              </span>
              <p className="text-xs font-medium text-foreground">
                15.04.2026
              </p>
            </div>
          </div>
        </motion.div>

        {/* Positions */}
        <div className="flex-1 px-4 py-2 overflow-hidden relative">
          {/* Table header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              phase !== "empty" ? { opacity: 1 } : { opacity: 0 }
            }
            transition={{ duration: 0.3, ease: SIGNATURE_EASE }}
            className="flex items-center text-[9px] text-foreground/35 uppercase tracking-wider mb-1.5 pb-1 border-b border-gray/30"
          >
            <span className="flex-1">Position</span>
            <span className="w-10 text-center">Menge</span>
            <span className="w-16 text-right">Betrag</span>
          </motion.div>

          {/* Items */}
          <div className="h-[120px] relative">
            {POSITIONS.map((pos, i) => (
              <AnimatePresence key={i}>
                {i < visibleItems && (
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{
                      duration: 0.35,
                      ease: SIGNATURE_EASE,
                    }}
                    className="absolute left-0 right-0 flex items-center py-1.5"
                    style={{ top: `${i * 36}px` }}
                  >
                    <span className="flex-1 text-xs font-medium text-foreground truncate pr-2">
                      {pos.name}
                    </span>
                    <span className="w-10 text-center text-xs text-foreground/60 tabular-nums">
                      {pos.qty}×
                    </span>
                    <span className="w-16 text-right text-xs font-semibold text-foreground tabular-nums">
                      {(pos.qty * pos.price).toLocaleString("de-AT")} €
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}

            {/* Add button hint */}
            <AnimatePresence>
              {phase === "adding" && visibleItems < 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 right-0 flex items-center py-1.5"
                  style={{ top: `${visibleItems * 36}px` }}
                >
                  <span className="flex items-center gap-1 text-xs text-foreground/30">
                    <Plus className="w-3 h-3" />
                    Position hinzufügen…
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            visibleItems > 0 ? { opacity: 1 } : { opacity: 0 }
          }
          transition={{ duration: 0.3, ease: SIGNATURE_EASE }}
          className="px-4 py-2.5 border-t border-gray/50 bg-gray/20 flex items-center justify-between"
        >
          <span className="text-[10px] text-foreground/40 uppercase tracking-wider">
            Gesamtbetrag netto
          </span>
          <motion.span
            key={total}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: SIGNATURE_EASE }}
            className="text-sm font-bold text-foreground tabular-nums"
          >
            {total.toLocaleString("de-AT")} €
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default AngebotErstellenVisual;
