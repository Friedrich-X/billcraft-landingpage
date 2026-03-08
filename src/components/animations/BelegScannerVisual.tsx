"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ScanLine, FileText, CheckCircle2 } from "lucide-react";

/**
 * BelegScannerVisual: Animated receipt scanner that shows a document
 * being scanned with a moving scan line, then extracted data appearing.
 */

type Phase = "idle" | "scanning" | "extracting" | "complete" | "pause";

interface ExtractedField {
  label: string;
  value: string;
}

const EXTRACTED_DATA: ExtractedField[] = [
  { label: "Betrag", value: "45,80 \u20AC" },
  { label: "Datum", value: "08.03.2026" },
  { label: "Kategorie", value: "B\u00FCromaterial" },
];

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DELAY_IDLE = 1500;
const DELAY_SCAN = 2000;
const DELAY_EXTRACT = 500;
const DELAY_COMPLETE = 4000;

const BelegScannerVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");
  const [visibleFields, setVisibleFields] = useState<number>(0);

  useEffect(() => {
    if (!isInView) {
      setPhase("idle");
      setVisibleFields(0);
      return;
    }

    if (phase === "idle") {
      const t = setTimeout(() => setPhase("scanning"), DELAY_IDLE);
      return () => clearTimeout(t);
    }

    if (phase === "scanning") {
      const t = setTimeout(() => {
        setPhase("extracting");
        setVisibleFields(0);
      }, DELAY_SCAN);
      return () => clearTimeout(t);
    }

    if (phase === "extracting") {
      if (visibleFields < EXTRACTED_DATA.length) {
        const t = setTimeout(() => {
          setVisibleFields((prev) => prev + 1);
        }, DELAY_EXTRACT);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("complete"), 400);
        return () => clearTimeout(t);
      }
    }

    if (phase === "complete") {
      const t = setTimeout(() => {
        setPhase("idle");
        setVisibleFields(0);
      }, DELAY_COMPLETE);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, isInView, visibleFields]);

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
            <div className="flex items-center gap-2">
              <ScanLine className="w-4 h-4 text-orange-600" />
              <span className="text-base font-semibold text-foreground">
                Beleg scannen
              </span>
            </div>
            <AnimatePresence>
              {phase === "complete" && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: SIGNATURE_EASE }}
                  className="flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-xs text-green-600 font-medium">
                    Erkannt
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Scan area */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Receipt preview */}
            <div className="relative flex-1 mx-4 mt-3 mb-2 rounded-lg bg-gray/20 border border-gray/40 overflow-hidden">
              {/* Fake receipt content */}
              <div className="p-3 space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-foreground/30" />
                  <span className="text-xs font-medium text-foreground/40">
                    Quittung #2847
                  </span>
                </div>
                <div className="h-2 w-3/4 rounded bg-foreground/10" />
                <div className="h-2 w-1/2 rounded bg-foreground/10" />
                <div className="h-2 w-2/3 rounded bg-foreground/10" />
                <div className="mt-3 pt-2 border-t border-dashed border-foreground/10">
                  <div className="flex justify-between">
                    <div className="h-2 w-16 rounded bg-foreground/10" />
                    <div className="h-2 w-12 rounded bg-foreground/15" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="h-2.5 w-20 rounded bg-foreground/15" />
                  <div className="h-2.5 w-14 rounded bg-foreground/20" />
                </div>
              </div>

              {/* Scan line */}
              <AnimatePresence>
                {phase === "scanning" && (
                  <motion.div
                    className="absolute left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                    initial={{ top: 0, opacity: 1 }}
                    animate={{ top: "100%" }}
                    exit={{ opacity: 0 }}
                    transition={{
                      top: { duration: 1.8, ease: SIGNATURE_EASE },
                      opacity: { duration: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Scan overlay */}
              <AnimatePresence>
                {phase === "scanning" && (
                  <motion.div
                    className="absolute inset-0 bg-orange-500/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Extracted data area */}
            <div className="px-4 pb-3 space-y-1.5">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[11px] font-medium text-foreground/50 uppercase tracking-wide">
                  Erkannte Daten
                </span>
              </div>
              {EXTRACTED_DATA.map((field, i) => (
                <AnimatePresence key={field.label}>
                  {i < visibleFields ? (
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: SIGNATURE_EASE,
                      }}
                      className="flex items-center justify-between rounded-lg border border-gray/50 bg-orange-500/5 px-3 py-1.5"
                    >
                      <span className="text-xs text-foreground/60">
                        {field.label}
                      </span>
                      <span className="text-xs font-semibold text-foreground">
                        {field.value}
                      </span>
                    </motion.div>
                  ) : (
                    <div className="flex items-center justify-between rounded-lg border border-gray/30 bg-gray/10 px-3 py-1.5">
                      <span className="text-xs text-foreground/20">
                        {field.label}
                      </span>
                      <span className="text-xs text-foreground/20">---</span>
                    </div>
                  )}
                </AnimatePresence>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelegScannerVisual;
