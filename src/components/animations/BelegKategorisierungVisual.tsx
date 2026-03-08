"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Tag, Receipt } from "lucide-react";

/**
 * BelegKategorisierungVisual: Shows a receipt card that gets auto-categorized
 * with animated category badges cycling through different categories.
 */

interface Category {
  name: string;
  bg: string;
  text: string;
  border: string;
}

const CATEGORIES: Category[] = [
  {
    name: "B\u00FCromaterial",
    bg: "bg-blue/10",
    text: "text-blue",
    border: "border-blue/30",
  },
  {
    name: "Reisekosten",
    bg: "bg-orange-500/10",
    text: "text-orange-600",
    border: "border-orange-500/30",
  },
  {
    name: "Bewirtung",
    bg: "bg-purple/10",
    text: "text-purple",
    border: "border-purple/30",
  },
];

const RECEIPTS = [
  {
    shop: "Papier & Co.",
    amount: "45,80 \u20AC",
    date: "08.03.2026",
    items: "Druckerpapier, Stifte, Ordner",
  },
  {
    shop: "DB Fernverkehr",
    amount: "89,90 \u20AC",
    date: "05.03.2026",
    items: "ICE M\u00FCnchen \u2013 Wien",
  },
  {
    shop: "Gasthaus Krone",
    amount: "124,50 \u20AC",
    date: "03.03.2026",
    items: "Gesch\u00E4ftsessen (3 Pers.)",
  },
];

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DELAY_SHOW = 2000;
const DELAY_CATEGORIZE = 1200;
const DELAY_NEXT = 3500;

const BelegKategorisierungVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCategory, setShowCategory] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setShowCategory(false);
      return;
    }

    setShowCategory(false);
    const showTimer = setTimeout(() => {
      setShowCategory(true);
    }, DELAY_SHOW);

    return () => clearTimeout(showTimer);
  }, [currentIndex, isInView]);

  useEffect(() => {
    if (!isInView || !showCategory) return;

    const nextTimer = setTimeout(() => {
      setShowCategory(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % CATEGORIES.length);
      }, DELAY_CATEGORIZE);
    }, DELAY_NEXT);

    return () => clearTimeout(nextTimer);
  }, [showCategory, isInView]);

  const receipt = RECEIPTS[currentIndex];
  const category = CATEGORIES[currentIndex];

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
              <Tag className="w-4 h-4 text-purple" />
              <span className="text-base font-semibold text-foreground">
                Kategorisierung
              </span>
            </div>
            <span className="text-xs text-foreground/40">
              {currentIndex + 1} / {CATEGORIES.length}
            </span>
          </div>

          {/* Receipt card */}
          <div className="flex-1 p-4 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: SIGNATURE_EASE }}
                className="flex-1 flex flex-col"
              >
                {/* Receipt */}
                <div className="rounded-lg border border-gray/50 bg-white p-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gray/30 flex items-center justify-center">
                        <Receipt className="w-4 h-4 text-foreground/40" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {receipt.shop}
                        </p>
                        <p className="text-[11px] text-foreground/50">
                          {receipt.date}
                        </p>
                      </div>
                    </div>
                    <span className="text-base font-semibold text-foreground">
                      {receipt.amount}
                    </span>
                  </div>

                  <div className="rounded-md bg-gray/20 px-3 py-2 mb-3">
                    <p className="text-xs text-foreground/60">
                      {receipt.items}
                    </p>
                  </div>

                  {/* Category badge area */}
                  <div className="mt-auto pt-3 border-t border-gray/30">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-foreground/40 uppercase">
                        Kategorie
                      </span>
                      <AnimatePresence mode="wait">
                        {showCategory ? (
                          <motion.div
                            key={`cat-${currentIndex}`}
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: SIGNATURE_EASE,
                            }}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${category.bg} ${category.border}`}
                          >
                            <Tag
                              className={`w-3 h-3 ${category.text}`}
                              strokeWidth={2.5}
                            />
                            <span
                              className={`text-[11px] font-semibold ${category.text}`}
                            >
                              {category.name}
                            </span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="analyzing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-1.5 px-2.5 py-1"
                          >
                            <motion.div
                              className="w-1.5 h-1.5 rounded-full bg-foreground/30"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                            <span className="text-[11px] text-foreground/40">
                              Wird erkannt...
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Confidence bar */}
                <AnimatePresence>
                  {showCategory && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.15,
                        ease: SIGNATURE_EASE,
                      }}
                      className="mt-2 px-1"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-foreground/40">
                          Konfidenz
                        </span>
                        <span className="text-[10px] font-semibold text-foreground/60">
                          96 %
                        </span>
                      </div>
                      <div className="w-full h-1 rounded-full bg-gray/40 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-green-500"
                          initial={{ width: "0%" }}
                          animate={{ width: "96%" }}
                          transition={{
                            duration: 0.6,
                            ease: SIGNATURE_EASE,
                          }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelegKategorisierungVisual;
