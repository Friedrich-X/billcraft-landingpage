"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DATA = [
  { name: "Müller GmbH", umsatz: 12400, color: "var(--pink)" },
  { name: "Weber KG", umsatz: 8900, color: "var(--blue)" },
  { name: "Bauer AG", umsatz: 6200, color: "var(--purple)" },
  { name: "Schmidt e.U.", umsatz: 4100, color: "var(--orange)" },
];

const TOTAL = DATA.reduce((s, d) => s + d.umsatz, 0);

const KundenUmsatzVisual: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(true), 600);
    return () => clearTimeout(t);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-pink" />
          <span className="text-base font-semibold text-foreground">
            Umsatz pro Kunde
          </span>
        </div>

        {/* KPI */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4, ease: SIGNATURE_EASE }}
          className="px-4 pt-3 pb-2 flex items-center gap-2"
        >
          <span className="text-[9px] text-foreground/40 uppercase tracking-wider">
            Gesamt
          </span>
          <span className="text-sm font-bold text-foreground tabular-nums">
            {TOTAL.toLocaleString("de-AT")} €
          </span>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: SIGNATURE_EASE }}
          className="flex-1 px-2 pb-2"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={DATA}
              layout="vertical"
              margin={{ top: 4, right: 12, left: 4, bottom: 4 }}
              barSize={14}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--gray)"
                horizontal={false}
              />
              <XAxis
                type="number"
                tick={{ fontSize: 9, fill: "var(--foreground)", opacity: 0.35 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) => `${v / 1000}k`}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 10, fill: "var(--foreground)", opacity: 0.6 }}
                axisLine={false}
                tickLine={false}
                width={80}
              />
              <Tooltip
                contentStyle={{
                  fontSize: 11,
                  borderRadius: 8,
                  border: "1px solid var(--gray)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                formatter={(value) => [
                  `${Number(value).toLocaleString("de-AT")} €`,
                ]}
              />
              <Bar
                dataKey="umsatz"
                radius={[0, 4, 4, 0]}
                isAnimationActive={show}
                animationDuration={800}
                animationEasing="ease-out"
              >
                {DATA.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Legend */}
        <div className="px-4 py-2 border-t border-gray/50 bg-gray/20 flex items-center gap-3 flex-wrap">
          {DATA.map((entry, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-sm"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-[10px] text-foreground/50">
                {entry.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KundenUmsatzVisual;
