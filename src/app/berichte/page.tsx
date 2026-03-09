import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import ChartAnimationVisual from "@/components/animations/ChartAnimationVisual";
import SteuerExportVisual from "@/components/animations/SteuerExportVisual";

export const metadata: Metadata = {
  title: "Berichte & Auswertungen | BillCraft – Finanzberichte auf einen Blick",
  description:
    "Analysieren Sie Umsätze, Ausgaben und offene Posten mit übersichtlichen Berichten. Export für Steuerberater inklusive.",
};

const faqItems = [
  {
    question: "Welche Berichte kann ich erstellen?",
    answer:
      "Umsatzberichte, Ausgabenübersichten, Gewinn-und-Verlust-Rechnung, offene Posten und kundenspezifische Auswertungen – monatlich oder jährlich.",
  },
  {
    question: "In welchen Formaten kann ich Berichte exportieren?",
    answer:
      "PDF für visuelle Berichte und CSV für die Weiterverarbeitung in Excel oder durch deinen Steuerberater.",
  },
  {
    question: "Werden die Daten in Echtzeit aktualisiert?",
    answer:
      "Ja, alle Kennzahlen im Dashboard werden bei jeder neuen Rechnung oder Zahlung sofort aktualisiert.",
  },
  {
    question: "Kann mein Steuerberater direkt auf die Berichte zugreifen?",
    answer:
      "Du kannst Berichte per E-Mail teilen oder als PDF/CSV exportieren. Ein direkter Steuerberater-Zugang ist in Planung.",
  },
];

export default function BerichtePage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main>
        <ProductHero
          title="Berichte und Auswertungen"
          description="Verstehen Sie Ihre Finanzen auf einen Blick. BillCraft erstellt übersichtliche Berichte zu Umsätzen, Ausgaben und offenen Posten – klar aufbereitet für Sie und Ihren Steuerberater."
          ctaText="Kostenlos testen"
          ctaHref="#signup"
          headingId="berichte-hero-heading"
        >
          <div
            className="w-[200%] max-w-none -mr-[50%] rounded-xl overflow-hidden border border-gray shadow-2xl"
            style={{
              transform: "perspective(1000px) rotateY(-12deg) rotateX(4deg)",
            }}
          >
            <Image
              src="/images/finanzen-details.webp"
              alt="BillCraft Finanzdashboard"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </ProductHero>

        <FeatureShowcaseSection
          tag="Dashboard"
          headline="Kennzahlen auf einen Blick."
          description="Ihr Dashboard zeigt die wichtigsten Finanzkennzahlen in Echtzeit: Umsatz, offene Rechnungen, Ausgaben und Gewinn. Diagramme und Trends helfen Ihnen, Entwicklungen sofort zu erkennen."
          ctaText="Kostenlos ausprobieren"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-purple-500/10 text-purple-700"
        >
          <ChartAnimationVisual />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Export"
          headline="Berichte für Ihren Steuerberater."
          description="Exportieren Sie monatliche oder jährliche Auswertungen als PDF oder CSV. Ihr Steuerberater erhält alle relevanten Daten in einem Format, das er direkt weiterverarbeiten kann."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-purple-500/10 text-purple-700"
        >
          <SteuerExportVisual />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Zahlen, die für sich sprechen."
          description="Treffen Sie fundierte Entscheidungen auf Basis klarer Finanzdaten – ohne Excel-Chaos und ohne Steuerberater-Wartezeit."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="sprechen"
        />

        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <FAQ title="Häufige Fragen zu Berichten" items={faqItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
