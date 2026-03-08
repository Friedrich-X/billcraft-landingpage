import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import PlaceholderVisual from "@/components/PlaceholderVisual";

export const metadata: Metadata = {
  title: "Belege erfassen | BillCraft – Digitale Belegverwaltung",
  description:
    "Erfassen, kategorisieren und archivieren Sie Belege digital mit BillCraft. Automatische Erkennung, übersichtliche Ablage und GoBD-konform.",
};

export default function BelegePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <ProductHero
          title="Belege digital erfassen und organisieren"
          description="Schluss mit Papierchaos. Fotografieren oder laden Sie Belege hoch – BillCraft erkennt die wichtigsten Daten automatisch und legt alles übersichtlich ab."
          ctaText="Kostenlos testen"
          ctaHref="#signup"
          headingId="belege-hero-heading"
        >
          <PlaceholderVisual label="Belegerfassung" />
        </ProductHero>

        <FeatureShowcaseSection
          tag="Erkennung"
          headline="Automatische Kategorisierung Ihrer Belege."
          description="Laden Sie einen Beleg hoch und BillCraft erkennt Datum, Betrag und Kategorie automatisch. Ausgaben werden den richtigen Kategorien zugeordnet – ohne manuelles Eintippen."
          ctaText="Kostenlos ausprobieren"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-purple-500/10 text-purple-700"
        >
          <PlaceholderVisual label="Automatische Kategorisierung" />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Archiv"
          headline="Alle Belege sicher und auffindbar."
          description="Ihr digitales Belegarchiv in der Cloud: Suchen Sie nach Datum, Betrag oder Kategorie und finden Sie jeden Beleg in Sekunden. GoBD-konform archiviert und jederzeit exportierbar."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-purple-500/10 text-purple-700"
        >
          <PlaceholderVisual label="Belegarchiv" />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Belege erfassen leicht gemacht."
          description="Kein Papierstapel, keine verlorenen Quittungen. Digitalisieren Sie Ihre Belege und behalten Sie den Überblick über alle Ausgaben."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="leicht gemacht"
        />
      </main>

      <Footer />
    </div>
  );
}
