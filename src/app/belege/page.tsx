import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import BelegScannerVisual from "@/components/animations/BelegScannerVisual";
import BelegKategorisierungVisual from "@/components/animations/BelegKategorisierungVisual";
import BelegArchivVisual from "@/components/animations/BelegArchivVisual";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Belege erfassen | BillCraft – Digitale Belegverwaltung",
  description:
    "Erfassen, kategorisieren und archivieren Sie Belege digital mit BillCraft. Automatische Erkennung, übersichtliche Ablage und GoBD-konform.",
};

const faqItems = [
  {
    question: "Welche Belegtypen werden unterstützt?",
    answer:
      "BillCraft unterstützt alle gängigen Belegtypen: Quittungen, Rechnungen, Kassenzettel sowie digitale Belege wie PDFs und E-Mail-Anhänge. Einfach fotografieren oder hochladen – den Rest erledigt die automatische Erkennung.",
  },
  {
    question: "Wie funktioniert die automatische Erkennung?",
    answer:
      "Unsere KI erkennt automatisch die wichtigsten Daten aus Ihren Belegen: Datum, Betrag, Händler und Kategorie. Egal ob Foto oder PDF – die Erkennung funktioniert zuverlässig und spart Ihnen das manuelle Eintippen.",
  },
  {
    question: "Sind meine Belege GoBD-konform archiviert?",
    answer:
      "Ja. Alle Belege werden revisionssicher archiviert: unveränderbar, vollständig und jederzeit abrufbar. Die Aufbewahrungsfrist von 10 Jahren wird automatisch eingehalten – so sind Sie immer auf der sicheren Seite.",
  },
  {
    question: "Kann ich Belege exportieren?",
    answer:
      "Ja, Sie können Belege jederzeit als PDF oder CSV exportieren – einzeln oder gesammelt. Die Exporte sind Steuerberater-ready und lassen sich direkt in gängige Buchhaltungssysteme importieren.",
  },
];

export default function BelegePage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main>
        <ProductHero
          title="Belege digital erfassen und organisieren"
          description="Schluss mit Papierchaos. Fotografieren oder laden Sie Belege hoch – BillCraft erkennt die wichtigsten Daten automatisch und legt alles übersichtlich ab."
          ctaText="Kostenlos testen"
          ctaHref="#signup"
          headingId="belege-hero-heading"
        >
          <BelegScannerVisual />
        </ProductHero>

        <FeatureShowcaseSection
          tag="Erkennung"
          headline="Automatische Kategorisierung Ihrer Belege."
          description="Laden Sie einen Beleg hoch und BillCraft erkennt Datum, Betrag und Kategorie automatisch. Ausgaben werden den richtigen Kategorien zugeordnet – ohne manuelles Eintippen."
          ctaText="Kostenlos ausprobieren"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-orange-500/10 text-orange-700"
        >
          <BelegKategorisierungVisual />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Archiv"
          headline="Alle Belege sicher und auffindbar."
          description="Ihr digitales Belegarchiv in der Cloud: Suchen Sie nach Datum, Betrag oder Kategorie und finden Sie jeden Beleg in Sekunden. GoBD-konform archiviert und jederzeit exportierbar."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-orange-500/10 text-orange-700"
        >
          <BelegArchivVisual />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Belege erfassen leicht gemacht."
          description="Kein Papierstapel, keine verlorenen Quittungen. Digitalisieren Sie Ihre Belege und behalten Sie den Überblick über alle Ausgaben."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="leicht gemacht"
        />

        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <FAQ title="Häufige Fragen zu Belegen" items={faqItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
