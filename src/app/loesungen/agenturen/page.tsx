import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import PlaceholderVisual from "@/components/PlaceholderVisual";

export const metadata: Metadata = {
  title: "BillCraft für Agenturen & Kreative | Projektbasierte Buchhaltung",
  description:
    "Buchhaltung für Agenturen und Kreative: Projekte, Kunden und Rechnungen an einem Ort. Zeit erfassen, abrechnen und den Überblick behalten.",
};

export default function AgenturenPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main>
        <ProductHero
          title="Buchhaltung für Agenturen & Kreative"
          description="Mehrere Kunden, parallele Projekte und unterschiedliche Abrechnungsmodelle – BillCraft gibt Ihnen den Überblick und macht die Abrechnung zum Kinderspiel."
          ctaText="Kostenlos testen"
          ctaHref="#signup"
          headingId="agenturen-hero-heading"
        >
          <PlaceholderVisual label="Agentur Dashboard" />
        </ProductHero>

        <FeatureShowcaseSection
          tag="Projekte"
          headline="Projekte und Kunden klar strukturiert."
          description="Legen Sie Projekte an, ordnen Sie Rechnungen und Belege zu und behalten Sie den Überblick über den Projektstatus. Jeder Auftrag hat seine eigene Historie – transparent und nachvollziehbar."
          ctaText="Mehr erfahren"
          ctaHref="/kunden"
          imagePosition="left"
          tagClassName="bg-purple-500/10 text-purple-700"
        >
          <PlaceholderVisual label="Projektverwaltung" />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Abrechnung"
          headline="Flexible Abrechnung für jedes Modell."
          description="Ob Stundensatz, Pauschalpreis oder Retainer – BillCraft unterstützt verschiedene Abrechnungsarten. Erstellen Sie Rechnungen direkt aus erfassten Zeiten oder Projektmeilensteinen."
          ctaText="Kostenlos ausprobieren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-blue/10 text-blue"
        >
          <PlaceholderVisual label="Flexible Abrechnung" />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Mehr kreative Arbeit, weniger Papierkram."
          description="Lassen Sie BillCraft die Buchhaltung erledigen, während Sie sich auf das konzentrieren, was Sie am besten können."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="kreative Arbeit"
        />
      </main>

      <Footer />
    </div>
  );
}
