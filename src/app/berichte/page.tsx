import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import PlaceholderVisual from "@/components/PlaceholderVisual";

export const metadata: Metadata = {
  title: "Berichte & Auswertungen | BillCraft – Finanzberichte auf einen Blick",
  description:
    "Analysieren Sie Umsätze, Ausgaben und offene Posten mit übersichtlichen Berichten. Export für Steuerberater inklusive.",
};

export default function BerichtePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <ProductHero
          title="Berichte und Auswertungen"
          description="Verstehen Sie Ihre Finanzen auf einen Blick. BillCraft erstellt übersichtliche Berichte zu Umsätzen, Ausgaben und offenen Posten – klar aufbereitet für Sie und Ihren Steuerberater."
          ctaText="Kostenlos testen"
          ctaHref="#signup"
          headingId="berichte-hero-heading"
        >
          <PlaceholderVisual label="Finanzberichte" />
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
          <PlaceholderVisual label="Dashboard & Kennzahlen" />
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
          <PlaceholderVisual label="Export für Steuerberater" />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Zahlen, die für sich sprechen."
          description="Treffen Sie fundierte Entscheidungen auf Basis klarer Finanzdaten – ohne Excel-Chaos und ohne Steuerberater-Wartezeit."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="sprechen"
        />
      </main>

      <Footer />
    </div>
  );
}
