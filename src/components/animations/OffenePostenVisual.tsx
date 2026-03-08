"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Calendar, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

type Phase = "appear" | "show" | "paid" | "pause";

interface OpenInvoice {
  id: string;
  customer: string;
  amount: string;
  dueDate: string;
  daysLeft: number;
  urgency: "green" | "orange" | "red";
}

const INVOICES: OpenInvoice[] = [
  {
    id: "RE-051",
    customer: "Huber & Partner",
    amount: "2.340 €",
    dueDate: "22.03.",
    daysLeft: 14,
    urgency: "green",
  },
  {
    id: "RE-048",
    customer: "Steiner GmbH",
    amount: "780 €",
    dueDate: "12.03.",
    daysLeft: 3,
    urgency: "orange",
  },
  {
    id: "RE-045",
    customer: "Wimmer KG",
    amount: "1.560 €",
    dueDate: "02.03.",
    daysLeft: -6,
    urgency: "red",
  },
  {
    id: "RE-043",
    customer: "Berger e.U.",
    amount: "420 €",
    dueDate: "18.03.",
    daysLeft: 10,
    urgency: "green",
  },
];

const URGENCY_CONFIG = {
  green: {
    label: "Im Zeitplan",
    bg: "bg-green-500/10",
    text: "text-green-600",
    border: "border-green-500/20",
    icon: Clock,
  },
  orange: {
    label: "Bald fällig",
    bg: "bg-orange-500/10",
    text: "text-orange-600",
    border: "border-orange-500/20",
    icon: AlertTriangle,
  },
  red: {
    label: "Überfällig",
    bg: "bg-red/10",
    text: "text-red",
    border: "border-red/20",
    icon: AlertTriangle,
  },
};

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const OffenePostenVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("appear");
  const [visibleCount, setVisibleCount] = useState(0);
  const [paidId, setPaidId] = useState<string | null>(null);

  useEffect(() => {
    if (!isInView) return;

    if (phase === "appear") {
      setVisibleCount(0);
      setPaidId(null);
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setVisibleCount(count);
        if (count >= INVOICES.length) {
          clearInterval(interval);
          setTimeout(() => setPhase("show"), 800);
        }
      }, 300);
      return () => clearInterval(interval);
    }

    if (phase === "show") {
      const t = setTimeout(() => setPhase("paid"), 2500);
      return () => clearTimeout(t);
    }

    if (phase === "paid") {
      setPaidId("RE-048");
      const t = setTimeout(() => setPhase("pause"), 2500);
      return () => clearTimeout(t);
    }

    if (phase === "pause") {
      const t = setTimeout(() => setPhase("appear"), 3000);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, isInView]);

  const activeInvoices = INVOICES.filter((inv) => paidId !== inv.id);
  const totalOpen = activeInvoices.reduce((sum, inv) => {
    const num = parseFloat(
      inv.amount.replace(".", "").replace(" €", "").replace(",", "."),
    );
    return sum + num;
  }, 0);

  const formatDays = (days: number) => {
    if (days < 0) return `${Math.abs(days)} Tage überfällig`;
    if (days === 0) return "Heute fällig";
    return `Noch ${days} Tage`;
  };

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
            <span className="text-base font-semibold text-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4 text-foreground/50" />
              Offene Posten
            </span>
            <span className="text-xs text-foreground/50">
              {activeInvoices.length} offen
            </span>
          </div>

          {/* Invoice list */}
          <div className="p-3 flex-1 min-h-0 overflow-hidden space-y-2">
            <AnimatePresence mode="popLayout">
              {INVOICES.map((inv, i) => {
                if (i >= visibleCount) return null;
                if (paidId === inv.id) return null;

                const config = URGENCY_CONFIG[inv.urgency];
                const UrgencyIcon = config.icon;

                return (
                  <motion.div
                    key={inv.id}
                    layout
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      x: 60,
                      scale: 0.9,
                      transition: { duration: 0.4, ease: SIGNATURE_EASE },
                    }}
                    transition={{ duration: 0.4, ease: SIGNATURE_EASE }}
                    className={`rounded-lg border px-3 py-2 flex items-center gap-3 ${config.border} bg-white`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-semibold text-foreground">
                          {inv.id}
                        </span>
                        <span className="text-[11px] text-foreground/50 truncate">
                          {inv.customer}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">
                          {inv.amount}
                        </span>
                        <span className="text-[10px] text-foreground/40">
                          Fällig: {inv.dueDate}
                        </span>
                      </div>
                    </div>

                    {/* Days badge */}
                    <div
                      className={`flex items-center gap-1 px-2 py-1 rounded-full shrink-0 ${config.bg}`}
                    >
                      <UrgencyIcon
                        className={`w-3 h-3 ${config.text}`}
                        strokeWidth={2.5}
                      />
                      <span
                        className={`text-[10px] font-semibold whitespace-nowrap ${config.text}`}
                      >
                        {formatDays(inv.daysLeft)}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Paid confirmation */}
            <AnimatePresence>
              {paidId && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: SIGNATURE_EASE,
                    delay: 0.3,
                  }}
                  className="rounded-lg border border-green-500/30 bg-green-500/5 px-3 py-2 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-green-700 font-medium">
                    RE-048 · Steiner GmbH — Zahlung eingegangen
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Total bar */}
          <div className="px-4 py-2.5 border-t border-gray/50 bg-gray/20 flex justify-between items-center">
            <span className="text-[11px] text-foreground/50">Gesamt offen</span>
            <motion.span
              key={totalOpen}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-semibold text-foreground tabular-nums"
            >
              {totalOpen.toLocaleString("de-DE")} €
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffenePostenVisual;
