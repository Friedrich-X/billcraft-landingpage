import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import PlaceholderVisual from "@/components/PlaceholderVisual";

export const metadata: Metadata = {
  title: "Kundenverwaltung | BillCraft – Alle Kunden an einem Ort",
  description:
    "Verwalten Sie Kunden, Kontakte und Projekte zentral in BillCraft. Rechnungen und Belege direkt zuordnen – übersichtlich und effizient.",
};

export default function KundenPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <ProductHero
          title="Alle Kunden an einem Ort"
          description="Verwalten Sie Kontaktdaten, Ansprechpartner und Projekthistorie zentral. Ordnen Sie Rechnungen und Belege direkt zu – für den vollen Überblick bei jedem Kunden."
          ctaText="Kostenlos testen"
          ctaHref="#signup"
          headingId="kunden-hero-heading"
        >
          <PlaceholderVisual label="Kundenverwaltung" />
        </ProductHero>

        <FeatureShowcaseSection
          tag="Kontakte"
          headline="Stammdaten und Ansprechpartner verwalten."
          description="Erfassen Sie alle relevanten Kundendaten an einem Ort: Firmenname, Adresse, UID-Nummer, Zahlungsbedingungen und beliebig viele Ansprechpartner. Alles ist sofort griffbereit, wenn Sie eine Rechnung erstellen."
          ctaText="Kostenlos ausprobieren"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-amber-500/10 text-amber-700"
        >
          <PlaceholderVisual label="Kontakte & Stammdaten" />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Projekte"
          headline="Projekte zuordnen und nachverfolgen."
          description="Legen Sie Projekte an und verknüpfen Sie Rechnungen, Belege und Zeiteinträge direkt mit dem jeweiligen Kunden. So sehen Sie auf einen Blick, welcher Auftrag wie weit ist und was noch offen steht."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-amber-500/10 text-amber-700"
        >
          <PlaceholderVisual label="Projekte zuordnen" />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Kundenmanagement ohne Aufwand."
          description="Behalten Sie bei jedem Kunden den vollen Überblick – von der ersten Rechnung bis zum aktuellen Projekt."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="dark"
          headlineHighlight="Aufwand"
        />
      </main>

      <Footer />
    </div>
  );
}
