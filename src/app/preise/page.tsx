import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import FAQ, { type FAQItem } from "../../components/FAQ";
import {
  PlanComparisonTable,
  type PlanConfig,
  type ComparisonRow,
} from "../../components/pricing";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Preise | BillCraft – Transparente Preise, keine versteckten Kosten",
  description:
    "BillCraft Preise: Kostenlos starten oder mit dem Abo mehr Leistung inkl. KI-Funktionen. Keine Kreditkarte nötig, jederzeit kündbar.",
};

const plans = [
  {
    name: "Kostenlos",
    description: "Perfekt zum Einstieg und für kleine Projekte.",
    price: "0",
    period: "monat",
    cta: "Kostenlos starten",
    ctaHref: "#signup",
    recommended: false,
    labelClassName: "border border-gray text-foreground",
    features: [
      "Bis zu 5 Rechnungen pro Monat",
      "Belege erfassen und ablegen",
      "1 Benutzer",
      "E-Mail-Support",
      "Grundlegende Auswertungen",
    ],
  },
  {
    name: "Standard",
    description: "Für Selbstständige und kleine Teams: volle Buchhaltung inkl. KI-Unterstützung.",
    price: "24,99",
    period: "monat",
    cta: "Abo auswählen",
    ctaHref: "#signup",
    recommended: true,
    labelClassName: "bg-blue text-white",
    features: [
      "Unbegrenzt Rechnungen",
      "Angebote & Mahnwesen",
      "KI-Funktionen",
      "Export für Steuerberater",
      "Prioritäts-Support",
      "Bis zu 3 Benutzer",
    ],
  },
];

const comparisonPlans: PlanConfig[] = [
  {
    name: "Kostenlos",
    ctaText: "Jetzt starten",
    ctaHref: "#signup",
    ctaVariant: "outline",
  },
  {
    name: "Standard",
    ctaText: "Wählen",
    ctaHref: "#signup",
    ctaVariant: "outline",
  },
];

const comparisonRows: ComparisonRow[] = [
  // Basis / Umfang (vor Hauptfunktionen)
  {
    type: "feature",
    label: "Rechnungen erstellen",
    description:
      "Anzahl der Rechnungen, die Sie pro Monat erstellen und versenden können.",
    values: ["Bis zu 20/Monat", "Unbegrenzt"],
  },
  {
    type: "feature",
    label: "Angebote erstellen",
    description:
      "Angebote pro Monat erstellen und an Kunden senden.",
    values: ["Bis zu 5/Monat", "Unbegrenzt"],
  },
  {
    type: "feature",
    label: "Belege erfassen",
    description:
      "Belege erfassen, ablegen und kategorisieren für die Buchhaltung.",
    values: ["check", "check"],
  },
  {
    type: "feature",
    label: "Benutzer",
    description:
      "Anzahl der Nutzer, die gleichzeitig auf das Konto zugreifen können.",
    values: ["1", "Bis zu 3"],
  },
  { type: "subheading", label: "Hauptfunktionen" },
  {
    type: "feature",
    label: "Angebote & Mahnwesen",
    description:
      "Angebote erstellen und versenden, Mahnläufe verwalten und Zahlungserinnerungen versenden.",
    values: ["dash", "check"],
  },
  {
    type: "feature",
    label: "Export für Steuerberater",
    description:
      "Exportieren Sie alle relevanten Daten im passenden Format für Ihren Steuerberater.",
    values: ["dash", "check"],
  },
  {
    type: "feature",
    label: "Vorlagen & Anpassung",
    description:
      "Rechnungs- und Angebotsvorlagen anpassen, eigenes Logo und Firmenangaben.",
    values: ["Einfache Vorlagen", "Alle Vorlagen + Anpassung"],
  },
  { type: "subheading", label: "KI-Funktionen" },
  {
    type: "feature",
    label: "KI-Kategorisierung Belege",
    description:
      "Belege automatisch kategorisieren und zuordnen lassen.",
    values: ["dash", "check"],
  },
  {
    type: "feature",
    label: "KI-Rechnungstexte",
    description:
      "Vorschläge für Rechnungstexte und Beschreibungen per KI.",
    values: ["dash", "check"],
  },
  {
    type: "feature",
    label: "KI-Auswertungen",
    description:
      "Intelligente Auswertungen und Insights zu Umsatz, Ausgaben und Kennzahlen.",
    values: ["dash", "check"],
  },
  { type: "subheading", label: "Integrationen" },
  {
    type: "feature",
    label: "Banking-Anbindung",
    description:
      "Konten anbinden und Buchungen automatisch abgleichen.",
    values: ["dash", "check"],
  },
  {
    type: "feature",
    label: "Export zu Steuer-Software",
    description:
      "Daten exportieren für DATEV, Lexware oder andere Steuerprogramme.",
    values: ["dash", "check"],
  },
  {
    type: "feature",
    label: "API-Zugang",
    description:
      "Eigene Integrationen oder Automatisierungen per API nutzen.",
    values: ["dash", "check"],
  },
  { type: "subheading", label: "Sicherheit" },
  {
    type: "feature",
    label: "DSGVO-konform",
    description:
      "Datenverarbeitung nach EU-Datenschutzstandards.",
    values: ["check", "check"],
  },
  {
    type: "feature",
    label: "Automatische Backups",
    description:
      "Regelmäßige Sicherung Ihrer Daten.",
    values: ["dash", "check"],
  },
  {
    type: "feature",
    label: "Zwei-Faktor-Authentifizierung",
    description:
      "Zusätzlicher Schutz für Ihr Konto per 2FA.",
    values: ["dash", "check"],
  },
  { type: "subheading", label: "Unterstützung" },
  {
    type: "feature",
    label: "Support",
    description:
      "Art und Umfang des Supports bei Fragen oder technischen Anliegen.",
    values: ["E-Mail", "Prioritäts-Support"],
  },
  {
    type: "feature",
    label: "Hilfe & Dokumentation",
    description:
      "Anleitungen, FAQ und Wissensdatenbank.",
    values: ["check", "check"],
  },
];

const preiseFaqItems: FAQItem[] = [
  {
    question: "Kann ich jederzeit vom Abo zurück auf Kostenlos wechseln?",
    answer:
      "Ja. Sie können Ihr Abo jederzeit kündigen. Danach wechseln Sie automatisch in den kostenlosen Plan und behalten Zugriff auf die Grundfunktionen.",
  },
  {
    question: "Brauche ich eine Kreditkarte für die kostenlose Version?",
    answer:
      "Nein. Für den kostenlosen Plan ist keine Kreditkarte erforderlich. Sie können sich einfach registrieren und loslegen.",
  },
  {
    question: "Was ist in den KI-Funktionen enthalten?",
    answer:
      "Mit dem Abo nutzen Sie intelligente Hilfen z. B. bei der Kategorisierung von Belegen, Vorschlägen für Rechnungstexte und Auswertungen – so sparen Sie Zeit bei der Buchhaltung.",
  },
  {
    question: "Wie kann ich das Abo kündigen?",
    answer:
      "Die Kündigung erfolgt in den Kontoeinstellungen unter „Abo verwalten“. Die Kündigung wird zum Ende des aktuellen Abrechnungszeitraums wirksam.",
  },
];

export default function PreisePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Hero – wie Evernote Compare: flex, zentriert, text-center */}
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground leading-tight">
              Welches <span className="text-blue">BillCraft</span> ist das Richtige für mich?
            </h1>
          </div>

          {/* Pricing Cards – zwei Pläne: Freemium + Abo (Evernote-Stil) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border flex flex-col p-6 md:p-8 bg-white ${
                  plan.recommended ? "border-blue/50 shadow-md" : "border-gray"
                }`}
              >
                {/* Empfohlen-Tag: oben links am Rahmen, wie Evernote */}
                {plan.recommended && (
                  <span
                    className="absolute -top-3 left-6 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-gray text-foreground/90 border border-gray shadow-sm"
                    aria-hidden
                  >
                    Empfohlen
                  </span>
                )}
                {/* Plan-Name als farbige Pill */}
                <span
                  className={`inline-block w-fit px-4 py-1.5 rounded-full text-sm font-medium text-background mb-4 ${plan.labelClassName}`}
                >
                  {plan.name}
                </span>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-foreground">
                    €{plan.price}
                  </span>
                  <span className="text-foreground/60"> / {plan.period}</span>
                </div>
                <p className="text-sm text-foreground/70 mb-6">
                  {plan.description}
                </p>
                <Button
                  href={plan.ctaHref}
                  variant={plan.recommended ? "primary" : "outline"}
                  size="md"
                  className="w-full mb-8"
                >
                  {plan.cta}
                </Button>
                <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">
                  Was ist enthalten:
                </p>
                <ul className="space-y-3 flex-1" role="list">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-foreground/90"
                    >
                      <Check
                        className="w-5 h-5 shrink-0 text-blue mt-0.5"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <p className="text-center text-sm text-foreground/60 mt-10">
            Alle Preise zzgl. gesetzl. MwSt. Keine Kreditkarte für die
            kostenlose Version erforderlich.
          </p>

          <PlanComparisonTable
            title="Pläne vergleichen"
            plans={comparisonPlans}
            rows={comparisonRows}
          />

          <FAQ
            title="Häufige Fragen zu den Preisen"
            items={preiseFaqItems}
            className="mt-20 md:mt-28"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
