import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductHero } from "@/components/product-hero";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import IntermediateSection from "@/components/IntermediateSection";
import Image from "next/image";
import AngebotErstellenVisual from "@/components/animations/angebote/AngebotErstellenVisual";
import AngebotKonvertierungVisual from "@/components/animations/angebote/AngebotKonvertierungVisual";
import AngebotStatusVisual from "@/components/animations/angebote/AngebotStatusVisual";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import {
  Copy,
  Clock,
  Palette,
  FileDown,
  Languages,
  CalendarClock,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Angebote erstellen | BillCraft – Professionelle Angebote in Minuten",
  description:
    "Erstelle professionelle Angebote mit BillCraft. Status-Tracking, Vorlagen und mit einem Klick zur Rechnung konvertieren.",
  openGraph: {
    title: "Angebote erstellen | BillCraft",
    description:
      "Professionelle Angebote in Minuten. Mit Status-Tracking und 1-Klick-Konvertierung zur Rechnung.",
  },
};

const features = [
  {
    icon: <Copy className="w-5 h-5" />,
    title: "Angebotsvorlagen",
    description:
      "Speichere häufig verwendete Angebote als Vorlage. Beim nächsten Mal nur noch Kunde und Datum anpassen – fertig.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Gültigkeitsdauer",
    description:
      "Setze ein Ablaufdatum für deine Angebote. BillCraft erinnert dich, wenn ein Angebot bald abläuft und noch nicht akzeptiert wurde.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Individuelles Design",
    description:
      "Passe Angebote an dein Branding an: Logo, Farben und Schriftart. Jedes Angebot sieht aus wie von einem Designer erstellt.",
  },
  {
    icon: <FileDown className="w-5 h-5" />,
    title: "PDF-Export",
    description:
      "Exportiere Angebote als professionelle PDF – perfekt formatiert und bereit zum Versand per E-Mail oder Download.",
  },
  {
    icon: <Languages className="w-5 h-5" />,
    title: "Mehrsprachigkeit",
    description:
      "Erstelle Angebote auf Deutsch oder Englisch. Ideal für internationale Kunden und grenzüberschreitende Projekte.",
  },
  {
    icon: <CalendarClock className="w-5 h-5" />,
    title: "Versionshistorie",
    description:
      "Jede Änderung wird gespeichert. Vergleiche Versionen und sieh nach, was sich zwischen zwei Angeboten geändert hat.",
  },
];

const faqItems = [
  {
    question: "Was ist der Unterschied zwischen Angebot und Rechnung?",
    answer:
      "Ein Angebot ist ein unverbindlicher Kostenvoranschlag für deinen Kunden. Erst wenn das Angebot akzeptiert wird, erstellst du daraus eine verbindliche Rechnung. BillCraft macht die Konvertierung mit einem Klick.",
  },
  {
    question: "Kann ich ein Angebot nachträglich ändern?",
    answer:
      "Ja, solange das Angebot nicht akzeptiert wurde, kannst du es jederzeit bearbeiten. Jede Änderung wird in der Versionshistorie gespeichert, sodass du den Verlauf nachvollziehen kannst.",
  },
  {
    question: "Wie konvertiere ich ein Angebot zur Rechnung?",
    answer:
      'Sobald dein Kunde das Angebot akzeptiert hat, klickst du auf „Zur Rechnung konvertieren". Alle Positionen, Beträge und Kundendaten werden automatisch übernommen – du musst nichts nochmal eintippen.',
  },
  {
    question: "Kann ich Angebote direkt per E-Mail versenden?",
    answer:
      "Ja. Du kannst Angebote als PDF direkt per E-Mail an deinen Kunden senden – wahlweise über BillCraft oder deinen eigenen SMTP-Server.",
  },
  {
    question: "Werden akzeptierte Angebote automatisch zur Rechnung?",
    answer:
      "Nein, die Konvertierung passiert nicht automatisch. Du entscheidest, wann der richtige Zeitpunkt ist und löst die Umwandlung manuell mit einem Klick aus.",
  },
  {
    question: "Kann ich Rabatte und Skonto im Angebot angeben?",
    answer:
      "Ja. Du kannst Rabatte pro Position oder auf den Gesamtbetrag vergeben. Auch Skonto-Konditionen lassen sich direkt im Angebot festlegen und werden bei der Konvertierung zur Rechnung übernommen.",
  },
];

export default function AngebotePage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main>
        {/* Hero */}
        <ProductHero
          title="Angebote, die überzeugen"
          description="Erstelle professionelle Angebote in Minuten. Verfolge den Status, und konvertiere akzeptierte Angebote mit einem Klick zur Rechnung – ohne Daten nochmal einzutippen."
          ctaText="Erstes Angebot erstellen"
          ctaHref="#signup"
          headingId="angebote-hero-heading"
        >
          <div
            className="w-[200%] max-w-none -mr-[50%] rounded-xl overflow-hidden border border-gray shadow-2xl"
            style={{
              transform: "perspective(1000px) rotateY(-12deg) rotateX(4deg)",
            }}
          >
            <Image
              src="/images/angebot-details.webp"
              alt="BillCraft Angebotsdetail-Ansicht"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </ProductHero>

        {/* Status-Tracking */}
        <FeatureShowcaseSection
          tag="Status-Tracking"
          headline="Immer wissen, wo dein Angebot steht."
          description="Versendet, geöffnet, in Prüfung, akzeptiert – verfolge den gesamten Lebenszyklus deiner Angebote in Echtzeit. Kein Nachfragen mehr nötig."
          ctaText="Mehr erfahren"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-purple/10 text-purple"
        >
          <AngebotStatusVisual />
        </FeatureShowcaseSection>

        {/* Konvertierung */}
        <FeatureShowcaseSection
          tag="Konvertierung"
          headline="Vom Angebot zur Rechnung – ein Klick."
          description="Wenn der Kunde zusagt, wird das Angebot mit allen Positionen und Daten zur Rechnung. Keine Doppelerfassung, keine Fehler. BillCraft übernimmt alles automatisch."
          ctaText="Jetzt ausprobieren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-pink/10 text-pink"
        >
          <AngebotKonvertierungVisual />
        </FeatureShowcaseSection>

        {/* Feature Grid */}
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <FeatureGrid
            headline="Alles, was du für Angebote brauchst."
            features={features}
          />
        </div>

        {/* CTA */}
        <IntermediateSection
          headline="Angebote schreiben, die Aufträge bringen."
          description="Professionell, schnell und nahtlos. Erstelle Angebote und mach sie mit einem Klick zur Rechnung – ohne Medienbruch."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
          headlineHighlight="Aufträge bringen"
        />

        {/* FAQ */}
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <FAQ title="Häufige Fragen zu Angeboten" items={faqItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
