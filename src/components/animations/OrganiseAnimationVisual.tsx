"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check } from "lucide-react";

/** BillCraft-Icon (nur das blaue B aus dem Logo); size oder responsive per className */
const BillCraftIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 28 }) => (
  <svg viewBox="0 0 194 114" fill="none" className={className || undefined} style={className ? undefined : { width: size, height: size }} aria-hidden>
    <path
      d="M193.632 0C198.692 0 201.226 6.12717 197.646 9.70874L125.425 81.9673C123.295 84.0982 120.408 85.2952 117.397 85.2952H74.3006C68.0277 85.2952 62.9425 90.3869 62.9425 96.6679V107.706C62.9425 110.846 60.3999 113.392 57.2635 113.392H36.0879C33.0755 113.392 30.1866 112.194 28.0565 110.061L3.32669 85.2994C1.19664 83.1666 0 80.274 0 77.2577V28.6823C0 23.6163 6.1171 21.0792 9.69469 24.6614L54.712 69.7365C59.1476 74.1778 66.3391 74.1778 70.7747 69.7365L137.095 3.33097C139.225 1.19818 142.114 0 145.126 0H193.632Z"
      fill="#5C6CFE"
    />
  </svg>
);

/** Beleg-Liste: österreichische Belege mit Datum */
const BELEGE_ITEMS: Array<{ id: string; label: string; meta: string; date: string }> = [
  { id: "OMV", label: "Tankbeleg", meta: "Wien · 62 €", date: "08.01.2025" },
  { id: "Spar", label: "Einkaufsbeleg", meta: "Büromaterial · 34 €", date: "07.01.2025" },
  { id: "RE-2024-001", label: "Rechnung", meta: "Kunde Müller · 1.240 €", date: "06.01.2025" },
  { id: "ÖBB", label: "Fahrkarte", meta: "Wien–Graz · 48 €", date: "05.01.2025" },
  { id: "Billa", label: "Kassenbon", meta: "Bürobedarf · 22 €", date: "04.01.2025" },
];

/** Deutlich chaotische Positionen – wirkt wie echtes Kuddelmuddel */
const CHAOS_OFFSETS: Array<{ x: number; y: number; rotate: number }> = [
  { x: -28, y: -18, rotate: -12 },
  { x: 32, y: 8, rotate: 9 },
  { x: -20, y: 22, rotate: 7 },
  { x: 24, y: -24, rotate: -10 },
  { x: -30, y: 12, rotate: 8 },
];

/** Pausen in ms: Chaos anzeigen → Einordnen → Done anzeigen → Pause vor Neustart */
const DELAY_CHAOS = 1200;
const DELAY_TO_ORDERED = 800;
const DELAY_TO_DONE = 2400;
const DELAY_DONE_PAUSE = 7000;

const OrganiseAnimationVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<"chaos" | "ordered" | "done">("chaos");

  useEffect(() => {
    if (!isInView) return;

    if (phase === "chaos") {
      const t1 = setTimeout(() => setPhase("ordered"), DELAY_CHAOS);
      return () => clearTimeout(t1);
    }
    if (phase === "ordered") {
      const t2 = setTimeout(() => setPhase("done"), DELAY_TO_ORDERED);
      return () => clearTimeout(t2);
    }
    if (phase === "done") {
      const t3 = setTimeout(() => setPhase("chaos"), DELAY_DONE_PAUSE);
      return () => clearTimeout(t3);
    }
    return undefined;
  }, [phase, isInView]);

  return (
    <div
      ref={ref}
      className="w-full relative rounded-2xl p-4 md:p-6 lg:p-8 aspect-4/3 max-h-[280px] md:max-h-[320px] flex flex-col justify-center min-h-[220px] md:min-h-[260px]"
    >
      <div className="relative w-full max-w-sm mx-auto">
        {/* Liste: Chaos → geordnet → Done; startet erst beim Scrollen ins Sichtfeld */}
        <ul className="relative space-y-1 md:space-y-1.5 min-h-[160px] md:min-h-[180px]" aria-hidden>
          {BELEGE_ITEMS.map((item, i) => (
            <motion.li
              key={item.id}
              layout
              initial={{
                x: CHAOS_OFFSETS[i].x,
                y: CHAOS_OFFSETS[i].y,
                rotate: CHAOS_OFFSETS[i].rotate,
                opacity: 0.9,
              }}
              animate={
                phase === "chaos"
                  ? {
                      x: CHAOS_OFFSETS[i].x,
                      y: CHAOS_OFFSETS[i].y,
                      rotate: CHAOS_OFFSETS[i].rotate,
                      opacity: 0.9,
                    }
                  : {
                      x: 0,
                      y: 0,
                      rotate: 0,
                      opacity: 1,
                    }
              }
              transition={{
                duration: phase === "chaos" ? 0.5 : 0.4,
                delay: phase === "ordered" ? i * 0.1 : phase === "chaos" ? i * 0.06 : 0,
                ease: "easeOut",
              }}
              className="flex items-center gap-2 md:gap-3 rounded-lg bg-white/90 border border-gray/80 px-2.5 py-2 md:px-3.5 md:py-3 w-full shadow-sm shrink-0"
            >
              <span className="w-7 h-7 md:w-9 md:h-9 rounded bg-blue/20 shrink-0 flex items-center justify-center" aria-hidden>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <div className="flex-1 min-w-0 relative min-h-10">
                {/* Ebene 1: Chaos – maskierte Platzhalter (•••) */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center"
                  initial={false}
                  animate={{ opacity: phase === "chaos" ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden={phase !== "chaos"}
                >
                  <span className="text-xs md:text-sm font-semibold text-foreground/90 block truncate">••••••••</span>
                  <span className="text-[11px] md:text-xs text-foreground/60 block truncate">••••••••••••••••</span>
                  <span className="text-[10px] md:text-xs text-foreground/50 block truncate mt-0.5">••.••.••••</span>
                </motion.div>
                {/* Ebene 2: Einordnung fertig – echte Beleg-Daten einblenden */}
                <motion.div
                  className="flex flex-col justify-center"
                  initial={false}
                  animate={{ opacity: phase === "chaos" ? 0 : 1 }}
                  transition={{ duration: 0.3, delay: phase === "ordered" ? i * 0.08 : 0 }}
                  aria-hidden={phase === "chaos"}
                >
                  <span className="text-xs md:text-sm font-semibold text-foreground/90 block truncate">{item.id}</span>
                  <span className="text-[11px] md:text-xs text-foreground/60 block truncate">{item.label} · {item.meta}</span>
                  <span className="text-[10px] md:text-xs text-foreground/50 block truncate mt-0.5">{item.date}</span>
                </motion.div>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Checkmark + BillCraft-Icon nach dem Einordnen */}
        <AnimatePresence>
          {phase === "done" && (
            <>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 22, delay: 0.1 }}
                className="absolute -right-0.5 -bottom-0.5 md:-right-1 md:-bottom-1 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-blue shadow-lg"
                aria-hidden
              >
                <BillCraftIcon className="w-8 h-8 md:w-10 md:h-10 shrink-0" />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="absolute right-6 bottom-6 md:right-10 md:bottom-10 flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full bg-green-500 text-white shadow-md"
                aria-hidden
              >
                <Check className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OrganiseAnimationVisual;
