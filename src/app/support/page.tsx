import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import IntermediateSection from "@/components/IntermediateSection";

export const metadata: Metadata = {
  title: "Support Center | BillCraft – Hilfe und Antworten",
  description:
    "Brauchen Sie Hilfe mit BillCraft? Finden Sie Antworten auf häufige Fragen oder kontaktieren Sie unser Support-Team.",
};

const faqItems = [
  {
    question: "Wie erstelle ich meine erste Rechnung?",
    answer:
      'Nach der Registrierung klicken Sie auf „Neue Rechnung". Geben Sie die Kundendaten, Positionen und Beträge ein. BillCraft ergänzt alle Pflichtangaben automatisch. Anschließend können Sie die Rechnung per E-Mail versenden oder als PDF herunterladen.',
  },
  {
    question: "Kann ich BillCraft kostenlos nutzen?",
    answer:
      "Ja. Der kostenlose Plan umfasst Rechnungen erstellen, Belege erfassen und Kunden verwalten. Für erweiterte Funktionen wie unbegrenzte Rechnungen und Berichte gibt es den Standard-Plan.",
  },
  {
    question: "Wie erfasse ich Belege?",
    answer:
      "Laden Sie Belege als Foto oder PDF hoch. BillCraft erkennt Datum, Betrag und Kategorie automatisch. Sie können Belege auch per Drag & Drop hochladen oder direkt mit der Kamera erfassen.",
  },
  {
    question: "Sind meine Daten sicher?",
    answer:
      "Ja. BillCraft speichert alle Daten verschlüsselt in europäischen Rechenzentren. Regelmäßige Backups und strenge Zugriffskontrollen sorgen für maximale Sicherheit.",
  },
  {
    question: "Kann ich meine Daten exportieren?",
    answer:
      "Ja. Sie können Rechnungen als PDF, Berichte als CSV und alle Daten über die Exportfunktion herunterladen. Ihre Daten gehören Ihnen.",
  },
  {
    question: "Wie erreiche ich den Support?",
    answer:
      "Sie können uns jederzeit über die Kontaktseite erreichen. Wir antworten in der Regel innerhalb von 24 Stunden.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Wie können wir helfen?
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Finden Sie Antworten auf häufige Fragen oder kontaktieren Sie
              unser Team direkt.
            </p>
          </div>

          {/* FAQ */}
          <FAQ title="Häufig gestellte Fragen" items={faqItems} />
        </div>

        <div className="mt-16">
          <IntermediateSection
            headline="Keine Antwort gefunden?"
            description="Unser Team hilft Ihnen gerne weiter. Schreiben Sie uns eine Nachricht und wir melden uns so schnell wie möglich."
            ctaText="Kontakt aufnehmen"
            ctaHref="/kontakt"
            variant="gradient"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
