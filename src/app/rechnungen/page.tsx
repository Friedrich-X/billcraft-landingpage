import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import InvoiceExampleCard from "@/components/invoice/InvoiceExampleCard";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import InvoiceEditorVisual from "@/components/animations/InvoiceEditorVisual";
import SendFlowVisual from "@/components/animations/SendFlowVisual";
import PaymentStatusVisual from "@/components/animations/PaymentStatusVisual";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title:
    "Rechnungen erstellen | BillCraft – Professionelle Rechnungen in Sekunden",
  description:
    "Erstelle und versende professionelle Rechnungen mit BillCraft. KI-gestützt, rechtssicher, mit automatischem Versand und Zahlungsstatus-Tracking.",
  openGraph: {
    title: "Rechnungen erstellen | BillCraft",
    description:
      "Professionelle Rechnungen in Sekunden. KI-gestützte Erstellung, rechtssichere Vorlagen, automatischer Versand.",
  },
};

const faqItems = [
  {
    question: "Welche Pflichtangaben enthält eine Rechnung?",
    answer:
      "BillCraft sorgt automatisch dafür, dass alle gesetzlich vorgeschriebenen Angaben enthalten sind: Rechnungsnummer, Datum, Leistungszeitraum, Steuernummer/UID, Empfänger, Positionen mit Einzelpreisen, Nettobetrag, USt-Satz und Bruttobetrag.",
  },
  {
    question: "Wie erstelle ich eine Stornorechnung?",
    answer:
      "Öffne die ursprüngliche Rechnung und klicke auf \u201EStornieren\u201C. BillCraft erstellt automatisch eine Stornorechnung mit korrektem Verweis auf die Originalrechnung und allen erforderlichen Angaben.",
  },
  {
    question: "Unterstützt BillCraft die Kleinunternehmerregelung?",
    answer:
      "Ja. In den Einstellungen kannst du die Kleinunternehmerregelung aktivieren. BillCraft passt dann automatisch alle Rechnungen an – ohne Umsatzsteuer-Ausweis, mit dem korrekten Hinweistext.",
  },
  {
    question: "Welche Versandoptionen gibt es?",
    answer:
      "Du kannst Rechnungen direkt per E-Mail versenden (inkl. PDF-Anhang), als PDF herunterladen oder den Link zur Online-Rechnung teilen. Der Versandstatus wird automatisch nachverfolgt.",
  },
  {
    question: "Wie funktioniert das Mahnwesen?",
    answer:
      "BillCraft erkennt überfällige Rechnungen automatisch und erstellt Zahlungserinnerungen sowie Mahnstufen (1. und 2. Mahnung). Du kannst Fristen und Texte individuell anpassen und Mahnungen per E-Mail versenden.",
  },
  {
    question: "Kann ich Gutschriften und Stornos erstellen?",
    answer:
      "Ja. Über die Rechnungsdetails kannst du eine Stornorechnung oder Gutschrift mit einem Klick erstellen. BillCraft verknüpft diese automatisch mit der Originalrechnung und passt alle Salden an.",
  },
  {
    question: "Gibt es wiederkehrende Rechnungen?",
    answer:
      "Ja. Lege ein Intervall fest (monatlich, quartalsweise, jährlich) und BillCraft erstellt und versendet die Rechnung automatisch zum gewünschten Zeitpunkt – ideal für Abos und Wartungsverträge.",
  },
];

export default function RechnungenPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <ProductHero
          title="Professionelle Rechnungen in Sekunden"
          description="Erstelle Rechnungen mit allen Pflichtangaben – KI-gestützt, rechtssicher und in deinem Design. Versende per E-Mail und behalte den Zahlungsstatus im Blick."
          ctaText="Erste Rechnung erstellen"
          ctaHref="#signup"
          headingId="rechnungen-hero-heading"
        >
          <InvoiceExampleCard />
        </ProductHero>

        <FeatureShowcaseSection
          tag="Vorlagen"
          headline="Dein Design. Deine Rechnung."
          description="Gestalte Rechnungen mit deinem Logo, Farben und Schriftarten. Lege Standardtexte und Positionen fest und spare bei jeder neuen Rechnung Zeit. Einmal angelegt, immer wiederverwendbar."
          ctaText="Vorlagen entdecken"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-green-500/10 text-green-700"
        >
          <InvoiceEditorVisual />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Versand"
          headline="Von der Erstellung bis zur Zustellung – automatisch."
          description="Versende Rechnungen direkt per E-Mail mit automatisch generierter PDF. BillCraft verfolgt den Status: erstellt, versendet, zugestellt, bezahlt. Du behältst den Überblick."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-green-500/10 text-green-700"
        >
          <SendFlowVisual />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Status"
          headline="Zahlungsstatus in Echtzeit."
          description="Sieh auf einen Blick, welche Rechnungen offen, bezahlt oder überfällig sind. Automatische Zahlungserinnerungen sorgen dafür, dass du dein Geld bekommst – ohne Nachfragen."
          ctaText="Jetzt testen"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-blue/10 text-blue"
        >
          <PaymentStatusVisual />
        </FeatureShowcaseSection>

        <IntermediateSection
          headline="Rechnungen schreiben war noch nie so einfach."
          description="Starte kostenlos und erstelle deine erste Rechnung in unter zwei Minuten – ohne Vorwissen, ohne Einrichtung."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="einfach"
        />

        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <FAQ title="Häufige Fragen zu Rechnungen" items={faqItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
