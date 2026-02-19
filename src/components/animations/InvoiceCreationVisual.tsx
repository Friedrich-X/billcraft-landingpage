"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, Send, MousePointer2, FileEdit, Clock, Lock } from "lucide-react";

type Phase =
  | "empty"
  | "filling"
  | "cursor_enter"
  | "cursor_click_fixieren"
  | "open"
  | "cursor_click_send"
  | "paid"
  | "pause";

const DELAY_EMPTY = 1200;
const DELAY_PER_LINE = 650;
const DELAY_AFTER_FILL = 1000;
const DELAY_CURSOR_ENTER = 600;
const DELAY_CURSOR_TO_BUTTON = 1200;
const DELAY_CLICK = 800;
const DELAY_OPEN_BEFORE_SEND = 2800;
const DELAY_CLICK_SEND = 1200;
const DELAY_PAID_PAUSE = 7000;

const InvoiceCreationVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("empty");
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (phase === "empty") {
      setVisibleLines(0);
      const t = setTimeout(() => setPhase("filling"), DELAY_EMPTY);
      return () => clearTimeout(t);
    }

    if (phase === "filling") {
      if (visibleLines < 5) {
        const t = setTimeout(() => setVisibleLines((n) => n + 1), DELAY_PER_LINE);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("cursor_enter"), DELAY_AFTER_FILL);
      return () => clearTimeout(t);
    }

    if (phase === "cursor_enter") {
      const t = setTimeout(() => setPhase("cursor_click_fixieren"), DELAY_CURSOR_TO_BUTTON);
      return () => clearTimeout(t);
    }

    if (phase === "cursor_click_fixieren") {
      const t = setTimeout(() => setPhase("open"), DELAY_CLICK);
      return () => clearTimeout(t);
    }

    if (phase === "open") {
      const t = setTimeout(() => setPhase("cursor_click_send"), DELAY_OPEN_BEFORE_SEND);
      return () => clearTimeout(t);
    }

    if (phase === "cursor_click_send") {
      const t = setTimeout(() => setPhase("paid"), DELAY_CLICK_SEND);
      return () => clearTimeout(t);
    }

    if (phase === "paid") {
      const t = setTimeout(() => {
        setPhase("empty");
        setVisibleLines(0);
      }, DELAY_PAID_PAUSE);
      return () => clearTimeout(t);
    }

    if (phase === "pause") {
      const t = setTimeout(() => setPhase("empty"), 500);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, visibleLines, isInView]);

  const showCursor =
    phase === "cursor_enter" ||
    phase === "cursor_click_fixieren" ||
    phase === "cursor_click_send";
  const isClicking = phase === "cursor_click_fixieren" || phase === "cursor_click_send";

  /** Zeiger-Position: Fixieren rechts, „Per E-Mail versenden“ weiter links (breiter Button) */
  const cursorX =
    phase === "cursor_enter" ? 12 : phase === "cursor_click_fixieren" ? -100 : -195;
  const cursorY = phase === "cursor_enter" ? 16 : -52;
  const showFixierenButton =
    (phase === "filling" && visibleLines >= 5) ||
    phase === "cursor_enter" ||
    phase === "cursor_click_fixieren";
  const showSendButton = phase === "open" || phase === "cursor_click_send";

  /** Status: Entwurf → Offen (nach Fixieren) → Bezahlt (nach Senden) */
  const status =
    phase === "open" || phase === "cursor_click_send"
      ? "open"
      : phase === "paid"
        ? "paid"
        : "draft";

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[360px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="relative w-full h-[340px] md:h-[360px] mx-auto">
        {/* Rechnungskarte – feste Höhe, kein Schubsen */}
        <div
          className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full"
          aria-hidden
        >
          {/* Header */}
          <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex justify-between items-center">
            <span className="text-base font-semibold text-foreground">Rechnung</span>
            <span className="text-sm text-foreground/50">RE-2024-042</span>
          </div>
          <div className="p-4 space-y-2 text-sm flex-1 min-h-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleLines > 0 ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex justify-between"
            >
              <span className="text-foreground/50">Datum:</span>
              <span className="text-foreground">{visibleLines > 0 ? "08.01.2025" : "—"}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleLines > 1 ? 1 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <span className="text-foreground/50 block">Rechnungsempfänger</span>
              <span className="text-foreground font-medium">
                {visibleLines > 1 ? "Kunde Müller GmbH, 1010 Wien" : "—"}
              </span>
            </motion.div>
            <div className="border-t border-gray/50 pt-2.5 mt-2.5">
              <div className="flex justify-between text-foreground/50 mb-1.5 text-sm">
                <span>Position</span>
                <span>Betrag</span>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: visibleLines > 2 ? 1 : 0, x: visibleLines > 2 ? 0 : -4 }}
                transition={{ duration: 0.25 }}
                className="flex justify-between"
              >
                <span className="text-foreground">
                  {visibleLines > 2 ? "Beratung · 10 Std." : "—"}
                </span>
                <span className="text-foreground font-medium">
                  {visibleLines > 2 ? "1.000,00 €" : "—"}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: visibleLines > 3 ? 1 : 0, x: visibleLines > 3 ? 0 : -4 }}
                transition={{ duration: 0.25 }}
                className="flex justify-between"
              >
                <span className="text-foreground">
                  {visibleLines > 3 ? "USt 20%" : "—"}
                </span>
                <span className="text-foreground font-medium">
                  {visibleLines > 3 ? "200,00 €" : "—"}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: visibleLines > 4 ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex justify-between font-semibold mt-1.5 pt-1.5 border-t border-gray/50"
              >
                <span className="text-foreground">Gesamtbetrag</span>
                <span className="text-foreground">{visibleLines > 4 ? "1.240,00 €" : "—"}</span>
              </motion.div>
            </div>
          </div>

          {/* Button-Bereich: erst Fixieren, dann Per E-Mail versenden */}
          <div className="px-4 pb-2 pt-1 shrink-0 flex justify-end min-h-[44px]">
            <AnimatePresence mode="wait">
              {showFixierenButton && (
                <motion.div
                  key="fixieren"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex"
                >
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/90 text-white text-base font-semibold shadow-md"
                    aria-hidden
                  >
                    <Lock className="w-5 h-5" strokeWidth={2} />
                    Fixieren
                  </span>
                </motion.div>
              )}
              {showSendButton && (
                <motion.div
                  key="send"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex"
                >
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue text-white text-base font-semibold shadow-md"
                    aria-hidden
                  >
                    <Send className="w-5 h-5" strokeWidth={2} />
                    Per E-Mail versenden
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Status-Leiste: Text von rechts nach links reinschieben */}
          <div className="relative h-11 shrink-0 border-t border-gray/50 overflow-hidden">
            <AnimatePresence mode="wait">
              {status === "draft" && (
                <motion.div
                  key="draft"
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-11 bg-gray/50 px-4 flex items-center justify-center gap-2 absolute inset-x-0"
                >
                  <FileEdit className="w-5 h-5 text-foreground/60 shrink-0" strokeWidth={2} />
                  <span className="text-base font-semibold text-foreground/70">Entwurf</span>
                </motion.div>
              )}
              {status === "open" && (
                <motion.div
                  key="open"
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-11 bg-orange-500/10 px-4 flex items-center justify-center gap-2 absolute inset-x-0"
                >
                  <Clock className="w-5 h-5 text-orange-600 shrink-0" strokeWidth={2} />
                  <span className="text-base font-semibold text-orange-700">Offen</span>
                </motion.div>
              )}
              {status === "paid" && (
                <motion.div
                  key="paid"
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-11 bg-green-500/15 px-4 flex items-center justify-center gap-2 absolute inset-x-0"
                >
                  <Check className="w-5 h-5 text-green-600 shrink-0" strokeWidth={2.5} />
                  <span className="text-base font-semibold text-green-700">Bezahlt</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Zeiger: von unten rechts rein, fährt auf den Button, klickt */}
        <AnimatePresence>
          {showCursor && (
            <motion.div
              initial={{ x: 32, y: 32, opacity: 0 }}
              animate={{
                x: cursorX,
                y: cursorY,
                opacity: 1,
                scale: isClicking ? 0.85 : 1,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                x: { duration: phase === "cursor_enter" ? 0.7 : 0.65, ease: "easeOut" },
                y: { duration: phase === "cursor_enter" ? 0.7 : 0.65, ease: "easeOut" },
                scale: { duration: 0.12 },
              }}
              className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none z-10 flex items-center justify-center cursor-pointer"
              style={{ transformOrigin: "bottom right" }}
              aria-hidden
            >
              <MousePointer2
                className="w-6 h-6 fill-white stroke-foreground drop-shadow-md"
                strokeWidth={2.5}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InvoiceCreationVisual;
