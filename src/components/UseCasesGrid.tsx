"use client";

import {
  FileText,
  Receipt,
  Users,
  CreditCard,
  BarChart3,
  FileDown,
  Sparkles,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
  {
    icon: FileText,
    iconColor: "text-[#5C6CFE]",
    iconBg: "bg-[#5C6CFE]/10",
    title: "Rechnungen",
    description:
      "Erstelle professionelle Rechnungen mit allen Pflichtangaben – in wenigen Klicks versandfertig.",
  },
  {
    icon: Receipt,
    iconColor: "text-[#00DB37]",
    iconBg: "bg-[#00DB37]/10",
    title: "Belege",
    description:
      "Fotografiere Belege und lass sie automatisch erkennen. Datum, Betrag und Kategorie werden sofort erfasst.",
  },
  {
    icon: Users,
    iconColor: "text-[#A55BFF]",
    iconBg: "bg-[#A55BFF]/10",
    title: "Kunden",
    description:
      "Verwalte deine Kunden zentral – mit Kontaktdaten, Rechnungshistorie und offenen Posten auf einen Blick.",
  },
  {
    icon: CreditCard,
    iconColor: "text-[#FFA85B]",
    iconBg: "bg-[#FFA85B]/10",
    title: "Zahlungen",
    description:
      "Behalte den Überblick über ein- und ausgehende Zahlungen. Automatischer Abgleich spart dir Zeit.",
  },
  {
    icon: BarChart3,
    iconColor: "text-[#FF50A7]",
    iconBg: "bg-[#FF50A7]/10",
    title: "Berichte",
    description:
      "Umsätze, Ausgaben und offene Posten – klar aufbereitet als Dashboard oder exportierbarer Report.",
  },
  {
    icon: FileDown,
    iconColor: "text-[#00DB37]",
    iconBg: "bg-[#00DB37]/10",
    title: "Steuer-Export",
    description:
      "Exportiere deine Daten für den Steuerberater – als CSV, PDF oder direkt in gängige Buchhaltungsformate.",
  },
  {
    icon: Sparkles,
    iconColor: "text-[#5C6CFE]",
    iconBg: "bg-[#5C6CFE]/10",
    title: "KI-Assistent",
    description:
      "Automatische Kategorisierung, Texterkennung und intelligente Vorschläge – weniger Tippen, mehr Erledigen.",
  },
  {
    icon: Globe,
    iconColor: "text-[#A55BFF]",
    iconBg: "bg-[#A55BFF]/10",
    title: "Multi-Währung",
    description:
      "Arbeite mit internationalen Kunden. Wechselkurse werden automatisch berechnet und dokumentiert.",
  },
];

export default function UseCasesGrid() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-[4.5rem] font-semibold text-foreground text-center mb-16 md:mb-20 leading-tight"
        >
          Mehr als nur Buchhaltung.
        </motion.h2>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 lg:gap-y-16">
          {useCases.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={`w-12 h-12 ${item.iconBg} rounded-2xl flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-foreground/55 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
