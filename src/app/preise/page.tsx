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
    disabled: false,
    labelClassName: "border border-gray text-foreground",
    features: [
      "5 Rechnungen / Monat",
      "5 Angebote / Monat",
      "Max. 20 Kunden & Produkte",
      "20 Belege / Monat (manuell)",
      "1 Wiederkehrende Vorlage",
      "1 Unternehmen",
    ],
  },
  {
    name: "Pro",
    description:
      "Für Selbstständige und kleine Teams: volle Buchhaltung inkl. KI-Unterstützung.",
    price: "9,99",
    period: "monat",
    cta: "Pro wählen",
    ctaHref: "#signup",
    recommended: true,
    disabled: false,
    labelClassName: "bg-blue text-white",
    features: [
      "Unbegrenzt Rechnungen & Angebote",
      "Unbegrenzt Kunden & Produkte",
      "AI-Scan f\u00fcr Belege",
      "Wiederkehrende Rechnungen",
      "KI-Funktionen & Finanz-Details",
      "Bis zu 3 Benutzer",
      "Steuerberater-Portal (demn\u00e4chst)",
      "Kundenportal (demn\u00e4chst)",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Für wachsende Unternehmen mit erweiterten Anforderungen und Team-Funktionen.",
    price: "—",
    period: "",
    cta: "Demnächst verfügbar",
    ctaHref: "#",
    recommended: false,
    disabled: true,
    labelClassName: "bg-foreground/10 text-foreground/60",
    features: [
      "Alles aus Pro",
      "KI-Rechtsbot mit Gesetzestexten",
      "Automatische Fehlerpr\u00fcfung",
      "Mehrere Unternehmen",
      "Unbegrenzte Benutzer & Rollen",
      "Steuerberater-Portal",
      "Kundenportal",
      "API-Zugang & Integrationen",
      "Dedizierter Support & SLA",
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
    name: "Pro",
    ctaText: "Pro wählen",
    ctaHref: "#signup",
    ctaVariant: "primary",
  },
  {
    name: "Enterprise",
    ctaText: "Demn\u00e4chst",
    ctaHref: "#",
    ctaVariant: "outline",
    disabled: true,
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    type: "feature",
    label: "Rechnungen",
    description:
      "Anzahl der Rechnungen, die pro Monat erstellt und versendet werden k\u00f6nnen.",
    values: ["5 / Monat", "Unbegrenzt", "Unbegrenzt"],
  },
  {
    type: "feature",
    label: "Angebote",
    description: "Angebote pro Monat erstellen und an Kunden senden.",
    values: ["5 / Monat", "Unbegrenzt", "Unbegrenzt"],
  },
  {
    type: "feature",
    label: "Kunden & Produkte",
    description: "Anzahl der verwaltbaren Kunden und Produkte.",
    values: ["Max. 20", "Unbegrenzt", "Unbegrenzt"],
  },
  {
    type: "feature",
    label: "Belege erfassen",
    description:
      "Belege erfassen, ablegen und kategorisieren.",
    values: ["20 / Monat (manuell)", "Unbegrenzt + AI-Scan", "Unbegrenzt + AI-Scan"],
  },
  {
    type: "feature",
    label: "Wiederkehrende Rechnungen",
    description: "Automatische Rechnungserstellung in festen Intervallen.",
    values: ["1 Vorlage", "Unbegrenzt", "Unbegrenzt"],
  },
  {
    type: "feature",
    label: "Unternehmen",
    description: "Anzahl der Unternehmen, die verwaltet werden k\u00f6nnen.",
    values: ["1", "1", "Mehrere"],
  },
  {
    type: "feature",
    label: "Benutzer",
    description:
      "Anzahl der Nutzer, die gleichzeitig auf das Konto zugreifen k\u00f6nnen.",
    values: ["1", "Bis zu 3", "Unbegrenzt"],
  },
  { type: "subheading", label: "Hauptfunktionen" },
  {
    type: "feature",
    label: "Mahnwesen",
    description:
      "Mahnl\u00e4ufe verwalten und Zahlungserinnerungen versenden.",
    values: ["dash", "check", "check"],
  },
  {
    type: "feature",
    label: "Finanz-Details",
    description:
      "Detaillierte Finanz\u00fcbersicht mit Umsatz, Ausgaben und Kennzahlen.",
    values: ["dash", "check", "check"],
  },
  {
    type: "feature",
    label: "Export für Steuerberater",
    description:
      "Exportieren Sie alle relevanten Daten im passenden Format für Ihren Steuerberater.",
    values: ["dash", "check", "check"],
  },
  {
    type: "feature",
    label: "Vorlagen & Anpassung",
    description:
      "Rechnungs- und Angebotsvorlagen anpassen, eigenes Logo und Firmenangaben.",
    values: ["Einfache Vorlagen", "Alle Vorlagen + Anpassung", "Alle Vorlagen + Anpassung"],
  },
  {
    type: "feature",
    label: "Rollen & Rechte",
    description:
      "Team-Mitgliedern unterschiedliche Berechtigungen zuweisen.",
    values: ["dash", "dash", "check"],
  },
  { type: "subheading", label: "Finanzen" },
  {
    type: "feature",
    label: "Einnahmen-Ausgaben-Rechnung",
    description: "E/A-Rechnung erstellen \u2013 die einfache Gewinnermittlung f\u00fcr Kleinunternehmer und Selbstst\u00e4ndige.",
    values: ["check", "check", "check"],
  },
  {
    type: "feature",
    label: "Doppelte Buchhaltung",
    description: "Bilanzierung mit Soll/Haben, Kontenrahmen und Jahresabschluss f\u00fcr bilanzierungspflichtige Unternehmen.",
    values: ["dash", "dash", "check"],
  },
  {
    type: "feature",
    label: "Banking-Integration",
    description: "Bankkonten anbinden, Ums\u00e4tze automatisch importieren und Zahlungen zuordnen.",
    values: ["dash", "soon", "soon"],
  },
  { type: "subheading", label: "KI-Funktionen" },
  {
    type: "feature",
    label: "KI-Kategorisierung Belege",
    description: "Belege automatisch kategorisieren und zuordnen lassen.",
    values: ["dash", "check", "check"],
  },
  {
    type: "feature",
    label: "KI-Rechnungstexte",
    description: "Vorschläge für Rechnungstexte und Beschreibungen per KI.",
    values: ["dash", "check", "check"],
  },
  {
    type: "feature",
    label: "KI-Auswertungen",
    description:
      "Intelligente Auswertungen und Insights zu Umsatz, Ausgaben und Kennzahlen.",
    values: ["dash", "check", "check"],
  },
  {
    type: "feature",
    label: "KI-Rechtsbot",
    description:
      "Automatische Pr\u00fcfung aller Aktionen auf rechtliche Fehler. Gef\u00fcttert mit aktuellen Gesetzestexten und lernf\u00e4hig mit eigenem Wissen.",
    values: ["dash", "dash", "check"],
  },
  {
    type: "feature",
    label: "Automatische Fehlerpr\u00fcfung",
    description:
      "Jede Rechnung, jedes Angebot und jeder Beleg wird vor Abschluss automatisch auf Vollst\u00e4ndigkeit und Korrektheit gepr\u00fcft.",
    values: ["dash", "dash", "check"],
  },
  { type: "subheading", label: "Portale & Integrationen" },
  {
    type: "feature",
    label: "Steuerberater-Portal",
    description: "Ihr Steuerberater erh\u00e4lt direkten Zugriff auf relevante Daten, Belege und Exporte.",
    values: ["dash", "soon", "soon"],
  },
  {
    type: "feature",
    label: "Kundenportal",
    description: "Kunden k\u00f6nnen ihre Rechnungen, Angebote und Dokumente selbst einsehen und herunterladen.",
    values: ["dash", "soon", "soon"],
  },
  {
    type: "feature",
    label: "Export zu Steuer-Software",
    description:
      "Daten exportieren f\u00fcr BMD, RZL oder andere \u00f6sterreichische Steuerprogramme.",
    values: ["dash", "check", "check"],
  },
  {
    type: "feature",
    label: "API-Zugang",
    description: "Eigene Integrationen oder Automatisierungen per API nutzen.",
    values: ["dash", "dash", "check"],
  },
  {
    type: "feature",
    label: "Individuelle Integrationen",
    description: "Ma\u00dfgeschneiderte Anbindungen an bestehende Systeme.",
    values: ["dash", "dash", "check"],
  },
  { type: "subheading", label: "Sicherheit" },
  {
    type: "feature",
    label: "DSGVO-konform",
    description: "Datenverarbeitung nach EU-Datenschutzstandards.",
    values: ["check", "check", "check"],
  },
  {
    type: "feature",
    label: "Automatische Backups",
    description: "Regelmäßige Sicherung Ihrer Daten.",
    values: ["dash", "check", "check"],
  },
  {
    type: "feature",
    label: "Zwei-Faktor-Authentifizierung",
    description: "Zusätzlicher Schutz für Ihr Konto per 2FA.",
    values: ["dash", "check", "check"],
  },
  { type: "subheading", label: "Unterstützung" },
  {
    type: "feature",
    label: "Support",
    description:
      "Art und Umfang des Supports bei Fragen oder technischen Anliegen.",
    values: ["E-Mail", "Prioritäts-Support", "Dedizierter Support"],
  },
  {
    type: "feature",
    label: "Hilfe & Dokumentation",
    description: "Anleitungen, FAQ und Wissensdatenbank.",
    values: ["check", "check", "check"],
  },
];

const preiseFaqItems: FAQItem[] = [
  {
    question: `Kann ich jederzeit vom Pro-Plan zur\u00fcck auf Kostenlos wechseln?`,
    answer:
      `Ja. Sie k\u00f6nnen Ihr Abo jederzeit k\u00fcndigen. Danach wechseln Sie automatisch in den kostenlosen Plan und behalten Zugriff auf die Grundfunktionen.`,
  },
  {
    question: `Brauche ich eine Kreditkarte f\u00fcr die kostenlose Version?`,
    answer:
      `Nein. F\u00fcr den kostenlosen Plan ist keine Kreditkarte erforderlich. Sie k\u00f6nnen sich einfach registrieren und loslegen.`,
  },
  {
    question: `Was ist in den KI-Funktionen enthalten?`,
    answer:
      `Im Pro-Plan nutzen Sie intelligente Hilfen z. B. bei der Kategorisierung von Belegen, Vorschl\u00e4gen f\u00fcr Rechnungstexte und Auswertungen \u2013 so sparen Sie Zeit bei der Buchhaltung.`,
  },
  {
    question: `Wann kommt der Enterprise-Plan?`,
    answer:
      `Der Enterprise-Plan befindet sich aktuell in Entwicklung. Er wird erweiterte Team-Funktionen, API-Zugang und individuelle Integrationen bieten. Registrieren Sie sich kostenlos \u2013 wir informieren Sie, sobald er verf\u00fcgbar ist.`,
  },
  {
    question: `Wie kann ich das Abo k\u00fcndigen?`,
    answer:
      `Die K\u00fcndigung erfolgt in den Kontoeinstellungen unter Abo verwalten. Die K\u00fcndigung wird zum Ende des aktuellen Abrechnungszeitraums wirksam.`,
  },
];

export default function PreisePage() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Hero – wie Evernote Compare: flex, zentriert, text-center */}
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground leading-tight">
              Welches <span className="text-blue">BillCraft</span> ist das
              Richtige für mich?
            </h1>
          </div>

          {/* Pricing Cards – Kostenlos + Pro oben, Enterprise darunter */}
          <div className="max-w-4xl mx-auto">
            {/* Top row: Kostenlos + Pro */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {plans.filter((p) => !p.disabled).map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border flex flex-col p-6 md:p-8 bg-white ${
                    plan.recommended
                      ? "border-blue/50 shadow-md"
                      : "border-gray"
                  }`}
                >
                  {plan.recommended && (
                    <span
                      className="absolute -top-3 left-6 px-4 py-1 rounded-full text-xs font-semibold uppercase bg-gray text-foreground/90 border border-gray shadow-sm"
                      aria-hidden
                    >
                      Empfohlen
                    </span>
                  )}
                  <span
                    className={`inline-block w-fit px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${plan.labelClassName}`}
                  >
                    {plan.name}
                  </span>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-bold text-foreground">
                      {`\u20AC${plan.price}`}
                    </span>
                    {plan.period && (
                      <span className="text-foreground/60"> / {plan.period}</span>
                    )}
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
                  <p className="text-xs font-semibold text-foreground/70 uppercase mb-3">
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

            {/* Enterprise – volle Breite darunter */}
            {plans.filter((p) => p.disabled).map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-2xl border border-gray bg-white p-6 md:p-8 mt-6 lg:mt-8 opacity-80"
              >
                <span
                  className="absolute -top-3 left-6 px-4 py-1 rounded-full text-xs font-semibold uppercase bg-orange/10 text-orange border border-orange/20 shadow-sm"
                  aria-hidden
                >
                  {`Demn\u00e4chst`}
                </span>
                <div className="md:flex md:items-start md:gap-10">
                  {/* Left: Plan info */}
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <span
                      className={`inline-block w-fit px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${plan.labelClassName}`}
                    >
                      {plan.name}
                    </span>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-4xl font-bold text-foreground/40">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/50 mb-6">
                      {plan.description}
                    </p>
                    <span className="inline-flex items-center justify-center w-full md:w-auto px-6 py-2.5 rounded-lg text-sm font-medium bg-foreground/5 text-foreground/40 cursor-not-allowed">
                      {plan.cta}
                    </span>
                  </div>
                  {/* Right: Features in 2-3 columns */}
                  <div className="md:flex-1">
                    <p className="text-xs font-semibold text-foreground/70 uppercase mb-3">
                      Was ist enthalten:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3" role="list">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-foreground/50"
                        >
                          <Check
                            className="w-5 h-5 shrink-0 text-foreground/30 mt-0.5"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <p className="text-center text-sm text-foreground/60 mt-10">
            Alle Preise inkl. aller Abgaben. Aktuell keine Umsatzsteuer gem.
            Kleinunternehmerregelung (&sect; 6 Abs. 1 Z 27 UStG). Keine
            Kreditkarte f{`\u00fc`}r die kostenlose Version erforderlich.
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
