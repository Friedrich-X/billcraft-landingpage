"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Sparkles, Check } from "lucide-react";

type Phase = "context" | "suggesting" | "selecting" | "done";

interface Suggestion {
  label: string;
  value: string;
  color: string;
}

const SUGGESTIONS: Suggestion[][] = [
  [
    {
      label: "Kategorie",
      value: "Beratung",
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
    {
      label: "Kategorie",
      value: "IT-Dienstleistung",
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      label: "Kategorie",
      value: "Projektarbeit",
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
  ],
  [
    {
      label: "Kunde",
      value: "Müller GmbH",
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      label: "Kunde",
      value: "Schmidt AG",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      label: "Kunde",
      value: "Weber KG",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
  ],
  [
    {
      label: "Betrag",
      value: "1.200,00 €",
      color: "bg-green-100 text-green-700 border-green-200",
    },
    {
      label: "Betrag",
      value: "950,00 €",
      color: "bg-green-50 text-green-600 border-green-100",
    },
    {
      label: "Betrag",
      value: "1.500,00 €",
      color: "bg-green-50 text-green-600 border-green-100",
    },
  ],
];

const DELAY_CONTEXT = 1400;
const DELAY_PER_GROUP = 600;
const DELAY_BEFORE_SELECT = 1200;
const DELAY_DONE_PAUSE = 5000;

const KiVorschlaegeVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("context");
  const [visibleGroups, setVisibleGroups] = useState(0);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  useEffect(() => {
    if (!isInView) return;

    if (phase === "context") {
      setVisibleGroups(0);
      setSelectedIndices([]);
      const t = setTimeout(() => setPhase("suggesting"), DELAY_CONTEXT);
      return () => clearTimeout(t);
    }

    if (phase === "suggesting") {
      if (visibleGroups < SUGGESTIONS.length) {
        const t = setTimeout(
          () => setVisibleGroups((n) => n + 1),
          DELAY_PER_GROUP,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("selecting"), DELAY_BEFORE_SELECT);
      return () => clearTimeout(t);
    }

    if (phase === "selecting") {
      if (selectedIndices.length < SUGGESTIONS.length) {
        const t = setTimeout(() => {
          setSelectedIndices((prev) => [...prev, 0]);
        }, 400);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("done"), 600);
      return () => clearTimeout(t);
    }

    if (phase === "done") {
      const t = setTimeout(() => {
        setPhase("context");
        setVisibleGroups(0);
        setSelectedIndices([]);
      }, DELAY_DONE_PAUSE);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, visibleGroups, selectedIndices, isInView]);

  const showSuggestions =
    phase === "suggesting" || phase === "selecting" || phase === "done";

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-base font-semibold text-foreground">
            Smarte Vorschläge
          </span>
        </div>

        {/* Context area */}
        <div className="px-4 py-3 border-b border-gray/30">
          <div className="text-xs text-foreground/50 mb-1">Neue Rechnung</div>
          <div className="text-sm text-foreground font-medium">
            Basierend auf 24 bisherigen Rechnungen
          </div>
        </div>

        {/* Suggestions */}
        <div className="flex-1 p-4 space-y-3 overflow-hidden">
          <AnimatePresence>
            {phase === "context" && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 justify-center py-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-5 h-5 text-blue-500" />
                </motion.div>
                <span className="text-sm text-foreground/60">
                  Vorschläge werden generiert...
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {showSuggestions &&
            SUGGESTIONS.slice(0, visibleGroups).map((group, groupIdx) => {
              const isSelected = groupIdx < selectedIndices.length;
              return (
                <motion.div
                  key={groupIdx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="space-y-1.5"
                >
                  <span className="text-[10px] font-semibold text-foreground/50 uppercase tracking-wider">
                    {group[0].label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.map((item, itemIdx) => {
                      const isThisSelected =
                        isSelected && selectedIndices[groupIdx] === itemIdx;
                      const isOther = isSelected && !isThisSelected;
                      return (
                        <motion.div
                          key={item.value}
                          animate={{
                            opacity: isOther ? 0.4 : 1,
                            scale: isThisSelected ? 1.05 : isOther ? 0.95 : 1,
                          }}
                          transition={{ duration: 0.25 }}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${item.color} ${
                            isThisSelected
                              ? "ring-2 ring-offset-1 ring-blue-400"
                              : ""
                          }`}
                        >
                          {isThisSelected && <Check className="w-3 h-3" />}
                          {item.value}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}

          {/* Confidence indicator */}
          <AnimatePresence>
            {phase === "done" && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 border border-blue-100 mt-2"
              >
                <span className="text-xs text-blue-700 font-medium">
                  Konfidenz: 94% — basierend auf deinem Rechnungsverlauf
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default KiVorschlaegeVisual;
