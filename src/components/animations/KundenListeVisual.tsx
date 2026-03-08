"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Search, Users } from "lucide-react";

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Phase = "idle" | "showing" | "typing" | "filtered" | "done";

interface CustomerEntry {
  company: string;
  contact: string;
  status: "Aktiv" | "Inaktiv" | "Neu";
  statusColor: string;
  statusBg: string;
}

const ALL_CUSTOMERS: CustomerEntry[] = [
  {
    company: "Müller GmbH",
    contact: "Anna Müller",
    status: "Aktiv",
    statusColor: "text-green-600",
    statusBg: "bg-green-500/10",
  },
  {
    company: "Weber KG",
    contact: "Thomas Weber",
    status: "Aktiv",
    statusColor: "text-green-600",
    statusBg: "bg-green-500/10",
  },
  {
    company: "Bauer AG",
    contact: "Lisa Bauer",
    status: "Neu",
    statusColor: "text-blue",
    statusBg: "bg-blue/10",
  },
  {
    company: "Schmidt e.U.",
    contact: "Karl Schmidt",
    status: "Inaktiv",
    statusColor: "text-foreground/40",
    statusBg: "bg-gray",
  },
  {
    company: "Fischer OG",
    contact: "Maria Fischer",
    status: "Aktiv",
    statusColor: "text-green-600",
    statusBg: "bg-green-500/10",
  },
];

const SEARCH_TEXT = "Bauer";
const TYPING_SPEED = 80;
const DELAY_IDLE = 1000;
const DELAY_SHOWING = 2000;
const DELAY_FILTERED = 3000;
const DELAY_DONE = 4000;

const KundenListeVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");
  const [typedChars, setTypedChars] = useState(0);
  const [visibleRows, setVisibleRows] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setPhase("idle");
      setTypedChars(0);
      setVisibleRows(0);
      return;
    }

    if (phase === "idle") {
      setTypedChars(0);
      setVisibleRows(0);
      const t = setTimeout(() => setPhase("showing"), DELAY_IDLE);
      return () => clearTimeout(t);
    }

    if (phase === "showing") {
      if (visibleRows < ALL_CUSTOMERS.length) {
        const t = setTimeout(() => setVisibleRows((n) => n + 1), 200);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("typing"), DELAY_SHOWING);
      return () => clearTimeout(t);
    }

    if (phase === "typing") {
      if (typedChars < SEARCH_TEXT.length) {
        const t = setTimeout(() => setTypedChars((n) => n + 1), TYPING_SPEED);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("filtered"), 300);
      return () => clearTimeout(t);
    }

    if (phase === "filtered") {
      const t = setTimeout(() => setPhase("done"), DELAY_FILTERED);
      return () => clearTimeout(t);
    }

    if (phase === "done") {
      const t = setTimeout(() => {
        setPhase("idle");
      }, DELAY_DONE);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, typedChars, visibleRows, isInView]);

  const searchValue = SEARCH_TEXT.slice(0, typedChars);
  const isFiltering = phase === "filtered" || phase === "done";
  const displayCustomers = isFiltering
    ? ALL_CUSTOMERS.filter((c) =>
        c.company.toLowerCase().includes(SEARCH_TEXT.toLowerCase()),
      )
    : ALL_CUSTOMERS.slice(0, visibleRows);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex items-center gap-2">
          <Users className="w-4 h-4 text-pink" />
          <span className="text-base font-semibold text-foreground">
            Kunden
          </span>
          <span className="ml-auto text-xs text-foreground/50 tabular-nums">
            {isFiltering ? displayCustomers.length : ALL_CUSTOMERS.length}{" "}
            Einträge
          </span>
        </div>

        {/* Search bar */}
        <div className="px-3 py-2 border-b border-gray/30">
          <div className="flex items-center gap-2 bg-gray/50 rounded-lg px-2.5 py-1.5">
            <Search className="w-3.5 h-3.5 text-foreground/40 shrink-0" />
            <span className="text-xs text-foreground/70 flex-1">
              {phase === "typing" || isFiltering ? (
                <>
                  {searchValue}
                  {phase === "typing" && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="inline-block w-0.5 h-3 bg-foreground/60 ml-0.5 align-middle"
                    />
                  )}
                </>
              ) : (
                <span className="text-foreground/30">Kunde suchen...</span>
              )}
            </span>
          </div>
        </div>

        {/* Customer list */}
        <div className="flex-1 min-h-0 overflow-hidden p-2 space-y-1.5">
          <AnimatePresence mode="popLayout">
            {displayCustomers.map((customer) => (
              <motion.div
                key={customer.company}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -4 }}
                transition={{ duration: 0.3, ease: SIGNATURE_EASE }}
                className="flex items-center gap-3 px-2.5 py-2 rounded-lg border border-gray/40 bg-white hover:bg-gray/20"
              >
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-pink/10 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-pink">
                    {customer.company.split(" ")[0].slice(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-foreground truncate">
                    {customer.company}
                  </p>
                  <p className="text-[10px] text-foreground/50 truncate">
                    {customer.contact}
                  </p>
                </div>

                {/* Status badge */}
                <span
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 ${customer.statusBg} ${customer.statusColor}`}
                >
                  {customer.status}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default KundenListeVisual;
