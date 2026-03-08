"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Mail, Phone, FileText, TrendingUp } from "lucide-react";

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Phase = "idle" | "reveal" | "stats" | "done";

const DELAY_IDLE = 800;
const DELAY_REVEAL = 400;
const DELAY_STATS = 2000;
const DELAY_DONE = 5000;

const FIELDS = [
  { icon: Building2, label: "Müller GmbH", sub: "Beratung & IT" },
  { icon: Mail, label: "kontakt@mueller-gmbh.at", sub: "" },
  { icon: Phone, label: "+43 1 234 5678", sub: "" },
];

const KundenProfilVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [phase, setPhase] = useState<Phase>("idle");
  const [visibleFields, setVisibleFields] = useState(0);
  const [animatedInvoices, setAnimatedInvoices] = useState(0);
  const [animatedRevenue, setAnimatedRevenue] = useState(0);

  const TARGET_INVOICES = 24;
  const TARGET_REVENUE = 18750;

  useEffect(() => {
    if (!isInView) {
      setPhase("idle");
      setVisibleFields(0);
      setAnimatedInvoices(0);
      setAnimatedRevenue(0);
      return;
    }

    if (phase === "idle") {
      setVisibleFields(0);
      setAnimatedInvoices(0);
      setAnimatedRevenue(0);
      const t = setTimeout(() => setPhase("reveal"), DELAY_IDLE);
      return () => clearTimeout(t);
    }

    if (phase === "reveal") {
      if (visibleFields < FIELDS.length) {
        const t = setTimeout(
          () => setVisibleFields((n) => n + 1),
          DELAY_REVEAL,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("stats"), 300);
      return () => clearTimeout(t);
    }

    if (phase === "stats") {
      const duration = DELAY_STATS;
      const steps = 30;
      const interval = duration / steps;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3);
        setAnimatedInvoices(Math.round(TARGET_INVOICES * eased));
        setAnimatedRevenue(Math.round(TARGET_REVENUE * eased));
        if (step >= steps) {
          clearInterval(timer);
          setPhase("done");
        }
      }, interval);
      return () => clearInterval(timer);
    }

    if (phase === "done") {
      const t = setTimeout(() => {
        setPhase("idle");
      }, DELAY_DONE);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [phase, visibleFields, isInView]);

  const formatCurrency = (val: number) => val.toLocaleString("de-DE") + " €";

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-pink" />
          <span className="text-base font-semibold text-foreground">
            Kundenprofil
          </span>
        </div>

        {/* Avatar + Name */}
        <div className="px-4 pt-4 pb-2 flex items-center gap-3">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              phase !== "idle"
                ? { scale: 1, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 0.4, ease: SIGNATURE_EASE }}
            className="w-10 h-10 rounded-full bg-pink/15 flex items-center justify-center shrink-0"
          >
            <span className="text-sm font-bold text-pink">MG</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={
              phase !== "idle" ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
            }
            transition={{ duration: 0.35, ease: SIGNATURE_EASE, delay: 0.1 }}
          >
            <p className="text-sm font-semibold text-foreground">Müller GmbH</p>
            <p className="text-[11px] text-foreground/50">
              Kunde seit Jan. 2024
            </p>
          </motion.div>
        </div>

        {/* Contact fields */}
        <div className="px-4 py-2 space-y-2 flex-1">
          {FIELDS.map((field, i) => {
            const Icon = field.icon;
            const visible = i < visibleFields;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                transition={{
                  duration: 0.3,
                  ease: SIGNATURE_EASE,
                }}
                className="flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-md bg-gray/60 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-foreground/50" />
                </div>
                <div>
                  <p className="text-xs text-foreground">{field.label}</p>
                  {field.sub && (
                    <p className="text-[10px] text-foreground/40">
                      {field.sub}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats footer */}
        <div className="px-4 py-2.5 border-t border-gray/50 bg-gray/20 flex gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              phase === "stats" || phase === "done"
                ? { opacity: 1 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.3, ease: SIGNATURE_EASE }}
            className="flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-foreground/40" />
            <span className="text-xs text-foreground/60">Rechnungen:</span>
            <span className="text-xs font-semibold text-foreground tabular-nums">
              {animatedInvoices}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              phase === "stats" || phase === "done"
                ? { opacity: 1 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.3, ease: SIGNATURE_EASE, delay: 0.1 }}
            className="flex items-center gap-1.5"
          >
            <TrendingUp className="w-3.5 h-3.5 text-green-600" />
            <span className="text-xs text-foreground/60">Umsatz:</span>
            <span className="text-xs font-semibold text-green-600 tabular-nums">
              {formatCurrency(animatedRevenue)}
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KundenProfilVisual;
