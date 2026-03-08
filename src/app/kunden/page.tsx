import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import KundenProfilVisual from "@/components/animations/KundenProfilVisual";
import KundenListeVisual from "@/components/animations/KundenListeVisual";
import KundenUmsatzVisual from "@/components/animations/KundenUmsatzVisual";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Kundenverwaltung | BillCraft – Alle Kunden an einem Ort",
  description:
    "Verwalten Sie Kunden, Kontakte und Projekte zentral in BillCraft. Rechnungen und Belege direkt zuordnen – übersichtlich und effizient.",
};

const faqItems = [
  {
    question: "Wie importiere ich bestehende Kunden?",
    answer: "CSV-Import oder manuell. BillCraft erkennt Duplikate automatisch.",
  },
  {
    question: "Kann ich mehrere Ansprechpartner pro Kunde anlegen?",
    answer:
      "Ja, beliebig viele Kontakte pro Unternehmen mit Rolle und Kontaktdaten.",
  },
  {
    question: "Werden Rechnungen automatisch dem Kunden zugeordnet?",
    answer:
      "Ja, beim Erstellen einer Rechnung wählst du den Kunden aus. Alle Dokumente werden automatisch verknüpft.",
  },
  {
    question: "Kann ich kundenbezogene Auswertungen sehen?",
    answer:
      "Ja, pro Kunde siehst du Umsatz, offene Posten und Rechnungshistorie auf einen Blick.",
  },
];

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
          <KundenProfilVisual />
        </ProductHero>

        <FeatureShowcaseSection
          tag="Kontakte"
          headline="Stammdaten und Ansprechpartner verwalten."
          description="Erfassen Sie alle relevanten Kundendaten an einem Ort: Firmenname, Adresse, UID-Nummer, Zahlungsbedingungen und beliebig viele Ansprechpartner. Alles ist sofort griffbereit, wenn Sie eine Rechnung erstellen."
          ctaText="Kostenlos ausprobieren"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-pink/10 text-pink"
        >
          <KundenListeVisual />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Projekte"
          headline="Projekte zuordnen und nachverfolgen."
          description="Legen Sie Projekte an und verknüpfen Sie Rechnungen, Belege und Zeiteinträge direkt mit dem jeweiligen Kunden. So sehen Sie auf einen Blick, welcher Auftrag wie weit ist und was noch offen steht."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-pink/10 text-pink"
        >
          <KundenUmsatzVisual />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Kundenmanagement ohne Aufwand."
          description="Behalten Sie bei jedem Kunden den vollen Überblick – von der ersten Rechnung bis zum aktuellen Projekt."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="dark"
          headlineHighlight="Aufwand"
        />

        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <FAQ title="Häufige Fragen zur Kundenverwaltung" items={faqItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
