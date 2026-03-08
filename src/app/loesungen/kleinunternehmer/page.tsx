import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import PlaceholderVisual from "@/components/PlaceholderVisual";

export const metadata: Metadata = {
  title: "BillCraft für Kleinunternehmer | Vollständige Buchhaltung",
  description:
    "Professionelle Buchhaltung für Kleinunternehmer: Rechnungen, Belege, Zahlungen und Berichte – alles in einer Lösung mit BillCraft.",
};

export default function KleinunternehmerPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main>
        <ProductHero
          title="Buchhaltung für Kleinunternehmer"
          description="Alles, was Sie für Ihre Buchhaltung brauchen – in einer Lösung. Rechnungen, Belege, Zahlungen und Steuerauswertungen. Einfach, verständlich und rechtskonform."
          ctaText="Kostenlos testen"
          ctaHref="#signup"
          headingId="kleinunternehmer-hero-heading"
        >
          <PlaceholderVisual label="Kleinunternehmer Dashboard" />
        </ProductHero>

        <FeatureShowcaseSection
          tag="Compliance"
          headline="Rechtssicher und gesetzeskonform."
          description="BillCraft erstellt Rechnungen mit allen Pflichtangaben nach UStG und sorgt dafür, dass Ihre Belege GoBD-konform archiviert werden. Weniger Sorgen bei der nächsten Prüfung."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-blue/10 text-blue"
        >
          <PlaceholderVisual label="Rechtssicherheit" />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Zeitersparnis"
          headline="Weniger Verwaltung, mehr Kerngeschäft."
          description="Automatisierte Belegerfassung, intelligente Vorlagen und ein übersichtliches Dashboard sparen Ihnen Stunden pro Woche. Nutzen Sie die gewonnene Zeit für das, was Ihr Unternehmen voranbringt."
          ctaText="Kostenlos ausprobieren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-amber-500/10 text-amber-700"
        >
          <PlaceholderVisual label="Zeitersparnis" />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Ihre Buchhaltung verdient ein Upgrade."
          description="Wechseln Sie von Excel und Papier zu einer Lösung, die für Kleinunternehmer gebaut wurde – einfach, sicher und bezahlbar."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="Upgrade"
        />
      </main>

      <Footer />
    </div>
  );
}
