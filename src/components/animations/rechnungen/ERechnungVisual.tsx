"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Phase = "invoice" | "transforming" | "xml" | "validated" | "pause" | "reset";

const XML_LINES = [
  { indent: 0, tag: '<eb:Invoice xmlns:eb="http://www.ebinterface.at/schema/6p1/">' },
  { indent: 1, tag: "<eb:InvoiceNumber>2025-047</eb:InvoiceNumber>" },
  { indent: 1, tag: "<eb:InvoiceDate>2025-03-09</eb:InvoiceDate>" },
  { indent: 1, tag: "<eb:Biller>" },
  { indent: 2, tag: "<eb:Name>BillCraft GmbH</eb:Name>" },
  { indent: 1, tag: "</eb:Biller>" },
  { indent: 1, tag: "<eb:TotalGrossAmount>3.440,00</eb:TotalGrossAmount>" },
];

export default function ERechnungVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [phase, setPhase] = useState<Phase>("invoice");

  useEffect(() => {
    if (!isInView) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, ms));
    };

    if (phase === "invoice") schedule(() => setPhase("transforming"), 1800);
    if (phase === "transforming") schedule(() => setPhase("xml"), 1200);
    if (phase === "xml") schedule(() => setPhase("validated"), 1800);
    if (phase === "validated") schedule(() => setPhase("pause"), 4000);
    if (phase === "pause") schedule(() => setPhase("reset"), 300);
    if (phase === "reset") schedule(() => setPhase("invoice"), 400);

    return () => timers.forEach(clearTimeout);
  }, [phase, isInView]);

  const showXml = phase === "xml" || phase === "validated" || phase === "pause";

  return (
    <div
      ref={ref}
      className="rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex items-center justify-center"
    >
      <div className="w-full max-w-[300px]">
        {/* Format badges */}
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold"
            animate={{
              backgroundColor: showXml ? "rgba(92, 108, 254, 0.1)" : "rgba(37, 37, 37, 0.06)",
              color: showXml ? "var(--blue)" : "var(--foreground)",
              opacity: showXml ? 0.5 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            PDF
          </motion.div>
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-foreground/30"
            animate={{ rotate: showXml ? 0 : 0, opacity: phase === "transforming" ? 1 : 0.3 }}
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </motion.svg>
          <motion.div
            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold"
            animate={{
              backgroundColor: showXml ? "rgba(92, 108, 254, 0.1)" : "rgba(37, 37, 37, 0.06)",
              color: showXml ? "var(--blue)" : "var(--foreground)",
              opacity: showXml ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          >
            ebInterface 6.1
          </motion.div>
        </div>

        {/* Card */}
        <div className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            {!showXml ? (
              <motion.div
                key="invoice"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: EASE }}
                className="p-4"
              >
                {/* Mini invoice preview */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[11px] font-semibold text-foreground">Rechnung #2025-047</div>
                  <div className="text-[10px] text-foreground/40">09.03.2025</div>
                </div>
                <div className="space-y-1.5 mb-3">
                  <div className="h-2 bg-foreground/8 rounded-full w-full" />
                  <div className="h-2 bg-foreground/8 rounded-full w-3/4" />
                  <div className="h-2 bg-foreground/8 rounded-full w-5/6" />
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray/60">
                  <span className="text-[10px] text-foreground/50">Gesamt netto</span>
                  <span className="text-[12px] font-bold text-foreground">3.440,00 &euro;</span>
                </div>

                {/* Converting indicator */}
                {phase === "transforming" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 flex items-center justify-center gap-1.5"
                  >
                    <motion.div
                      className="w-3 h-3 border-2 border-blue/30 border-t-blue rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.7, ease: "linear", repeat: Infinity }}
                    />
                    <span className="text-[10px] text-blue font-medium">
                      Konvertiere zu ebInterface...
                    </span>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="xml"
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="p-3 font-mono"
              >
                {/* XML code view */}
                <div className="space-y-0.5">
                  {XML_LINES.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3, ease: EASE }}
                      className="text-[9px] leading-relaxed"
                      style={{ paddingLeft: `${line.indent * 12}px` }}
                    >
                      <span className="text-blue/60">{line.tag}</span>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: XML_LINES.length * 0.08 }}
                    className="text-[9px] text-blue/60"
                  >
                    {"</eb:Invoice>"}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Validation footer */}
          <AnimatePresence>
            {(phase === "validated" || phase === "pause") && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="border-t border-gray/60 px-3 py-2 bg-green/5 flex items-center justify-center gap-1.5"
              >
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--green)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </motion.svg>
                <span className="text-[10px] font-medium text-green">
                  ebInterface-validiert &middot; EU-konform
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
