import Header from "../components/Header";
import Button from "../components/Button";
import Link from "next/link";
import AnimatedDashboardPreview from "../components/AnimatedDashboardPreview";
import FeaturesSlider from "../components/FeaturesSlider";
import AISection from "../components/AISection";
import FeatureShowcaseSection from "../components/FeatureShowcaseSection";
import IntermediateSection from "../components/IntermediateSection";
import PlaceholderVisual from "../components/PlaceholderVisual";
import OrganiseAnimationVisual from "../components/animations/OrganiseAnimationVisual";
import InvoiceCreationVisual from "../components/animations/InvoiceCreationVisual";
import UseCasesGrid from "../components/UseCasesGrid";
import PlatformSection from "../components/PlatformSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
              Buchhaltung, die sich{" "}
              <span className="text-blue">von selbst erledigt</span>.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Dein intelligentes Archiv für Belege, Rechnungen und Stammdaten.
              Einfach organisiert, immer griffbereit, KI-gestützt.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Button href="#signup" variant="primary" size="lg">
                BillCraft kostenlos testen
              </Button>
              <p className="text-base text-foreground/80">
                Haben Sie bereits ein Konto?{" "}
                <Link
                  href="#login"
                  className="text-base text-foreground underline underline-offset-2 hover:text-blue hover:no-underline transition-all"
                >
                  <strong>Jetzt einloggen</strong>
                </Link>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-foreground/50">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Grundfunktionen kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Keine Kreditkarte erforderlich</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Jederzeit upgraden oder kündbar</span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview – animiert von unten */}
          <AnimatedDashboardPreview />
        </div>
      </main>

      {/* Features Slider */}
      <FeaturesSlider />

      {/* AI Section */}
      <AISection />

      {/* Feature Showcase – wechselndes Layout: Bild links / Bild rechts */}
      <FeatureShowcaseSection
        tag="Organisieren"
        headline="Bringen Sie Ordnung in Ihre Buchhaltung."
        description="Rechnungen, Belege und Kunden an einem Ort – mit klarer Struktur und allem im Überblick. BillCraft bringt Ihre Buchhaltung in eine einfache, flexible Ordnung: Kategorien, Ordner und Filter helfen Ihnen, jeden Vorgang schnell zuzuordnen. So behalten Sie die Kontrolle ohne Aufwand und sparen Zeit bei der täglichen Arbeit."
        ctaText="Kostenlos ausprobieren"
        ctaHref="#signup"
        imagePosition="left"
        tagClassName="bg-blue/10 text-blue"
      >
        <OrganiseAnimationVisual />
      </FeatureShowcaseSection>

      <FeatureShowcaseSection
        tag="Rechnungen"
        headline="Professionelle Rechnungen in wenigen Klicks."
        description="Erstellen Sie Rechnungen mit allen Pflichtangaben – Kunde, Positionen und Beträge. Per E-Mail versenden oder als PDF herunterladen. Ohne Vorlagen-Chaos, ohne Abo-Falle."
        ctaText="Rechnungen entdecken"
        ctaHref="#signup"
        imagePosition="right"
        tagClassName="bg-green-500/10 text-green-700"
      >
        <InvoiceCreationVisual />
      </FeatureShowcaseSection>

      {/* Zweite Zwischen-Section – Gradient wie AISection, anderer Inhalt */}
      <IntermediateSection
        headline="Reporting & Auswertung auf einen Blick."
        description="Überblick über Umsätze, offene Posten und Steuern – klar aufbereitet für Sie und Ihren Steuerberater. Sparen Sie Zeit bei der Auswertung und behalten Sie Ihre Zahlen im Griff."
        ctaText="Mehr erfahren"
        ctaHref="#signup"
        variant="gradient"
      />

      {/* Weitere Feature Showcases */}
      <FeatureShowcaseSection
        tag="Reporting"
        headline="Zahlen, die für sich sprechen."
        description="Dashboard mit Umsätzen, Ausgaben und offenen Rechnungen. Export für Steuerberater und monatliche Reports – alles ohne Excel-Chaos."
        ctaText="Reporting entdecken"
        ctaHref="#signup"
        imagePosition="left"
        tagClassName="bg-purple-500/10 text-purple-700"
      >
        <PlaceholderVisual label="Reporting" />
      </FeatureShowcaseSection>

      <FeatureShowcaseSection
        tag="Kunden & Projekte"
        headline="Kunden und Projekte im Blick."
        description="Verwalten Sie Kunden, Ansprechpartner und Projekte an einem Ort. Rechnungen und Belege direkt zuordnen – so behalten Sie den Überblick in jedem Auftrag."
        ctaText="Jetzt testen"
        ctaHref="#signup"
        imagePosition="right"
        tagClassName="bg-amber-500/10 text-amber-700"
      >
        <PlaceholderVisual label="Kunden & Projekte" />
      </FeatureShowcaseSection>

      {/* Use Cases Grid */}
      <UseCasesGrid />

      {/* Platform Section */}
      <PlatformSection />

      <Footer />
    </div>
  );
}
