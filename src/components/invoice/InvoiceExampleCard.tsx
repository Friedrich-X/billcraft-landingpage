"use client";

import React from "react";

/**
 * Platzhalter für ein Rechnungsbeispiel in der Hero-Section.
 * Kann später durch ein echtes Mockup oder Bild ersetzt werden.
 */
const InvoiceExampleCard: React.FC = () => {
  return (
    <div
      className="w-full max-w-md rounded-xl border border-gray bg-white shadow-lg overflow-hidden"
      aria-hidden
    >
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue">
            BillCraft
          </span>
          <span className="text-sm font-medium text-foreground/70">Rechnung</span>
        </div>
        <div className="space-y-1 text-sm text-foreground/80 mb-6">
          <p>Rechnungsnummer: RE-2024-001</p>
          <p>Datum: 08.02.2025</p>
        </div>
        <div className="border-t border-gray pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-foreground/70">Position 1</span>
            <span>€ 120,00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-foreground/70">Position 2</span>
            <span>€ 80,00</span>
          </div>
        </div>
        <div className="flex justify-between font-semibold text-foreground mt-4 pt-2 border-t border-gray">
          <span>Gesamt</span>
          <span>€ 200,00</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceExampleCard;
