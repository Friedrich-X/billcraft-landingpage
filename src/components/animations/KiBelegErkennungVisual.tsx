"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, ScanLine } from "lucide-react";

type Phase = "receipt" | "scanning" | "extracting" | "done";

const EXTRACTED_FIELDS = [
  { label: "Lieferant", value: "SPAR Zentrale" },
  { label: "Datum", value: "08.01.2025" },
  { label: "Betrag", value: "47,82 €" },
  { label: "Kategorie", value: "Betriebsausgaben" },
  { label: "USt", value: "20% · 7,97 €" },
];

const DELAY_RECEIPT = 1400;
const DELAY_SCANNING = 2000;
const DELAY_PER_FIELD = 350;
const DELAY_DONE_PAUSE = 5000;

const KiBelegErkennungVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("receipt");
  const [visibleFields, setVisibleFields] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (phase === "receipt") {
      setVisibleFields(0);
      const t = setTimeout(() => setPhase("scanning"), DELAY_RECEIPT);
      return () => clearTimeout(t);
    }

    if (phase === "scanning") {
      const t = setTimeout(() => setPhase("extracting"), DELAY_SCANNING);
      return () => clearTimeout(t);
    }

    if (phase === "extracting") {
      if (visibleFields < EXTRACTED_FIELDS.length) {
        const t = setTimeout(
          () => setVisibleFields((n) => n + 1),
          DELAY_PER_FIELD,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("done"), 600);
      return () => clearTimeout(t);
    }

    if (phase === "done") {
      const t = setTimeout(() => {
        setPhase("receipt");
        setVisibleFields(0);
      }, DELAY_DONE_PAUSE);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, visibleFields, isInView]);

  const showScanLine = phase === "scanning";
  const showFields = phase === "extracting" || phase === "done";

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="flex gap-4 h-full items-stretch">
        {/* Receipt card */}
        <div className="relative flex-1 rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col">
          <div className="px-3 py-2 border-b border-gray/50 bg-gray/30 flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">Beleg</span>
          </div>
          <div className="p-3 text-xs space-y-1.5 flex-1 relative">
            <div className="text-foreground/60 font-medium">SPAR Zentrale</div>
            <div className="text-foreground/50">Filiale 1234 · Wien</div>
            <div className="border-t border-dashed border-gray/60 my-2" />
            <div className="flex justify-between">
              <span className="text-foreground/70">Milch 3,5%</span>
              <span className="text-foreground/80">1,49</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/70">Vollkornbrot</span>
              <span className="text-foreground/80">2,89</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/70">Druckerpapier</span>
              <span className="text-foreground/80">12,99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/70">Kugelschreiber 5er</span>
              <span className="text-foreground/80">4,49</span>
            </div>
            <div className="border-t border-dashed border-gray/60 my-2" />
            <div className="flex justify-between font-semibold">
              <span className="text-foreground/80">SUMME</span>
              <span className="text-foreground">47,82 €</span>
            </div>
            <div className="flex justify-between text-foreground/50">
              <span>davon 20% USt</span>
              <span>7,97 €</span>
            </div>
            <div className="text-foreground/40 mt-2 text-center text-[10px]">
              08.01.2025 · 14:32
            </div>

            {/* Scan line overlay */}
            {showScanLine && (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{ duration: 1.8, ease: "linear" }}
                className="absolute left-0 right-0 h-0.5 z-10"
              >
                <div className="w-full h-0.5 bg-purple-500 shadow-[0_0_8px_rgba(147,51,234,0.5)]" />
                <div className="w-full h-8 -mt-4" />
              </motion.div>
            )}

            {/* Scan overlay glow */}
            <AnimatePresence>
              {showScanLine && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 border-2 border-purple-400/30 rounded-lg pointer-events-none"
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Extracted data panel */}
        <div className="flex-1 flex flex-col gap-2 justify-center">
          {/* Scan indicator */}
          <AnimatePresence>
            {showScanLine && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-50 border border-purple-100 mb-1"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <ScanLine className="w-4 h-4 text-purple-600" />
                </motion.div>
                <span className="text-xs font-medium text-purple-700">
                  Wird analysiert...
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Extracted fields */}
          {showFields &&
            EXTRACTED_FIELDS.slice(0, visibleFields).map((field, i) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray shadow-sm"
              >
                <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-foreground/50 block">
                    {field.label}
                  </span>
                  <span className="text-xs font-semibold text-foreground block truncate">
                    {field.value}
                  </span>
                </div>
              </motion.div>
            ))}

          {/* Success badge */}
          <AnimatePresence>
            {phase === "done" && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 border border-green-200 mt-1"
              >
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span className="text-xs font-semibold text-green-700">
                  Erkennung abgeschlossen
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default KiBelegErkennungVisual;
