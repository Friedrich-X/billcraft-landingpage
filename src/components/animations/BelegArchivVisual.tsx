"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Search, Archive, FileText } from "lucide-react";

/**
 * BelegArchivVisual: Digital archive with search functionality.
 * Shows a grid of receipt cards with an animated search that filters results.
 */

interface BelegCard {
  id: string;
  shop: string;
  amount: string;
  date: string;
  category: string;
  categoryColor: string;
  matchesSearch: boolean;
}

const ALL_BELEGE: Omit<BelegCard, "matchesSearch">[] = [
  {
    id: "B-081",
    shop: "DB Fernverkehr",
    amount: "89,90 \u20AC",
    date: "05.03.",
    category: "Reise",
    categoryColor: "text-orange-600 bg-orange-500/10",
  },
  {
    id: "B-080",
    shop: "Papier & Co.",
    amount: "45,80 \u20AC",
    date: "04.03.",
    category: "B\u00FCro",
    categoryColor: "text-blue bg-blue/10",
  },
  {
    id: "B-079",
    shop: "Reiseb\u00FCro Wien",
    amount: "320,00 \u20AC",
    date: "01.03.",
    category: "Reise",
    categoryColor: "text-orange-600 bg-orange-500/10",
  },
  {
    id: "B-078",
    shop: "Gasthaus Krone",
    amount: "124,50 \u20AC",
    date: "28.02.",
    category: "Bewirtung",
    categoryColor: "text-purple bg-purple/10",
  },
  {
    id: "B-077",
    shop: "Flixbus Reise",
    amount: "29,99 \u20AC",
    date: "25.02.",
    category: "Reise",
    categoryColor: "text-orange-600 bg-orange-500/10",
  },
  {
    id: "B-076",
    shop: "Amazon Business",
    amount: "67,30 \u20AC",
    date: "22.02.",
    category: "B\u00FCro",
    categoryColor: "text-blue bg-blue/10",
  },
];

const SEARCH_TEXT = "Reise";
const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Phase = "idle" | "typing" | "filtered" | "clearing";

const DELAY_IDLE = 2000;
const DELAY_CHAR = 180;
const DELAY_FILTERED = 4000;
const DELAY_CLEARING = 800;

const BelegArchivVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");
  const [searchValue, setSearchValue] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setPhase("idle");
      setSearchValue("");
      setCharIndex(0);
      return;
    }

    if (phase === "idle") {
      setSearchValue("");
      setCharIndex(0);
      const t = setTimeout(() => setPhase("typing"), DELAY_IDLE);
      return () => clearTimeout(t);
    }

    if (phase === "typing") {
      if (charIndex < SEARCH_TEXT.length) {
        const t = setTimeout(() => {
          setSearchValue(SEARCH_TEXT.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, DELAY_CHAR);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("filtered"), 300);
        return () => clearTimeout(t);
      }
    }

    if (phase === "filtered") {
      const t = setTimeout(() => setPhase("clearing"), DELAY_FILTERED);
      return () => clearTimeout(t);
    }

    if (phase === "clearing") {
      const t = setTimeout(() => {
        setSearchValue("");
        setCharIndex(0);
        setPhase("idle");
      }, DELAY_CLEARING);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, isInView, charIndex]);

  const isFiltering = searchValue.length > 0;
  const belege: BelegCard[] = ALL_BELEGE.map((b) => ({
    ...b,
    matchesSearch:
      !isFiltering ||
      b.shop.toLowerCase().includes(searchValue.toLowerCase()) ||
      b.category.toLowerCase().includes(searchValue.toLowerCase()),
  }));

  const matchCount = belege.filter((b) => b.matchesSearch).length;

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
              <Archive className="w-4 h-4 text-orange-600" />
              <span className="text-base font-semibold text-foreground">
                Belegarchiv
              </span>
            </div>
            <span className="text-xs text-foreground/40">
              {isFiltering
                ? `${matchCount} Treffer`
                : `${ALL_BELEGE.length} Belege`}
            </span>
          </div>

          {/* Search bar */}
          <div className="px-3 py-2 border-b border-gray/30">
            <div
              className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 transition-colors duration-200 ${
                isFiltering
                  ? "border-orange-500/40 bg-orange-500/5"
                  : "border-gray/50 bg-gray/10"
              }`}
            >
              <Search
                className={`w-3.5 h-3.5 transition-colors duration-200 ${
                  isFiltering ? "text-orange-600" : "text-foreground/30"
                }`}
              />
              <span className="text-xs text-foreground/70 flex items-center">
                {searchValue || (
                  <span className="text-foreground/30">
                    Belege durchsuchen...
                  </span>
                )}
                {phase === "typing" && (
                  <motion.span
                    className="inline-block w-0.5 h-3.5 bg-orange-500 ml-0.5"
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
              </span>
            </div>
          </div>

          {/* Card grid */}
          <div className="flex-1 p-2.5 min-h-0 overflow-hidden">
            <div className="grid grid-cols-2 gap-2">
              {belege.map((beleg) => (
                <motion.div
                  key={beleg.id}
                  layout
                  animate={{
                    opacity: beleg.matchesSearch ? 1 : 0.25,
                    scale: beleg.matchesSearch ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.35, ease: SIGNATURE_EASE }}
                  className={`rounded-lg border p-2.5 transition-colors duration-200 ${
                    beleg.matchesSearch && isFiltering
                      ? "border-orange-500/30 bg-orange-500/5"
                      : "border-gray/40 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <FileText className="w-3 h-3 text-foreground/30 shrink-0" />
                    <span className="text-[10px] text-foreground/40">
                      {beleg.id}
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-foreground truncate mb-0.5">
                    {beleg.shop}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground">
                      {beleg.amount}
                    </span>
                    <span className="text-[9px] text-foreground/40">
                      {beleg.date}
                    </span>
                  </div>
                  <div className="mt-1.5">
                    <span
                      className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${beleg.categoryColor}`}
                    >
                      {beleg.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelegArchivVisual;
