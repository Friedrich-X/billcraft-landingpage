import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import PlaceholderVisual from "@/components/PlaceholderVisual";

export const metadata: Metadata = {
  title: "BillCraft für Startups & KMUs | Skalierbare Buchhaltung",
  description:
    "Buchhaltung, die mit Ihrem Unternehmen wächst. Rechnungen, Berichte und Team-Features für Startups und KMUs – mit BillCraft.",
};

export default function StartupsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <ProductHero
          title="Buchhaltung für Startups & KMUs"
          description="Eine Lösung, die mit Ihrem Unternehmen wächst. Von den ersten Rechnungen bis zu detaillierten Finanzberichten – BillCraft skaliert mit Ihren Anforderungen."
          ctaText="Kostenlos testen"
          ctaHref="#signup"
          headingId="startups-hero-heading"
        >
          <PlaceholderVisual label="Startup Dashboard" />
        </ProductHero>

        <FeatureShowcaseSection
          tag="Skalierung"
          headline="Wächst mit Ihrem Unternehmen."
          description="Starten Sie kostenlos und schalten Sie bei Bedarf erweiterte Funktionen frei: Mehrere Benutzer, erweiterte Berichte und unbegrenzte Rechnungen. Ohne Datenmigration, ohne Unterbrechung."
          ctaText="Preise ansehen"
          ctaHref="/preise"
          imagePosition="left"
          tagClassName="bg-blue/10 text-blue"
        >
          <PlaceholderVisual label="Skalierung" />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Reporting"
          headline="Datenbasierte Entscheidungen treffen."
          description="Umsatzentwicklung, Cashflow und offene Posten in Echtzeit. Teilen Sie Berichte mit Investoren, Steuerberatern oder dem Management – in Formaten, die direkt weiterverarbeitet werden können."
          ctaText="Mehr erfahren"
          ctaHref="/berichte"
          imagePosition="right"
          tagClassName="bg-purple-500/10 text-purple-700"
        >
          <PlaceholderVisual label="Reporting" />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Fokus auf Wachstum, nicht auf Buchhaltung."
          description="Automatisieren Sie Routineaufgaben und konzentrieren Sie sich auf das, was zählt – Ihr Unternehmen voranbringen."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="Wachstum"
        />
      </main>

      <Footer />
    </div>
  );
}
