import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import PlaceholderVisual from "@/components/PlaceholderVisual";

export const metadata: Metadata = {
  title: "BillCraft für E-Commerce & Online-Shops | Buchhaltung automatisiert",
  description:
    "Buchhaltung für E-Commerce: Massenrechnungen, Zahlungsabgleich und automatische Belegerfassung für Online-Shops mit BillCraft.",
};

export default function EcommercePage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main>
        <SolutionHero
          title="Buchhaltung für E-Commerce & Online-Shops."
          titleHighlight="E-Commerce"
          description="Viele Bestellungen, viele Rechnungen, viele Belege – BillCraft bringt Ordnung in den Alltag von Online-Händlern. Automatisierte Prozesse für mehr Effizienz."
          ctaText="Kostenlos testen"
          headingId="ecommerce-hero-heading"
        />

        <FeatureShowcaseSection
          tag="Massenrechnungen"
          headline="Hunderte Rechnungen auf Knopfdruck."
          description="Erstellen und versenden Sie Rechnungen in großen Mengen. Importieren Sie Bestelldaten und lassen Sie BillCraft die Rechnungen automatisch generieren – inklusive aller Pflichtangaben."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-blue/10 text-blue"
        >
          <PlaceholderVisual label="Massenrechnungen" />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Zahlungsabgleich"
          headline="Zahlungen automatisch zuordnen."
          description="Gleichen Sie eingehende Zahlungen mit offenen Bestellungen ab. BillCraft erkennt Zuordnungen automatisch und markiert bezahlte Positionen – auch bei hohem Bestellvolumen."
          ctaText="Kostenlos ausprobieren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-amber-500/10 text-amber-700"
        >
          <PlaceholderVisual label="Zahlungsabgleich" />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Weniger Verwaltung, mehr Umsatz."
          description="Automatisieren Sie Ihre Buchhaltung und fokussieren Sie sich auf das Wachstum Ihres Online-Geschäfts."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="Umsatz"
        />
      </main>

      <Footer />
    </div>
  );
}
