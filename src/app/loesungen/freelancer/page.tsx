import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureShowcaseSection from "@/components/FeatureShowcaseSection";
import FeatureGrid from "@/components/FeatureGrid";
import TestimonialSection from "@/components/TestimonialSection";
import StatsSection from "@/components/StatsSection";
import IntermediateSection from "@/components/IntermediateSection";
import FAQ from "@/components/FAQ";
import FreelancerHero from "./FreelancerHero";
import FreelancerRechnungVisual from "@/components/animations/FreelancerRechnungVisual";
import FreelancerMobilVisual from "@/components/animations/FreelancerMobilVisual";
import { Clock, Camera, BarChart3, FileDown } from "lucide-react";

export const metadata: Metadata = {
  title: "BillCraft für Freelancer | Buchhaltung die keine Zeit frisst",
  description:
    "Als Freelancer willst du arbeiten, nicht Rechnungen schreiben. BillCraft erledigt deine Buchhaltung in Minuten – kostenlos starten.",
};

const featureGridItems = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Rechnungen in 5 Minuten",
    description:
      "Erstelle professionelle Rechnungen mit allen Pflichtangaben. Vorlage wählen, Daten eingeben, versenden.",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Belege fotografieren",
    description:
      "Scanne Belege mit dem Handy. Die KI erkennt Beträge und Kategorien automatisch.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Finanz-Überblick",
    description:
      "Dashboard mit Umsätzen, Ausgaben und offenen Rechnungen. Alles auf einen Blick.",
  },
  {
    icon: <FileDown className="w-6 h-6" />,
    title: "Steuerberater-Export",
    description:
      "Exportiere alle Daten perfekt aufbereitet für deinen Steuerberater. Kein Hin-und-Her.",
  },
];

const testimonials = [
  {
    quote:
      "Seit ich BillCraft nutze, brauche ich keine 2 Stunden mehr für meine monatliche Buchhaltung. 20 Minuten reichen.",
    author: "Lisa M.",
    role: "Grafikdesignerin",
  },
  {
    quote:
      "Endlich eine Buchhaltungssoftware, die ich als Nicht-Buchhalter verstehe. Einfach, schnell, perfekt.",
    author: "Thomas K.",
    role: "Webentwickler",
    company: "Wien",
  },
  {
    quote:
      "Der Steuerberater-Export ist Gold wert. Mein Steuerberater war begeistert, wie sauber die Daten aufbereitet sind.",
    author: "Sarah W.",
    role: "Texterin",
  },
];

const stats = [
  { value: "5 Min", label: "Durchschnittliche Rechnungserstellung" },
  { value: "95%", label: "KI-Erkennungsrate bei Belegen" },
  { value: "10.000+", label: "Freelancer vertrauen BillCraft" },
  { value: "4,8/5", label: "Durchschnittliche Bewertung" },
];

const faqItems = [
  {
    question: "Ist BillCraft wirklich kostenlos?",
    answer:
      "Ja, die Grundfunktionen sind dauerhaft kostenlos. Du kannst Rechnungen erstellen, Belege scannen und Kunden verwalten – ohne zeitliche Begrenzung.",
  },
  {
    question: "Brauche ich Buchhaltungskenntnisse?",
    answer:
      "Nein. BillCraft führt dich Schritt für Schritt durch jeden Prozess. Die KI hilft dir bei der Kategorisierung und erkennt Fehler automatisch.",
  },
  {
    question: "Kann ich BillCraft für die Steuererklärung nutzen?",
    answer:
      "BillCraft bereitet alle Daten perfekt für deinen Steuerberater auf. Du kannst Reports und Exporte erstellen, die direkt weiterverarbeitet werden können.",
  },
  {
    question: "Funktioniert BillCraft auch auf dem Handy?",
    answer:
      "Ja. Die Web-App ist vollständig responsive und funktioniert auf allen Geräten. Eine native App ist in Planung.",
  },
];

export default function FreelancerPage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main>
        <FreelancerHero />

        <FeatureGrid
          headline="Warum BillCraft für Freelancer?"
          features={featureGridItems}
          columns={4}
        />

        <FeatureShowcaseSection
          tag="Schnelligkeit"
          headline="Von der Leistung zur Rechnung in Rekordzeit."
          description="Hinterlege deine Stammdaten einmal. Danach reichen wenige Klicks für eine neue Rechnung: Kunde wählen, Positionen eingeben, versenden. Fertig."
          ctaText="Kostenlos ausprobieren"
          ctaHref="#signup"
          imagePosition="right"
          tagClassName="bg-blue/10 text-blue"
        >
          <FreelancerRechnungVisual />
        </FeatureShowcaseSection>

        <FeatureShowcaseSection
          tag="Mobil"
          headline="Buchhaltung, die in deine Tasche passt."
          description="Mit der BillCraft App hast du deine Finanzen immer dabei. Beleg scannen unterwegs, Rechnung vom Café aus versenden, Zahlungsstatus im Blick."
          ctaText="Jetzt entdecken"
          ctaHref="#signup"
          imagePosition="left"
          tagClassName="bg-orange/10 text-orange"
        >
          <FreelancerMobilVisual />
        </FeatureShowcaseSection>

        <TestimonialSection
          headline="Was Freelancer über BillCraft sagen"
          testimonials={testimonials}
        />

        <StatsSection stats={stats} variant="light" />

        <IntermediateSection
          headline="Starte kostenlos. Keine Kreditkarte nötig."
          headlineHighlight="kostenlos"
          description="Grundfunktionen sind dauerhaft kostenlos. Upgrade jederzeit auf Standard für unbegrenzte Rechnungen und KI-Features."
          ctaText="Jetzt kostenlos starten"
          ctaHref="#signup"
          variant="gradient"
        />

        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
            <FAQ title="Häufige Fragen" items={faqItems} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
