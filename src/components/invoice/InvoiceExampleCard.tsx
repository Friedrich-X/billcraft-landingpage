"use client";

import React from "react";

/**
 * Realistische Rechnungsvorschau für die Hero-Section.
 * Zeigt alle Pflichtangaben einer österreichischen Rechnung.
 */
const InvoiceExampleCard: React.FC = () => {
  return (
    <div
      className="w-full max-w-md rounded-xl border border-gray bg-white shadow-lg overflow-hidden"
      aria-hidden
    >
      <div className="p-5 md:p-6">
        {/* Header: Logo + Rechnung */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <span className="text-sm font-bold text-blue tracking-tight">
              BILLCRAFT
            </span>
            <div className="text-[9px] text-foreground/40 mt-0.5 leading-snug">
              Musterstraße 12, 1010 Wien
              <br />
              ATU12345678
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
              Rechnung
            </span>
            <div className="text-[9px] text-foreground/40 mt-0.5">
              RE-2025-047
            </div>
          </div>
        </div>

        {/* Empfänger + Meta */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-[9px] text-foreground/40 uppercase tracking-wider mb-0.5">
              An
            </div>
            <div className="text-[11px] font-medium text-foreground leading-snug">
              Müller & Partner GmbH
            </div>
            <div className="text-[9px] text-foreground/45 leading-snug">
              Hauptplatz 4, 4020 Linz
              <br />
              ATU98765432
            </div>
          </div>
          <div className="text-right text-[9px] text-foreground/50 leading-relaxed">
            <div>
              Datum: <span className="text-foreground/70">09.03.2025</span>
            </div>
            <div>
              Fällig: <span className="text-foreground/70">09.04.2025</span>
            </div>
            <div>
              Zeitraum:{" "}
              <span className="text-foreground/70">Feb 2025</span>
            </div>
          </div>
        </div>

        {/* Positionen */}
        <div className="border-t border-gray">
          {/* Table header */}
          <div className="flex items-center text-[8px] uppercase tracking-wider text-foreground/35 font-medium py-1.5 border-b border-gray/60">
            <span className="flex-1">Beschreibung</span>
            <span className="w-10 text-right">Menge</span>
            <span className="w-16 text-right">Einzelpreis</span>
            <span className="w-16 text-right">Gesamt</span>
          </div>

          {/* Rows */}
          {[
            {
              desc: "Webdesign Paket",
              qty: "1",
              unit: "2.400,00",
              total: "2.400,00",
            },
            {
              desc: "SEO Optimierung",
              qty: "1",
              unit: "800,00",
              total: "800,00",
            },
            {
              desc: "Hosting (12 Monate)",
              qty: "12",
              unit: "20,00",
              total: "240,00",
            },
          ].map((row, i) => (
            <div
              key={i}
              className="flex items-center py-1.5 text-[10px] border-b border-gray/30"
            >
              <span className="flex-1 text-foreground/70">{row.desc}</span>
              <span className="w-10 text-right text-foreground/50">
                {row.qty}
              </span>
              <span className="w-16 text-right text-foreground/50">
                {row.unit}
              </span>
              <span className="w-16 text-right text-foreground font-medium">
                {row.total}
              </span>
            </div>
          ))}
        </div>

        {/* Summen */}
        <div className="mt-2 flex flex-col items-end text-[10px] space-y-0.5">
          <div className="flex items-center gap-6">
            <span className="text-foreground/45">Netto</span>
            <span className="text-foreground/70 w-16 text-right">
              3.440,00 €
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-foreground/45">USt 20 %</span>
            <span className="text-foreground/70 w-16 text-right">
              688,00 €
            </span>
          </div>
          <div className="flex items-center gap-6 pt-1 border-t border-foreground/10 mt-1">
            <span className="font-semibold text-foreground text-[11px]">
              Gesamt
            </span>
            <span className="font-bold text-foreground text-[12px] w-16 text-right">
              4.128,00 €
            </span>
          </div>
        </div>

        {/* Zahlungsinfo */}
        <div className="mt-3 pt-2.5 border-t border-gray/60 flex items-start justify-between">
          <div className="text-[8px] text-foreground/35 leading-relaxed">
            <div>
              IBAN:{" "}
              <span className="text-foreground/50">
                AT12 3456 7890 1234 5678
              </span>
            </div>
            <div>
              BIC: <span className="text-foreground/50">BKAUATWW</span>
            </div>
          </div>
          <div className="px-2 py-0.5 rounded-full bg-blue/10 text-blue text-[8px] font-semibold">
            30 Tage netto
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceExampleCard;
