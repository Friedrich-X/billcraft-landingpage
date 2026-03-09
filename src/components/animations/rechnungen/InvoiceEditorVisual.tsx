"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Type, Image as ImageIcon } from "lucide-react";

/**
 * Rechnungs-Editor UI-Mockup: Shows a mini invoice template editor
 * with fields filling in, logo placement, and color customization.
 * Phases: empty -> logo -> colors -> fields -> complete -> pause -> reset
 */

type Phase = "empty" | "logo" | "colors" | "fields" | "complete" | "pause";

const DELAY_EMPTY = 800;
const DELAY_LOGO = 1200;
const DELAY_COLORS = 1200;
const DELAY_PER_FIELD = 500;
const DELAY_COMPLETE = 6000;

const TEMPLATE_FIELDS = [
  { label: "Firmenname", value: "Muster GmbH" },
  { label: "Adresse", value: "Musterstraße 12, 1010 Wien" },
  { label: "UID-Nummer", value: "ATU12345678" },
  { label: "Bankverbindung", value: "AT12 3456 7890 1234" },
];

const COLOR_OPTIONS = [
  { color: "bg-blue", active: false },
  { color: "bg-green-500", active: false },
  { color: "bg-purple", active: true },
  { color: "bg-pink", active: false },
];

const InvoiceEditorVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("empty");
  const [visibleFields, setVisibleFields] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (phase === "empty") {
      setVisibleFields(0);
      const t = setTimeout(() => setPhase("logo"), DELAY_EMPTY);
      return () => clearTimeout(t);
    }

    if (phase === "logo") {
      const t = setTimeout(() => setPhase("colors"), DELAY_LOGO);
      return () => clearTimeout(t);
    }

    if (phase === "colors") {
      const t = setTimeout(() => setPhase("fields"), DELAY_COLORS);
      return () => clearTimeout(t);
    }

    if (phase === "fields") {
      if (visibleFields < TEMPLATE_FIELDS.length) {
        const t = setTimeout(
          () => setVisibleFields((n) => n + 1),
          DELAY_PER_FIELD,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("complete"), 600);
      return () => clearTimeout(t);
    }

    if (phase === "complete") {
      const t = setTimeout(() => {
        setPhase("empty");
        setVisibleFields(0);
      }, DELAY_COMPLETE);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, visibleFields, isInView]);

  const showLogo = phase !== "empty";
  const showColors =
    phase === "colors" || phase === "fields" || phase === "complete";
  const isComplete = phase === "complete";
  const selectedColorIndex = 2; // purple

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
          {/* Editor toolbar */}
          <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex justify-between items-center">
            <span className="text-base font-semibold text-foreground">
              Vorlage bearbeiten
            </span>
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-foreground/40" />
              <Type className="w-4 h-4 text-foreground/40" />
              <ImageIcon className="w-4 h-4 text-foreground/40" />
            </div>
          </div>

          <div className="p-4 flex-1 min-h-0 overflow-hidden space-y-3">
            {/* Logo area */}
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: showLogo ? 1 : 0,
                  opacity: showLogo ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="w-10 h-10 rounded-lg bg-purple/20 flex items-center justify-center shrink-0"
              >
                <span className="text-purple font-bold text-sm">MG</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{
                  opacity: showLogo ? 1 : 0,
                  x: showLogo ? 0 : -8,
                }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-sm font-semibold text-foreground block">
                  Muster GmbH
                </span>
                <span className="text-xs text-foreground/50">Ihr Logo</span>
              </motion.div>
            </div>

            {/* Color picker */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: showColors ? 1 : 0,
                height: showColors ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <span className="text-xs text-foreground/50 block mb-1.5">
                Akzentfarbe
              </span>
              <div className="flex gap-2">
                {COLOR_OPTIONS.map((opt, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: showColors ? 1 : 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      delay: i * 0.08,
                    }}
                    className={`w-6 h-6 rounded-full ${opt.color} cursor-pointer ${
                      i === selectedColorIndex
                        ? "ring-2 ring-offset-2 ring-purple"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-gray/50" />

            {/* Template fields filling in */}
            <div className="space-y-2">
              {TEMPLATE_FIELDS.map((field, i) => (
                <motion.div
                  key={field.label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{
                    opacity: visibleFields > i ? 1 : 0.3,
                    y: visibleFields > i ? 0 : 6,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col"
                >
                  <span className="text-[11px] text-foreground/50 mb-0.5">
                    {field.label}
                  </span>
                  <div
                    className={`text-sm px-2.5 py-1.5 rounded-md border transition-colors duration-300 ${
                      visibleFields > i
                        ? "border-purple/30 bg-purple/5 text-foreground"
                        : "border-gray/50 bg-gray/20 text-foreground/30"
                    }`}
                  >
                    {visibleFields > i ? field.value : "—"}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom status bar */}
          <div className="px-4 py-2.5 border-t border-gray/50 bg-gray/20 flex items-center justify-between">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isComplete ? 1 : 0.4 }}
              transition={{ duration: 0.3 }}
              className="text-xs text-foreground/60"
            >
              {isComplete ? "Vorlage gespeichert" : "Bearbeitung..."}
            </motion.span>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isComplete ? 1 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"
            >
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceEditorVisual;
