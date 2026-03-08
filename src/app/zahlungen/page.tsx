import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import PlaceholderVisual from "@/components/PlaceholderVisual";

export const metadata: Metadata = {
  title: "Zahlungen | BillCraft – Zahlungsübersicht und Abgleich",
  description:
    "Behalten Sie alle Zahlungen im Blick. Offene Posten, Zahlungsabgleich und Mahnwesen – alles in einer Übersicht mit BillCraft.",
};

export default function ZahlungenPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <ProductHero
          title="Zahlungen im Blick behalten"
          description="Sehen Sie auf einen Blick, welche Rechnungen bezahlt sind und welche noch offen stehen. BillCraft hilft Ihnen, den Überblick über Ihre Zahlungsströme zu behalten."
          ctaText="Kostenlos testen"
          ctaHref="#signup"
          headingId="zahlungen-hero-heading"
        >
          <PlaceholderVisual label="Zahlungsübersicht" />
        </ProductHero>

        <FeatureShowcaseSection
          tag="Offene Posten"
          headline="Offene Rechnungen immer im Blick."
          description="Die Offene-Posten-Liste zeigt Ihnen alle unbezahlten Rechnungen mit Fälligkeitsdatum und Betrag. Überfällige Positionen werden farblich hervorgehoben, damit nichts untergeht."
          ctaText="Kostenlos ausprobieren"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-blue/10 text-blue"
        >
          <PlaceholderVisual label="Offene Posten" />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Abgleich"
          headline="Zahlungen automatisch zuordnen."
          description="Gleichen Sie eingehende Zahlungen mit offenen Rechnungen ab. BillCraft erkennt Zuordnungen automatisch und markiert bezahlte Rechnungen. Weniger manuelle Arbeit, mehr Genauigkeit."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-blue/10 text-blue"
        >
          <PlaceholderVisual label="Zahlungsabgleich" />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Nie wieder offene Posten übersehen."
          description="Behalten Sie die Kontrolle über Ihre Zahlungsströme – automatisch, übersichtlich und ohne manuellen Aufwand."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="dark"
          headlineHighlight="übersehen"
        />
      </main>

      <Footer />
    </div>
  );
}
