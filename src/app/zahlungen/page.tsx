import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import FAQ from "@/components/FAQ";
import PaymentStatusVisual from "@/components/animations/PaymentStatusVisual";
import OffenePostenVisual from "@/components/animations/OffenePostenVisual";
import MahnwesenVisual from "@/components/animations/MahnwesenVisual";

export const metadata: Metadata = {
  title: "Zahlungen | BillCraft – Zahlungsübersicht und Abgleich",
  description:
    "Behalten Sie alle Zahlungen im Blick. Offene Posten, Zahlungsabgleich und Mahnwesen – alles in einer Übersicht mit BillCraft.",
};

const faqItems = [
  {
    question: "Wie erkenne ich überfällige Rechnungen?",
    answer:
      "BillCraft markiert überfällige Rechnungen automatisch rot und zeigt die Tage seit Fälligkeit an. Du erhältst auch eine Benachrichtigung.",
  },
  {
    question: "Kann BillCraft automatisch Zahlungserinnerungen verschicken?",
    answer:
      "Ja, du kannst Zahlungserinnerungen und Mahnungen automatisch nach definierbaren Fristen versenden lassen.",
  },
  {
    question: "Werden eingehende Zahlungen automatisch zugeordnet?",
    answer:
      "BillCraft erkennt Zahlungseingänge und ordnet sie den passenden Rechnungen zu. Du bestätigst nur noch.",
  },
  {
    question: "Welche Zahlungsarten werden unterstützt?",
    answer:
      "Überweisung, Kreditkarte, PayPal und weitere Zahlungsanbieter. Der Status wird automatisch aktualisiert.",
  },
];

export default function ZahlungenPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main>
        <ProductHero
          title="Zahlungen im Blick behalten"
          description="Sehen Sie auf einen Blick, welche Rechnungen bezahlt sind und welche noch offen stehen. BillCraft hilft Ihnen, den Überblick über Ihre Zahlungsströme zu behalten."
          ctaText="Kostenlos testen"
          ctaHref="#signup"
          headingId="zahlungen-hero-heading"
        >
          <PaymentStatusVisual />
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
          <OffenePostenVisual />
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
          <MahnwesenVisual />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Nie wieder offene Posten übersehen."
          description="Behalten Sie die Kontrolle über Ihre Zahlungsströme – automatisch, übersichtlich und ohne manuellen Aufwand."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="dark"
          headlineHighlight="übersehen"
        />

        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <FAQ title="Häufige Fragen zu Zahlungen" items={faqItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
