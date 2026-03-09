"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Clock, AlertCircle, CheckCircle2, XCircle } from "lucide-react";

/**
 * Zahlungsstatus-Tracking visual: Shows a list of invoices with
 * their payment statuses updating in real-time.
 */

type Phase =
  | "initial"
  | "update1"
  | "update2"
  | "update3"
  | "complete"
  | "pause";

interface InvoiceStatus {
  id: string;
  customer: string;
  amount: string;
  status: "offen" | "ueberfaellig" | "bezahlt" | "teilweise";
  dueDate: string;
}

const STATUS_CONFIG = {
  offen: {
    label: "Offen",
    icon: Clock,
    bg: "bg-orange-500/10",
    text: "text-orange-600",
    dot: "bg-orange-500",
  },
  ueberfaellig: {
    label: "Überfällig",
    icon: AlertCircle,
    bg: "bg-red/10",
    text: "text-red",
    dot: "bg-red",
  },
  bezahlt: {
    label: "Bezahlt",
    icon: CheckCircle2,
    bg: "bg-green-500/10",
    text: "text-green-600",
    dot: "bg-green-500",
  },
  teilweise: {
    label: "Teilzahlung",
    icon: XCircle,
    bg: "bg-blue/10",
    text: "text-blue",
    dot: "bg-blue",
  },
};

const INITIAL_INVOICES: InvoiceStatus[] = [
  {
    id: "RE-042",
    customer: "Müller GmbH",
    amount: "1.240 €",
    status: "offen",
    dueDate: "15.03.",
  },
  {
    id: "RE-041",
    customer: "Weber KG",
    amount: "890 €",
    status: "ueberfaellig",
    dueDate: "01.03.",
  },
  {
    id: "RE-040",
    customer: "Bauer AG",
    amount: "2.100 €",
    status: "offen",
    dueDate: "20.03.",
  },
  {
    id: "RE-039",
    customer: "Schmidt e.U.",
    amount: "450 €",
    status: "bezahlt",
    dueDate: "28.02.",
  },
];

const DELAY_INITIAL = 2000;
const DELAY_UPDATE = 1800;
const DELAY_COMPLETE = 6000;

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PaymentStatusVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("initial");
  const [invoices, setInvoices] = useState<InvoiceStatus[]>(INITIAL_INVOICES);
  const [flashIndex, setFlashIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    if (phase === "initial") {
      setInvoices(INITIAL_INVOICES);
      const t = setTimeout(() => setPhase("update1"), DELAY_INITIAL);
      return () => clearTimeout(t);
    }

    if (phase === "update1") {
      // Müller GmbH pays -> bezahlt
      setFlashIndex(0);
      setInvoices((prev) =>
        prev.map((inv, i) => (i === 0 ? { ...inv, status: "bezahlt" } : inv)),
      );
      const t = setTimeout(() => {
        setFlashIndex(null);
        setPhase("update2");
      }, DELAY_UPDATE);
      return () => clearTimeout(t);
    }

    if (phase === "update2") {
      // Bauer AG partial payment -> teilweise
      setFlashIndex(2);
      setInvoices((prev) =>
        prev.map((inv, i) => (i === 2 ? { ...inv, status: "teilweise" } : inv)),
      );
      const t = setTimeout(() => {
        setFlashIndex(null);
        setPhase("update3");
      }, DELAY_UPDATE);
      return () => clearTimeout(t);
    }

    if (phase === "update3") {
      // Weber KG pays -> bezahlt
      setFlashIndex(1);
      setInvoices((prev) =>
        prev.map((inv, i) => (i === 1 ? { ...inv, status: "bezahlt" } : inv)),
      );
      const t = setTimeout(() => {
        setFlashIndex(null);
        setPhase("complete");
      }, DELAY_UPDATE);
      return () => clearTimeout(t);
    }

    if (phase === "complete") {
      const t = setTimeout(() => {
        setPhase("initial");
      }, DELAY_COMPLETE);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, isInView]);

  // Aggregate stats
  const stats = {
    bezahlt: invoices.filter((i) => i.status === "bezahlt").length,
    offen: invoices.filter(
      (i) => i.status === "offen" || i.status === "teilweise",
    ).length,
    ueberfaellig: invoices.filter((i) => i.status === "ueberfaellig").length,
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
            <span className="text-base font-semibold text-foreground">
              Zahlungsstatus
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-foreground/50">Live</span>
            </div>
          </div>

          {/* Summary bar */}
          <div className="px-4 py-2 border-b border-gray/30 flex gap-4">
            <motion.div
              className="flex items-center gap-1.5"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs text-foreground/60">
                {stats.bezahlt} bezahlt
              </span>
            </motion.div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs text-foreground/60">
                {stats.offen} offen
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red" />
              <span className="text-xs text-foreground/60">
                {stats.ueberfaellig} überfällig
              </span>
            </div>
          </div>

          {/* Invoice list */}
          <div className="p-3 flex-1 min-h-0 overflow-hidden space-y-2">
            {invoices.map((inv, i) => {
              const config = STATUS_CONFIG[inv.status];
              const StatusIcon = config.icon;
              const isFlashing = flashIndex === i;

              return (
                <motion.div
                  key={inv.id}
                  layout
                  className={`rounded-lg border px-3 py-2.5 flex items-center gap-3 transition-colors duration-300 ${
                    isFlashing
                      ? "border-blue/40 bg-blue/5"
                      : "border-gray/50 bg-white"
                  }`}
                >
                  {/* Invoice info */}
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

                  {/* Status badge */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={inv.status}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: SIGNATURE_EASE,
                      }}
                      className={`flex items-center gap-1 px-2 py-1 rounded-full shrink-0 ${config.bg}`}
                    >
                      <StatusIcon
                        className={`w-3 h-3 ${config.text}`}
                        strokeWidth={2.5}
                      />
                      <span
                        className={`text-[11px] font-semibold ${config.text}`}
                      >
                        {config.label}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="px-4 py-2.5 border-t border-gray/50 bg-gray/20">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-foreground/50">
                Zahlungseingang
              </span>
              <motion.span
                className="text-[11px] font-semibold text-foreground/70 tabular-nums"
                key={stats.bezahlt}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {stats.bezahlt} / {invoices.length}
              </motion.span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-gray/50 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-green-500"
                initial={{ width: "25%" }}
                animate={{
                  width: `${(stats.bezahlt / invoices.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: SIGNATURE_EASE }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatusVisual;
