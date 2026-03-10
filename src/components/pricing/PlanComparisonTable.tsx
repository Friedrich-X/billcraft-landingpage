"use client";

import React from "react";
import Button from "../Button";
import { Check } from "lucide-react";

export interface PlanConfig {
  name: string;
  ctaText: string;
  ctaHref: string;
  ctaVariant: "primary" | "outline";
  disabled?: boolean;
}

export type ComparisonCellValue = string | "check" | "dash";

export type ComparisonRow =
  | { type: "subheading"; label: string }
  | {
      type: "feature";
      label: string;
      description: string;
      values: ComparisonCellValue[];
    };

export interface PlanComparisonTableProps {
  /** Überschrift über der Tabelle (z. B. "Pläne vergleichen") */
  title: string;
  /** Pläne: Name + CTA-Button (Reihenfolge = Spaltenreihenfolge) */
  plans: PlanConfig[];
  /** Zeilen: Subheadings oder Feature-Zeilen mit values pro Plan */
  rows: ComparisonRow[];
}

const PlanComparisonTable: React.FC<PlanComparisonTableProps> = ({
  title,
  plans,
  rows,
}) => {
  return (
    <section className="hidden md:block mt-20 md:mt-28 w-full" aria-labelledby="plan-comparison-heading">
      <h2
        id="plan-comparison-heading"
        className="text-4xl md:text-5xl font-medium text-foreground text-center"
      >
        {title}
      </h2>
      <div className="overflow-hidden">
        <table className="w-full text-left text-base" role="table">
          <thead>
            <tr className="plan-comparison-header-row bg-background sticky top-20 z-10">
              <th
                scope="col"
                className="plan-comparison-header-cell relative py-4 px-0 pr-4 font-semibold text-lg text-foreground w-[40%] min-w-0 align-bottom"
              >
                Plan
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  scope="col"
                  className="py-4 px-4 font-semibold text-foreground text-center align-bottom w-[20%]"
                >
                  <div className="flex flex-col items-center justify-end gap-3 min-h-[72px]">
                    <span className={plan.disabled ? "text-foreground/40" : ""}>{plan.name}</span>
                    {plan.disabled ? (
                      <span className="inline-flex items-center justify-center min-w-[140px] px-4 py-2 rounded-lg text-sm font-medium bg-foreground/5 text-foreground/35 cursor-not-allowed">
                        {plan.ctaText}
                      </span>
                    ) : (
                      <Button
                        href={plan.ctaHref}
                        variant={plan.ctaVariant}
                        size="md"
                        className="min-w-[140px]"
                      >
                        {plan.ctaText}
                      </Button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-background">
            {rows.map((row, rowIndex) => {
              if (row.type === "subheading") {
                return (
                  <tr
                    key={rowIndex}
                    className={` ${rowIndex === 0 ? "border-t-0" : ""}`}
                  >
                    <td
                      colSpan={plans.length + 1}
                      className="pt-12 pb-2 text-xl font-semibold text-foreground"
                    >
                      {row.label}
                    </td>
                  </tr>
                );
              }
              const featureRow = row;
              const isFirstRow = rowIndex === 0;
              return (
                <tr
                  key={rowIndex}
                  className={`border-b border-foreground/30 ${isFirstRow ? "border-t border-foreground/30" : ""}`}
                >
                  <td className={`pr-4 align-top ${isFirstRow ? "pt-28 pb-5" : "py-5"}`}>
                    <span className="font-medium text-foreground/80 block">
                      {featureRow.label}
                    </span>
                    <span className="text-foreground/50 text-sm mt-1 block">
                      {featureRow.description}
                    </span>
                  </td>
                  {featureRow.values.map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-4 text-center align-middle ${isFirstRow ? "pt-28 pb-5" : "py-5"}`}
                    >
                      {value === "check" ? (
                        <Check
                          className="w-5 h-5 text-blue mx-auto"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                      ) : value === "dash" ? (
                        <span className="text-foreground/30">&mdash;</span>
                      ) : value === "soon" ? (
                        <span className="inline-block text-[11px] font-semibold text-orange bg-orange/10 px-2 py-0.5 rounded-full">
                          Demn&auml;chst
                        </span>
                      ) : (
                        <span
                          className={
                            colIndex === 0
                              ? "text-foreground/70"
                              : "text-foreground font-medium"
                          }
                        >
                          {value}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PlanComparisonTable;
