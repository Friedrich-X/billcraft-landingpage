import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Changelog | BillCraft – Alle Updates und neue Features",
  description:
    "Alle neuen Features, Verbesserungen und Änderungen in BillCraft. Bleiben Sie auf dem Laufenden über die Entwicklung.",
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Changelog
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Alle neuen Features, Verbesserungen und Änderungen in BillCraft –
              transparent und chronologisch.
            </p>
          </div>

          {/* Placeholder Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="border-l-2 border-gray pl-8 space-y-12">
              <div>
                <span className="inline-block px-3 py-1 bg-blue/10 text-blue text-sm font-semibold rounded-full mb-3">
                  Bald verfügbar
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  BillCraft Beta Launch
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  Der erste öffentliche Release von BillCraft steht bevor.
                  Rechnungen erstellen, Belege erfassen, Kunden verwalten – und
                  vieles mehr.
                </p>
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-foreground/5 text-foreground/50 text-sm font-semibold rounded-full mb-3">
                  In Entwicklung
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  KI-Funktionen
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  Automatische Belegerkennung, intelligente Rechnungstexte und
                  KI-gestützte Auswertungen.
                </p>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="text-center mt-16">
              <p className="text-foreground/50 text-lg">
                Weitere Updates folgen nach dem Launch.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
