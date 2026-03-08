import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import FAQ from "@/components/FAQ";
import KiChatVisual from "@/components/animations/KiChatVisual";
import KiBelegErkennungVisual from "@/components/animations/KiBelegErkennungVisual";
import KiVorschlaegeVisual from "@/components/animations/KiVorschlaegeVisual";
import KiAutomatisierungVisual from "@/components/animations/KiAutomatisierungVisual";

export const metadata: Metadata = {
  title: "KI-Funktionen | BillCraft – Dein intelligenter Buchhaltungsassistent",
  description:
    "BillCraft nutzt künstliche Intelligenz, um deine Buchhaltung zu automatisieren. Von der Beleg-Erkennung bis zur Rechnungserstellung – intelligent, schnell und lernfähig.",
};

const faqItems = [
  {
    question: "Wie sicher sind meine Daten?",
    answer:
      "Alle Daten werden verschlüsselt gespeichert und verarbeitet. Die KI-Verarbeitung findet auf europäischen Servern statt. Deine Daten werden nie für Training verwendet.",
  },
  {
    question: "Wie genau ist die KI-Erkennung?",
    answer:
      "Die Erkennungsrate liegt bei über 95% für Standardbelege. Bei unklaren Fällen fragt die KI nach – du behältst immer die Kontrolle.",
  },
  {
    question: "Welche KI-Technologie wird verwendet?",
    answer:
      "BillCraft nutzt modernste Sprachmodelle und Computer Vision, optimiert für deutschsprachige Buchhaltung und österreichisches/deutsches Steuerrecht.",
  },
  {
    question: "Kann ich die KI-Vorschläge korrigieren?",
    answer:
      "Ja, jeder Vorschlag kann manuell angepasst werden. Die KI lernt aus deinen Korrekturen und wird mit der Zeit immer genauer.",
  },
];

export default function KIPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main>
        <ProductHero
          title="Dein KI-Buchhalter, der nie schläft"
          description="BillCraft nutzt künstliche Intelligenz, um deine Buchhaltung zu automatisieren. Von der Beleg-Erkennung bis zur Rechnungserstellung – intelligent, schnell und lernfähig."
          ctaText="KI kostenlos testen"
          ctaHref="#signup"
          headingId="ki-hero-heading"
        >
          <KiChatVisual />
        </ProductHero>

        <FeatureShowcaseSection
          tag="Erkennung"
          headline="Belege erkennen – automatisch und präzise."
          description="Fotografiere oder lade einen Beleg hoch. Die KI erkennt Beträge, Kategorien und Lieferanten in Sekunden. Kein manuelles Abtippen mehr."
          ctaText="Jetzt ausprobieren"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-purple-500/10 text-purple-700"
        >
          <KiBelegErkennungVisual />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Vorschläge"
          headline="Smarte Vorschläge, die mitdenken."
          description="Basierend auf deinen bisherigen Rechnungen und Belegen schlägt die KI passende Kategorien, Kunden und Positionen vor. Je mehr du nutzt, desto besser wird sie."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-blue/10 text-blue"
        >
          <KiVorschlaegeVisual />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Automatisierung"
          headline="Wiederkehrende Aufgaben? Erledigt."
          description="Automatische Buchungsvorschläge, Zahlungserinnerungen und Steuerberater-Exports. Die KI lernt deine Workflows und nimmt dir Routinearbeit ab."
          ctaText="Jetzt entdecken"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-purple-500/10 text-purple-700"
        >
          <KiAutomatisierungVisual />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Bereit für intelligente Buchhaltung?"
          description="Teste die KI-Funktionen von BillCraft kostenlos und erlebe, wie viel Zeit du bei der täglichen Buchhaltung sparen kannst."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="dark"
          headlineHighlight="intelligente"
        />

        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <FAQ title="Häufige Fragen zur KI" items={faqItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
