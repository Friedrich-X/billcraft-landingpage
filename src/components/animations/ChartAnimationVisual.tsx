"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3 } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DATA = [
  { month: "Jan", umsatz: 3200, ausgaben: 1800 },
  { month: "Feb", umsatz: 4100, ausgaben: 2100 },
  { month: "Mär", umsatz: 3800, ausgaben: 1900 },
  { month: "Apr", umsatz: 5600, ausgaben: 2400 },
  { month: "Mai", umsatz: 6900, ausgaben: 2800 },
  { month: "Jun", umsatz: 8200, ausgaben: 3100 },
];

const SIGNATURE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ChartAnimationVisual: React.FC = () => {
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

  const total = DATA.reduce((s, d) => s + d.umsatz, 0);
  const totalAusgaben = DATA.reduce((s, d) => s + d.ausgaben, 0);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md h-[340px] md:h-[380px] flex flex-col justify-center mx-auto"
    >
      <div className="rounded-xl bg-white border border-gray shadow-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-gray/50 bg-gray/30 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-blue" />
          <span className="text-base font-semibold text-foreground">
            Umsatzentwicklung
          </span>
          <span className="ml-auto text-[11px] text-foreground/40">
            Halbjahr 2026
          </span>
        </div>

        {/* KPI row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4, ease: SIGNATURE_EASE }}
          className="px-4 pt-3 pb-2 flex gap-4"
        >
          <div>
            <div className="text-[9px] text-foreground/40 uppercase tracking-wider">
              Umsatz
            </div>
            <div className="text-sm font-bold text-foreground tabular-nums">
              {(total / 1000).toFixed(1)}k €
            </div>
          </div>
          <div>
            <div className="text-[9px] text-foreground/40 uppercase tracking-wider">
              Ausgaben
            </div>
            <div className="text-sm font-bold text-foreground/70 tabular-nums">
              {(totalAusgaben / 1000).toFixed(1)}k €
            </div>
          </div>
          <div>
            <div className="text-[9px] text-foreground/40 uppercase tracking-wider">
              Gewinn
            </div>
            <div className="text-sm font-bold text-green tabular-nums">
              {((total - totalAusgaben) / 1000).toFixed(1)}k €
            </div>
          </div>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: SIGNATURE_EASE }}
          className="flex-1 px-2 pb-1"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={DATA}
              margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
              barGap={2}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--gray)"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10, fill: "var(--foreground)", opacity: 0.4 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 9, fill: "var(--foreground)", opacity: 0.35 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) => `${v / 1000}k`}
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
                fill="var(--blue)"
                radius={[4, 4, 0, 0]}
                isAnimationActive={show}
                animationDuration={800}
                animationEasing="ease-out"
              />
              <Bar
                dataKey="ausgaben"
                fill="var(--pink)"
                opacity={0.4}
                radius={[4, 4, 0, 0]}
                isAnimationActive={show}
                animationDuration={800}
                animationEasing="ease-out"
                animationBegin={200}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-gray/50 bg-gray/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue" />
              <span className="text-[10px] text-foreground/50">Umsatz</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-pink/40" />
              <span className="text-[10px] text-foreground/50">Ausgaben</span>
            </div>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={show ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="text-[10px] font-semibold text-green"
          >
            +156% Wachstum
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default ChartAnimationVisual;
