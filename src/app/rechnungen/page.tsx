import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import Image from "next/image";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import FinalisierungVisual from "@/components/animations/rechnungen/FinalisierungVisual";
import WiederkehrendeVisual from "@/components/animations/rechnungen/WiederkehrendeVisual";
import SendFlowVisual from "@/components/animations/rechnungen/SendFlowVisual";
import ERechnungVisual from "@/components/animations/rechnungen/ERechnungVisual";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import {
  Puzzle,
  Percent,
  ListOrdered,
  Upload,
  FileX2,
  CreditCard,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Rechnungen erstellen | BillCraft – Professionelle Rechnungen in Sekunden",
  description:
    "Erstelle und versende professionelle Rechnungen mit BillCraft. Rechtssicher finalisieren, wiederkehrende Rechnungen, E-Rechnung mit ebInterface, eigener SMTP und mehr.",
  openGraph: {
    title: "Rechnungen erstellen | BillCraft",
    description:
      "Professionelle Rechnungen in Sekunden. Rechtssicher, wiederkehrend, mit E-Rechnung und automatischem Versand.",
  },
};

const features = [
  {
    icon: <Puzzle className="w-5 h-5" />,
    title: "Rechnungsnummern-Baukasten",
    description:
      "Stelle dein Nummernformat frei zusammen – per Drag & Drop. Präfix, Jahr, laufende Nummer, Trennzeichen: alles konfigurierbar.",
  },
  {
    icon: <Percent className="w-5 h-5" />,
    title: "Skonto & Rabatte",
    description:
      "Definiere Skonto-Fristen und Prozentsätze direkt auf der Rechnung. BillCraft berechnet Abzüge automatisch.",
  },
  {
    icon: <ListOrdered className="w-5 h-5" />,
    title: "Fortlaufende Nummerierung",
    description:
      "Lückenlose, chronologische Rechnungsnummern – automatisch und gesetzeskonform. Auch über Jahreswechsel hinweg.",
  },
  {
    icon: <Upload className="w-5 h-5" />,
    title: "CSV-Import",
    description:
      "Importiere bestehende Rechnungsdaten per CSV. Migriere von deinem alten Tool in wenigen Minuten.",
  },
  {
    icon: <FileX2 className="w-5 h-5" />,
    title: "Storno & Gutschriften",
    description:
      "Erstelle Stornorechnungen und Gutschriften mit einem Klick – automatisch verknüpft und korrekt referenziert.",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Zahlungsstatus-Tracking",
    description:
      "Sieh auf einen Blick, welche Rechnungen offen, bezahlt oder überfällig sind. Automatische Zahlungserinnerungen inklusive.",
  },
];

const faqItems = [
  {
    question: "Welche Pflichtangaben enthält eine Rechnung?",
    answer:
      "BillCraft sorgt automatisch dafür, dass alle gesetzlich vorgeschriebenen Angaben enthalten sind: Rechnungsnummer, Datum, Leistungszeitraum, Steuernummer/UID, Empfänger, Positionen mit Einzelpreisen, Nettobetrag, USt-Satz und Bruttobetrag.",
  },
  {
    question: "Was bedeutet Finalisierung?",
    answer:
      "Eine finalisierte Rechnung ist rechtssicher gesperrt und kann nicht mehr verändert werden – so wie es das Gesetz vorschreibt. Falls Korrekturen nötig sind, erstellst du einfach eine Stornorechnung oder Gutschrift.",
  },
  {
    question: "Unterstützt BillCraft die Kleinunternehmerregelung?",
    answer:
      "Ja. In den Einstellungen kannst du die Kleinunternehmerregelung aktivieren. BillCraft passt dann automatisch alle Rechnungen an – ohne Umsatzsteuer-Ausweis, mit dem korrekten Hinweistext.",
  },
  {
    question: "Was ist eine E-Rechnung im ebInterface-Format?",
    answer:
      "ebInterface ist das österreichische Standard-XML-Format für elektronische Rechnungen. Es wird von Behörden und zunehmend auch im B2B-Bereich verlangt. BillCraft generiert ebInterface 6.1 automatisch aus deiner Rechnung.",
  },
  {
    question: "Kann ich meinen eigenen SMTP-Server verwenden?",
    answer:
      "Ja. Du kannst deinen eigenen SMTP-Server hinterlegen, damit Rechnungen direkt von deiner geschäftlichen E-Mail-Adresse versendet werden – für maximale Professionalität und Zustellbarkeit.",
  },
  {
    question: "Wie funktionieren wiederkehrende Rechnungen?",
    answer:
      "Lege ein Intervall fest (monatlich, quartalsweise, jährlich) und BillCraft erstellt und versendet die Rechnung automatisch zum gewünschten Zeitpunkt – ideal für Abos und Wartungsverträge.",
  },
  {
    question: "Kann ich alte Rechnungsdaten importieren?",
    answer:
      "Ja. Über den CSV-Import kannst du bestehende Rechnungsdaten aus deinem alten Tool migrieren. BillCraft mappt die Felder automatisch und du kannst vor dem Import alles prüfen.",
  },
];

export default function RechnungenPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main>
        {/* Hero */}
        <ProductHero
          title="Professionelle Rechnungen in Sekunden"
          description="Erstelle, finalisiere und versende Rechnungen mit allen Pflichtangaben – rechtssicher, in deinem Design und mit einem Klick beim Kunden."
          ctaText="Erste Rechnung erstellen"
          ctaHref="#signup"
          headingId="rechnungen-hero-heading"
        >
          <div
            className="w-[200%] max-w-none -mr-[50%] rounded-xl overflow-hidden border border-gray shadow-2xl"
            style={{
              transform: "perspective(1000px) rotateY(-12deg) rotateX(4deg)",
            }}
          >
            <Image
              src="/images/rechnungen-detail.webp"
              alt="BillCraft Rechnungsdetail-Ansicht"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </ProductHero>

        {/* Finalisierung */}
        <FeatureShowcaseSection
          tag="Rechtssicherheit"
          headline="Finalisieren. Sperren. Fertig."
          description="Finalisierte Rechnungen sind unveränderbar – so wie es das Gesetz verlangt. Ein Klick genügt und die Rechnung ist rechtssicher gesperrt. Korrekturen? Einfach per Storno oder Gutschrift."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-blue/10 text-blue"
        >
          <FinalisierungVisual />
        </FeatureShowcaseSection>

        {/* Wiederkehrende Rechnungen */}
        <FeatureShowcaseSection
          tag="Automatisierung"
          headline="Wiederkehrende Rechnungen auf Autopilot."
          description="Einmal einrichten, nie wieder dran denken. BillCraft erstellt und versendet wiederkehrende Rechnungen automatisch – monatlich, quartalsweise oder jährlich. Ideal für Abos und Wartungsverträge."
          ctaText="Jetzt einrichten"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-purple/10 text-purple"
        >
          <WiederkehrendeVisual />
        </FeatureShowcaseSection>

        {/* Versand */}
        <FeatureShowcaseSection
          tag="Versand"
          headline="Per Klick beim Kunden – mit deiner E-Mail."
          description="Versende Rechnungen direkt per E-Mail mit automatisch generierter PDF. Nutze deinen eigenen SMTP-Server für maximale Professionalität. BillCraft trackt den Status: erstellt, versendet, bezahlt."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-green/10 text-green"
        >
          <SendFlowVisual />
        </FeatureShowcaseSection>

        {/* E-Rechnung */}
        <FeatureShowcaseSection
          tag="E-Rechnung"
          headline="Digitale Rechnungen im ebInterface-Format."
          description="BillCraft generiert automatisch strukturierte XML-Rechnungen im ebInterface 6.1 Standard – validiert und EU-konform. Bereit für Behörden, B2B und die Zukunft der Rechnungsstellung."
          ctaText="E-Rechnung entdecken"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-blue/10 text-blue"
        >
          <ERechnungVisual />
        </FeatureShowcaseSection>

        {/* Feature Grid */}
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <FeatureGrid
            headline="Alles, was du für Rechnungen brauchst."
            features={features}
          />
        </div>

        {/* CTA */}
        <IntermediateSection
          headline="Rechnungen schreiben war noch nie so einfach."
          description="Starte kostenlos und erstelle deine erste Rechnung in unter zwei Minuten – ohne Vorwissen, ohne Einrichtung."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="einfach"
        />

        {/* FAQ */}
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <FAQ title="Häufige Fragen zu Rechnungen" items={faqItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
