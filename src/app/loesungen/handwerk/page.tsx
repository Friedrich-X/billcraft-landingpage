import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import PlaceholderVisual from "@/components/PlaceholderVisual";

export const metadata: Metadata = {
  title: "BillCraft für Handwerk & Dienstleistung | Einfache Buchhaltung",
  description:
    "Buchhaltung für Handwerker und Dienstleister: Belege mobil erfassen, Rechnungen schnell erstellen und Daten einfach an den Steuerberater exportieren.",
};

export default function HandwerkPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main>
        <SolutionHero
          title="Buchhaltung für Handwerk & Dienstleistung."
          titleHighlight="Handwerk & Dienstleistung"
          description="Auf der Baustelle, beim Kunden oder in der Werkstatt – BillCraft ist so einfach, dass Sie Ihre Buchhaltung auch unterwegs erledigen können. Ohne Vorkenntnisse, ohne Komplexität."
          ctaText="Kostenlos testen"
          headingId="handwerk-hero-heading"
        />

        <FeatureShowcaseSection
          tag="Mobil"
          headline="Belege unterwegs erfassen."
          description="Fotografieren Sie Tankbelege, Materialrechnungen oder Quittungen direkt vor Ort. BillCraft erkennt die Daten automatisch und ordnet sie der richtigen Kategorie zu."
          ctaText="Mehr erfahren"
          ctaHref="/belege"
          imagePosition="left"
          tagClassName="bg-amber-500/10 text-amber-700"
        >
          <PlaceholderVisual label="Mobile Belegerfassung" />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Steuerberater"
          headline="Daten einfach an den Steuerberater übergeben."
          description="Exportieren Sie alle Belege, Rechnungen und Auswertungen in Formaten, die Ihr Steuerberater direkt weiterverarbeiten kann. Kein Schuhkarton voller Zettel mehr – alles digital und sortiert."
          ctaText="Kostenlos ausprobieren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-green-500/10 text-green-700"
        >
          <PlaceholderVisual label="Steuerberater-Export" />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Buchhaltung so einfach wie ein Handschlag."
          description="Kein BWL-Studium nötig. BillCraft ist für Menschen gebaut, die mit ihren Händen arbeiten – nicht mit Tabellenkalkulationen."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="einfach"
        />
      </main>

      <Footer />
    </div>
  );
}
